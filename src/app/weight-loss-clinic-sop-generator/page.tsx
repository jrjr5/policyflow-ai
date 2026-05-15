import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import PolicyGenerator from '@/components/PolicyGenerator';
import FAQ from '@/components/FAQ';
import RelatedPages from '@/components/RelatedPages';
import { Scale, HeartPulse, FileText, ArrowRight, FlaskConical, Beaker } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Weight Loss Clinic SOP Generator | Medical Weight Loss Compliance',
  description: 'Generate professional Standard Operating Procedures for weight loss clinics. AI-powered templates for GLP-1 prescribing, patient monitoring, and clinical operations.',
  alternates: {
    canonical: '/weight-loss-clinic-sop-generator',
  },
  openGraph: {
    title: 'Weight Loss Clinic SOP Generator | PolicyFlow AI',
    description: 'Professional Standard Operating Procedures for weight loss clinics. AI-powered templates for GLP-1 prescribing and more.',
    url: 'https://policyflow-ai.vercel.app/weight-loss-clinic-sop-generator',
    type: 'website',
  },
};

import WhyUs from '@/components/WhyUs';
import WhoItsFor from '@/components/WhoItsFor';
import Benefits from '@/components/Benefits';

export default function WeightLossLandingPage() {
  const faqs = [
    {
      question: "Are there specific SOPs for Semaglutide/Tirzepatide?",
      answer: "Yes. Due to the clinical profile and titration requirements of GLP-1 medications, clinics should have specific SOPs covering patient screening, gastrointestinal side effect management, dose escalation schedules, and lab monitoring (including HbA1c and thyroid checks)."
    },
    {
      question: "How do I handle medical oversight for a weight loss clinic?",
      answer: "Weight loss clinics prescribing medical treatments must have clear protocols for provider-led assessments. Our SOPs help define the roles of MDs, NPs, and PAs in the treatment lifecycle."
    },
    {
      question: "What labs are required for medical weight loss monitoring?",
      answer: "While specific requirements vary by provider, standard protocols often include baseline CMP, Lipid Panel, TSH, and HbA1c. Follow-up monitoring intervals should be clearly documented in your clinical SOPs."
    },
    {
      question: "How should weight loss medications be stored?",
      answer: "Many weight loss medications require refrigeration. Your SOPs must include a 'Cold Chain Management' section that outlines temperature logging and emergency protocols for power failures."
    },
    {
      question: "Do I need a specific weight loss consent form?",
      answer: "Yes. Patients must be informed of the risks specific to weight loss medications, including potential side effects (like pancreatitis or gastroparesis), long-term expectations, and the need for lifestyle modifications."
    },
    {
      question: "What is the protocol for dose escalation?",
      answer: "Standard protocols usually follow a 4-week interval for dose titration. Our generator can help draft specific clinical guidelines for when to hold a dose or titrate back down based on patient tolerance."
    },
    {
      question: "How does this handle compounded medications?",
      answer: "If your clinic uses compounded GLP-1s, your SOPs must include specific sections on pharmacy sourcing (503A or 503B), sterility verification, and patient education on drawing doses."
    },
    {
      question: "Is there a free weight loss SOP template available?",
      answer: "Yes, we offer a free basic weight loss monitoring protocol. For professional, titration-specific SOPs tailored to your clinic, we recommend using our AI generator."
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
    "name": "How to Generate Weight Loss SOPs",
    "description": "Create clinical protocols for GLP-1 and medical weight loss clinics.",
    "step": [
      { "@type": "HowToStep", "name": "Select Weight Loss Niche", "text": "Choose GLP-1 or traditional medical weight loss." },
      { "@type": "HowToStep", "name": "Choose State", "text": "Pick your jurisdiction for lab monitoring rules." },
      { "@type": "HowToStep", "name": "Select Policy", "text": "Choose titration or screening protocols." },
      { "@type": "HowToStep", "name": "Generate Draft", "text": "AI drafts your weight loss SOP." },
      { "@type": "HowToStep", "name": "Download PDF", "text": "Export your audit-ready clinical manual." }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://policyflow-ai.vercel.app" },
      { "@type": "ListItem", "position": 2, "name": "Weight Loss Generator", "item": "https://policyflow-ai.vercel.app/weight-loss-clinic-sop-generator" }
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
            <Scale className="w-4 h-4" /> Medical Weight Loss Compliance
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Professional Weight Loss SOPs Designed for Healthcare Businesses.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Operating a weight loss clinic requires strict operational documentation. PolicyFlow AI helps you generate professional healthcare SOPs and compliance workflows in minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#generator" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
              Generate 1 Free SOP <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/telehealth-policy-generator" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              Telehealth SOPs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Protocol-Driven Weight Loss</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Modern weight loss treatments like Semaglutide require documented safety standards to protect both patients and practitioners.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
              <HeartPulse className="text-blue-600 w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Patient Safety SOPs</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Define clear inclusion and exclusion criteria for GLP-1 medications. Generate protocols for managing gastrointestinal side effects and dose escalation schedules.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
              <FileText className="text-blue-600 w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Lab Monitoring Standards</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Ensure consistent clinical oversight with automated SOPs for baseline blood work, follow-up labs, and provider review intervals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-600/5 p-10 rounded-3xl border border-blue-100 shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl font-bold mb-8 text-blue-900 flex items-center gap-3">
              <FlaskConical className="text-blue-600" /> Weight Loss Protocol Preview
            </h2>
            <div className="font-mono text-sm md:text-base text-blue-800 space-y-6">
              <p className="border-l-4 border-blue-400 pl-6 py-1">"PATIENT SCREENING: Prior to initiation of Semaglutide/Tirzepatide therapy, a comprehensive metabolic panel (CMP), Lipid Panel, and HbA1c must be reviewed..."</p>
              <p className="border-l-4 border-blue-400 pl-6 py-1">"ADVERSE EVENTS: Patients reporting severe abdominal pain or persistent vomiting must be evaluated immediately for signs of acute pancreatitis..."</p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs"><Beaker className="w-4 h-4" /></div>)}
              </div>
              <p className="text-sm text-blue-700 font-medium">Used by 150+ GLP-1 Weight Loss Clinics</p>
            </div>
          </div>
        </div>
      </section>

      <section id="generator" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Start Your Weight Loss SOP</h2>
            <p className="text-slate-600 italic">“Audit-ready clinical standards for modern medical weight loss.”</p>
          </div>
          <PolicyGenerator />
        </div>
      </section>

      <FAQ items={faqs} title="Weight Loss Clinic Compliance FAQ" />

      <WhyUs />

      <WhoItsFor />

      <Benefits />

      <RelatedPages />
      <RelatedPages />
      <RelatedPages />

      <Pricing />

      <section className="py-12 text-center bg-white border-t border-slate-100">
        <Link href="/" className="text-blue-600 font-bold hover:underline">← Back to PolicyFlow AI Home</Link>
      </section>

      <Footer />
    </main>
  );
}
