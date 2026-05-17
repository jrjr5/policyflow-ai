import { Metadata } from 'next';
import { INDUSTRY_PAGES, SPECIALTIES } from '@/lib/states-data';
import { generatePseoSlugs, parsePseoSlug } from '@/lib/p-seo';
import UseCaseLayout from '@/components/UseCaseLayout';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const existingSlugs = INDUSTRY_PAGES
    .filter((page) => page?.slug && typeof page.slug === "string")
    .map((page) => ({
      slug: String(page.slug).trim(),
    }));

  const pseoSlugs = generatePseoSlugs()
    .filter((slug) => slug && typeof slug === "string")
    .map((slug) => ({
      slug: String(slug).trim(),
    }));

  const exampleSlugs = POLICY_EXAMPLES
    .filter((example) => example?.slug && typeof example.slug === "string")
    .map((example) => ({
      slug: String(example.slug).trim(),
    }));

  return [...existingSlugs, ...pseoSlugs, ...exampleSlugs]
    .filter((item) => item.slug.length > 0);
interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = INDUSTRY_PAGES.find(p => p.slug === params.slug);
  
  if (page) {
    return {
      title: `${page.title} | PolicyFlow AI`,
      description: page.description,
      alternates: { canonical: `/${params.slug}` },
      openGraph: {
        title: page.title,
        description: page.description,
        url: `https://policyflow-ai.vercel.app/${params.slug}`,
        type: 'website',
      },
    };
  }

  const pseo = parsePseoSlug(params.slug);
  if (pseo.state || pseo.industry || pseo.policy) {
    const title = `${pseo.state || ''} ${pseo.industry?.name || ''} ${pseo.policy?.name || 'Compliance Policies'} | PolicyFlow AI`;
    const desc = `Professional ${pseo.industry?.name || 'healthcare'} policies and SOPs for ${pseo.state || 'your clinic'}. Audit-ready templates for clinical operations and compliance.`;
    
    return {
      title,
      description: desc,
      alternates: { canonical: `/${params.slug}` },
      openGraph: {
        title,
        description: desc,
        url: `https://policyflow-ai.vercel.app/${params.slug}`,
        type: 'article',
      },
    };
  }

  return {};
}

export default function DynamicPage({ params }: Props) {
  const page = INDUSTRY_PAGES.find(p => p.slug === params.slug);
  
  if (page) {
    const specialty = SPECIALTIES.find(s => s.slug === page.industrySlug);
    if (!specialty) notFound();

    const painPoints = specialty.painPoints || [
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

    const faqs = specialty.faqs || [
      { question: `What policies do ${specialty.title} need?`, answer: `Common requirements include HIPAA privacy, informed consent, treatment SOPs, and employee handbooks tailored for ${specialty.industry}.` },
      { question: "Is the documentation state-specific?", answer: "Yes, our generator incorporates state-level rules into the clinical drafts." },
      { question: "Can I generate multiple policies?", answer: "Absolutely. You can generate a comprehensive manual for your entire clinic." },
      { question: `Does it cover ${specialty.industry} insurance requirements?`, answer: "The SOPs are drafted following standard payer and accreditation requirements for clinical documentation." },
      { question: "How does the AI know my specialty?", answer: "We've trained our models on massive datasets of healthcare operations and clinical workflows." },
      { question: "Is there a free trial?", answer: "Yes, you can generate your first full policy for free." }
    ];

    return (
      <UseCaseLayout
        title={page.title}
        category={specialty.industry}
        industry={specialty.title}
        headline={page.title}
        subheadline={page.description}
        painPoints={painPoints}
        solutions={solutions}
        examples={examples}
        faqs={faqs}
      />
    );
  }

  const pseo = parsePseoSlug(params.slug);
  if (!pseo.state && !pseo.industry && !pseo.policy) notFound();

  const title = `${pseo.state || ''} ${pseo.industry?.name || ''} ${pseo.policy?.name || 'Compliance Policies'}`;
  
  const painPoints = [
    { title: `${pseo.state || 'State'} Regulations`, desc: `Complying with specific ${pseo.state || 'local'} health department and medical board rules.` },
    { title: `${pseo.industry?.name || 'Clinical'} Standards`, desc: `Maintaining high-quality clinical care standards for ${pseo.industry?.name || 'modern healthcare practices'}.` },
    { title: "Operational Risks", desc: "Protecting your practice from documentation audits and legal liabilities." }
  ];

  const solutions = [
    { title: "State-Specific Logic", desc: `Our engine incorporates ${pseo.state || 'state-level'} requirements into every generated document.` },
    { title: "Clinical Expert AI", desc: `Trained on ${pseo.industry?.name || 'professional healthcare'} operations and workflow standards.` },
    { title: "Instant Generation", desc: "Go from empty screen to audit-ready policy in less than 2 minutes." }
  ];

  const examples = [
    { title: `${pseo.policy?.name || 'Patient Care'} SOP`, preview: `This clinical protocol for ${pseo.state || 'your state'} outlines the precise requirements for patient safety and documentation...` },
    { title: "Compliance Checklist", preview: "A step-by-step verification guide to ensure all regulatory requirements are met for every encounter..." }
  ];

  const faqs = [
    { question: `Are these ${pseo.state || ''} policies legally binding?`, answer: `These are professional clinical drafts. While they incorporate ${pseo.state || 'state'} logic, they should be reviewed by your medical director.` },
    { question: `Do you cover ${pseo.industry?.name || 'this specialty'}?`, answer: `Yes, we have specialized training data for ${pseo.industry?.name || 'a wide range of healthcare niches'}.` },
    { question: "How often are templates updated?", answer: "We update our clinical logic monthly to reflect changing state and federal regulations." }
  ];

  return (
    <UseCaseLayout
      title={title}
      category={pseo.industry?.name || 'Healthcare'}
      industry={pseo.industry?.name || 'Clinical Practice'}
      headline={title}
      subheadline={`Professional ${pseo.policy?.name || 'operational documentation'} for ${pseo.industry?.name || 'modern clinics'} in ${pseo.state || 'the United States'}.`}
      painPoints={painPoints}
      solutions={solutions}
      examples={examples}
      faqs={faqs}
      state={pseo.state}
      industryName={pseo.industry?.name}
      policyName={pseo.policy?.name}
    />
  );
}
