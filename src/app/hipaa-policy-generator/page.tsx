import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import PolicyGenerator from '@/components/PolicyGenerator';
import FAQ from '@/components/FAQ';
import { Shield, Lock, FileCheck, ArrowRight, CheckCircle, Info } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HIPAA Policy Generator | Audit-Ready Compliance for Clinics',
  description: 'Generate comprehensive, state-specific HIPAA privacy and security policies for your clinic in minutes. Stay compliant and protect patient data with AI-powered templates.',
  alternates: {
    canonical: '/hipaa-policy-generator',
  },
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
    },
    {
      question: "How does AI ensure HIPAA documentation accuracy?",
      answer: "Our AI is specifically tuned with clinical compliance datasets and regulatory frameworks. It identifies key requirements like MFA, encryption, and access controls that are mandatory for HIPAA Security Rule compliance."
    },
    {
      question: "Are these policies valid for telehealth practices?",
      answer: "Yes. In fact, telehealth practices face higher security risks. Our generator includes specific clauses for virtual care security, remote data access, and platform-specific privacy controls."
    },
    {
      question: "Is there a free HIPAA policy template available?",
      answer: "Yes, we offer a free basic HIPAA policy template. For a comprehensive, state-specific policy tailored to your clinic's actual workflow, we recommend using our AI generator."
    }
  ];

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
    "name": "How to Generate HIPAA Policies",
    "description": "Generate audit-ready HIPAA privacy and security policies in 5 simple steps.",
    "step": [
      { "@type": "HowToStep", "name": "Select Clinic Type", "text": "Choose your healthcare niche." },
      { "@type": "HowToStep", "name": "Choose State", "text": "Select your state for local compliance." },
      { "@type": "HowToStep", "name": "Choose Policy Type", "text": "Specify HIPAA Privacy or Security." },
      { "@type": "HowToStep", "name": "Generate Draft", "text": "AI drafts your policy in 60 seconds." },
      { "@type": "HowToStep", "name": "Review & Export", "text": "Download your audit-ready PDF." }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://policyflow-ai.vercel.app" },
      { "@type": "ListItem", "position": 2, "name": "HIPAA Generator", "item": "https://policyflow-ai.vercel.app/hipaa-policy-generator" }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
            <Shield className="w-4 h-4" /> HIPAA Compliance Simplified
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            The #1 HIPAA Policy Generator for Modern Clinics.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Generate state-specific, audit-ready HIPAA Privacy and Security policies in under 60 seconds. Trusted by telehealth providers, med spas, and wellness clinics across the USA.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#generator" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
              Generate 1 Free Policy <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/free-hipaa-policy-template" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              View Free Template
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" /> No credit card required for first policy
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Manual HIPAA Documentation Fails</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Most clinics rely on outdated templates that don't protect them during an OCR audit.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6"><Info className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Not State-Specific</h3>
              <p className="text-slate-600 leading-relaxed">Federal HIPAA is the floor, not the ceiling. States like Texas and California have stricter requirements that templates miss.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6"><Lock className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Security Rule Gaps</h3>
              <p className="text-slate-600 leading-relaxed">Most policies forget to document modern technical safeguards like MFA, endpoint encryption, and cloud backup protocols.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6"><FileCheck className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Administrative Burden</h3>
              <p className="text-slate-600 leading-relaxed">Spending 20+ hours writing policies manually is a waste of clinical resources. AI does it better in 60 seconds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-12 px-6 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Need more than just HIPAA?</h2>
            <p className="text-blue-100">Explore our specialized generators for every clinical workflow.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/telehealth-policy-generator" className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">Telehealth SOPs</Link>
            <Link href="/medspa-sop-generator" className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">Med Spa Protocols</Link>
            <Link href="/clinic-policy-generator" className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">General Clinic SOPs</Link>
          </div>
        </div>
      </section>

      {/* Sample Preview */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">Audit-Ready Documentation, Instantly.</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our HIPAA generator uses the latest OCR audit protocols to ensure your clinic is protected. From ePHI access controls to physical safeguard standards.
              </p>
              <ul className="space-y-4 mb-10">
                {["Privacy Rule Compliance", "Security Safeguards", "Breach Notification SOPs", "Mobile Device Policies"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl transform rotate-2">
                <div className="flex gap-1.5 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-xs md:text-sm text-slate-300 space-y-4">
                  <p className="text-blue-400 font-bold">SECTION 4: TECHNICAL SAFEGUARDS</p>
                  <p>"Electronic Protected Health Information (ePHI) shall be encrypted at rest and in transit using industry-standard AES-256 protocols. Access to ePHI shall be restricted to authorized workforce members via unique user identifiers..."</p>
                  <p className="text-slate-500">// Generated for California Telehealth Clinic</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Audit Score</p>
                <p className="text-2xl font-black text-blue-600">100%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Start Your HIPAA Documentation</h2>
            <p className="text-slate-600 italic">“Save hours of administrative work. Generate your first policy for free.”</p>
          </div>
          <PolicyGenerator />
        </div>
      </section>

      <FAQ items={faqs} title="HIPAA Compliance FAQ" />

      <Pricing />

      <section className="py-12 text-center bg-white border-t border-slate-100">
        <Link href="/" className="text-blue-600 font-bold hover:underline">← Back to PolicyFlow AI Home</Link>
      </section>

      <Footer />
    </main>
  );
}
