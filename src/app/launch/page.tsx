import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import { Rocket, Zap, Shield, Clock, MousePointer2, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PolicyFlow AI Launch | The Future of Clinic Compliance',
  description: 'Welcome to the official launch of PolicyFlow AI. The first AI-powered policy generator built specifically for telehealth, med spas, and wellness clinics.',
  alternates: {
    canonical: '/launch',
  },
};

export default function LaunchPage() {
  const benefits = [
    {
      icon: Clock,
      title: "Save 20+ Hours",
      desc: "Stop manually drafting policies or wrestling with generic templates. Generate professional SOPs in under a minute."
    },
    {
      icon: Shield,
      title: "Audit Protection",
      desc: "Our engine is trained on clinical standards and state-specific regulations to ensure your documentation is robust."
    },
    {
      icon: Zap,
      title: "Instant PDF Export",
      desc: "Download high-quality, branded clinical PDFs ready for your operations manual or staff signature."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 px-6 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 translate-x-32 hidden md:block"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-black mb-6 uppercase tracking-widest animate-pulse">
                <Rocket className="w-4 h-4" /> Now Live on Product Hunt
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-none">
                Compliance <span className="text-blue-600">Simplified</span> for Modern Clinics.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                The first AI engine built to generate audit-ready policies and SOPs for telehealth, med spas, and wellness practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#generator" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center gap-3">
                  Generate Free Policy <MousePointer2 className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md">
              <div className="bg-slate-900 p-8 rounded-[40px] shadow-3xl border-8 border-slate-800 transform rotate-3">
                 <div className="h-64 flex flex-col justify-center">
                    <p className="text-blue-400 font-mono text-sm mb-4">system_status: ready</p>
                    <p className="text-white font-bold text-2xl mb-2">Policy Generator</p>
                    <div className="space-y-3">
                       <div className="h-4 bg-slate-800 rounded-full w-full"></div>
                       <div className="h-4 bg-slate-800 rounded-full w-3/4"></div>
                       <div className="h-4 bg-slate-700 rounded-full w-5/6"></div>
                    </div>
                    <div className="mt-8 bg-blue-600 h-12 rounded-2xl w-full flex items-center justify-center text-white font-bold">
                       Generating SOP...
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">Built specifically for niche clinical workflows.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Telehealth", "Med Spas", "IV Hydration", "Weight Loss"].map((type, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold">
                  {type[0]}
                </div>
                <p className="font-bold text-slate-900">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((b, i) => (
              <div key={i} className="text-left">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-8">
                  <b.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{b.title}</h3>
                <p className="text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 italic text-blue-400">“The amount of work this saves clinical directors is immense.”</h2>
          <p className="text-slate-400 text-lg mb-12">Stop wasting hours on administrative documentation. Start focusing on patient care.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-slate-800 px-6 py-3 rounded-full border border-slate-700">
               <CheckCircle2 className="w-5 h-5 text-green-500" />
               <span className="font-bold">500+ Policies Generated</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800 px-6 py-3 rounded-full border border-slate-700">
               <CheckCircle2 className="w-5 h-5 text-green-500" />
               <span className="font-bold">50 States Supported</span>
            </div>
          </div>
        </div>
      </section>

      <Pricing />

      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to professionalize your practice?</h2>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/#generator" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all shadow-2xl flex items-center justify-center gap-3">
                 Generate Now <ArrowRight className="w-6 h-6" />
              </Link>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
