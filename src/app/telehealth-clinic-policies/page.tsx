import { Metadata } from 'next';
import UseCaseLayout from '@/components/UseCaseLayout';

export const metadata: Metadata = {
  title: 'Telehealth Clinic Policies | Virtual Care SOP Generator',
  description: 'Generate comprehensive clinical policies and SOPs for telehealth clinics. Covering virtual triage, remote prescribing, and cross-state compliance.',
  alternates: { canonical: '/telehealth-clinic-policies' },
};

export default function TelehealthClinicPolicies() {
  const painPoints = [
    { title: "Manual Drafting", desc: "Spending 20+ hours manually writing protocols for virtual visits and informed consent." },
    { title: "Vague Templates", desc: "Using generic healthcare templates that don't cover specific telehealth risks like technical failure." },
    { title: "Legal Uncertainty", desc: "Worrying if your virtual workflows meet state board standards for remote care." }
  ];

  const solutions = [
    { title: "AI-Powered Precision", desc: "Generate protocols tailored specifically to synchronous video encounters and virtual triage." },
    { title: "Instant Consistency", desc: "Ensure every provider in your virtual clinic follows the exact same documentation standards." },
    { title: "State-Specific Logic", desc: "Our engine adjusts language based on the state jurisdiction of your telehealth practice." }
  ];

  const examples = [
    { title: "Telehealth Informed Consent", preview: "I understand that telehealth involves the use of electronic communications..." },
    { title: "Virtual Visit Protocol", preview: "Verification of patient identity and location must be completed at the onset..." }
  ];

  const faqs = [
    { question: "What policies does a telehealth clinic need?", answer: "At minimum: Telehealth Informed Consent, Virtual Visit SOP, Remote Prescribing Protocol, and a HIPAA Security Rule policy for remote data access." },
    { question: "Are these policies valid for DEA compliance?", answer: "Our generator includes language for controlled substance protocols, but you must ensure they align with the latest Ryan Haight Act and DEA emergency rules." },
    { question: "Can I use these for multi-state practices?", answer: "Yes, you can generate unique protocols for each state where you have providers and patients located." },
    { question: "How does it handle video platform failures?", answer: "The generated SOPs include a specific 'Technical Failure Protocol' to define backup communication methods." },
    { question: "Is the consent form included?", answer: "Yes, our generator can draft professional telehealth-specific informed consent forms." }
  ];

  return (
    <UseCaseLayout
      title="Telehealth Clinic Policies"
      industry="Telehealth"
      headline="Telehealth Protocols Built for Virtual Scale."
      subheadline="Stop wrestling with generic templates. Generate professional virtual care SOPs and consent forms in minutes."
      painPoints={painPoints}
      solutions={solutions}
      examples={examples}
      faqs={faqs}
    />
  );
}
