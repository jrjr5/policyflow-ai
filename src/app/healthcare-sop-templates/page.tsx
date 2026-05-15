import { Metadata } from 'next';
import PillarLayout from '@/components/PillarLayout';

export const metadata: Metadata = {
  title: 'Healthcare SOP Templates: Building a Clinical Operations Manual',
  description: 'Download and generate professional healthcare Standard Operating Procedure (SOP) templates for every clinical and administrative workflow.',
  alternates: { canonical: '/healthcare-sop-templates' },
};

export default function SopTemplatesPillarPage() {
  const sections = [
    {
      id: 'what-is-sop',
      title: 'What is a Healthcare SOP?',
      content: (
        <>
          <p>A Standard Operating Procedure (SOP) is a set of step-by-step instructions compiled by a clinic to help staff carry out complex routine clinical and administrative operations. The goal is to achieve efficiency, quality output, and uniformity of performance, while reducing miscommunication and failure to comply with clinical regulations.</p>
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
             <h4 className="font-bold text-blue-900 mb-4">Anatomy of a Professional Clinic SOP:</h4>
             <ul className="list-disc pl-6 space-y-2 text-blue-800 text-sm">
               <li><strong>Purpose:</strong> Why this document exists.</li>
               <li><strong>Scope:</strong> Who and what situations it applies to.</li>
               <li><strong>Responsibilities:</strong> Who is accountable for each step.</li>
               <li><strong>Procedure:</strong> The step-by-step clinical workflow.</li>
               <li><strong>Documentation:</strong> Where results are recorded.</li>
             </ul>
          </div>
        </>
      )
    },
    {
      id: 'clinical-sops',
      title: 'Templates for Clinical Workflows',
      content: (
        <>
          <p>Clinical SOPs focus on the delivery of patient care. These are the documents medical boards and clinical auditors scrutinize first. Key templates include:</p>
          <ul className="grid md:grid-cols-2 gap-4 list-none p-0 text-sm">
             <li className="bg-white p-4 rounded-xl border border-slate-100">Patient Triage Workflow</li>
             <li className="bg-white p-4 rounded-xl border border-slate-100">Medication Administration</li>
             <li className="bg-white p-4 rounded-xl border border-slate-100">Aseptic Technique Protocol</li>
             <li className="bg-white p-4 rounded-xl border border-slate-100">Emergency Medical Response</li>
          </ul>
        </>
      )
    },
    {
      id: 'admin-sops',
      title: 'Templates for Administrative Operations',
      content: (
        <>
          <p>Administrative SOPs ensure the clinic business runs smoothly behind the scenes. This includes everything from front-desk etiquette to insurance verification and medical billing workflows.</p>
          <p>Consistent administrative protocols lead to higher patient satisfaction scores and lower staff turnover by providing clear expectations for non-clinical team members.</p>
        </>
      )
    },
    {
      id: 'creating-manual',
      title: 'Building Your Clinical Operations Manual',
      content: (
        <>
          <p>A set of scattered SOPs is not enough. You must organize your documentation into a comprehensive "Clinical Operations Manual." This manual should be available to all staff digitally and in physical form at the front desk or clinical station.</p>
          <p>PolicyFlow AI automates the creation of these documents, allowing you to generate a 200-page manual in a fraction of the time it would take to write it manually.</p>
        </>
      )
    },
    {
      id: 'version-control',
      title: 'Maintaining SOP Version Control',
      content: (
        <>
          <p>Healthcare is constantly evolving. Your SOP templates must include a review and revision history section. This demonstrates to auditors that your clinic actively updates its clinical standards based on new regulations or clinical evidence.</p>
        </>
      )
    }
  ];

  const faqs = [
    { question: "Can I just use generic SOP templates?", answer: "Generic templates are a start, but clinical documentation should be tailored to your specific practice type and state regulations to be truly audit-ready." },
    { question: "Who should write the SOPs?", answer: "Ideally, the clinical procedures are drafted by or with the oversight of the Medical Director, while administrative procedures are handled by the Practice Manager." },
    { question: "How often should SOPs be updated?", answer: "Standard clinical practice is to review all Standard Operating Procedures annually, or immediately after a clinical incident or significant regulatory change." },
    { question: "How do I train staff on new SOPs?", answer: "Training should include a formal reading of the document, a physical demonstration if applicable, and a signed 'Staff Attestation' that they understand and will follow the protocol." },
    { question: "Can I use AI to write my whole manual?", answer: "Yes, AI is exceptionally good at drafting standardized SOPs. However, the final clinical sign-off must always come from your practice's licensed medical director." }
  ];

  return (
    <PillarLayout
      title="Healthcare SOP Templates"
      industry="Clinic Operations"
      headline="Healthcare SOP Templates: The Ultimate Manual Building Guide."
      subheadline="Standardize your clinical and administrative operations with professional, AI-powered SOP drafts."
      introduction="Standard Operating Procedures (SOPs) are the DNA of your clinic. They define how care is delivered, how staff is managed, and how compliance is maintained day in and day out."
      sections={sections}
      faqs={faqs}
    />
  );
}
