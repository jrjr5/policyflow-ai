'use client';

import { CheckCircle, ShieldCheck } from 'lucide-react';
import RecentActivity from '@/components/RecentActivity';

const MONTHLY_LINK = "https://buy.stripe.com/test_5kQ9AMaPw3toajS4M80VO00";
const PACK_LINK = "https://buy.stripe.com/test_14AfZa7Dk0hc77GemI0VO01";

export default function Pricing() {
  return (
    <>
    <section id="pricing" className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Pricing Plans</h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Save hours of clinic administrative work every month.</h3>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Choose the plan that fits your clinical documentation needs. Compare against hiring expensive consultants or spending dozens of hours manually writing policies.
        </p>
        
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-bold mb-16 shadow-sm border border-blue-100">
          <ShieldCheck className="w-5 h-5" /> Trusted by 500+ Healthcare Clinics Nationwide
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* 10 Policy Pack */}
          <div className="bg-white border border-slate-200 rounded-[32px] p-10 text-left hover:border-slate-300 transition-all shadow-sm flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">10 Policy Pack</h3>
              <p className="text-slate-500 font-medium">Best for smaller clinics</p>
            </div>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-black text-slate-900">$79</span>
              <span className="text-slate-500 font-bold uppercase text-sm tracking-widest">one-time</span>
            </div>
            <ul className="space-y-4 mb-10 text-slate-700 flex-grow">
              {[
                "Generate up to 10 policies",
                "Ideal for occasional use",
                "PDF export included",
                "No recurring subscription",
                "Access valid until all used"
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="font-medium">{f}</span>
                </li>
              ))}
            </ul>
            <a href={PACK_LINK} target="_blank" rel="noopener noreferrer" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-xl text-center block hover:bg-black transition-all">
              Buy 10 Policies
            </a>
          </div>

          {/* Professional Subscription */}
          <div className="bg-white border-4 border-blue-600 rounded-[32px] p-10 text-left shadow-2xl relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-8 py-2 text-sm font-black uppercase transform translate-x-12 translate-y-6 rotate-45">Popular</div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">PolicyFlow AI Pro</h3>
              <p className="text-blue-600 font-bold uppercase text-xs tracking-widest">Recommended for growth</p>
            </div>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-black text-slate-900">$149</span>
              <span className="text-slate-500 font-bold uppercase text-sm tracking-widest">/month</span>
            </div>
            <ul className="space-y-4 mb-10 text-slate-700 flex-grow">
              {[
                "Unlimited AI Generations",
                "State-Specific Compliance",
                "Full PDF Export Suite",
                "Audit-Ready Checklists",
                "Priority Clinical Support"
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-bold text-slate-900">{f}</span>
                </li>
              ))}
            </ul>
            <a href={MONTHLY_LINK} target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl text-center block hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
    <RecentActivity />
    </>
  );
}
