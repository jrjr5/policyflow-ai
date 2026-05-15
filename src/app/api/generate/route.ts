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

      The response must be in JSON format with the following keys:
      - purpose
      - scope
      - definitions
      - policyStatement
      - responsibilities
      - procedure
      - documentationRequirements
      - complianceConsiderations
      - reviewSchedule

      Make the content professional, clinically accurate, and compliant with ${state} healthcare regulations.
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are a healthcare compliance expert who writes professional policies and SOPs for clinics. You always respond in valid JSON.',
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
      throw new Error('Failed to generate content');
    }

    return NextResponse.json(JSON.parse(content));
  } catch (error: any) {
    console.error('Error generating policy:', error);
    return NextResponse.json(
      { error: 'Failed to generate policy' },
      { status: 500 }
    );
  }
}
