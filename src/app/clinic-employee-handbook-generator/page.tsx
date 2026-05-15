import { Metadata } from 'next';
import UseCaseLayout from '@/components/UseCaseLayout';

export const metadata: Metadata = {
  title: 'Clinic Employee Handbook Generator | Healthcare HR Policies',
  description: 'Generate customized professional employee handbooks for healthcare practices. HIPAA training rules, clinical conduct, and professional standards.',
  alternates: { canonical: '/clinic-employee-handbook-generator' },
};

export default function EmployeeHandbookGenerator() {
  const painPoints = [
    { title: "HR Compliance Gaps", desc: "Forgetting essential clinical conduct rules or HIPAA training requirements in standard HR documents." },
    { title: "Onboarding Delays", desc: "Taking weeks to explain office policies to new staff without a written source of truth." },
    { title: "Professional Standards", desc: "Lack of clear dress code or social media policies specific to a clinical medical environment." }
  ];

  const solutions = [
    { title: "Clinical Standards", desc: "Handbooks that include specific sections on patient interaction, charting accuracy, and EMR use." },
    { title: "HIPAA Alignment", desc: "Ensure your employee rules align perfectly with your clinical privacy and security policies." },
    { title: "Rapid Customization", desc: "Adjust the tone and rules to fit a modern Med Spa or a traditional family practice." }
  ];

  const examples = [
    { title: "Clinical Conduct Code", preview: "All workforce members must maintain professional boundaries and patient confidentiality..." },
    { title: "EMR Usage Policy", preview: "Access to the Electronic Medical Record is granted solely for the performance of clinical duties..." }
  ];

  const faqs = [
    { question: "What is in a medical employee handbook?", answer: "Sections usually include HIPAA responsibilities, clinical dress code, EMR usage rules, patient confidentiality, and adverse event reporting." },
    { question: "Is this a legal document?", answer: "It serves as an operational agreement between employer and employee; we recommend a final review by an HR professional or legal counsel." },
    { question: "How does it handle state labor laws?", answer: "While we focus on the clinical aspects, we include placeholders for specific state labor requirements like PTO and breaks." },
    { question: "Should my medical director sign off?", answer: "Yes, the medical director should review all policies that touch on clinical conduct or patient safety." },
    { question: "Can I generate a code of ethics?", answer: "Yes, a professional clinical code of ethics is a standard part of our AI handbook generation." }
  ];

  return (
    <UseCaseLayout
      title="Clinic Employee Handbook Generator"
      industry="Clinic HR"
      headline="Healthcare HR Policies Built for Clinical Excellence."
      subheadline="Streamline your staff onboarding with professional employee handbooks that prioritize patient safety and compliance."
      painPoints={painPoints}
      solutions={solutions}
      examples={examples}
      faqs={faqs}
    />
  );
}
