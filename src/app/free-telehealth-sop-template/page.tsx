import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import { Video, Download, CheckCircle, ArrowRight, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Telehealth SOP Template | Virtual Care Protocol Draft',
  description: 'Download a free Standard Operating Procedure template for telehealth clinics. Covering virtual visit protocols and patient identity verification.',
  alternates: {
    canonical: '/free-telehealth-sop-template',
  },
};

export default function FreeTelehealthTemplatePage() {
  const faqs = [
    {
      question: "Can I use this template for any state?",
      answer: "This is a general framework. Telehealth laws vary significantly by state (e.g., California's rules on video vs. audio-only visits). For a state-compliant SOP, we recommend using our AI generator."
    },
    {
      question: "Does this template include informed consent?",
      answer: "It includes a basic outline for informed consent, but professional telehealth practices usually require more detailed disclosures regarding technical risks and backup plans."
    },
    {
      question: "Is this suitable for prescribing controlled substances?",
      answer: "No. Protocols for prescribing controlled substances via telehealth are highly regulated and require specific sections on DEA compliance that are not included in this free basic draft."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Free Telehealth SOP Template
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Standardize your virtual patient encounters. Download our free Standard Operating Procedure draft for telehealth providers.
          </p>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-left mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
              <Video className="text-blue-600" /> SOP Draft Preview
            </h2>
            <div className="bg-white p-6 rounded-xl border border-slate-200 font-mono text-xs text-slate-600 leading-relaxed shadow-sm">
              <p className="font-bold mb-2">TELEHEALTH ENCOUNTER PROTOCOL</p>
              <p className="mb-2">1. Patient identity must be verified at start of call.</p>
              <p className="mb-2">2. Provider must confirm patient's physical location.</p>
              <p className="mb-2">3. Ensure HIPAA-compliant video platform is active.</p>
              <p className="mb-2">4. Document clinical findings in EMR concurrently...</p>
              <div className="h-16 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
               <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                 <Download className="w-5 h-5" /> Download Template
               </button>
               <Link href="/telehealth-policy-generator" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
                 Generate State-Specific SOP <ArrowRight className="w-5 h-5" />
               </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">The Importance of Telehealth SOPs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <Globe className="text-blue-500 w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-3">State Board Protection</h3>
              <p className="text-slate-600">State boards increasingly look for documented virtual care protocols during clinical practice reviews.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <CheckCircle className="text-green-500 w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-3">Operational Consistency</h3>
              <p className="text-slate-600">Ensure every provider in your practice follows the same verification and documentation steps for every patient.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title="Virtual Care FAQ" />
      
      <Pricing />

      <Footer />
    </main>
  );
}
