import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmailCapture from '@/components/EmailCapture';
import { Download, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface LeadMagnetProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  previewTitle: string;
  previewContent: string;
}

export default function LeadMagnetLayout({
  title,
  subtitle,
  description,
  benefits,
  previewTitle,
  previewContent
}: LeadMagnetProps) {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-black rounded-full mb-6 uppercase tracking-widest">Free Clinical Resource</span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">{title}</h1>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">{subtitle}</p>
          
          <div className="bg-slate-900 rounded-3xl p-10 md:p-16 shadow-3xl text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Download your free copy today.</h2>
                <ul className="space-y-4 mb-10">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <EmailCapture />
                <p className="mt-4 text-xs text-slate-500">By entering your email, you agree to receive clinical documentation tips and updates. Unsubscribe any time.</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                <FileText className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">{previewTitle}</h3>
                <div className="font-serif text-slate-400 text-sm italic leading-relaxed line-clamp-6">
                  "{previewContent}"
                </div>
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">PDF Template</span>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-1 bg-blue-600 rounded-full"></div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">About this resource</h2>
            <p className="text-slate-600 leading-relaxed mb-8">{description}</p>
            
            <div className="bg-blue-600 rounded-[32px] p-10 text-white shadow-2xl shadow-blue-200">
              <h3 className="text-2xl font-bold mb-4">Need more than a template?</h3>
              <p className="text-blue-100 mb-8">Generate custom, audit-ready policies tailored to your exact clinic type and state rules in seconds.</p>
              <Link href="/" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-black text-lg hover:bg-blue-50 transition-all">
                Try the AI Generator for Free <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
