import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import RecentActivity from '@/components/RecentActivity';
import PolicyGenerator from '@/components/PolicyGenerator';
import FAQ from '@/components/FAQ';
import EmailCapture from '@/components/EmailCapture';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Home, ChevronRight, BookOpen, FileText, ClipboardCheck, Users, Info } from 'lucide-react';
import Link from 'next/link';

import WhyUs from '@/components/WhyUs';
import WhoItsFor from '@/components/WhoItsFor';
import Benefits from '@/components/Benefits';
import RelatedPages from '@/components/RelatedPages';

interface PillarSection {
  id: string;
  title: string;
  content: string | ReactNode;
}

interface PillarLayoutProps {
  title: string;
  headline: string;
  subheadline: string;
  introduction: string;
  sections: PillarSection[];
  faqs: { question: string; answer: string }[];
  industry: string;
  relatedLinks?: { name: string; href: string }[];
}

export default function PillarLayout({
  title,
  headline,
  subheadline,
  introduction,
  sections,
  faqs,
  industry,
  relatedLinks
}: PillarLayoutProps) {
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
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guides",
        "item": "https://policyflow-ai.vercel.app/hipaa-compliance"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": `https://policyflow-ai.vercel.app/${title.toLowerCase().replace(/ /g, '-')}`
      }
    ]
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
    "name": `How to Generate ${industry} Documentation`,
    "description": `Master your clinic's documentation with these simple generation steps.`,
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enter Clinic Details",
        "text": "Select your industry vertical and location."
      },
      {
        "@type": "HowToStep",
        "name": "Identify Policy Needs",
        "text": "Choose from our list of clinical SOPs and policies."
      },
      {
        "@type": "HowToStep",
        "name": "Generate Draft",
        "text": "Our AI drafts the documentation based on latest clinical standards."
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
          <span className="text-slate-300">Guides</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-blue-600">{title}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-black rounded-full mb-6 uppercase tracking-widest">{industry} Authority Guide</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">{headline}</h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            {subheadline} Operational documentation built for modern healthcare practices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="#generator" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-2">
                Generate 1 Free Policy <ArrowRight className="w-6 h-6" />
             </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-bold text-slate-400">
             <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Built Specifically for Healthcare Operations</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Professional Workflow Templates</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> AI-Powered Drafting</div>
          </div>
        </div>
      </section>

      {/* Sticky Table of Contents and Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm sticky top-24">
              <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" /> Guide Chapters
              </h4>
              <nav className="space-y-1">
                {sections.map(s => (
                  <a 
                    key={s.id} 
                    href={`#${s.id}`} 
                    className="block py-3 px-4 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-blue-600 font-medium transition-all"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <EmailCapture />
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-[32px] text-white shadow-2xl">
               <Zap className="w-10 h-10 text-blue-400 mb-6" />
               <h4 className="text-xl font-bold mb-4">Documentation Engine</h4>
               <p className="text-slate-400 text-sm leading-relaxed mb-8">Stop manual drafting. Generate clinical grade {industry} documentation in under 60 seconds.</p>
               <Link href="/#generator" className="bg-blue-600 text-white py-4 rounded-xl font-bold block text-center hover:bg-blue-700 transition-all">
                  Start Generating
               </Link>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-8">
            <div className="prose prose-slate prose-lg max-w-none">
              <div className="text-xl text-slate-600 leading-relaxed mb-16 italic border-l-4 border-blue-200 pl-8 py-4 bg-white rounded-r-2xl">
                {introduction}
              </div>

              {sections.map(section => (
                <div key={section.id} id={section.id} className="mb-24 scroll-mt-32">
                  <h2 className="text-4xl font-black text-slate-900 mb-8 flex items-center gap-4">
                    <span className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl">
                      <FileText className="w-6 h-6" />
                    </span>
                    {section.title}
                  </h2>
                  <div className="text-slate-600 leading-relaxed space-y-6">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-12 bg-white rounded-[40px] border border-slate-200 shadow-xl text-center">
               <h3 className="text-3xl font-black text-slate-900 mb-6">Ready to professionalize your {industry} compliance?</h3>
               <p className="text-lg text-slate-600 mb-10">Join 500+ modern clinics using PolicyFlow AI to save 20+ hours every week on clinical documentation.</p>
               <PolicyGenerator />
            </div>
          </article>
        </div>
      </section>

      <FAQ items={faqs} title={`${industry} Authority FAQ`} />

      <WhyUs />

      <WhoItsFor />

      <Benefits />

      <RelatedPages title="Related Healthcare Policy Generators" category="generators" />
      <RelatedPages title="Related Clinic SOP Templates" category="templates" />
      <RelatedPages title="Popular Compliance Resources" category="pillars" />

      <Pricing />

      <Footer />
    </main>
  );
}
