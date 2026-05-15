import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import { FileText, Download, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free HIPAA Policy Template | Basic Clinic Compliance Draft',
  description: 'Download a free, basic HIPAA privacy policy template for your clinic. Learn why you need a documented policy and how to stay audit-ready.',
  alternates: {
    canonical: '/free-hipaa-policy-template',
  },
};

export default function FreeHIPAATemplatePage() {
  const faqs = [
    {
      question: "Is this free HIPAA template audit-ready?",
      answer: "This is a basic draft intended for educational and foundational purposes. For a policy that is fully audit-ready, state-specific, and tailored to your clinic's actual software and workflows, we recommend using the PolicyFlow AI generator."
    },
    {
      question: "What is missing from this free template?",
      answer: "Our free version covers high-level requirements but lacks the specific technical safeguard documentation required for modern EMRs, remote workforce protocols, and state-specific privacy laws like Texas HB 300 or California's CMIA."
    },
    {
      question: "Can I use this for a Med Spa?",
      answer: "Yes, but Med Spas have unique risks regarding aesthetic software and patient photos that require more specialized clauses than a generic template provides."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Free HIPAA Policy Template
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            A basic foundation for clinic compliance. Download our free draft and start professionalizing your practice today.
          </p>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-left mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileText className="text-blue-600" /> Policy Preview
            </h2>
            <div className="bg-white p-6 rounded-xl border border-slate-200 font-serif text-sm text-slate-700 leading-relaxed shadow-sm">
              <p className="font-bold mb-4">NOTICE OF PRIVACY PRACTICES</p>
              <p className="mb-4">This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.</p>
              <p className="mb-4"><strong>Our Pledge Regarding Medical Information:</strong> We understand that medical information about you and your health is personal. We are committed to protecting medical information about you...</p>
              <div className="h-20 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
               <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                 <Download className="w-5 h-5" /> Download PDF (Free)
               </button>
               <Link href="/hipaa-policy-generator" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
                 Generate Pro Version <ArrowRight className="w-5 h-5" />
               </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why You Need a Robust Policy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <CheckCircle className="text-green-500 w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Legal Requirement</h3>
              <p className="text-slate-600">The HIPAA Privacy Rule explicitly requires clinics to have written policies and procedures in place.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <ShieldCheck className="text-blue-500 w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Audit Defense</h3>
              <p className="text-slate-600">In the event of a breach or OCR investigation, your written policies are the first thing auditors will ask to see.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title="Template FAQ" />
      
      <Pricing />

      <Footer />
    </main>
  );
}
