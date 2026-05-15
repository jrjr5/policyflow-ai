import { Metadata } from 'next';
import ExamplePolicyLayout from '@/components/ExamplePolicyLayout';

export const metadata: Metadata = {
  title: 'Example Medication Refill Policy | Clinical Operations Sample',
  description: 'View a professional long-form example of a Clinical Medication Refill SOP. Learn about titration schedules, lab monitoring, and provider approval workflows.',
  alternates: { canonical: '/example-medication-refill-policy' },
};

export default function ExampleRefillPolicy() {
  const faqs = [
    {
      question: "How long should a refill request take to process?",
      answer: "Standard clinical SOPs usually define a 48-72 business hour turnaround time for routine refill requests."
    },
    {
      question: "Can medical assistants approve refills?",
      answer: "Medical assistants can process the request according to a provider-approved protocol, but the final authorization must come from a licensed provider (MD, DO, NP, or PA) unless state law permits otherwise under standing orders."
    },
    {
      question: "What is a 'Refill-by-Protocol' SOP?",
      answer: "It is a standardized set of instructions that allows clinical staff to authorize refills if specific criteria (like stable labs and recent visits) are met."
    },
    {
      question: "How do I handle controlled substance refills?",
      answer: "Controlled substances (Schedule II-V) require stricter oversight, including PDMP (Prescription Drug Monitoring Program) checks and more frequent in-person or synchronous video visits."
    },
    {
      question: "When should a refill be denied?",
      answer: "Refills are typically denied if the patient is overdue for a follow-up visit, has missing lab work, or if the provider determines a change in therapy is needed."
    }
  ];

  const relatedLinks = [
    { title: "Weight Loss SOP Generator", href: "/weight-loss-clinic-sop-generator" },
    { title: "Telehealth Policy Generator", href: "/telehealth-policy-generator" },
    { title: "Clinic Compliance Checklist", href: "/free-clinic-compliance-checklist" }
  ];

  return (
    <ExamplePolicyLayout
      title="Medication Refill Standard Operating Procedure"
      subtitle="Standardizing the clinical workflow for prescription management, titration, and renewals."
      category="Operations"
      lastUpdated="May 15, 2026"
      faqs={faqs}
      relatedLinks={relatedLinks}
    >
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. POLICY STATEMENT</h2>
        <p>This SOP provides a consistent framework for managing medication refill requests to ensure patient safety, continuity of care, and efficient clinical operations.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. REFILL CRITERIA</h2>
        <p>A routine refill request will only be authorized if the following conditions are met:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Recent Visit:</strong> The patient has been seen by a provider within the last 6 months (or sooner for specific chronic conditions).</li>
          <li><strong>Compliance:</strong> The patient is compliant with the prescribed therapy and required lab monitoring.</li>
          <li><strong>Current Labs:</strong> Required labs (e.g., CMP, HbA1c, TSH) are current and have been reviewed by a provider.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. CLINICAL WORKFLOW</h2>
        <p><strong>Step 1: Receipt:</strong> Refill requests are received via the EMR, pharmacy fax, or patient portal.</p>
        <p><strong>Step 2: Triage:</strong> Clinical staff (MA or LPN) reviews the chart for visit compliance and recent labs.</p>
        <p><strong>Step 3: Approval:</strong> If criteria are met, the request is routed to the provider for final signature. If criteria are NOT met, the patient is contacted to schedule the necessary visit or labs.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. CHRONIC THERAPY (GLP-1/Hormones)</h2>
        <p>For patients on titration-based therapies (e.g., Semaglutide), refills must include documentation of the current dose and patient tolerance. Dose escalations require a provider encounter (video or in-person) every 4 weeks during the titration phase.</p>
      </section>

      <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-500 italic text-slate-600">
        "Modern clinics—especially in weight loss and wellness—rely on these protocols to scale. PolicyFlow AI can generate these SOPs with specific titration schedules for your practice."
      </div>
    </ExamplePolicyLayout>
  );
}
