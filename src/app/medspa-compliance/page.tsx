import { Metadata } from 'next';
import PillarLayout from '@/components/PillarLayout';

export const metadata: Metadata = {
  title: 'Med Spa Compliance: The Clinical and Regulatory Authority Guide',
  description: 'The definitive guide to Med Spa compliance. Learn about medical directors, Good Faith Exams, injectable SOPs, and aesthetic regulations.',
  alternates: { canonical: '/medspa-compliance' },
};

export default function MedSpaPillarPage() {
  const sections = [
    {
      id: 'medical-oversight',
      title: 'Medical Director Oversight & Supervision',
      content: (
        <>
          <p>The core of Med Spa compliance is the relationship between the Medical Director and the treatment providers. Most states consider a Med Spa a medical practice, requiring a licensed physician to serve as the medical director.</p>
          <p>A professional SOP must define the director's responsibilities, the scope of practice for mid-levels and nurses, and the specific supervision requirements (which vary significantly between states like California and Florida).</p>
        </>
      )
    },
    {
      id: 'good-faith-exam',
      title: 'The Good Faith Examination (GFE)',
      content: (
        <>
          <p>A "Good Faith Exam" is a mandatory clinical assessment by a qualified provider (MD, DO, NP, or PA) before a nurse or aesthetician can perform a medical treatment like Botox or laser hair removal.</p>
          <div className="bg-slate-900 p-8 rounded-2xl text-white">
             <h4 className="font-bold text-blue-400 mb-4">GFE Documentation Standards:</h4>
             <ul className="list-disc pl-6 space-y-2 text-slate-300 text-sm">
               <li>Initial physical assessment (can be telehealth in some states)</li>
               <li>Review of medical history and contraindications</li>
               <li>Establishment of a specific treatment plan</li>
               <li>Verification of patient goals and expectations</li>
             </ul>
          </div>
        </>
      )
    },
    {
      id: 'injectable-sop',
      title: 'Standardized Injectable Protocols',
      content: (
        <>
          <p>Consistency is key to patient safety and clinical outcomes in aesthetics. Every treatment—from neurotoxins to dermal fillers—should have a step-by-step SOP that staff follow without deviation.</p>
          <p>This includes product reconstitution, anatomical "danger zones," aseptic technique, and specific needle/cannula selection criteria for different facial regions.</p>
        </>
      )
    },
    {
      id: 'complication-management',
      title: 'Adverse Event & Complication Management',
      content: (
        <>
          <p>A Med Spa's audit-readiness is often judged by how it handles complications. You must have written protocols for vascular occlusions, allergic reactions, and secondary infections.</p>
          <p>These protocols should include immediate clinical steps (like hyaluronidase administration), patient follow-up schedules, and documentation requirements for the medical director's review.</p>
        </>
      )
    },
    {
      id: 'marketing-compliance',
      title: 'Regulatory Compliance in Aesthetic Marketing',
      content: (
        <>
          <p>Med Spa compliance extends beyond the treatment room. Medical boards and federal agencies (like the FTC) regulate how clinical services are advertised. This includes accurate representation of results and mandatory disclosures in "before and after" photography.</p>
        </>
      )
    }
  ];

  const faqs = [
    { question: "Can a nurse run a med spa without a doctor?", answer: "In most U.S. states, no. A Med Spa is usually considered a medical practice and must be owned or directed by a licensed physician. Some states allow 'independent practice' for NPs, but the rules are highly specific." },
    { question: "Is Botox a prescription drug?", answer: "Yes, neurotoxins and most fillers are prescription medical devices or drugs that must be ordered under a physician's license." },
    { question: "Do I need a GFE for every visit?", answer: "Usually, a GFE is required prior to the initial treatment and must be updated periodically (e.g., every 6 or 12 months) or if the patient's medical history changes." },
    { question: "What is 'MSO' in a Med Spa context?", answer: "MSO stands for Management Services Organization. It is a legal structure often used to allow non-physicians to manage the business side of a Med Spa while the medical director handles the clinical side." },
    { question: "How do I store aesthetic medical records?", answer: "Med Spas must follow HIPAA guidelines for medical record storage, even if they are cash-pay. This includes using secure, encrypted EMR systems." }
  ];

  return (
    <PillarLayout
      title="Med Spa Compliance"
      industry="Med Spa"
      headline="Med Spa Compliance: The Blueprint for Clinical Aesthetic Success."
      subheadline="Ensure patient safety and protect your license with authoritative SOPs for injectables, oversight, and GFEs."
      introduction="The aesthetic industry is under increasing regulatory scrutiny. Operating a successful Med Spa requires a bridge between 'spa' luxury and 'medical' precision through rigorous Standard Operating Procedures."
      sections={sections}
      faqs={faqs}
    />
  );
}
