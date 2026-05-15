import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import PolicyGenerator from '@/components/PolicyGenerator';
import { Video, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Telehealth Policy Generator | Clinical SOPs for Virtual Care',
  description: 'Generate professional telehealth consent forms and operational SOPs. Stay compliant with state-specific virtual care regulations using AI-powered clinical templates.',
  openGraph: {
    title: 'Telehealth Policy Generator | PolicyFlow AI',
    description: 'Professional telehealth consent forms and operational SOPs for virtual care providers. State-specific and audit-ready.',
    url: 'https://policyflow-ai.vercel.app/telehealth-policy-generator',
    type: 'website',
  },
};

export default function TelehealthLandingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="py-20 px-6 bg-white border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
            <Video className="w-4 h-4" /> Virtual Care Optimization
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Launch and Scale Your Telehealth Practice with Confidence.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Cross-state regulations and virtual clinical standards can be a minefield. PolicyFlow AI generates precise SOPs for remote prescribing, virtual triage, and platform security.
          </p>
          <div className="flex justify-center">
            <a href="#generator" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2">
              Generate Your Telehealth SOP <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Master the Virtual Workflow</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <Globe className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-State Compliance</h3>
              <p className="text-slate-600 leading-relaxed">
                Rules for virtual visits vary by state. Our AI takes your location into account to ensure your protocols meet local board standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <CheckCircle className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Consent</h3>
              <p className="text-slate-600 leading-relaxed">
                Legally robust telehealth consent is critical. Generate forms that clearly outline the risks and benefits of virtual care to your patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full"></div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Video className="text-blue-400" /> Telehealth Protocol Preview
            </h2>
            <div className="font-mono text-sm text-slate-300 space-y-4">
              <p className="border-l-2 border-blue-500 pl-4">"Verification of patient identity and location must be completed at the onset of every synchronous video encounter..."</p>
              <p className="border-l-2 border-blue-500 pl-4">"In the event of a technical failure during a clinical assessment, the provider shall immediately contact the patient via [Backup Phone Number]..."</p>
            </div>
          </div>
        </div>
      </section>

      <section id="generator" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Generate Telehealth Documentation</h2>
            <p className="text-slate-600">Enter your clinic details to produce audit-ready virtual care policies.</p>
          </div>
          <PolicyGenerator />
        </div>
      </section>

      <Pricing />

      <section className="py-12 text-center">
        <Link href="/" className="text-blue-600 font-bold hover:underline">← Back to PolicyFlow AI Home</Link>
      </section>

      <Footer />
    </main>
  );
}
