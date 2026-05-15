import { Metadata } from 'next';
import ExamplePolicyLayout from '@/components/ExamplePolicyLayout';

export const metadata: Metadata = {
  title: 'Example Telehealth SOP | Clinical Virtual Visit Protocol',
  description: 'A professional long-form Standard Operating Procedure for virtual care clinics. Includes protocols for patient identification, technical failure, and emergency management.',
  alternates: { canonical: '/example-telehealth-sop' },
};

export default function ExampleTelehealthSOP() {
  const faqs = [
    {
      question: "Do I need a separate SOP for telehealth visits?",
      answer: "Yes. Telehealth introduces unique risks regarding technology failure, patient location verification, and emergency management that are not covered in standard in-person SOPs."
    },
    {
      question: "What is the 'originating site' under telehealth rules?",
      answer: "The originating site is the physical location where the patient is during the encounter. Providers must verify this location at the start of every call for licensing and emergency purposes."
    },
    {
      question: "Can I use Zoom for telehealth?",
      answer: "You must use a HIPAA-compliant version of Zoom (Zoom for Healthcare) and have a signed Business Associate Agreement (BAA) with them."
    },
    {
      question: "How do I handle a technical disconnection?",
      answer: "Your SOP should define a backup communication plan (usually a phone number) and protocol for documenting the reason for the transition from video to audio-only."
    },
    {
      question: "What state laws apply to telehealth?",
      answer: "Generally, the laws of the state where the patient is physically located at the time of the visit apply to the clinical encounter."
    }
  ];

  const relatedLinks = [
    { title: "Telehealth Policy Generator", href: "/telehealth-policy-generator" },
    { title: "Free Telehealth Template", href: "/free-telehealth-sop-template" },
    { title: "Clinic Compliance Policies", href: "/clinic-policy-generator" }
  ];

  return (
    <ExamplePolicyLayout
      title="Telehealth Standard Operating Procedure"
      subtitle="Standardizing the clinical and technical workflow for virtual patient encounters."
      category="Operations"
      lastUpdated="May 15, 2026"
      faqs={faqs}
      relatedLinks={relatedLinks}
    >
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. CLINICAL OBJECTIVE</h2>
        <p>This SOP establishes the protocol for synchronous video patient encounters to ensure clinical quality, regulatory compliance, and patient safety during virtual care visits.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. PRE-VISIT VERIFICATION</h2>
        <p>Before initiating the clinical portion of the encounter, the provider or clinical staff must:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Confirm Patient Identity:</strong> Verify the patient's full name and date of birth via two forms of identification.</li>
          <li><strong>Verify Physical Location:</strong> Document the exact address where the patient is currently located (e.g., 'Home in Austin, TX').</li>
          <li><strong>Obtain Informed Consent:</strong> Confirm the patient has signed the Telehealth Consent form and understands the risks and limitations of virtual care.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. TECHNICAL STANDARDS</h2>
        <p>All encounters must occur via the clinic's approved HIPAA-compliant platform. Public-facing communication apps (e.g., FaceTime, TikTok, WhatsApp) are strictly prohibited.</p>
        <p>In the event of technical failure, the provider shall attempt to re-establish the connection. If video cannot be restored within 3 minutes, the visit may transition to audio-only via phone if permitted by the patient's insurance and the provider's professional judgment.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. EMERGENCY MANAGEMENT</h2>
        <p>If a patient experiences a medical emergency during the call (e.g., respiratory distress, suicidal ideation), the provider must keep the patient on the call while clinical staff or the provider contacts emergency services in the patient's specific location.</p>
      </section>

      <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-500 italic text-slate-600">
        "This sample SOP focuses on the clinical flow. A professional generator like PolicyFlow AI would include specific prescribing protocols for controlled substances and state-level documentation requirements."
      </div>
    </ExamplePolicyLayout>
  );
}
