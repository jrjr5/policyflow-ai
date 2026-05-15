import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import RecentActivity from '@/components/RecentActivity';
import PolicyGenerator from '@/components/PolicyGenerator';
import FAQ from '@/components/FAQ';
import EmailCapture from '@/components/EmailCapture';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Clock, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';

import WhyUs from '@/components/WhyUs';
import WhoItsFor from '@/components/WhoItsFor';
import Benefits from '@/components/Benefits';
import RelatedPages from '@/components/RelatedPages';

interface UseCaseLayoutProps {
  title: string;
  headline: string;
  subheadline: string;
  painPoints: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  examples: { title: string; preview: string }[];
  faqs: { question: string; answer: string }[];
  industry: string;
  category?: string;
  state?: string;
  industryName?: string;
  policyName?: string;
}

export default function UseCaseLayout({
  title,
  headline,
  subheadline,
  painPoints,
  solutions,
  examples,
  faqs,
  industry,
  category,
  state,
  industryName,
  policyName
}: UseCaseLayoutProps) {
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://policyflow-ai.vercel.app"
      },
      category ? {
        "@type": "ListItem",
        "position": 2,
        "name": category,
        "item": `https://policyflow-ai.vercel.app/specialties/${category.toLowerCase().replace(/ /g, '-')}`
      } : null,
      {
        "@type": "ListItem",
        "position": category ? 3 : 2,
        "name": title,
        "item": `https://policyflow-ai.vercel.app/${title.toLowerCase().replace(/ /g, '-')}`
      }
    ].filter(Boolean)
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": subheadline,
    "image": "https://policyflow-ai.vercel.app/og-image.png",
    "author": {
      "@type": "Organization",
      "name": "PolicyFlow AI"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PolicyFlow AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://policyflow-ai.vercel.app/logo.png"
      }
    },
    "datePublished": "2026-05-15"
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Generate ${industry} Policies`,
    "description": `Step-by-step guide to generating professional healthcare policies for ${industry}.`,
    "step": [
      {
        "@type": "HowToStep",
        "name": "Select Clinic Type",
        "text": "Choose your specific healthcare facility type from the dropdown."
      },
      {
        "@type": "HowToStep",
        "name": "Select State",
        "text": "Select the U.S. state where your clinic operates to ensure state-specific compliance."
      },
      {
        "@type": "HowToStep",
        "name": "Choose Policy Type",
        "text": "Enter the name of the policy or SOP you need to generate."
      },
      {
        "@type": "HowToStep",
        "name": "Generate AI Draft",
        "text": "Click generate and wait 60 seconds for the AI to draft your clinical documentation."
      },
      {
        "@type": "HowToStep",
        "name": "Review and Customize",
        "text": "Review the generated draft and download it as a PDF or copy it to your clinic manual."
      }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Navbar />
      
      {/* Breadcrumbs */}
      <nav className="bg-white border-b border-slate-100 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <Link href="/" className="hover:text-blue-600 flex items-center gap-1">
            <Home className="w-3 h-3" /> Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          {category && (
            <>
              <span className="text-slate-300">{category}</span>
              <ChevronRight className="w-3 h-3" />
            </>
          )}
          <span className="text-blue-600">{title}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-black rounded-full mb-6 uppercase tracking-widest">{industry} Compliance</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-none">{headline}</h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            {subheadline} Operational documentation built for modern healthcare practices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="#generator" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-2">
                Generate 1 Free Policy <ArrowRight className="w-6 h-6" />
             </a>
             <Link href="/#samples" className="bg-white text-slate-700 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all">
                View Sample Policies
             </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-slate-400">
             <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Built for Healthcare Businesses</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Professional Operational Templates</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Audit-Ready Drafts</div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 px-6 bg-slate-50">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-4xl font-bold text-slate-900 mb-4">The documentation struggle is real.</h2>
               <p className="text-slate-600 text-lg">Stop letting administrative overhead compromise your clinical focus.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {painPoints.map((p, i) => (
                 <div key={i} className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
                    <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8">
                       <Clock className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{p.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{p.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Solutions */}
      <section className="py-24 px-6 bg-white">
         <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">A faster, more consistent way to stay compliant.</h2>
                  <div className="space-y-8">
                     {solutions.map((s, i) => (
                       <div key={i} className="flex gap-6">
                          <div className="shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                             <ShieldCheck className="w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h4>
                             <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="bg-slate-900 rounded-[40px] p-12 shadow-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full"></div>
                  <div className="relative z-10">
                     <p className="text-blue-400 font-mono text-sm mb-6"># clinical_engine_active</p>
                     <h3 className="text-3xl font-bold text-white mb-8 leading-tight">Professional {industry} SOPs in under 60 seconds.</h3>
                     <div className="space-y-4 mb-10">
                        <div className="h-4 bg-slate-800 rounded-full w-full"></div>
                        <div className="h-4 bg-slate-800 rounded-full w-5/6"></div>
                        <div className="h-4 bg-slate-800 rounded-full w-4/6"></div>
                     </div>
                     <div className="bg-blue-600 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-blue-900/20">
                        Generating Audit-Ready Draft...
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Examples */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-black text-slate-900 mb-4">What our AI generates for {industry}.</h2>
               <p className="text-slate-600 text-lg">Professional, clinical-grade documentation tailored to your practice.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
               {examples.map((ex, i) => (
                 <div key={i} className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-xl relative overflow-hidden group hover:border-blue-300 transition-all">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                       <Zap className="w-12 h-12 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">{ex.title}</h3>
                    <div className="font-serif text-slate-500 italic leading-relaxed border-l-4 border-blue-100 pl-6 mb-8">
                       "{ex.preview}"
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest">
                       <CheckCircle2 className="w-4 h-4" /> Policy Template Preview
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <section className="py-24 px-6 bg-slate-50">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Need more than a template?</h2>
            <p className="text-slate-600 mb-10">Download our free clinical compliance starter pack and get professional SOP templates delivered to your inbox.</p>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl max-w-2xl mx-auto">
               <EmailCapture />
               <p className="mt-4 text-xs text-slate-400">Join 500+ clinic owners staying audit-ready.</p>
            </div>
         </div>
      </section>

      {/* Generator */}
      <section id="generator" className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Start Generating for {industry}</h2>
            <p className="text-slate-600">Select your clinic details and let the AI draft your first SOP.</p>
          </div>
          <PolicyGenerator />
        </div>
      </section>

      <FAQ items={faqs} title={`${industry} FAQ`} />

      <WhyUs />

      <WhoItsFor />

      <Benefits />

      <Pricing />

      <RelatedPages 
        currentState={state} 
        currentIndustry={industryName} 
        currentPolicy={policyName} 
      />

      <Footer />
    </main>
  );
}
