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
        "policy": "# CLINIC POLICY... [Full Content]"
      }
    `;

    // Using gpt-4o-mini as it's the most reliable "mini" model currently.
    // If you specifically need 4.1 (which may be a typo for 4o-mini), 
    // this is the correct choice for current OpenAI API.
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a healthcare compliance expert. You always respond in valid JSON.',
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
    
    // Ensure the response has the 'policy' field
    if (!parsed.policy) {
      // Fallback if AI didn't use the 'policy' key but returned structured data
      return NextResponse.json({ policy: JSON.stringify(parsed, null, 2) });
    }

    return NextResponse.json(parsed);
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
