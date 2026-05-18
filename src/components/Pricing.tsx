'use client';

import { CheckCircle, ShieldCheck, Zap, Star, Shield, Info } from 'lucide-react';
import RecentActivity from '@/components/RecentActivity';
import Link from 'next/link';

const UNLIMITED_LINK = "https://buy.stripe.com/test_5kQ9AMaPw3toajS4M80VO00";
const STARTER_LINK = "https://buy.stripe.com/00w8wIg9Ogf3eGWduRe3e02";

export default function Pricing() {
  const tiers = [
    {
      name: "Free Policy Preview",
      price: "$0",
      period: "forever",
      desc: "Experience the AI clinical engine",
      cta: "Generate Free Preview",
      href: "/#generator",
      features: [
        "1 Free policy generation",
        "Clinical grade preview",
        "Professional formatting",
        "Standard healthcare templates",
        "No editable export",
        "No PDF download"
      ],
      highlight: false
    },
    {
      name: "Starter Pack",
      price: "$39",
      period: "one-time",
      desc: "Perfect for new clinics",
      cta: "Get 10 Policies",
      href: STARTER_LINK,
      features: [
        "10 Policy generations",
        "Full PDF exports",
        "Editable outputs",
        "All clinic types included",
        "State-specific logic",
        "Professional clinical layout"
      ],
      highlight: true,
      badge: "Most Popular"
    },
    {
      name: "Unlimited Package",
      price: "$149",
      period: "per month",
      desc: "For growing businesses",
      cta: "Start Unlimited Access",
      href: UNLIMITED_LINK,
      features: [
        "Unlimited policy generation",
        "Unlimited PDF exports",
        "Priority clinical drafting",
        "Multi-location team use",
        "Employee handbooks included",
        "Premium SOP bundles"
      ],
      highlight: false
    }
  ];

  return (
    <>
    <section id="pricing" className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Transparent Pricing</h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight text-balance">Professional Documentation for Every Clinical Stage.</h3>
        <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Standardize your clinic operations without the $5,000 consultant fee. AI-powered clinical documentation available instantly.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-bold shadow-sm border border-blue-100">
            <ShieldCheck className="w-5 h-5" /> Built for healthcare businesses
          </div>
          <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-700 px-6 py-3 rounded-full text-sm font-bold shadow-sm border border-slate-100">
            <Zap className="w-5 h-5 text-blue-600" /> AI-powered clinical engine
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`relative bg-white rounded-[40px] p-8 lg:p-10 text-left transition-all flex flex-col h-full border ${
                tier.highlight 
                ? 'border-4 border-blue-600 shadow-2xl scale-105 z-10' 
                : 'border-slate-100 shadow-xl hover:border-blue-200'
              }`}
            >
              {tier.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  {tier.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h4>
                <p className="text-slate-500 text-sm font-medium">{tier.desc}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-slate-900">{tier.price}</span>
                <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">{tier.period}</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${tier.highlight ? 'text-blue-600' : 'text-slate-300'}`} />
                    <span className={`text-sm ${feature.includes("No") ? 'text-slate-400 line-through' : 'text-slate-700 font-medium'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link 
                href={tier.href} 
                className={`w-full py-5 rounded-2xl font-black text-xl text-center transition-all ${
                  tier.highlight 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200' 
                  : 'bg-slate-900 text-white hover:bg-black'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Feature Comparison Mini */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 mb-24">
           <h4 className="text-2xl font-bold text-slate-900 mb-10">Why clinics are switching from consultants to PolicyFlow AI.</h4>
           <div className="grid md:grid-cols-2 gap-12 text-left">
              <div>
                 <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm"><Info className="w-6 h-6" /></div>
                 <h5 className="font-bold text-slate-900 mb-3 text-lg">Consultants vs. AI</h5>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   Hiring a consultant for a single SOP can cost $1,000+. Our AI generates the same clinical quality for less than the cost of a clinic lunch.
                 </p>
              </div>
              <div>
                 <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm"><Star className="w-6 h-6" /></div>
                 <h5 className="font-bold text-slate-900 mb-3 text-lg">Clinical Excellence</h5>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   Our engine is trained on massive datasets of healthcare regulations, ensuring your documentation is audit-ready from day one.
                 </p>
              </div>
           </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h4 className="text-3xl font-black text-slate-900 mb-12 tracking-tight">Pricing FAQ</h4>
          <div className="space-y-6 text-left">
             {[
               { q: "Is the Starter Pack really a one-time payment?", a: "Yes. You pay once for 10 policy generations. There are no recurring fees and no credit card is kept on file unless you choose to upgrade to Unlimited." },
               { q: "Can I upgrade from Starter to Unlimited later?", a: "Absolutely. Most clinics start with a 10-pack to handle their initial launch and then move to Unlimited as they scale their operations." },
               { q: "What happens if I need more than 10 policies?", a: "You can either buy another Starter Pack or switch to the Unlimited Package for the best value." },
               { q: "Are the policies valid for audits?", a: "Yes. Our policies are built following OCR and state medical board standards. However, we always recommend a final review by your medical director or legal counsel." }
             ].map((faq, i) => (
               <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <p className="font-black text-slate-900 mb-3 text-lg">{faq.q}</p>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
    <RecentActivity />
    </>
  );
}
