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
    <section className="py-24 px-6 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Platform Benefits</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Streamline Your Clinical Excellence.</h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Standardize your healthcare operations faster with professional operational templates and AI-powered documentation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-6">
              <div className="shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <benefit.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
