import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import PolicyGenerator from '@/components/PolicyGenerator';
import FAQ from '@/components/FAQ';
import EmailCapture from '@/components/EmailCapture';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Download, FileText, Share2 } from 'lucide-react';

import WhyUs from '@/components/WhyUs';
import WhoItsFor from '@/components/WhoItsFor';
import RelatedPages from '@/components/RelatedPages';

interface ExamplePolicyLayoutProps {
  title: string;
  subtitle: string;
  category: string;
  lastUpdated: string;
  children: ReactNode;
  faqs: { question: string; answer: string }[];
  relatedLinks: { title: string; href: string }[];
}

export default function ExamplePolicyLayout({
  title,
  subtitle,
  category,
  lastUpdated,
  children,
  faqs,
  relatedLinks
}: ExamplePolicyLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="bg-white border-b border-slate-200 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4 uppercase tracking-widest">{category}</span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">{title}</h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">{subtitle} Professional operational templates built for healthcare businesses.</p>
            </div>
            <div className="flex gap-3 pb-2">
               <button className="p-3 rounded-xl border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all"><Share2 className="w-5 h-5" /></button>
               <button className="p-3 rounded-xl border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all"><Download className="w-5 h-5" /></button>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
             <div className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> 8 min read</div>
             <div className="w-1 h-1 rounded-full bg-slate-200"></div>
             <div>Last updated: {lastUpdated}</div>
          </div>
        </div>
      </div>

      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <article className="flex-1 max-w-3xl order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-slate-100 prose prose-slate max-w-none">
               <div className="font-serif text-slate-800 leading-relaxed space-y-8">
                  {children}
               </div>
            </div>
            
            <div className="mt-16">
               <EmailCapture />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-8 order-1 lg:order-2">
            <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-200 sticky top-28">
               <FileText className="w-10 h-10 mb-6 opacity-80" />
               <h3 className="text-2xl font-bold mb-4">Generate your own custom policy.</h3>
               <p className="text-blue-100 mb-8 leading-relaxed">Get a professional, audit-ready version of this document tailored to your specific clinic in under 60 seconds.</p>
               <Link href="/#generator" className="block w-full bg-white text-blue-600 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-all shadow-lg">
                  Start Generating Free
               </Link>
               <p className="mt-4 text-xs text-center text-blue-200 italic">No credit card required for 1st preview.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200">
               <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Related Resources</h4>
               <ul className="space-y-4">
                  {relatedLinks.map((link, i) => (
                    <li key={i}>
                       <Link href={link.href} className="text-slate-600 hover:text-blue-600 font-medium flex items-center gap-2 group transition-all">
                          <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></span>
                          {link.title}
                       </Link>
                    </li>
                  ))}
               </ul>
            </div>
          </aside>
        </div>
      </div>

      <section id="generator" className="py-24 px-6 bg-slate-900">
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-white mb-4">Ready to automate your clinic documentation?</h2>
               <p className="text-slate-400">Join 500+ healthcare clinics using AI to stay compliant.</p>
            </div>
            <PolicyGenerator />
         </div>
      </section>

      <FAQ items={faqs} title="Frequently Asked Questions" />

      <WhyUs />

      <WhoItsFor />

      <RelatedPages />
      <RelatedPages />
      <RelatedPages />

      <Pricing />

      <Footer />
    </main>
  );
}
