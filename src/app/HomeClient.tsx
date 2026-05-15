'use client';

import { useState } from 'react';
import { 
  Shield, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  Zap,
  CheckCircle2,
  Users,
  Video,
  Sparkles,
  Scale,
  Rocket,
  Plus
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecentActivity from '@/components/RecentActivity';
import Pricing from '@/components/Pricing';
import PolicyGenerator from '@/components/PolicyGenerator';
import FAQ from '@/components/FAQ';
import EmailCapture from '@/components/EmailCapture';

export default function HomeClient() {
  const [step, setStep] = useState<'landing' | 'generator'>('landing');

  const benefits = [
    {
      title: "Save 20+ Hours Weekly",
      desc: "Stop manually drafting policies from scratch. Generate professional SOPs in under 60 seconds."
    },
    {
      title: "Audit-Ready Quality",
      desc: "Built with clinical standards and state-specific logic to ensure your documentation is robust."
    },
    {
      title: "Improve Consistency",
      desc: "Ensure every practitioner and staff member follows the exact same clinical protocols."
    },
    {
      title: "Reduce Admin Load",
      desc: "Automate the most tedious part of clinic operations so you can focus on patient care."
    },
    {
      title: "HIPAA-Ready Workflows",
      desc: "Documentation designed for modern data protection and regulatory privacy requirements."
    }
  ];

  const industries = [
    { title: "Telehealth Clinics", icon: Video, href: "/telehealth-clinic-policies" },
    { title: "Med Spas", icon: Sparkles, href: "/medspa-sop-generator" },
    { title: "Wellness Clinics", icon: Users, href: "/clinic-policy-generator" },
    { title: "Weight Loss Clinics", icon: Scale, href: "/weight-loss-clinic-compliance" },
    { title: "Healthcare Startups", icon: Rocket, href: "/healthcare-sop-generator" }
  ];

  const faqs = [
    {
      question: "Are AI-generated policies audit-ready?",
      answer: "Yes, our AI is trained on healthcare clinical standards and state-specific regulations. While we always recommend a final review by your medical director, the drafts provided are designed to meet rigorous clinical audit requirements."
    },
    {
      question: "How long does it take to generate a policy?",
      answer: "Most policies are generated in under 60 seconds. You simply provide your clinic type, state, and specific policy name, and the AI handles the rest."
    },
    {
      question: "Can I customize the generated policies?",
      answer: "Absolutely. Once generated, you can copy the text into your own word processor or download it as a PDF for further customization and branding."
    },
    {
      question: "What types of clinics do you support?",
      answer: "We specialize in modern clinical practices including Telehealth, Med Spas, Wellness Clinics, IV Hydration, and Weight Loss centers."
    },
    {
      question: "Do I need a credit card to start?",
      answer: "No. You can generate one full policy preview for free without entering any payment information."
    }
  ];

  const handleStart = () => {
    setStep('generator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    "name": "How to Generate Healthcare SOPs with PolicyFlow AI",
    "description": "Create professional clinic documentation in minutes.",
    "step": [
      { "@type": "HowToStep", "name": "Choose Clinical Niche", "text": "Select your industry (Telehealth, Med Spa, etc.)." },
      { "@type": "HowToStep", "name": "Select State", "text": "Pick your U.S. state for compliance logic." },
      { "@type": "HowToStep", "name": "Enter Policy Name", "text": "Specify the document you need." },
      { "@type": "HowToStep", "name": "AI Generation", "text": "Wait 60 seconds for the draft." },
      { "@type": "HowToStep", "name": "Download PDF", "text": "Export your audit-ready manual." }
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
      <Navbar onStart={handleStart} onHomeClick={() => setStep('landing')} />

      {step === 'landing' && (
        <div className="animate-in fade-in duration-500">
          {/* HERO SECTION */}
          <section className="py-24 md:py-32 px-6 text-center bg-white border-b border-slate-100 overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-96 bg-blue-50/50 blur-3xl rounded-full -translate-y-48"></div>
            <div className="max-w-5xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-8">
                <Star className="w-4 h-4 fill-blue-600" />
                <span>The #1 Clinical Policy Engine for Modern Practices</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                Generate Audit-Ready Clinic Policies and SOPs in Minutes Using AI
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                PolicyFlow AI helps telehealth clinics, med spas, and healthcare businesses create professional operational documentation faster and more consistently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button onClick={handleStart} className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-200">
                  Generate 1 Free Policy <ArrowRight className="w-6 h-6" />
                </button>
                <a href="#samples" className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all text-center">
                  View Sample Policies
                </a>
              </div>
              <div className="mt-10 flex items-center justify-center gap-6 text-sm font-bold text-slate-400">
                 <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> No signup required</div>
                 <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> 50 States supported</div>
              </div>
            </div>
          </section>

          {/* BENEFITS SECTION */}
          <section className="py-24 px-6 bg-slate-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Built for Clinical Efficiency.</h2>
                <p className="text-slate-600 text-lg">Stop letting administrative paperwork slow down your clinical growth.</p>
              </div>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {benefits.map((b, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-3">{b.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="py-24 px-6 bg-white border-y border-slate-100">
             <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                   <div>
                      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 leading-tight">Professional clinic SOPs are just 3 steps away.</h2>
                      <div className="space-y-10">
                         {[
                           { step: "01", title: "Select Policy Type", desc: "Choose from HIPAA, Telehealth, Med Spa, or create your own custom clinical title." },
                           { step: "02", title: "Generate AI Draft", desc: "Our engine applies clinical datasets and state-specific rules to draft your policy in seconds." },
                           { step: "03", title: "Review & Customize", desc: "Download as a branded PDF or copy to your clinical binder for medical director approval." }
                         ].map((s, i) => (
                           <div key={i} className="flex gap-8">
                              <span className="text-5xl font-black text-blue-100">{s.step}</span>
                              <div>
                                 <h4 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h4>
                                 <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="bg-slate-900 rounded-[40px] p-12 shadow-3xl">
                      <div className="h-64 flex flex-col justify-center text-center">
                         <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-900/50">
                            <Zap className="w-10 h-10 text-white fill-white" />
                         </div>
                         <h3 className="text-2xl font-bold text-white mb-2">Documentation Engine Active</h3>
                         <p className="text-slate-500 font-mono text-sm tracking-widest">STATE_LOGIC: CALIFORNIA // LOADED</p>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* WHO IT'S FOR */}
          <section className="py-24 px-6 bg-slate-50">
             <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                   <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Specialized Compliance Engines</h2>
                   <p className="text-slate-600 text-lg">Documentation tailored to your specific clinical niche.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                   {industries.map((ind, i) => (
                     <Link key={i} href={ind.href} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all group flex flex-col items-center text-center">
                        <ind.icon className="w-10 h-10 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold text-slate-900">{ind.title}</h3>
                     </Link>
                   ))}
                </div>
             </div>
          </section>

          {/* SAMPLES SECTION */}
          <section id="samples" className="py-24 px-6 bg-white border-y border-slate-100">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Realistic Sample Outputs</h2>
                <p className="text-slate-600">See the quality of AI-generated clinical documentation.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "HIPAA Privacy Policy", preview: "Outlines safeguards implemented to protect PHI...", type: "Compliance", href: "/example-hipaa-policy" },
                  { title: "Telehealth SOP", preview: "Establishes protocol for virtual visit consent...", type: "Patient Care", href: "/example-telehealth-sop" },
                  { title: "Medication Refill SOP", preview: "Standard procedure for managing refill requests...", type: "Operations", href: "/example-medication-refill-policy" }
                ].map((s, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-[32px] border border-slate-200 flex flex-col h-full">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-black rounded-full mb-6 uppercase tracking-widest self-start">{s.type}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">{s.title}</h3>
                    <p className="text-slate-600 italic mb-8 flex-1">"{s.preview}"</p>
                    <Link href={s.href} className="text-blue-600 font-black flex items-center gap-2 hover:underline">
                      View Long-form Example <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <FAQ items={faqs} title="Frequently Asked Questions" />

          {/* AUTHORITY PILLARS */}
          <section className="py-24 px-6 bg-white">
             <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tight">Authoritative Compliance Guides</h2>
                <div className="grid md:grid-cols-4 gap-6">
                   {[
                     { title: "HIPAA Guide", desc: "The complete guide to clinic data protection.", href: "/hipaa-compliance" },
                     { title: "Telehealth Guide", desc: "Operations and SOPs for virtual care.", href: "/telehealth-sops" },
                     { title: "Med Spa Guide", desc: "Compliance for aesthetic medical practices.", href: "/medspa-compliance" },
                     { title: "SOP Guide", desc: "Building your clinic operations manual.", href: "/healthcare-sop-templates" }
                   ].map((p, i) => (
                     <Link key={i} href={p.href} className="p-8 rounded-[32px] border border-slate-100 bg-slate-50 hover:border-blue-500 hover:bg-white transition-all text-left flex flex-col h-full group">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{p.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{p.desc}</p>
                        <span className="text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">Read Guide <ArrowRight className="w-4 h-4" /></span>
                     </Link>
                   ))}
                </div>
             </div>
          </section>

          <section className="py-24 px-6 bg-slate-900 text-white">
             <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Start Generating Professional Clinic Policies Today</h2>
                <button onClick={handleStart} className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-900/50 flex items-center justify-center gap-4 mx-auto">
                   Get Started for Free <Plus className="w-8 h-8" />
                </button>
                <p className="mt-8 text-slate-500 font-bold uppercase tracking-widest text-sm">No credit card required for first draft</p>
             </div>
          </section>

          <Pricing />
        </div>
      )}

      {step === 'generator' && (
        <div className="py-20 px-6 max-w-4xl mx-auto">
          <button onClick={() => setStep('landing')} className="text-slate-500 mb-8 flex items-center gap-1 font-medium hover:text-blue-600 transition-colors">← Back to Home</button>
          <div id="generator">
            <PolicyGenerator />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
