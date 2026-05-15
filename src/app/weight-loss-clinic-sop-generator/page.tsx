import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import PolicyGenerator from '@/components/PolicyGenerator';
import FAQ from '@/components/FAQ';
import { Scale, HeartPulse, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Weight Loss Clinic SOP Generator | Medical Weight Loss Compliance',
  description: 'Generate professional Standard Operating Procedures for weight loss clinics. AI-powered templates for GLP-1 prescribing, patient monitoring, and clinical operations.',
  openGraph: {
    title: 'Weight Loss Clinic SOP Generator | PolicyFlow AI',
    description: 'Professional Standard Operating Procedures for weight loss clinics. AI-powered templates for GLP-1 prescribing and more.',
    url: 'https://policyflow-ai.vercel.app/weight-loss-clinic-sop-generator',
    type: 'website',
  },
};

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
      answer: "Yes. Patients must be informed of the risks specific to weight loss medications, including potential side effects, long-term expectations, and the need for lifestyle modifications."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="py-20 px-6 bg-white border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
            <Scale className="w-4 h-4" /> Medical Weight Loss Compliance
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Specialized Protocols for Modern Weight Loss Clinics.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            The rise of GLP-1 medications has brought new regulatory challenges. PolicyFlow AI helps you generate robust SOPs for patient screening, dosing titration, and lab monitoring protocols.
          </p>
          <div className="flex justify-center">
            <a href="#generator" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2">
              Generate Weight Loss SOPs <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Protocol-Driven Weight Loss</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <HeartPulse className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Patient Safety SOPs</h3>
              <p className="text-slate-600 leading-relaxed">
                Define clear inclusion and exclusion criteria for GLP-1 and other weight loss medications. Generate protocols for managing gastrointestinal side effects and dose escalations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <FileText className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lab Monitoring Standards</h3>
              <p className="text-slate-600 leading-relaxed">
                Ensure consistent clinical oversight with automated SOPs for baseline blood work, follow-up labs, and provider review intervals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-600/10 p-8 rounded-2xl border border-blue-600/20 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
               Weight Loss Clinical Protocol Sample
            </h2>
            <div className="font-mono text-sm text-blue-200 space-y-4">
              <p className="opacity-80">"PATIENT SCREENING: Prior to initiation of Semaglutide/Tirzepatide therapy, a comprehensive metabolic panel (CMP), HbA1c, and Thyroid-Stimulating Hormone (TSH) test must be reviewed by the presiding provider..."</p>
              <p className="opacity-80">"TITRATION SCHEDULE: Dose increases shall occur no sooner than every four weeks, pending patient tolerance and clinical response..."</p>
            </div>
          </div>
        </div>
      </section>

      <section id="generator" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Generate Weight Loss SOP</h2>
            <p className="text-slate-600">Standardize your clinical operations today.</p>
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
