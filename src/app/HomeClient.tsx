'use client';

import { useState } from 'react';
import { 
  Shield, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Star,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import PolicyGenerator from '@/components/PolicyGenerator';
import FAQ from '@/components/FAQ';

export default function HomeClient() {
  const [step, setStep] = useState<'landing' | 'generator'>('landing');

  const faqs = [
    {
      question: "Are AI-generated policies audit-ready?",
      answer: "Yes, our AI is trained specifically on healthcare clinical standards and state-specific regulations. While we always recommend a final review by your medical director or legal counsel, the drafts provided are designed to meet the rigorous requirements of clinical audits."
    },
    {
      question: "How long does it take to generate a policy?",
      answer: "Most policies are generated in under 60 seconds. You simply provide your clinic type, state, and the specific policy name, and the AI handles the rest."
    },
    {
      question: "Can I customize the generated policies?",
      answer: "Absolutely. Once a policy is generated, you can copy the text into your own word processor or download it as a PDF for further customization and branding."
    },
    {
      question: "Does PolicyFlow AI store my clinic's private data?",
      answer: "We do not store the specific operational details you input into the generator beyond the session required to generate the text. We prioritize data privacy and do not sell your business information."
    },
    {
      question: "What types of clinics do you support?",
      answer: "We specialize in modern clinical practices including Telehealth, Med Spas, Wellness Clinics, IV Hydration, and Weight Loss centers."
    }
  ];

  const handleStart = () => {
    setStep('generator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar onStart={handleStart} onHomeClick={() => setStep('landing')} />

      {step === 'landing' && (
        <div className="animate-in fade-in duration-500">
          <section className="py-20 px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-blue-600" />
                <span>Trusted by 500+ clinics nationwide</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Generate audit-ready clinic policies and SOPs in minutes using AI.
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Built specifically for telehealth, wellness, weight loss, and med spa clinics. Save hours of manual work and stay compliant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={handleStart} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                  Generate Your First Policy <ArrowRight className="w-5 h-5" />
                </button>
                <a href="#samples" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all text-center">
                  View Samples
                </a>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white border-y border-slate-100 px-6 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { icon: Shield, title: "Audit-Ready", desc: "Trained on clinical standards and state-specific healthcare regulations." },
              { icon: FileText, title: "Specialized Context", desc: "Tailored for modern clinics like Med Spas and Telehealth providers." },
              { icon: CheckCircle, title: "Instant Export", desc: "Download as PDF or copy directly to your operations manual." }
            ].map((f, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"><f.icon className="w-6 h-6" /></div>
                <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
                <p className="text-slate-600">{f.desc}</p>
              </div>
            ))}
          </section>

          <section id="samples" className="py-24 px-6 bg-slate-50">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Sample Policies</h2>
              <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
                {[
                  { title: "HIPAA Privacy Policy", preview: "Outlines safeguards implemented to protect PHI...", type: "Compliance" },
                  { title: "Telehealth Consent Policy", preview: "Establishes protocol for virtual visit consent...", type: "Patient Care" },
                  { title: "Medication Refill SOP", preview: "Standard procedure for managing refill requests...", type: "Operations" }
                ].map((s, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4 uppercase">{s.type}</span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                    <p className="text-slate-600 text-sm italic mb-6">"{s.preview}"</p>
                    <button onClick={handleStart} className="text-blue-600 font-bold text-sm flex items-center gap-1">Generate similar <ArrowRight className="w-4 h-4" /></button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <FAQ items={faqs} />

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
