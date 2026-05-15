import { Metadata } from 'next';
import PillarLayout from '@/components/PillarLayout';

export const metadata: Metadata = {
  title: 'Telehealth SOPs: The Ultimate Operational Guide for Virtual Clinics',
  description: 'Master telehealth operations with our guide on clinical SOPs, virtual triage, remote prescribing, and cross-state compliance.',
  alternates: { canonical: '/telehealth-sops' },
};

export default function TelehealthPillarPage() {
  const sections = [
    {
      id: 'virtual-triage',
      title: 'Virtual Patient Triage & Intake',
      content: (
        <>
          <p>The virtual encounter begins long before the video call starts. A robust telehealth SOP must define the triage process to ensure virtual care is appropriate for the patient's clinical presentation.</p>
          <p>Your intake workflow should include automated screening for high-risk symptoms that require emergency in-person intervention. Our AI generator drafts triage protocols that integrate these safety nets into your patient intake process.</p>
        </>
      )
    },
    {
      id: 'informed-consent',
      title: 'Telehealth Informed Consent Requirements',
      content: (
        <>
          <p>Standard clinical consent is not sufficient for virtual care. State boards and federal rules require specific disclosures regarding the limitations of telehealth, the risk of technical failure, and the patient's right to withdraw consent at any time.</p>
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
             <h4 className="font-bold text-blue-900 mb-4">Mandatory Telehealth Disclosures:</h4>
             <ul className="list-disc pl-6 space-y-2 text-blue-800">
               <li>Platform security and encryption status</li>
               <li>Backup communication methods in case of failure</li>
               <li>Privacy risks of remote encounters</li>
               <li>Identity verification of the practitioner</li>
             </ul>
          </div>
        </>
      )
    },
    {
      id: 'technical-failure',
      title: 'The Technical Failure Protocol',
      content: (
        <>
          <p>One of the most overlooked aspects of telehealth operations is the contingency plan for when technology fails. A professional SOP defines exactly how the practitioner and patient will reconnect if the video stream drops.</p>
          <p>This includes pre-verifying the patient's telephone number and having a protocol for switching to audio-only if state rules allow it for that clinical specialty.</p>
        </>
      )
    },
    {
      id: 'cross-state',
      title: 'Cross-State Compliance and Jurisdiction',
      content: (
        <>
          <p>In telehealth, the clinic is legally located where the patient is sitting at the time of the encounter. Practicing across state lines requires a deep understanding of state board rules in every jurisdiction where you treat patients.</p>
          <p>Our documentation engine applies state-specific logic to your SOPs, ensuring you meet the licensure and documentation requirements for each state in your virtual footprint.</p>
        </>
      )
    },
    {
      id: 'remote-prescribing',
      title: 'Remote Prescribing and Controlled Substances',
      content: (
        <>
          <p>Prescribing via telehealth involves significant regulatory scrutiny, particularly regarding controlled substances and the Ryan Haight Act. Your clinical manuals must define the "medical relationship" established via telehealth and the criteria for remote prescribing.</p>
          <p>PolicyFlow AI generates prescribing SOPs that cover inclusion/exclusion criteria, state-specific PDMP check requirements, and documentation standards for remote clinical justification.</p>
        </>
      )
    }
  ];

  const faqs = [
    { question: "Is verbal consent enough for telehealth?", answer: "Rules vary by state, but best practice (and the law in many jurisdictions) is to obtain written electronic informed consent prior to the first virtual encounter." },
    { question: "Can I treat a patient if they are traveling?", answer: "You must generally be licensed in the state where the patient is located at the exact time of the clinical encounter, regardless of where they live or where your clinic is located." },
    { question: "What is an 'Originating Site'?", answer: "In telehealth terminology, the 'originating site' is the physical location of the patient. The 'distant site' is the physical location of the practitioner." },
    { question: "Does my telehealth platform need to be HIPAA compliant?", answer: "Yes. Using non-secure consumer apps like FaceTime or personal Skype is a violation of federal privacy standards for clinical encounters." },
    { question: "How do I handle medical emergencies remotely?", answer: "Your telehealth SOP must include an 'Emergency Response Protocol' which involves identifying the patient's exact location at the start of every call and having local emergency numbers available." }
  ];

  return (
    <PillarLayout
      title="Telehealth Guide"
      industry="Telehealth"
      headline="Telehealth SOPs: The Operational Blueprint for Virtual Care."
      subheadline="Build a scalable virtual clinic with audit-ready protocols for intake, consent, and remote clinical standards."
      introduction="Transitioning to virtual care requires more than just a camera—it requires a rigorous set of Standard Operating Procedures that protect your license and ensure clinical quality at a distance."
      sections={sections}
      faqs={faqs}
    />
  );
}
