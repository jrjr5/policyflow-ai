import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import PolicyGenerator from '@/components/PolicyGenerator';
import { Sparkles, Activity, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Med Spa SOP Generator | Clinical Standards for Aesthetic Practices',
  description: 'Generate customized Standard Operating Procedures for your Med Spa. AI-powered clinical templates for Botox, fillers, IV hydration, and aesthetic compliance.',
  openGraph: {
    title: 'Med Spa SOP Generator | PolicyFlow AI',
    description: 'Custom Standard Operating Procedures for Med Spas. AI-powered clinical templates for Botox, fillers, and more.',
    url: 'https://policyflow-ai.vercel.app/medspa-sop-generator',
    type: 'website',
  },
};

export default function MedSpaLandingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="py-20 px-6 bg-white border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Aesthetic Excellence
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Professional SOPs for Your Aesthetic Medical Practice.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            From Botox administration to medical director oversight, Med Spas face unique regulatory scrutiny. PolicyFlow AI generates clinical protocols that protect your license and your patients.
          </p>
          <div className="flex justify-center">
            <a href="#generator" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2">
              Generate Med Spa SOPs <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Safety Meets Aesthetics</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <ShieldCheck className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Clinical Compliance</h3>
              <p className="text-slate-600 leading-relaxed">
                Ensure your staff follows proper sanitation, storage, and injection protocols. Generate documentation that meets state board requirements for aesthetic clinics.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <Activity className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Adverse Event Protocols</h3>
              <p className="text-slate-600 leading-relaxed">
                Be prepared for emergencies. Generate clear SOPs for managing vascular occlusions, allergic reactions, and other clinical complications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Sample SOP: Neurotoxin Administration</h2>
            <div className="font-serif text-slate-300 leading-relaxed italic border-l-4 border-blue-500 pl-6 py-2">
              "The Practitioner must verify the reconstitution date and time of the botulinum toxin. All reconstituted product must be stored in a dedicated medical refrigerator between 2°C and 8°C. A Good Faith Examination (GFE) must be documented prior to the initial treatment..."
            </div>
          </div>
        </div>
      </section>

      <section id="generator" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Start Your Med Spa SOP</h2>
            <p className="text-slate-600">Select your aesthetic clinic details to begin.</p>
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
