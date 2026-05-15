import { Metadata } from 'next';
import UseCaseLayout from '@/components/UseCaseLayout';

export const metadata: Metadata = {
  title: 'Healthcare SOP Generator | Professional Clinic Documentation',
  description: 'The definitive Standard Operating Procedure generator for healthcare businesses. Audit-ready documentation for clinical workflows and operations.',
  alternates: { canonical: '/healthcare-sop-generator' },
};

export default function HealthcareSOPGenerator() {
  const painPoints = [
    { title: "Operational Chaos", desc: "No written standard for how clinical tasks should be performed, leading to errors and inefficiency." },
    { title: "Audit Anxiety", desc: "Fear of insurance or regulatory audits due to lack of documented clinical workflows." },
    { title: "Training Turnover", desc: "Constant retraining of staff because protocols are not clearly defined in a manual." }
  ];

  const solutions = [
    { title: "Clinical Grade Output", desc: "SOPs written with professional medical terminology and standard operational structures." },
    { title: "Workflow Mapping", desc: "AI that understands the flow from patient intake to provider encounter and follow-up." },
    { title: "Branded PDF Export", desc: "Convert any generated protocol into a professional PDF ready for your clinical binder." }
  ];

  const examples = [
    { title: "Patient Triage SOP", preview: "All incoming clinical calls must be triaged according to the severity of the reported symptoms..." },
    { title: "Aseptic Technique Protocol", preview: "Hand hygiene must be performed before and after every patient encounter using hospital-grade..." }
  ];

  const faqs = [
    { question: "What is a Standard Operating Procedure?", answer: "An SOP is a set of step-by-step instructions compiled by an organization to help workers carry out complex routine operations." },
    { question: "Why do clinics need SOPs?", answer: "SOPs ensure consistency, reduce the risk of clinical errors, and are often mandatory for insurance payers and accreditation bodies." },
    { question: "Can I generate billing SOPs?", answer: "Yes, our generator can draft protocols for patient insurance verification and claim submission workflows." },
    { question: "Does it cover OSHA protocols?", answer: "Yes, you can generate specific SOPs for bloodborne pathogens and clinical sanitation standards." },
    { question: "How detailed are the SOPs?", answer: "Our AI provides detailed multi-step instructions including Purpose, Responsibility, and Procedure sections." }
  ];

  return (
    <UseCaseLayout
      title="Healthcare SOP Generator"
      industry="Healthcare"
      headline="Standardize Your Clinic Operations in Seconds."
      subheadline="Build a professional operations manual with AI-powered SOPs for every clinical and administrative workflow."
      painPoints={painPoints}
      solutions={solutions}
      examples={examples}
      faqs={faqs}
    />
  );
}
