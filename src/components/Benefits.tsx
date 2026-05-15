import React from 'react';
import { Clock, Layout, Zap, CheckCircle2, FileText } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: "Reduce Administrative Workload",
      desc: "Stop manually drafting healthcare policies from scratch. Our AI handles the bulk of the drafting so you can focus on patient care.",
      icon: Clock
    },
    {
      title: "Create Documentation Faster",
      desc: "Generate professional, state-specific SOPs and clinical protocols in under 60 seconds using our high-performance AI engine.",
      icon: Zap
    },
    {
      title: "Standardize Clinic Operations",
      desc: "Ensure every practitioner and staff member follows the exact same clinical protocols across your entire organization.",
      icon: Layout
    },
    {
      title: "Generate Professional SOP Drafts",
      desc: "Our engine uses clinical best practices to produce high-quality, audit-ready documentation tailored to your specific niche.",
      icon: FileText
    },
    {
      title: "Improve Workflow Consistency",
      desc: "Clear, written protocols reduce operational errors and streamline patient intake and clinical encounters.",
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Why Clinics Use PolicyFlow AI</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Standardize Your Clinic in Minutes, Not Months.</h3>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
            PolicyFlow AI is designed to help healthcare business owners eliminate the friction of manual documentation and compliance drafting.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{benefit.title}</h4>
              <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
