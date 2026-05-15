import { Metadata } from 'next';
import ExamplePolicyLayout from '@/components/ExamplePolicyLayout';

export const metadata: Metadata = {
  title: 'Example HIPAA Privacy Policy | Clinic Compliance Sample',
  description: 'View a professional long-form example of a HIPAA Privacy Policy for medical clinics. Learn about required section headers and operational compliance language.',
  alternates: { canonical: '/example-hipaa-policy' },
};

export default function ExampleHIPAAPolicy() {
  const faqs = [
    {
      question: "Is this HIPAA policy template audit-ready?",
      answer: "This example serves as a high-level guide. For a policy to be truly audit-ready, it must be customized to your specific EMR software, physical office security, and workforce training protocols."
    },
    {
      question: "What are the three main rules of HIPAA?",
      answer: "The three primary pillars are the Privacy Rule, the Security Rule, and the Breach Notification Rule. Every clinic must have written SOPs for all three."
    },
    {
      question: "How do I handle business associates under HIPAA?",
      answer: "Any third-party vendor that handles PHI (like your EMR, billing service, or cloud storage) must sign a Business Associate Agreement (BAA) acknowledging their compliance responsibilities."
    },
    {
      question: "What constitutes a 'breach' under HIPAA?",
      answer: "A breach is generally an impermissible use or disclosure under the Privacy Rule that compromises the security or privacy of protected health information."
    },
    {
      question: "Can I use AI to generate HIPAA policies?",
      answer: "Yes, AI can significantly speed up the drafting process by applying regulatory frameworks to your specific clinic operational data. PolicyFlow AI is built specifically for this purpose."
    }
  ];

  const relatedLinks = [
    { title: "HIPAA Policy Generator", href: "/hipaa-policy-generator" },
    { title: "Free HIPAA Template", href: "/free-hipaa-policy-template" },
    { title: "Clinic Compliance Checklist", href: "/free-clinic-compliance-checklist" }
  ];

  return (
    <ExamplePolicyLayout
      title="HIPAA Privacy Policy"
      subtitle="Standard operational framework for the protection of Protected Health Information (PHI) in a clinical environment."
      category="Compliance"
      lastUpdated="May 15, 2026"
      faqs={faqs}
      relatedLinks={relatedLinks}
    >
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. PURPOSE AND SCOPE</h2>
        <p>The purpose of this Privacy Policy is to ensure the protection of the privacy of our patients' protected health information (PHI) as required by the Health Insurance Portability and Accountability Act (HIPAA) of 1996 and the Health Information Technology for Economic and Clinical Health (HITECH) Act.</p>
        <p>This policy applies to all workforce members, including employees, medical staff, contractors, volunteers, and students who have access to PHI in any form (electronic, paper, or oral).</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. USE AND DISCLOSURE OF PHI</h2>
        <p>Our clinic may use and disclose PHI for the purposes of Treatment, Payment, and Healthcare Operations (TPO) without specific patient authorization. Examples include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Treatment:</strong> Sharing information with a specialist for a referral.</li>
          <li><strong>Payment:</strong> Submitting claims to insurance carriers for reimbursement.</li>
          <li><strong>Operations:</strong> Conducting quality assessment and improvement activities.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. INDIVIDUAL RIGHTS</h2>
        <p>Under the HIPAA Privacy Rule, patients have specific rights regarding their PHI, which our clinic must facilitate:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Right to Inspect and Copy:</strong> Patients have the right to review and receive a copy of their medical and billing records.</li>
          <li><strong>Right to Amend:</strong> If a patient feels that PHI in their record is incorrect, they may request an amendment.</li>
          <li><strong>Right to an Accounting of Disclosures:</strong> Patients may request a list of certain disclosures we have made of their PHI.</li>
          <li><strong>Right to Request Restrictions:</strong> Patients have the right to request a restriction on the PHI we use or disclose.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. ADMINISTRATIVE SAFEGUARDS</h2>
        <p>Our clinic designates a Privacy Officer responsible for the development and implementation of privacy policies. All workforce members must receive training on HIPAA privacy and security within 30 days of hire and annually thereafter.</p>
      </section>

      <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-500 italic text-slate-600">
        "Note: This is a sample document for informational purposes. A complete policy must include specific contact information for your Privacy Officer and detailed breach notification steps tailored to your state's laws."
      </div>
    </ExamplePolicyLayout>
  );
}
