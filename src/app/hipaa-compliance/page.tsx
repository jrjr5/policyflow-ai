import { Metadata } from 'next';
import PillarLayout from '@/components/PillarLayout';

export const metadata: Metadata = {
  title: 'The Ultimate Guide to HIPAA Compliance for Modern Clinics',
  description: 'Learn everything about HIPAA compliance for telehealth, med spas, and wellness clinics. Authoritative guide on privacy, security, and AI documentation.',
  alternates: { canonical: '/hipaa-compliance' },
};

export default function HipaaPillarPage() {
  const sections = [
    {
      id: 'privacy-rule',
      title: 'Understanding the HIPAA Privacy Rule',
      content: (
        <>
          <p>The HIPAA Privacy Rule establishes national standards to protect individuals' medical records and other personal health information (PHI). It applies to health plans, health care clearinghouses, and those health care providers that conduct certain health care transactions electronically.</p>
          <p>For modern clinics, this means implementing rigorous administrative, physical, and technical safeguards. Our documentation engine ensures that every policy you generate includes the necessary language to satisfy Privacy Rule requirements.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Right to access personal health information</li>
            <li>Right to request amendments to clinical records</li>
            <li>Requirement for a designated Privacy Officer</li>
            <li>Standardized Notice of Privacy Practices (NPP)</li>
          </ul>
        </>
      )
    },
    {
      id: 'security-rule',
      title: 'HIPAA Security Rule & Technical Safeguards',
      content: (
        <>
          <p>While the Privacy Rule focuses on PHI in all forms, the Security Rule specifically addresses electronic PHI (ePHI). This is critical for telehealth clinics and digital health startups using EMRs and video conferencing tools.</p>
          <p>Key technical safeguards include encryption, access controls, audit logs, and integrity controls. Your clinic's SOPs must define how these technical measures are implemented and reviewed.</p>
          <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
             <h4 className="font-bold text-slate-900 mb-4">Sample Security SOP Snippet:</h4>
             <p className="font-serif italic text-sm">"All ePHI stored on clinical workstations must be encrypted at rest using AES-256 bit encryption. Multi-factor authentication (MFA) is mandatory for all workforce members accessing the clinic's internal network..."</p>
          </div>
        </>
      )
    },
    {
      id: 'medspa-hipaa',
      title: 'HIPAA for Med Spas and Aesthetic Clinics',
      content: (
        <>
          <p>A common misconception is that Med Spas are "wellness" entities not covered by HIPAA. However, because Med Spas perform medical procedures (injectables, laser treatments, etc.) and often bill insurance or use electronic health records, they are typically considered Covered Entities.</p>
          <p>Patient photos (before/after) are a significant HIPAA risk in aesthetics. Your policies must define how these images are captured, stored, and shared, ensuring patient consent is obtained and documented.</p>
        </>
      )
    },
    {
      id: 'telehealth-hipaa',
      title: 'Telehealth Compliance and Remote PHI Access',
      content: (
        <>
          <p>Telehealth expanded the boundaries of the clinic, but it also expanded the HIPAA footprint. Remote workforce members must follow the same (or stricter) privacy protocols as in-office staff.</p>
          <p>Virtual visit platforms must have a signed Business Associate Agreement (BAA) with the clinic. Using non-compliant platforms like standard Zoom (personal) or FaceTime can lead to massive regulatory fines.</p>
        </>
      )
    },
    {
      id: 'training-requirements',
      title: 'Workforce HIPAA Training & Documentation',
      content: (
        <>
          <p>The best policies are useless without staff adherence. HIPAA requires clinics to provide initial and periodic training for all workforce members, including contractors and students.</p>
          <p>Documentation of this training is just as important as the training itself. PolicyFlow AI generates staff training SOPs that define how training is delivered, tracked, and verified for audit purposes.</p>
        </>
      )
    }
  ];

  const faqs = [
    { question: "Is a Privacy Officer required for a small clinic?", answer: "Yes, HIPAA requires every covered entity to designate a Privacy Official and a Security Official. In smaller practices, one person may hold both roles." },
    { question: "Does HIPAA apply to cash-pay clinics?", answer: "Generally, yes. If you provide healthcare services and transmit health information in electronic form in connection with a HIPAA transaction (like checking insurance eligibility, even if the patient ultimately pays cash), you are a covered entity." },
    { question: "Are before and after photos PHI?", answer: "Yes, clinical photographs that can identify a patient are considered Protected Health Information under HIPAA and must be protected accordingly." },
    { question: "How often should HIPAA policies be reviewed?", answer: "Policies should be reviewed at least annually, or whenever there is a significant change in the clinic's operations or technical environment." },
    { question: "Can I use AI to generate HIPAA policies?", answer: "Yes, AI can significantly speed up the drafting process by applying clinical standards. However, the resulting drafts should always be reviewed by clinical leadership to ensure they accurately reflect the clinic's actual operations." }
  ];

  return (
    <PillarLayout
      title="HIPAA Compliance Guide"
      industry="HIPAA"
      headline="The Complete Guide to HIPAA Compliance for Modern Clinics."
      subheadline="Everything you need to know about the Privacy Rule, Security Rule, and clinical documentation requirements."
      introduction="Compliance isn't just about avoiding fines—it's about building a foundation of trust with your patients. This guide provides an authoritative overview of HIPAA requirements for telehealth, med spas, and wellness practices."
      sections={sections}
      faqs={faqs}
    />
  );
}
