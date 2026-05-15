import { Metadata } from 'next';
import { SPECIALTIES, slugify } from '@/lib/states-data';
import UseCaseLayout from '@/components/UseCaseLayout';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return SPECIALTIES.map((specialty) => ({
    slug: specialty.slug,
  }));
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const specialty = SPECIALTIES.find(s => s.slug === params.slug);
  if (!specialty) return {};

  const title = `Policies and SOPs for ${specialty.title} | PolicyFlow AI`;
  const description = `Generate customized clinical policies, SOPs, and compliance documentation for ${specialty.title}. Start your free policy trial today.`;

  return {
    title,
    description,
    alternates: { canonical: `/specialties/${params.slug}` },
    openGraph: {
      title,
      description,
      url: `https://policyflow-ai.vercel.app/specialties/${params.slug}`,
      type: 'website',
    },
  };
}

export default function SpecialtyPage({ params }: Props) {
  const specialty = SPECIALTIES.find(s => s.slug === params.slug);
  if (!specialty) notFound();

  const painPoints = [
    { title: `${specialty.title} Compliance`, desc: `Navigating the specific regulatory landscape for ${specialty.industry} can be complex and time-consuming.` },
    { title: "Documentation Gaps", desc: `Missing essential SOPs for ${specialty.title} workflows often leads to clinical errors or audit failures.` },
    { title: "Admin Overload", desc: "Clinicians spending too much time writing manuals instead of treating patients." }
  ];

  const solutions = [
    { title: "Specialized AI Engine", desc: `Our AI is specifically optimized for ${specialty.industry} workflows and clinical standards.` },
    { title: "Rapid Onboarding", desc: `Get your ${specialty.title} practice up and running with a complete set of professional policies in minutes.` },
    { title: "Audit-Ready Quality", desc: "Documentation designed to meet the rigorous standards of healthcare accreditation and state boards." }
  ];

  const examples = [
    { title: `${specialty.title} Intake SOP`, preview: `This protocol defines the intake process for new patients entering the ${specialty.title} clinical workflow...` },
    { title: "Treatment Protocol", preview: "Outlines the clinical steps, provider responsibilities, and documentation requirements for standard treatments..." }
  ];

  const faqs = [
    { question: `What policies do ${specialty.title} need?`, answer: `Common requirements include HIPAA privacy, informed consent, treatment SOPs, and employee handbooks tailored for ${specialty.industry}.` },
    { question: "Is the documentation state-specific?", answer: "Yes, our generator incorporates state-level rules into the clinical drafts." },
    { question: "Can I generate multiple policies?", answer: "Absolutely. You can generate a comprehensive manual for your entire clinic." },
    { question: `Does it cover ${specialty.industry} insurance requirements?`, answer: "The SOPs are drafted following standard payer and accreditation requirements for clinical documentation." },
    { question: "How does the AI know my specialty?", answer: "We've trained our models on massive datasets of healthcare operations and clinical workflows." },
    { question: "Is there a free trial?", answer: "Yes, you can generate your first full policy for free." }
  ];

  return (
    <UseCaseLayout
      title={specialty.title}
      category={specialty.industry}
      industry={specialty.title}
      headline={`Clinical Documentation for ${specialty.title}`}
      subheadline={`Professional policies, SOPs, and compliance workflows tailored for ${specialty.industry} practices.`}
      painPoints={painPoints}
      solutions={solutions}
      examples={examples}
      faqs={faqs}
    />
  );
}
