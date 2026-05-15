import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import PolicyGenerator from '@/components/PolicyGenerator';
import FAQ from '@/components/FAQ';
import { Shield, Lock, FileCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HIPAA Policy Generator | Audit-Ready Compliance for Clinics',
  description: 'Generate comprehensive, state-specific HIPAA privacy and security policies for your clinic in minutes. Stay compliant and protect patient data with AI-powered templates.',
  openGraph: {
    title: 'HIPAA Policy Generator | PolicyFlow AI',
    description: 'Professional, state-specific HIPAA privacy and security policies for your clinic. Audit-ready and AI-powered.',
    url: 'https://policyflow-ai.vercel.app/hipaa-policy-generator',
    type: 'website',
  },
};

export default function HIPAALandingPage() {
  const faqs = [
    {
      question: "What HIPAA policies are required for a new clinic?",
      answer: "At a minimum, every clinic needs a HIPAA Privacy Policy, a HIPAA Security Policy, and a Breach Notification Policy. Depending on your operations, you may also need Business Associate Agreements (BAAs) and specific protocols for remote workforce management."
    },
    {
      question: "Does this generator handle state-specific HIPAA laws?",
      answer: "Yes. While HIPAA is a federal regulation, many states (like California with CMIA or Texas with HB 300) have stricter privacy requirements. Our AI incorporates these state-level nuances based on the state you select."
    },
    {
      question: "How often should HIPAA policies be updated?",
      answer: "HIPAA policies should be reviewed annually or whenever there is a significant change in your clinic's operations, such as adopting a new EMR or switching to a new telehealth platform."
    },
    {
      question: "What is the penalty for not having written HIPAA policies?",
      answer: "Failure to have documented policies is considered 'willful neglect' by the OCR. Fines can range from several thousand dollars to millions, depending on the severity and duration of the non-compliance."
    },
    {
      question: "Can I use these policies for a Business Associate Agreement?",
      answer: "Yes, our generator can help draft the clinical side of security expectations, though we recommend using a standardized BAA template for the legal contract between parties."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
            <Shield className="w-4 h-4" /> HIPAA Compliance Simplified
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Generate Audit-Ready HIPAA Policies for Your Practice in Minutes.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Stop worrying about OCR audits. Our AI-powered generator creates customized HIPAA Privacy, Security, and Breach Notification policies tailored to your clinic's specific operations.
          </p>
          <div className="flex justify-center">
            <a href="#generator" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2">
              Generate Your HIPAA Policy <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">The Compliance Burden</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <Lock className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Complex Regulations</h3>
              <p className="text-slate-600 leading-relaxed">
                HIPAA rules are dense and difficult to translate into actionable clinic workflows. One small oversight can lead to massive fines.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <FileCheck className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Outdated Templates</h3>
              <p className="text-slate-600 leading-relaxed">
                Generic templates don't account for modern telehealth workflows or your specific state laws. You need dynamic, specialized documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Preview */}
      <section className="py-20 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Built for Modern Healthcare</h2>
              <p className="text-slate-400 text-lg mb-8">
                Our AI understands the nuances of modern clinical practice, from mobile device encryption to remote employee access protocols.
              </p>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 font-mono text-sm text-slate-300 shadow-2xl rotate-2">
                <p className="text-blue-400 font-bold mb-2">SAMPLE: HIPAA SECURITY RULE COMPLIANCE</p>
                <p>"...all workforce members must utilize multi-factor authentication (MFA) when accessing Electronic Protected Health Information (ePHI) from remote locations. Clinic-issued devices must remain encrypted with AES-256..."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Start Generating Now</h2>
            <p className="text-slate-600">Select your clinic details below to create your customized HIPAA policy.</p>
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
