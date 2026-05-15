import React from 'react';
import { ShieldCheck, Zap, Clock, TrendingUp, Layout, FileText, CheckCircle2 } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      title: "Healthcare-Focused Workflows",
      desc: "Our engine is specifically trained on clinical operations and healthcare-specific logic, not generic business templates.",
      icon: Layout
    },
    {
      title: "SOP Generation",
      desc: "Instantly generate professional Standard Operating Procedures (SOPs) for patient intake, clinical care, and billing.",
      icon: FileText
    },
    {
      title: "HIPAA-Oriented Documentation",
      desc: "Every policy is built with HIPAA privacy and security standards in mind, ensuring your clinic stays compliant.",
      icon: ShieldCheck
    },
    {
      title: "Operational Consistency",
      desc: "Standardize your practice across multiple locations or providers with a unified set of clinical documentation.",
      icon: CheckCircle2
    },
    {
      title: "Massive Time Savings",
      desc: "Save 20+ hours of administrative work by generating professional drafts in under 60 seconds.",
      icon: Clock
    },
    {
      title: "Clinic Scalability",
      desc: "Documented processes allow you to onboard new staff faster and scale your healthcare business with confidence.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Why PolicyFlow AI</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Built specifically for healthcare operations.</h3>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We help healthcare businesses standardize workflows faster with professional clinic documentation powered by AI.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <div key={i} className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group">
              <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                <item.icon className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
