import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import PolicyGenerator from '@/components/PolicyGenerator';
import FAQ from '@/components/FAQ';
import { Layout, ClipboardCheck, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clinic Policy Generator | Professional SOPs for Healthcare Practices',
  description: 'Generate customized operational and compliance policies for any healthcare clinic. AI-powered SOPs for medical, wellness, and aesthetic practices.',
  openGraph: {
    title: 'Clinic Policy Generator | PolicyFlow AI',
    description: 'Custom operational and compliance policies for healthcare practices. AI-powered SOPs for medical and wellness clinics.',
    url: 'https://policyflow-ai.vercel.app/clinic-policy-generator',
    type: 'website',
  },
};

export default function GeneralClinicLandingPage() {
  const faqs = [
    {
      question: "Why does my clinic need written SOPs?",
      answer: "Standard Operating Procedures (SOPs) provide clinical and operational consistency, reduce the risk of errors, assist in onboarding new staff, and are often required by insurance payers and regulatory bodies during audits."
    },
    {
      question: "What is the difference between a policy and an SOP?",
      answer: "A policy is a high-level rule or principle (e.g., 'We protect patient privacy'), while an SOP is a detailed, step-by-step instruction on how to execute that policy (e.g., 'The steps to verify patient identity at the front desk')."
    },
    {
      question: "Can these policies be used for accreditation (e.g., AAAHC or Joint Commission)?",
      answer: "While our generator provides a strong foundation grounded in clinical standards, accreditation often requires highly specific evidence of implementation. You can use our drafts as a starting point and then tailor them to meet specific accreditation benchmarks."
    },
    {
      question: "How should I store and distribute these policies?",
      answer: "Policies should be stored in a central location accessible to all staff, such as a digital shared drive or a physical policy manual. Each staff member should sign an acknowledgment form confirming they have read and understood the protocols."
    },
    {
      question: "Does the AI handle clinical emergency protocols?",
      answer: "Yes, our AI can generate drafts for common clinical emergencies, such as anaphylaxis protocols, medical emergency response, and natural disaster recovery plans for healthcare clinics."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="py-20 px-6 bg-white border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
            <Layout className="w-4 h-4" /> Comprehensive Clinic Operations
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Professional Policy Documentation for Every Healthcare Practice.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Operational excellence starts with clear documentation. PolicyFlow AI generates customized SOPs for billing, patient intake, emergency response, and clinical workflows in seconds.
          </p>
          <div className="flex justify-center">
            <a href="#generator" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2">
              Generate Your Clinic Policy <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Standardize Your Operations</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <ClipboardCheck className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Audit Protection</h3>
              <p className="text-slate-600 leading-relaxed">
                Be ready for any regulatory inspection. Our policies are grounded in clinical standards and state-specific healthcare regulations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <Users className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Staff Clarity</h3>
              <p className="text-slate-600 leading-relaxed">
                Reduce onboarding time and operational errors by providing your team with clear, easy-to-follow Standard Operating Procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Professional Document Preview</h2>
          <div className="bg-white text-slate-900 p-10 rounded-2xl shadow-2xl text-left max-w-2xl mx-auto border-t-8 border-blue-600">
            <h3 className="text-xl font-bold border-b pb-4 mb-6">SOP: Patient Intake & Verification</h3>
            <div className="space-y-4 text-sm leading-relaxed">
              <p><strong>1. Purpose:</strong> To ensure accurate collection of patient demographic and insurance information...</p>
              <p><strong>2. Protocol:</strong> Front desk staff must verify two forms of identification for all new patients. Digital intake forms must be reviewed for completeness before the provider encounter...</p>
              <p><strong>3. Documentation:</strong> All patient identity verification must be recorded in the EMR within 24 hours...</p>
            </div>
          </div>
        </div>
      </section>

      <section id="generator" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Start Generating Policy</h2>
            <p className="text-slate-600">Select your practice type to get started.</p>
          </div>
          <PolicyGenerator />
        </div>
      </section>

      <FAQ items={faqs} />

      <Pricing />

      <section className="py-12 text-center">
        <Link href="/" className="text-blue-600 font-bold hover:underline">← Back to PolicyFlow AI Home</Link>
      </section>

      <Footer />
    </main>
  );
}
