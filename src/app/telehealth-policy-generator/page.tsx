import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import PolicyGenerator from '@/components/PolicyGenerator';
import FAQ from '@/components/FAQ';
import { Video, Globe, CheckCircle, ArrowRight, VideoOff, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Telehealth Policy Generator | Clinical SOPs for Virtual Care',
  description: 'Generate professional telehealth consent forms and operational SOPs. Stay compliant with state-specific virtual care regulations using AI-powered clinical templates.',
  alternates: {
    canonical: '/telehealth-policy-generator',
  },
  openGraph: {
    title: 'Telehealth Policy Generator | PolicyFlow AI',
    description: 'Professional telehealth consent forms and operational SOPs for virtual care providers. State-specific and audit-ready.',
    url: 'https://policyflow-ai.vercel.app/telehealth-policy-generator',
    type: 'website',
  },
};

import WhyUs from '@/components/WhyUs';
import WhoItsFor from '@/components/WhoItsFor';
import Benefits from '@/components/Benefits';

export default function TelehealthLandingPage() {
  const faqs = [
    {
      question: "Do I need a separate consent form for telehealth?",
      answer: "Yes. Most state medical boards and payers (including CMS) require a specific telehealth informed consent that explains the limitations of virtual care, the risk of technical failure, and the patient's right to request an in-person encounter."
    },
    {
      question: "Can I prescribe controlled substances via telehealth?",
      answer: "Prescribing regulations for controlled substances (like those under the Ryan Haight Act) are complex and evolving. Our generator can help draft protocols for remote prescribing, but you must ensure compliance with current DEA and state-level emergency rules."
    },
    {
      question: "What are the HIPAA requirements for telehealth platforms?",
      answer: "You must use a platform that is HIPAA-compliant and willing to sign a Business Associate Agreement (BAA). Our SOPs include sections on platform selection and data security for virtual visits."
    },
    {
      question: "How do I handle out-of-state patients?",
      answer: "Generally, a provider must be licensed in the state where the patient is physically located at the time of the visit. Our generator takes into account the 'location of the patient' rules which vary by state jurisdiction."
    },
    {
      question: "What is a 'Good Faith Exam' in telehealth?",
      answer: "Many states require an initial 'Good Faith Examination' before certain treatments can be prescribed. Our SOPs help define how these exams can be conducted via synchronous video to meet regulatory standards."
    },
    {
      question: "What should be in a telehealth emergency protocol?",
      answer: "An SOP must define how to handle clinical emergencies during a video call, including identifying the patient's exact location and having local emergency numbers available for that specific jurisdiction."
    },
    {
      question: "Are telehealth SOPs required for insurance reimbursement?",
      answer: "Yes. Many private payers and Medicaid programs require documented telehealth protocols and specific clinical documentation standards to qualify for full reimbursement."
    },
    {
      question: "Is there a free telehealth SOP template available?",
      answer: "Yes, we offer a free basic telehealth SOP template. For a professional, state-specific protocol tailored to your clinic's actual workflow, we recommend using our AI generator."
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
    "name": "How to Generate Telehealth SOPs",
    "description": "Create audit-ready telehealth consent forms and protocols in 5 easy steps.",
    "step": [
      { "@type": "HowToStep", "name": "Specify Telehealth Vertical", "text": "Choose your virtual care niche." },
      { "@type": "HowToStep", "name": "Select Jurisdiction", "text": "Pick the state where your patients are located." },
      { "@type": "HowToStep", "name": "Select Protocol Type", "text": "Choose from Consent, Intake, or Emergency SOPs." },
      { "@type": "HowToStep", "name": "Generate Draft", "text": "AI drafts your telehealth documentation." },
      { "@type": "HowToStep", "name": "Download PDF", "text": "Export your professional SOP." }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://policyflow-ai.vercel.app" },
      { "@type": "ListItem", "position": 2, "name": "Telehealth Generator", "item": "https://policyflow-ai.vercel.app/telehealth-policy-generator" }
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
      
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
            <Video className="w-4 h-4" /> Virtual Care Optimization
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Standardize Your Virtual Care with Healthcare-Focused AI Generation.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Generate state-specific telehealth consent forms, remote prescribing protocols, and platform security SOPs in minutes. Professional operational templates built for modern healthcare practices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#generator" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
              Generate 1 Free Policy <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/free-telehealth-sop-template" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              View Free Template
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Master the Virtual Workflow</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Operating a telehealth clinic requires more than just a Zoom link. You need robust clinical documentation to protect your license.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
              <Globe className="text-blue-600 w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Multi-State Compliance</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Rules for virtual visits vary by state. Our AI takes your location into account to ensure your protocols meet local board standards and prescribing rules.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
              <CheckCircle className="text-blue-600 w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Professional Consent</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Legally robust telehealth consent is critical. Generate forms that clearly outline the risks and benefits of virtual care to your patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Need HIPAA Documentation too?</h2>
            <p className="text-slate-400">Our HIPAA generator covers all virtual care security requirements.</p>
          </div>
          <Link href="/hipaa-policy-generator" className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">HIPAA Generator</Link>
        </div>
      </section>

      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full"></div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-white">
              <Video className="text-blue-400" /> Telehealth Protocol Preview
            </h2>
            <div className="font-mono text-sm md:text-base text-slate-300 space-y-6">
              <p className="border-l-4 border-blue-500 pl-6 py-1">"Verification of patient identity and location must be completed at the onset of every synchronous video encounter to ensure state board jurisdictional compliance..."</p>
              <p className="border-l-4 border-blue-500 pl-6 py-1">"In the event of a technical failure during a clinical assessment, the provider shall immediately contact the patient via the backup phone number documented in the intake file..."</p>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-slate-400 bg-slate-900/50 p-4 rounded-xl border border-slate-700">
               <AlertCircle className="w-5 h-5 text-amber-500" />
               <span>Important: This SOP covers emergency backup plans and patient identification protocols.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="generator" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Start Your Telehealth Documentation</h2>
            <p className="text-slate-600 italic">“Save hours of administrative work. Generate your first policy for free.”</p>
          </div>
          <PolicyGenerator />
        </div>
      </section>

      <FAQ items={faqs} title="Telehealth Compliance FAQ" />

      <WhyUs />

      <WhoItsFor />

      <Benefits />

      <Pricing />

      <section className="py-12 text-center bg-white border-t border-slate-100">
        <Link href="/" className="text-blue-600 font-bold hover:underline">← Back to PolicyFlow AI Home</Link>
      </section>

      <Footer />
    </main>
  );
}
