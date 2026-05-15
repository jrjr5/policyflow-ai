import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import PolicyGenerator from '@/components/PolicyGenerator';
import FAQ from '@/components/FAQ';
import EmailCapture from '@/components/EmailCapture';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Clock, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';

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
  category
}: UseCaseLayoutProps) {
  const jsonLd = {
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

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PolicyFlow AI",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
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
        "name": category || "Compliance",
        "item": `https://policyflow-ai.vercel.app/${category?.toLowerCase() || 'policies'}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": `https://policyflow-ai.vercel.app/${category?.toLowerCase() || 'policies'}/${title.toLowerCase().replace(/ /g, '-')}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">{subheadline}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="#generator" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-2">
                Generate Free Policy <ArrowRight className="w-6 h-6" />
             </a>
             <Link href="/#samples" className="bg-white text-slate-700 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all">
                View Samples
             </Link>
          </div>
          <div className="mt-10 flex items-center justify-center gap-6 text-sm font-bold text-slate-400">
             <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Audit-Ready</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> State-Specific</div>
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

      <Pricing />

      <section className="py-24 px-6 bg-white border-t border-slate-100">
         <div className="max-w-6xl mx-auto">
            <h4 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-12">Related Clinical Documentation</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               <div className="space-y-4">
                  <h5 className="font-bold text-slate-900">Popular SOPs</h5>
                  <ul className="space-y-2 text-sm text-slate-500">
                     <li><Link href="/policies/hipaa-privacy-policy" className="hover:text-blue-600 transition-colors">HIPAA Privacy Policy</Link></li>
                     <li><Link href="/policies/telehealth-consent-policy" className="hover:text-blue-600 transition-colors">Telehealth Consent</Link></li>
                     <li><Link href="/policies/medication-refill-policy" className="hover:text-blue-600 transition-colors">Medication Refills</Link></li>
                     <li><Link href="/policies/osha-clinic-policy" className="hover:text-blue-600 transition-colors">OSHA Compliance</Link></li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h5 className="font-bold text-slate-900">Niche Engines</h5>
                  <ul className="space-y-2 text-sm text-slate-500">
                     <li><Link href="/specialties/med-spas" className="hover:text-blue-600 transition-colors">Med Spa SOPs</Link></li>
                     <li><Link href="/specialties/weight-loss-clinics" className="hover:text-blue-600 transition-colors">Weight Loss SOPs</Link></li>
                     <li><Link href="/specialties/iv-therapy-clinics" className="hover:text-blue-600 transition-colors">IV Therapy Protocols</Link></li>
                     <li><Link href="/specialties/psychiatry-clinics" className="hover:text-blue-600 transition-colors">Mental Health SOPs</Link></li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h5 className="font-bold text-slate-900">Free Templates</h5>
                  <ul className="space-y-2 text-sm text-slate-500">
                     <li><Link href="/free-hipaa-policy-template" className="hover:text-blue-600 transition-colors">HIPAA Template</Link></li>
                     <li><Link href="/free-telehealth-sop-template" className="hover:text-blue-600 transition-colors">Telehealth SOP</Link></li>
                     <li><Link href="/free-clinic-compliance-checklist" className="hover:text-blue-600 transition-colors">Compliance Checklist</Link></li>
                     <li><Link href="/launch" className="hover:text-blue-600 transition-colors">Launch Resource</Link></li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h5 className="font-bold text-slate-900">State Directory</h5>
                  <ul className="space-y-2 text-sm text-slate-500">
                     <li><Link href="/states" className="hover:text-blue-600 transition-colors">All 50 States</Link></li>
                     <li><Link href="/states/texas-telehealth-policies" className="hover:text-blue-600 transition-colors">Texas Compliance</Link></li>
                     <li><Link href="/states/california-medspa-sop-generator" className="hover:text-blue-600 transition-colors">California Compliance</Link></li>
                     <li><Link href="/states/florida-clinic-compliance" className="hover:text-blue-600 transition-colors">Florida Compliance</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
