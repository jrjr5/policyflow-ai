import { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import PillarLayout from '@/components/PillarLayout';

export const metadata: Metadata = {
  title: 'Weight Loss Clinic Policies: GLP-1 and Clinical Operations Guide',
  description: 'The definitive guide to medical weight loss compliance. Clinical SOPs for GLP-1 titration, lab monitoring, and patient screening.',
  alternates: { canonical: '/weight-loss-clinic-policies' },
};

export default function WeightLossPillarPage() {
  const sections = [
    {
      id: 'glp-compliance',
      title: 'Compliance in the GLP-1 Era',
      content: (
        <>
          <p>Medical weight loss has transformed with the introduction of Semaglutide and Tirzepatide. However, with this clinical success comes increased regulatory scrutiny. Medical boards are actively reviewing clinics to ensure they are providing proper screening and monitoring for these powerful medications.</p>
          <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
             <h4 className="font-bold text-slate-900 mb-4">Essential Weight Loss SOPs:</h4>
             <ul className="grid md:grid-cols-2 gap-4 list-none p-0 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Patient Screening Criteria</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> GLP-1 Titration Schedules</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Lab Monitoring Protocols</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Side Effect Management</li>
             </ul>
          </div>
        </>
      )
    },
    {
      id: 'screening-protocols',
      title: 'Rigorous Patient Screening & Lab Work',
      content: (
        <>
          <p>A professional weight loss SOP defines exactly who is (and is not) a candidate for medical treatment. This includes BMI thresholds, reviewing contraindications like a history of medullary thyroid carcinoma, and baseline lab requirements.</p>
          <p>Common baseline labs include CMP, TSH, and HbA1c. Your policies should define how often these are repeated during the course of treatment to ensure patient safety.</p>
        </>
      )
    },
    {
      id: 'titration-management',
      title: 'Standardized Titration and Dosing',
      content: (
        <>
          <p>Dosing errors are a major clinical risk. SOPs must define the exact interval for dose escalation (e.g., every 4 weeks) and the clinical criteria for holding or reducing a dose if side effects occur.</p>
          <p>Consistency across all practitioners in the clinic is vital to ensure that every patient receives the same high standard of clinical care.</p>
        </>
      )
    },
    {
      id: 'complication-handling',
      title: 'Managing Side Effects and Complications',
      content: (
        <>
          <p>Nausea, vomiting, and pancreatitis are real clinical risks in medical weight loss. Your SOPs must provide staff with clear instructions on how to counsel patients and when to escalate care to a clinical emergency room.</p>
          <p>Documentation of these conversations is critical for medical board compliance.</p>
        </>
      )
    },
    {
      id: 'compound-pharmacy',
      title: 'Working with Compounding Pharmacies',
      content: (
        <>
          <p>If your clinic utilizes compounded medications, your SOPs must define the due diligence process for selecting an 503A or 503B pharmacy. This includes verifying their licensure and quality standards to protect your clinic's license.</p>
        </>
      )
    }
  ];

  const faqs = [
    { question: "Is BMI enough for GLP-1 eligibility?", answer: "While BMI is a primary metric, a professional SOP also considers comorbidities (like hypertension or sleep apnea) and a comprehensive medical history review." },
    { question: "How often should labs be checked?", answer: "Best practice is baseline labs, followed by a check at 3 months, and then every 6-12 months depending on the patient's clinical stability and medication dose." },
    { question: "Can weight loss follow-ups be done via telehealth?", answer: "Yes, in many states, weight loss follow-ups are well-suited for telehealth, provided that the practitioner can adequately monitor the patient's progress and side effects." },
    { question: "Do I need a specific consent for Semaglutide?", answer: "Yes. Given the specific risks and long-term nature of the medication, a dedicated medication-specific informed consent is highly recommended." },
    { question: "What happens if a patient gets pancreatitis?", answer: "Your SOP should define immediate cessation of the medication, urgent clinical referral, and documentation of the event in the EMR and the clinic's internal incident log." }
  ];

  return (
    <PillarLayout
      title="Weight Loss Clinic Policies"
      industry="Weight Loss"
      headline="Weight Loss Clinic Policies: The GLP-1 Compliance Guide."
      subheadline="Professionalize your metabolic health practice with audit-ready SOPs for titration and screening."
      introduction="The medical weight loss industry is growing rapidly. To scale safely and profitably, clinics must implement rigorous clinical protocols that prioritize patient outcomes and regulatory compliance."
      sections={sections}
      faqs={faqs}
    />
  );
}
