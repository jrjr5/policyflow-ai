import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import { ClipboardCheck, Download, CheckCircle, ArrowRight, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Clinic Compliance Checklist | Documentation Audit Prep',
  description: 'Download a comprehensive compliance checklist for modern healthcare clinics. Ensure you have the required policies for HIPAA, OSHA, and clinical operations.',
  alternates: {
    canonical: '/free-clinic-compliance-checklist',
  },
};

export default function FreeChecklistPage() {
  const faqs = [
    {
      question: "What is the most common missing document in clinics?",
      answer: "Most clinics have a Privacy Policy but lack a documented 'Security Rule Risk Analysis' and specific Standard Operating Procedures (SOPs) for staff clinical workflows."
    },
    {
      question: "How often should I use this checklist?",
      answer: "We recommend a self-audit using this checklist at least every 6 months to ensure your documentation stays current with operational changes."
    },
    {
      question: "Does this checklist cover OSHA?",
      answer: "This checklist focuses primarily on clinical documentation and HIPAA compliance. OSHA requirements for bloodborne pathogens and workplace safety are separate but equally critical."
    }
  ];

  const checklistItems = [
    "HIPAA Privacy Policy",
    "HIPAA Security Rule Safeguards",
    "Breach Notification Protocol",
    "Patient Informed Consent (In-person)",
    "Telehealth Informed Consent",
    "Medical Director Oversight SOP",
    "Adverse Event Reporting Protocol",
    "Prescribing & Refill SOP",
    "Patient Identity Verification SOP",
    "Staff HIPAA Training Logs"
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" /> Audit Preparation Tool
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Clinic Compliance Checklist
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't get caught unprepared. Download our professional checklist of the essential policies and SOPs every modern clinic needs.
          </p>
          
          <div className="max-w-2xl mx-auto bg-slate-50 rounded-3xl border border-slate-200 p-8 text-left mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-2">
              <ClipboardCheck className="text-blue-600" /> Essential Documentation List
            </h2>
            <div className="space-y-3 mb-10">
              {checklistItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-5 h-5 rounded border-2 border-slate-200"></div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
               <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg">
                 <Download className="w-5 h-5" /> Download Checklist (PDF)
               </button>
               <Link href="/clinic-policy-generator" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg">
                 Generate Missing Policies <ArrowRight className="w-5 h-5" />
               </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Checking boxes is only half the battle.</h2>
          <p className="text-slate-400 text-lg mb-10">Having a checklist is great, but having professional, custom-written policies that actually protect your practice is better. Our AI generator does the heavy lifting for you.</p>
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <p className="text-4xl font-black text-blue-500 mb-2">20+</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest">Policy Types</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-blue-500 mb-2">50</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest">States Supported</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title="Compliance FAQ" />
      
      <Pricing />

      <Footer />
    </main>
  );
}
