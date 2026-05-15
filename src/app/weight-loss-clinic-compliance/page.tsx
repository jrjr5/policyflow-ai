import { Metadata } from 'next';
import UseCaseLayout from '@/components/UseCaseLayout';

export const metadata: Metadata = {
  title: 'Weight Loss Clinic Compliance | GLP-1 Prescribing SOPs',
  description: 'Specialized Standard Operating Procedures for modern medical weight loss clinics. Compliance protocols for Semaglutide, lab monitoring, and patient screening.',
  alternates: { canonical: '/weight-loss-clinic-compliance' },
};

export default function WeightLossCompliance() {
  const painPoints = [
    { title: "GLP-1 Scrutiny", desc: "Medical boards are increasing oversight on Semaglutide/Tirzepatide prescribing workflows." },
    { title: "Inconsistent Titration", desc: "Providers within the same clinic following different dose escalation schedules." },
    { title: "Monitoring Gaps", desc: "Missing key baseline or follow-up labs required for patient safety and compliance." }
  ];

  const solutions = [
    { title: "Standardized Titration", desc: "Generate clear 4-week interval dose escalation protocols for all practitioners." },
    { title: "Clinical Checklists", desc: "Automate the creation of inclusion/exclusion criteria based on CMP and TSH labs." },
    { title: "Safety-First Language", desc: "Built-in protocols for managing GI side effects and adverse events like pancreatitis." }
  ];

  const faqs = [
    { question: "Does this cover Semaglutide protocols?", answer: "Yes, we have specialized datasets for medical weight loss titration and clinical monitoring." },
    { question: "How often should titration SOPs be updated?", answer: "We recommend reviewing them every 6 months or whenever new clinical guidelines are released by regulatory bodies." },
    { question: "Is cold chain management included?", answer: "Yes, our generator can include specific sections on refrigerated medication storage and temperature logging." },
    { question: "What labs are mandatory in the SOP?", answer: "Standard protocols often include CMP, Lipid Panel, TSH, and HbA1c; these are included in our AI-generated monitoring plans." },
    { question: "Can I use this for IV Hydration too?", answer: "Yes, you can generate specific SOPs for aseptic technique and IV administration." }
  ];

  return (
    <UseCaseLayout
      title="Weight Loss Clinic Compliance"
      industry="Weight Loss"
      headline="Compliance Protocols for the GLP-1 Era."
      subheadline="Professionalize your medical weight loss practice with audit-ready SOPs for patient screening and dose titration."
      painPoints={painPoints}
      solutions={solutions}
      faqs={faqs}
    />
  );
}
