import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import PolicyGenerator from '@/components/PolicyGenerator';
import FAQ from '@/components/FAQ';
import RelatedPages from '@/components/RelatedPages';
import EmailCapture from '@/components/EmailCapture';
import { Sparkles, Activity, ShieldCheck, ArrowRight, ClipboardList, Thermometer, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Med Spa SOP Generator | Clinical Standards for Aesthetic Practices',
  description: 'Generate customized Standard Operating Procedures for your Med Spa. AI-powered clinical templates for Botox, fillers, IV hydration, and aesthetic compliance.',
  alternates: {
    canonical: '/medspa-sop-generator',
  },
  openGraph: {
    title: 'Med Spa SOP Generator | PolicyFlow AI',
    description: 'Custom Standard Operating Procedures for Med Spas. AI-powered clinical templates for Botox, fillers, and more.',
    url: 'https://policyflow-ai.vercel.app/medspa-sop-generator',
    type: 'website',
  },
};

import WhyUs from '@/components/WhyUs';
import WhoItsFor from '@/components/WhoItsFor';
import Benefits from '@/components/Benefits';

export default function MedSpaLandingPage() {
  const faqs = [
    {
      question: "Do Med Spas need medical director oversight policies?",
      answer: "Yes. In most states, Med Spas are considered medical practices and require a medical director. You must have written SOPs defining the medical director's responsibilities, supervision of mid-level practitioners, and protocol approval processes."
    },
    {
      question: "What should be included in a Botox/Filler SOP?",
      answer: "A comprehensive aesthetic SOP should cover patient selection criteria, reconstitution protocols, injection techniques, anatomical danger zones, storage requirements (cold chain), and adverse event management (like vascular occlusion)."
    },
    {
      question: "Are Good Faith Exams (GFEs) required for aesthetic treatments?",
      answer: "Most states require a GFE by a qualified provider (MD, DO, NP, or PA) before a nurse or aesthetician can perform a medical treatment like neurotoxin injections. Our generator helps draft SOPs for these exams."
    },
    {
      question: "How do I document complications in a Med Spa?",
      answer: "You should have a standardized adverse event reporting policy. This includes immediate clinical response, patient follow-up, medical director notification, and documentation in the patient's EMR."
    },
    {
      question: "What are the rules for IV hydration SOPs?",
      answer: "IV Hydration clinics require protocols for aseptic technique, ingredient compounding (if applicable), emergency management of fluid overload or vasovagal responses, and proper waste disposal."
    },
    {
      question: "How does this generator handle state-specific aesthetic rules?",
      answer: "Aesthetic regulations vary wildly (e.g., California vs. Florida). Our AI incorporates state-specific requirements for supervision, laser safety, and provider scope of practice."
    },
    {
      question: "What is the penalty for not having written aesthetic SOPs?",
      answer: "Lack of written protocols can lead to medical board investigation, nursing board sanctions, and insurance policy denials in the event of a malpractice claim."
    },
    {
      question: "Is there a free med spa SOP template available?",
      answer: "Yes, we offer a free basic aesthetic clinical protocol. For professional, state-specific SOPs tailored to your actual clinic operations, we recommend using our AI generator."
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
    "name": "How to Generate Med Spa SOPs",
    "description": "Create professional medical spa standard operating procedures in minutes.",
    "step": [
      { "@type": "HowToStep", "name": "Select Aesthetic Vertical", "text": "Choose Botox, Fillers, or Laser." },
      { "@type": "HowToStep", "name": "Choose Location", "text": "Select your state for medical director rules." },
      { "@type": "HowToStep", "name": "Select Policy", "text": "Pick the specific clinical SOP you need." },
      { "@type": "HowToStep", "name": "AI Draft", "text": "AI generates your aesthetic protocol." },
      { "@type": "HowToStep", "name": "Export", "text": "Download your branded clinical SOP." }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://policyflow-ai.vercel.app" },
      { "@type": "ListItem", "position": 2, "name": "Med Spa Generator", "item": "https://policyflow-ai.vercel.app/medspa-sop-generator" }
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
      
      <section className="py-20 px-6 bg-white border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Aesthetic Excellence
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Professional Med Spa SOPs Built Specifically for Healthcare Operations.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            From Botox administration to medical director oversight, Med Spas face unique regulatory scrutiny. PolicyFlow AI generates professional clinic documentation to standardize your workflows faster.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#generator" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
              Generate 1 Free SOP <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/example-medspa-consent-policy" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              View Sample Consent SOP
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" /> No signup required for first draft
          </p>
        </div>
      </section>

      {/* Internal Links Navigation */}
      <section className="py-8 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-widest">
           <Link href="/hipaa-policy-generator" className="hover:text-blue-400 transition-colors">HIPAA Generator</Link>
           <Link href="/telehealth-policy-generator" className="hover:text-blue-400 transition-colors">Telehealth SOPs</Link>
           <Link href="/weight-loss-clinic-compliance" className="hover:text-blue-400 transition-colors">Weight Loss SOPs</Link>
           <Link href="/clinic-policy-generator" className="hover:text-blue-400 transition-colors">General Clinic Policies</Link>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Safety Meets Aesthetics</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Operating a Med Spa requires rigorous adherence to medical standards. Our SOPs provide the documentation you need for compliance.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
              <ShieldCheck className="text-blue-600 w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Clinical Compliance</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Ensure your staff follows proper sanitation, storage, and injection protocols. Generate documentation that meets state medical board requirements for aesthetic clinics.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
              <Activity className="text-blue-600 w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Adverse Event Protocols</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Be prepared for clinical emergencies. Generate clear SOPs for managing vascular occlusions, allergic reactions, and other clinical complications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">Sample SOP: Neurotoxin Administration</h2>
            <div className="font-serif text-slate-300 text-lg leading-relaxed italic border-l-4 border-blue-500 pl-8 py-2">
              "The Practitioner must verify the reconstitution date and time of the botulinum toxin. All reconstituted product must be stored in a dedicated medical refrigerator between 2°C and 8°C. A Good Faith Examination (GFE) must be documented prior to the initial treatment and refreshed at intervals dictated by state board rules..."
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 text-center">
                <Thermometer className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-xs font-bold text-slate-400">Cold Chain</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 text-center">
                <ClipboardList className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-xs font-bold text-slate-400">Charting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <EmailCapture />
        </div>
      </section>

      <section id="generator" className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Start Your Med Spa SOP</h2>
            <p className="text-slate-600 italic">“Professionalize your aesthetic practice in seconds.”</p>
          </div>
          <PolicyGenerator />
        </div>
      </section>

      <FAQ items={faqs} title="Med Spa Compliance FAQ" />

      <WhyUs />

      <WhoItsFor />

      <Benefits />

      <RelatedPages title="Related Healthcare Policy Generators" category="generators" />
      <RelatedPages title="Related Clinic SOP Templates" category="templates" />
      <RelatedPages title="Explore More Healthcare Workflows" category="examples" />

      <Pricing />

      <section className="py-12 text-center bg-white border-t border-slate-100">
        <Link href="/" className="text-blue-600 font-bold hover:underline">← Back to PolicyFlow AI Home</Link>
      </section>

      <Footer />
    </main>
  );
}
