import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { headers } from 'next/headers';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple in-memory rate limiting (Note: This is per-instance on Vercel and resets on cold start)
// For a production app, use Vercel KV or a database.
const rateLimit = new Map<string, number>();
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

export async function POST(req: Request) {
  try {
    const { email, businessName, clinicType, state, policyType, notes } = await req.json();

    // Server-side rate limiting by IP
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const lastGenerated = rateLimit.get(ip);

    if (lastGenerated && (now - lastGenerated < THIRTY_DAYS_MS)) {
      return NextResponse.json(
        { error: 'Free policy preview already used. Upgrade to PolicyFlow AI Professional to continue generating policies.' },
        { status: 429 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const businessPromptPart = businessName 
      ? `for "${businessName}", a ${clinicType} in ${state}. IMPORTANT: Integrate the business name "${businessName}" naturally throughout the policy document where appropriate (e.g., in the Purpose, Policy Statement, and Responsibilities sections). Start the policy with: "Policy prepared for: ${businessName}" followed by the policy title.`
      : `for a ${clinicType} in ${state}.`;

    const prompt = `
      Create a professional, audit-ready clinic policy/SOP ${businessPromptPart}
      The policy type is: ${policyType}.
      Additional context: ${notes || 'None provided'}.

      Structure the output as a single comprehensive policy document with sections for Purpose, Scope, Definitions, Policy Statement, Responsibilities, Procedure, Documentation Requirements, Compliance Considerations, and Review Schedule.

      Return the result as a JSON object with a single key "policy" containing the full formatted text.
      
      Example:
      {
        "policy": "1. PURPOSE\\nThis policy establishes..."
      }

      Generate for user: ${email || 'Anonymous'}
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a healthcare compliance expert. You always respond with a JSON object containing a "policy" string.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
    });

    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error('OpenAI returned an empty response.');
    }

    const parsed = JSON.parse(content);
    
    // Normalize response to ensure { "policy": "..." }
    if (parsed.policy) {
      // Record generation for rate limiting
      rateLimit.set(ip, Date.now());
      return NextResponse.json({ policy: parsed.policy });
    } else {
      // Fallback if AI returned different fields
      return NextResponse.json({ policy: JSON.stringify(parsed, null, 2) });
    }

  } catch (error: any) {
    console.error('Error generating policy:', error);
    
    return NextResponse.json(
      { 
        error: error?.message || 'An unexpected error occurred while generating the policy.',
        code: error?.code || 'GENERATE_ERROR'
      },
      { status: error?.status || 500 }
    );
  }
}
