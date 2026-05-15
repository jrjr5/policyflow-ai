import { Metadata } from 'next';
import { POLICY_TYPES, slugify } from '@/lib/states-data';
import UseCaseLayout from '@/components/UseCaseLayout';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return POLICY_TYPES.map((policy) => ({
    slug: policy.slug,
  }));
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const policy = POLICY_TYPES.find(p => p.slug === params.slug);
  if (!policy) return {};

  const title = `${policy.title} Generator | Professional Clinic Documentation`;
  const description = `Generate a professional ${policy.title} for your healthcare practice. Audit-ready templates and AI-powered drafting for clinic compliance.`;

  return {
    title,
    description,
    alternates: { canonical: `/policies/${params.slug}` },
    openGraph: {
      title,
      description,
      url: `https://policyflow-ai.vercel.app/policies/${params.slug}`,
      type: 'website',
    },
  };
}

export default function PolicyTypePage({ params }: Props) {
  const policy = POLICY_TYPES.find(p => p.slug === params.slug);
  if (!policy) notFound();

  const painPoints = [
    { title: "Complex Regulations", desc: `Drafting a ${policy.title} requires deep knowledge of healthcare compliance and state laws.` },
    { title: "Manual Effort", desc: `Spending hours or days manually writing ${policy.category} documentation instead of focusing on patients.` },
    { title: "Audit Anxiety", desc: "Worrying if your current policies will pass a clinical or regulatory audit." }
  ];

  const solutions = [
    { title: "AI-Powered Drafting", desc: `Instantly generate a high-quality ${policy.title} tailored to your specific clinical workflows.` },
    { title: "Expert Knowledge", desc: "Our engine is trained on clinical standards, HIPAA rules, and operational best practices." },
    { title: "Consistent Standards", desc: `Ensure all your ${policy.category} documentation follows a professional, unified structure.` }
  ];

  const examples = [
    { title: `${policy.title} Preview`, preview: `This ${policy.title} establishes the standard operating procedures for ${policy.category} within the clinical environment...` },
    { title: "Standard Section", preview: "The Responsibility section outlines the specific duties of workforce members in maintaining this protocol..." }
  ];

  const faqs = [
    { question: `What is a ${policy.title}?`, answer: `A ${policy.title} is a formal document that defines how your clinic handles ${policy.category} requirements and workflows.` },
    { question: `Is this ${policy.title} audit-ready?`, answer: "Yes, our AI generates documentation following clinical best practices. We always recommend a final review by your medical director." },
    { question: "How long does generation take?", answer: "The AI engine drafts a complete policy in under 60 seconds." },
    { question: "Can I customize the output?", answer: "Absolutely. You can edit the text after generation or provide specific notes to guide the AI." },
    { question: `Does it cover HIPAA for ${policy.title}?`, answer: "Yes, if relevant to the policy type, HIPAA privacy and security safeguards are integrated into the draft." },
    { question: "Can I export to PDF?", answer: "Yes, professional PDF export is included with all PolicyFlow AI plans." }
  ];

  return (
    <UseCaseLayout
      title={policy.title}
      category={policy.category}
      industry="Healthcare"
      headline={`Professional ${policy.title} Generator`}
      subheadline={`Generate audit-ready ${policy.category} documentation for your clinic in seconds using AI.`}
      painPoints={painPoints}
      solutions={solutions}
      examples={examples}
      faqs={faqs}
    />
  );
}
