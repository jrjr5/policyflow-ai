import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import PolicyGenerator from '@/components/PolicyGenerator';
import FAQ from '@/components/FAQ';
import RelatedPages from '@/components/RelatedPages';
import { Layout, ClipboardCheck, Users, ArrowRight, BookOpen, Search } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clinic Policy Generator | Professional SOPs for Healthcare Practices',
  description: 'Generate customized operational and compliance policies for any healthcare clinic. AI-powered SOPs for medical, wellness, and aesthetic practices.',
  alternates: {
    canonical: '/clinic-policy-generator',
  },
  openGraph: {
    title: 'Clinic Policy Generator | PolicyFlow AI',
    description: 'Custom operational and compliance policies for healthcare practices. AI-powered SOPs for medical and wellness clinics.',
    url: 'https://policyflow-ai.vercel.app/clinic-policy-generator',
    type: 'website',
  },
};

import WhyUs from '@/components/WhyUs';
import WhoItsFor from '@/components/WhoItsFor';
import Benefits from '@/components/Benefits';

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
    },
    {
      question: "Can I generate HR policies with this tool?",
      answer: "While our primary focus is clinical operations and compliance (HIPAA, SOPs), the generator can produce basic HR policies related to clinical conduct, dress codes, and professional standards."
    },
    {
      question: "How do I ensure my staff actually follows these SOPs?",
      answer: "Documentation is only the first step. You should conduct regular training sessions, perform mock audits, and include SOP adherence in your annual employee performance reviews."
    },
    {
      question: "Is there a general clinic compliance checklist available?",
      answer: "Yes, we offer a free clinic compliance checklist that covers the essential documentation every modern clinic needs to have on file."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Generate General Clinic Policies",
    "description": "Standardize your clinic operations with AI-powered documentation.",
    "step": [
      { "@type": "HowToStep", "name": "Select Clinic Type", "text": "Choose your specific medical or wellness niche." },
      { "@type": "HowToStep", "name": "Choose State", "text": "Select your state for local operational compliance." },
      { "@type": "HowToStep", "name": "Enter Policy Name", "text": "Specify the operational protocol you need." },
      { "@type": "HowToStep", "name": "AI Draft", "text": "AI drafts your professional clinic policy." },
      { "@type": "HowToStep", "name": "Finalize", "text": "Download and print for your clinic binder." }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://policyflow-ai.vercel.app" },
      { "@type": "ListItem", "position": 2, "name": "Clinic Generator", "item": "https://policyflow-ai.vercel.app/clinic-policy-generator" }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      
      <section className="py-20 px-6 bg-white border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
            <Layout className="w-4 h-4" /> Comprehensive Clinic Operations
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Professional Operational Documentation Built for Modern Healthcare Practices.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Operational excellence starts with clear documentation. PolicyFlow AI generates healthcare SOPs and compliance workflows in minutes. Designed for telehealth, med spa, and wellness clinics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#generator" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
              Generate 1 Free Policy <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/free-clinic-compliance-checklist" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              Compliance Checklist
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Standardize Your Operations</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Don't let administrative overhead slow down your clinical care. AI-powered documentation keeps your team aligned and compliant.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
              <ClipboardCheck className="text-blue-600 w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Audit Protection</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Be ready for any regulatory inspection or payer audit. Our policies are grounded in clinical standards and state-specific healthcare regulations.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
              <Users className="text-blue-600 w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Staff Clarity</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Reduce onboarding time and operational errors by providing your team with clear, easy-to-follow Standard Operating Procedures for every task.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Document Preview</h2>
             <p className="text-slate-600 italic">High-quality, clinical-grade documentation output.</p>
          </div>
          <div className="bg-white text-slate-900 p-10 md:p-16 rounded-3xl shadow-2xl text-left max-w-3xl mx-auto border border-slate-100 border-t-8 border-blue-600">
            <div className="flex justify-between items-center mb-10 border-b pb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">SOP: Patient Intake & Verification</h3>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-widest mt-1">Operational Protocol</p>
              </div>
              <BookOpen className="text-blue-600 w-8 h-8" />
            </div>
            <div className="space-y-8 text-slate-800 leading-relaxed">
              <div>
                <p className="font-bold text-blue-600 uppercase text-xs tracking-wider mb-2">1. Purpose</p>
                <p>To ensure the accurate and consistent collection of patient demographic and insurance information while maintaining regulatory compliance and data integrity.</p>
              </div>
              <div>
                <p className="font-bold text-blue-600 uppercase text-xs tracking-wider mb-2">2. Verification Protocol</p>
                <p>Front desk staff must verify two forms of government-issued identification for all new clinical encounters. Digital intake forms must be reviewed and timestamped in the EMR prior to provider handoff...</p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-slate-400 text-xs italic">
                <Search className="w-3 h-3" />
                <span>Generated by PolicyFlow AI Compliance Engine</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="generator" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Start Generating Policy</h2>
            <p className="text-slate-600 italic">“Build a consistent practice with professional SOPs.”</p>
          </div>
          <PolicyGenerator />
        </div>
      </section>

      <FAQ items={faqs} title="Clinic Documentation FAQ" />

      <WhyUs />

      <WhoItsFor />

      <Benefits />

      <RelatedPages title="Related Healthcare Policy Generators" category="generators" />
      <RelatedPages title="Related Clinic SOP Templates" category="templates" />
      <RelatedPages title="Explore More Healthcare Workflows" category="examples" />

      <Pricing />

      <section className="py-12 text-center bg-white border-t border-slate-100">
        <Link href="/" className="text-blue-600 font-bold hover:underline">← Back to PolicyFlow AI Home</Link>
      </section>

      <Footer />
    </main>
  );
}
