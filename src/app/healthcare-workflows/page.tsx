import { Metadata } from 'next';
import PillarLayout from '@/components/PillarLayout';

export const metadata: Metadata = {
  title: 'Healthcare Workflows: Optimizing Clinic Efficiency with AI SOPs',
  description: 'Master clinical workflows with our authoritative guide on patient intake, triage, charting, and appointment scheduling Standard Operating Procedures.',
  alternates: { canonical: '/healthcare-workflows' },
};

export default function WorkflowsPillarPage() {
  const sections = [
    {
      id: 'patient-intake',
      title: 'Streamlining the Patient Intake Workflow',
      content: (
        <>
          <p>The patient intake process is the first clinical interaction and often the most inefficient. A professional Intake SOP defines exactly how patient data is collected, how insurance is verified, and how the clinical history is entered into the EMR.</p>
          <p>By automating parts of this workflow through digital forms and pre-arrival triage, clinics can reduce patient wait times by up to 40% while improving the accuracy of the clinical data captured.</p>
        </>
      )
    },
    {
      id: 'clinical-triage',
      title: 'Standardized Clinical Triage Procedures',
      content: (
        <>
          <p>Triage isn't just for emergency rooms. Every modern clinic—from telehealth to med spas—needs a triage workflow to prioritize patient needs and identify clinical red flags immediately.</p>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-white">
             <h4 className="font-bold text-blue-400 mb-4">Triage SOP Categories:</h4>
             <ul className="list-disc pl-6 space-y-2 text-slate-300 text-sm">
               <li>Urgent/Emergency Red Flags</li>
               <li>Provider Consultation Criteria</li>
               <li>Administrative vs. Clinical Needs</li>
               <li>Follow-up Urgency Levels</li>
             </ul>
          </div>
        </>
      )
    },
    {
      id: 'charting-efficiency',
      title: 'Clinical Charting & Documentation Workflows',
      content: (
        <>
          <p>Documentation is the largest administrative burden for modern practitioners. A "Charting SOP" defines the standards for clinical notes—ensuring they are timely, accurate, and meet "Medical Necessity" requirements for billing.</p>
          <p>Our engine generates charting protocols that encourage the use of standardized clinical templates, reducing the time providers spend typing while increasing the defensibility of the clinical record.</p>
        </>
      )
    },
    {
      id: 'appointment-management',
      title: 'Optimizing the Appointment Scheduling Workflow',
      content: (
        <>
          <p>An efficient scheduling workflow reduces no-show rates and maximizes clinical throughput. This includes defined rules for appointment confirmations, cancellation policies, and the management of "work-in" or urgent visits.</p>
          <p>A professional scheduling SOP defines the roles of administrative vs clinical staff in managing the daily calendar, ensuring that the provider's time is utilized effectively.</p>
        </>
      )
    },
    {
      id: 'remote-workflows',
      title: 'Workflows for Remote Patient Monitoring (RPM)',
      content: (
        <>
          <p>As healthcare moves toward the home, remote monitoring workflows have become essential. These SOPs define how patient device data is received, who reviews the alerts, and the clinical response time for specific physiological thresholds.</p>
        </>
      )
    }
  ];

  const faqs = [
    { question: "What is a 'Clinical Workflow'?", answer: "A clinical workflow is a sequential process of clinical tasks performed by various staff members to deliver patient care from intake to follow-up." },
    { question: "How does an SOP improve clinic efficiency?", answer: "SOPs eliminate guesswork, reduce training time for new staff, and ensure that tasks are performed consistently using the most efficient methods identified by clinical leadership." },
    { question: "Should administrative staff handle triage?", answer: "Non-clinical staff can handle 'administrative triage' (gathering info), but 'clinical triage' (making clinical decisions about urgency) must be performed by a licensed practitioner or following strict protocols approved by a physician." },
    { question: "Can AI help map clinic workflows?", answer: "Yes, AI can analyze standard clinical best practices and generate draft workflows that a clinic can then customize to their specific physical layout and staffing levels." },
    { question: "How often should workflows be optimized?", answer: "Workflows should be reviewed at least every 6 months or whenever the clinic adopts new technology (like a new EMR or telehealth platform)." }
  ];

  return (
    <PillarLayout
      title="Healthcare Workflows"
      industry="Clinical Workflows"
      headline="Healthcare Workflows: The Guide to Clinical Operational Excellence."
      subheadline="Optimize patient care and reduce staff burnout with standardized, AI-powered workflows."
      introduction="The difference between a struggling practice and a thriving one is the efficiency of its workflows. Documentation is the key to scaling clinical quality without increasing staff stress."
      sections={sections}
      faqs={faqs}
    />
  );
}
