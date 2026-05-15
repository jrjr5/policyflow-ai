import { Metadata } from 'next';
import { US_STATES, NICHES, slugify } from '@/lib/states-data';
import UseCaseLayout from '@/components/UseCaseLayout';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const params = [];
  for (const state of US_STATES) {
    for (const niche of NICHES) {
      params.push({
        slug: `${slugify(state)}-${niche.slugSuffix}`,
      });
    }
  }
  return params;
}

interface Props {
  params: { slug: string };
}

function getPageData(slug: string) {
  for (const state of US_STATES) {
    for (const niche of NICHES) {
      const expectedSlug = `${slugify(state)}-${niche.slugSuffix}`;
      if (slug === expectedSlug) {
        return { state, niche };
      }
    }
  }
  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = getPageData(params.slug);
  if (!data) return {};

  const { state, niche } = data;
  const title = `${state} ${niche.title} | PolicyFlow AI Compliance`;
  const description = `Professional ${niche.industry} SOPs and policies for clinics in ${state}. Generate audit-ready documentation and HIPAA compliant workflows in minutes.`;

  return {
    title,
    description,
    alternates: { canonical: `/states/${params.slug}` },
    openGraph: {
      title,
      description,
      url: `https://policyflow-ai.vercel.app/states/${params.slug}`,
      type: 'website',
    },
  };
}

export default function StateNichePage({ params }: Props) {
  const data = getPageData(params.slug);
  if (!data) notFound();

  const { state, niche } = data;

  const painPoints = [
    { title: `${state} Compliance Gaps`, desc: `Navigating specific ${state} healthcare regulations can lead to documentation errors and administrative burden.` },
    { title: "Manual SOP Drafting", desc: `Spending hours manually writing ${niche.industry} protocols instead of focusing on patient care in ${state}.` },
    { title: "Audit Risk", desc: "Fear of regulatory audits due to inconsistent or outdated clinical documentation." }
  ];

  const solutions = [
    { title: "AI-Powered Generation", desc: `Instantly generate ${niche.industry} policies tailored for ${state} clinical environments.` },
    { title: "Standardized Workflows", desc: `Ensure every staff member in your ${state} clinic follows the exact same clinical standards.` },
    { title: "Rapid Customization", desc: "Adjust policies to fit your specific clinic size and specialty while maintaining strict compliance." }
  ];

  const examples = [
    { title: `${niche.industry} General SOP`, preview: `This protocol outlines the standard operating procedures for ${niche.industry} services within the state of ${state}...` },
    { title: "Clinical Incident Report", preview: "All clinical incidents occurring during treatment must be documented and reviewed by the medical director..." }
  ];

  const faqs = [
    { question: `Are these policies valid in ${state}?`, answer: `Yes, our generator uses clinical best practices that align with ${state} healthcare standards for ${niche.industry}.` },
    { question: `How long does it take to generate an SOP for a ${state} clinic?`, answer: "Most policies are drafted in under 60 seconds using our AI clinical engine." },
    { question: `Does this cover ${state} HIPAA requirements?`, answer: `Yes, all generated documentation includes essential HIPAA privacy and security language relevant for ${state} healthcare entities.` },
    { question: `Can I export these for my ${state} medical board review?`, answer: "Absolutely. All policies can be exported to professional PDF format ready for clinical binders or regulatory review." }
  ];

  return (
    <UseCaseLayout
      title={`${state} ${niche.title}`}
      category="States"
      industry={`${state} ${niche.industry}`}
      headline={`${state} ${niche.title} and SOP Generator`}
      subheadline={`Professional ${niche.industry} protocols and compliance documentation for clinics across ${state}.`}
      painPoints={painPoints}
      solutions={solutions}
      examples={examples}
      faqs={faqs}
    />
  );
}
