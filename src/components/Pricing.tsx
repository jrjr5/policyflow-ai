'use client';

import { CheckCircle } from 'lucide-react';

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_5kQ9AMaPw3toajS4M80VO00";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 text-center">
      <h2 className="text-4xl font-bold text-slate-900 mb-16">Simple, transparent pricing.</h2>
      <div className="max-w-md mx-auto bg-white border-2 border-blue-600 rounded-3xl p-8 shadow-xl relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-bold uppercase transform translate-x-12 translate-y-6 rotate-45">Popular</div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">PolicyFlow AI Professional</h3>
        <div className="flex items-baseline gap-1 mb-8"><span className="text-5xl font-extrabold text-slate-900">$149</span><span className="text-slate-500">/month</span></div>
        <ul className="space-y-4 mb-10 text-slate-700">
          {["Unlimited AI Policy Generation", "State-Specific Logic", "Download as PDF", "Audit Checklists"].map((f, i) => (
            <li key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-600" />{f}</li>
          ))}
        </ul>
        <a href={STRIPE_PAYMENT_LINK} target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg text-center block hover:bg-blue-700 transition-all">Get Started Now</a>
      </div>
    </section>
  );
}
