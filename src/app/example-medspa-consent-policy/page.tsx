import { Metadata } from 'next';
import ExamplePolicyLayout from '@/components/ExamplePolicyLayout';

export const metadata: Metadata = {
  title: 'Example Med Spa Informed Consent Policy | Aesthetic Standards',
  description: 'View a professional long-form example of a Med Spa Informed Consent policy. Covering Botox, fillers, and clinical risk disclosures for aesthetic clinics.',
  alternates: { canonical: '/example-medspa-consent-policy' },
};

export default function ExampleMedSpaConsent() {
  const faqs = [
    {
      question: "Is a verbal consent enough for Botox?",
      answer: "No. Because aesthetic treatments are medical procedures, most states require a written informed consent that outlines the risks, benefits, and alternatives."
    },
    {
      question: "What is a 'Good Faith Exam' (GFE)?",
      answer: "A GFE is an initial medical assessment by a qualified provider (MD, DO, NP, or PA) to determine if a patient is a suitable candidate for a treatment like neurotoxins or fillers."
    },
    {
      question: "How long is a consent form valid?",
      answer: "While laws vary, many clinics require a new consent form every 12 months or if the patient's medical history changes significantly."
    },
    {
      question: "Do I need to disclose the risk of vascular occlusion?",
      answer: "Yes. For dermal fillers, vascular occlusion is a rare but serious risk that must be explicitly included in the informed consent process."
    },
    {
      question: "Can an aesthetician sign the consent form?",
      answer: "The consent should be obtained by the person performing the procedure or the medical director. Requirements for signature verification depend on state nursing or medical board rules."
    }
  ];

  const relatedLinks = [
    { title: "Med Spa SOP Generator", href: "/medspa-sop-generator" },
    { title: "HIPAA Policy Generator", href: "/hipaa-policy-generator" },
    { title: "Clinic Compliance Policies", href: "/clinic-policy-generator" }
  ];

  return (
    <ExamplePolicyLayout
      title="Med Spa Informed Consent Protocol"
      subtitle="Standardizing the patient disclosure and risk management process for aesthetic medical procedures."
      category="Clinical"
      lastUpdated="May 15, 2026"
      faqs={faqs}
      relatedLinks={relatedLinks}
    >
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. OBJECTIVE</h2>
        <p>This policy ensures that all patients receiving aesthetic medical treatments are fully informed of the procedure's nature, expected results, potential risks, and available alternatives prior to the commencement of treatment.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. THE CONSENT PROCESS</h2>
        <p>Informed consent is a process, not just a document. The practitioner must:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Explain the Procedure:</strong> Describe the product being used (e.g., Botox Cosmetic, Juvederm) and how it will be administered.</li>
          <li><strong>Disclose Risks:</strong> Explicitly mention common side effects (bruising, swelling) and rare but serious risks (allergic reaction, infection, tissue necrosis).</li>
          <li><strong>Assess Understanding:</strong> Allow the patient to ask questions and confirm they understand the information provided.</li>
          <li><strong>Document the GFE:</strong> Ensure a Good Faith Exam has been completed by a qualified provider before treatment.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. PHOTOGRAPHIC DOCUMENTATION</h2>
        <p>As part of the clinical record and consent process, pre-treatment and post-treatment photographs must be taken. Patients must provide specific authorization for the use of these photos for clinical records, and a separate authorization if used for marketing purposes.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. ADVERSE EVENT MANAGEMENT</h2>
        <p>All practitioners must be trained in the clinic's adverse event SOP. In the event of a suspected complication (e.g., filler-induced ischemia), the practitioner must immediately notify the medical director and follow the 'Vascular Occlusion Emergency Protocol'.</p>
      </section>

      <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-500 italic text-slate-600">
        "Note: Aesthetic clinical standards are heavily regulated at the state level. Use PolicyFlow AI to generate SOPs that include specific state-mandated supervision and medical director protocols."
      </div>
    </ExamplePolicyLayout>
  );
}
