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
  Plus,
  Stethoscope,
  Activity,
  HeartPulse,
  Brain,
  Droplets,
  ZapOff
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecentActivity from '@/components/RecentActivity';
import Pricing from '@/components/Pricing';
import PolicyGenerator from '@/components/PolicyGenerator';
import FAQ from '@/components/FAQ';
import EmailCapture from '@/components/EmailCapture';
import RelatedPages from '@/components/RelatedPages';

import WhyUs from '@/components/WhyUs';
import WhoItsFor from '@/components/WhoItsFor';
import Benefits from '@/components/Benefits';

export default function HomeClient() {
  const [step, setStep] = useState<'landing' | 'generator'>('landing');

  const benefits = [
    {
      title: "Save Hours Creating Manuals",
      desc: "Stop manually drafting healthcare policies from scratch. Generate professional SOPs in under 60 seconds."
    },
    {
      title: "Generate in Minutes",
      desc: "PolicyFlow AI automates operational documentation so you can focus on clinical growth."
    },
    {
      title: "Improve Consistency",
      desc: "Ensure every practitioner and staff member follows the exact same clinical protocols across your organization."
    },
    {
      title: "Reduce Admin Workload",
      desc: "Standardize your clinic workflows faster with AI-powered documentation and compliance templates."
    },
    {
      title: "Audit-Ready SOP Drafts",
      desc: "Built with clinical standards and state-specific logic to ensure your documentation is robust and defensible."
    }
  ];

  const industryCards = [
    { 
      title: "Telehealth Clinics", 
      icon: Video, 
      href: "/telehealth-clinic-policies",
      pain: "Complex cross-state licensure and virtual consent rules.",
      solution: "Generate state-specific telehealth SOPs and virtual visit protocols."
    },
    { 
      title: "Med Spas", 
      icon: Sparkles, 
      href: "/medspa-sop-generator",
      pain: "Stringent medical oversight and good faith exam requirements.",
      solution: "Create audit-ready injectable SOPs and laser safety manuals."
    },
    { 
      title: "Wellness Clinics", 
      icon: HeartPulse, 
      href: "/specialties/wellness-clinics",
      pain: "Fragmented intake workflows and lack of operational standards.",
      solution: "Standardize membership policies and nutritional counseling SOPs."
    },
    { 
      title: "Weight Loss Clinics", 
      icon: Scale, 
      href: "/weight-loss-clinic-compliance",
      pain: "High regulatory scrutiny on GLP-1 titration and monitoring.",
      solution: "Generate clinical weight loss protocols and lab follow-up SOPs."
    },
    { 
      title: "Psychiatry Clinics", 
      icon: Brain, 
      href: "/specialties/psychiatry-clinics",
      pain: "Managing crisis response and medication documentation.",
      solution: "Build comprehensive telepsychiatry and intake documentation."
    },
    { 
      title: "IV Therapy Clinics", 
      icon: Droplets, 
      href: "/specialties/iv-therapy-clinics",
      pain: "Maintaining sterile preparation and administration standards.",
      solution: "Generate infusion safety protocols and hydration workflows."
    },
    { 
      title: "Urgent Care Clinics", 
      icon: Activity, 
      href: "/specialties/urgent-care-clinics",
      pain: "Inefficient triage workflows and high patient turnover.",
      solution: "Optimize walk-in management and triage SOPs for rapid care."
    },
    { 
      title: "Chiropractic Clinics", 
      icon: Stethoscope, 
      href: "/specialties/chiropractic-clinics",
      pain: "Inconsistent treatment documentation and consent gaps.",
      solution: "Create professional chiropractic treatment and scheduling SOPs."
    }
  ];

  const faqs = [
    {
      question: "What healthcare policies can PolicyFlow AI generate?",
      answer: "Our HIPAA policy generator and telehealth SOP generator can create everything from Privacy and Security rules to Medication Refills, Patient Intake Workflows, OSHA Safety Manuals, and Clinic Employee Handbooks."
    },
    {
      question: "Can telehealth clinics use PolicyFlow AI?",
      answer: "Absolutely. We specialize in virtual care documentation, including cross-state telehealth consent forms, remote prescribing protocols, and platform-specific security SOPs."
    },
    {
      question: "What SOPs should med spas have?",
      answer: "Med spas should have documented protocols for Good Faith Examinations (GFE), injectable safety, laser safety standards, patient complication management, and Medical Director oversight."
    },
    {
      question: "Can clinics customize generated policies?",
      answer: "Yes. PolicyFlow AI provides a professional clinical draft based on your state and clinic type. You can then copy, edit, and brand the text to fit your practice's unique culture."
    },
    {
      question: "How does AI healthcare policy generation work?",
      answer: "Our AI is trained on clinical standards, regulatory frameworks, and state-level healthcare rules. It combines your specific clinic data with this knowledge base to generate audit-ready documentation in seconds."
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
      { "@type": "HowToStep", "name": "Select Clinic Type and State", "text": "Choose your healthcare niche and the U.S. state where you operate." },
      { "@type": "HowToStep", "name": "Generate AI Policy Drafts", "text": "Click generate to have the AI draft your audit-ready clinical documentation." },
      { "@type": "HowToStep", "name": "Review, Customize, and Export", "text": "Download your document as a PDF or copy it to your clinic manual." }
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
          <section className="pt-20 pb-32 md:pt-32 md:pb-48 px-6 text-center bg-white border-b border-slate-100 overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-50/30 blur-[120px] rounded-full -translate-y-96"></div>
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black mb-8 uppercase tracking-widest border border-blue-100">
                <Star className="w-4 h-4 fill-blue-600" />
                <span>The #1 AI Healthcare Documentation Engine</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tight leading-[1.02]">
                Generate HIPAA Policies, Telehealth SOPs, and Healthcare Compliance Templates in Minutes Using AI
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
                Built for telehealth clinics, med spas, wellness clinics, weight loss clinics, and healthcare businesses that need professional operational documentation fast.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <button onClick={handleStart} className="w-full sm:w-auto bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-blue-700 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/25">
                  Generate 1 Free Policy <ArrowRight className="w-6 h-6" />
                </button>
                <a href="#samples" className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all text-center">
                  View Sample Policies
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-5xl mx-auto mb-20">
                 {[
                   { title: "Instant SOPs", desc: "Generate professional healthcare SOPs instantly", icon: Zap },
                   { title: "Save Hours", desc: "Save hours of manual documentation work", icon: Clock },
                   { title: "Clinic Built", desc: "Built for healthcare businesses and clinic operations", icon: Activity },
                   { title: "All-in-One", desc: "Create HIPAA policies, handbooks, and compliance templates", icon: Shield }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 p-4 rounded-2xl border border-slate-50 bg-slate-50/50">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{item.title}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="space-y-12">
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Designed for Specialized Clinical Verticals</p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {["Telehealth Clinics", "Med Spas", "Wellness Clinics", "Weight Loss Clinics", "Psychiatry Clinics", "IV Therapy Clinics"].map((name, i) => (
                      <div key={i} className="bg-white border border-slate-200 px-6 py-3 rounded-2xl font-bold text-slate-700 shadow-sm flex items-center gap-2 hover:border-blue-300 transition-colors cursor-default">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8">High-Value Documentation Use Cases</p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {["HIPAA Privacy Policy", "No-Show SOP", "Employee Handbook", "Telehealth Consent Workflow", "Med Spa Intake SOP"].map((tag, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider border border-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-24 pt-12 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8">
                 <div>
                   <p className="text-3xl font-black text-slate-900 mb-1">90%</p>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Reduce Admin Workload</p>
                 </div>
                 <div>
                   <p className="text-3xl font-black text-slate-900 mb-1">100%</p>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Standardize Documentation</p>
                 </div>
                 <div>
                   <p className="text-3xl font-black text-slate-900 mb-1">60s</p>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Generate Workflows</p>
                 </div>
                 <div>
                   <p className="text-3xl font-black text-slate-900 mb-1">Ready</p>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Audit-Ready SOPs</p>
                 </div>
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="py-24 px-6 bg-slate-50 border-b border-slate-100">
             <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tight">Audit-ready documentation in 3 steps.</h2>
                <div className="grid md:grid-cols-3 gap-12">
                   {[
                     { step: "01", title: "Select Clinic Type & State", desc: "Choose your specific healthcare facility type and operating jurisdiction to load state-specific logic." },
                     { step: "02", title: "Generate AI Policy Drafts", desc: "Our engine uses healthcare clinical standards to draft professional operational documentation in seconds." },
                     { step: "03", title: "Review, Customize & Export", desc: "Download as a professional PDF or copy to your clinical binder. Built for healthcare business owners." }
                   ].map((s, i) => (
                     <div key={i} className="relative bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm text-left group hover:shadow-xl transition-all">
                        <span className="text-6xl font-black text-blue-50 group-hover:text-blue-100 transition-colors absolute top-6 right-8">{s.step}</span>
                        <h4 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{s.title}</h4>
                        <p className="text-slate-500 leading-relaxed relative z-10">{s.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
          </section>

          {/* INDUSTRY SECTIONS */}
          <section className="py-24 px-6 bg-white">
             <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                   <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Specialized Healthcare Workflow Automation</h2>
                   <p className="text-slate-600 text-lg">Documentation tailored to your specific clinical niche and operational needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                   {industryCards.map((ind, i) => (
                     <Link key={i} href={ind.href} className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 hover:border-blue-500 hover:bg-white transition-all group flex flex-col h-full">
                        <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                           <ind.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">{ind.title}</h3>
                        <p className="text-slate-500 text-xs mb-4 leading-relaxed font-bold uppercase tracking-widest text-blue-600">{ind.pain}</p>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{ind.solution}</p>
                        <span className="text-blue-600 font-black text-xs uppercase tracking-widest flex items-center gap-2">View Generator <ArrowRight className="w-4 h-4" /></span>
                     </Link>
                   ))}
                </div>
             </div>
          </section>

          {/* BENEFITS SECTION */}
          <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Built for Clinical Efficiency.</h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">Stop letting administrative paperwork slow down your medical practice's growth.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((b, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm p-10 rounded-[32px] border border-white/10 hover:border-blue-500/50 transition-all">
                    <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center mb-8">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{b.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SAMPLES SECTION */}
          <section id="samples" className="py-24 px-6 bg-white border-y border-slate-100">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Professional Policy Templates</h2>
                <p className="text-slate-600">See the quality of AI-generated healthcare operational documentation.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "HIPAA Privacy Policy", preview: "Outlines technical and administrative safeguards implemented to protect PHI...", type: "Compliance", href: "/example-hipaa-policy" },
                  { title: "Telehealth Consent SOP", preview: "Establishes clinical protocol for virtual visit informed consent and emergency response...", type: "Patient Care", href: "/example-telehealth-sop" },
                  { title: "Medication Refill SOP", preview: "Standard operating procedure for managing prescription refill requests and clinical review...", type: "Operations", href: "/example-medication-refill-policy" }
                ].map((s, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-[32px] border border-slate-200 flex flex-col h-full hover:shadow-xl transition-shadow">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-black rounded-full mb-6 uppercase tracking-widest self-start">{s.type}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">{s.title}</h3>
                    <p className="text-slate-600 italic mb-8 flex-1 leading-relaxed">"{s.preview}"</p>
                    <Link href={s.href} className="text-blue-600 font-black text-sm flex items-center gap-2 hover:underline uppercase tracking-widest">
                      Read Full Example <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-16 text-center">
                <button onClick={handleStart} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 inline-flex items-center gap-3">
                  Generate Your Free Policy <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>

          <RecentActivity />

          <WhyUs />

          <RelatedPages title="Popular Compliance Generators" category="generators" />

          <div className="py-16 bg-white text-center">
            <button onClick={handleStart} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 inline-flex items-center gap-3">
              Generate Compliance Workflow <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <WhoItsFor />

          <div className="py-16 bg-slate-50 text-center">
            <button onClick={handleStart} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 inline-flex items-center gap-3">
              Start Free <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <Benefits />

          <RelatedPages title="Free Healthcare Policy Templates" category="templates" />
          <RelatedPages title="Authoritative Compliance Resources" category="pillars" />

          <FAQ items={faqs} title="PolicyFlow AI FAQs" />

          <div className="py-16 bg-white border-b border-slate-100 text-center">
            <button onClick={handleStart} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 inline-flex items-center gap-3">
              Create SOP Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* AUTHORITY PILLARS */}
          <section className="py-24 px-6 bg-white">
             <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tight">Authoritative Compliance Guides</h2>
                <div className="grid md:grid-cols-4 gap-6">
                   {[
                     { title: "HIPAA Guide", desc: "The complete guide to healthcare data protection.", href: "/hipaa-compliance" },
                     { title: "Telehealth Guide", desc: "Operational SOPs for modern virtual care.", href: "/telehealth-sops" },
                     { title: "Med Spa Guide", desc: "Clinical compliance for aesthetic practices.", href: "/medspa-compliance" },
                     { title: "SOP Guide", desc: "Building your clinic operations manual.", href: "/healthcare-sop-templates" }
                   ].map((p, i) => (
                     <Link key={i} href={p.href} className="p-8 rounded-[32px] border border-slate-100 bg-slate-50 hover:border-blue-500 hover:bg-white transition-all text-left flex flex-col h-full group">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{p.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{p.desc}</p>
                        <span className="text-blue-600 font-black text-xs uppercase tracking-widest flex items-center gap-2">Read Resource <ArrowRight className="w-4 h-4" /></span>
                     </Link>
                   ))}
                </div>
             </div>
          </section>

          <section className="py-24 px-6 bg-slate-900 text-white">
             <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Start Generating Professional Clinic Policies Today</h2>
                <button onClick={handleStart} className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-900/50 flex items-center justify-center gap-4 mx-auto">
                   Generate 1 Free Policy <Plus className="w-8 h-8" />
                </button>
                <p className="mt-8 text-slate-500 font-bold uppercase tracking-widest text-sm">Save hours on medical practice documentation</p>
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

      {/* STICKY MOBILE CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <button 
          onClick={handleStart} 
          className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl shadow-2xl shadow-blue-500/50 flex items-center justify-center gap-3 animate-in slide-in-from-bottom-10 duration-500"
        >
          Generate Free Policy <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </main>
  );
}
