import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { clinicType, state, policyType, notes } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const prompt = `
      Create a professional, audit-ready clinic policy/SOP for a ${clinicType} in ${state}.
      The policy type is: ${policyType}.
      Additional context: ${notes || 'None provided'}.

      Structure the output as a single comprehensive policy document with sections for Purpose, Scope, Definitions, Policy Statement, Responsibilities, Procedure, Documentation Requirements, Compliance Considerations, and Review Schedule.

      Return the result as a JSON object with a single key "policy" containing the full formatted text.
      
      Example:
      {
        "policy": "1. PURPOSE\\nThis policy establishes..."
      }
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
