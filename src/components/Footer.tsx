'use client';

import { Activity } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const links = {
    product: [
      { name: "HIPAA Generator", href: "/hipaa-policy-generator" },
      { name: "Telehealth SOPs", href: "/telehealth-policy-generator" },
      { name: "Med Spa Protocols", href: "/medspa-sop-generator" },
      { name: "Weight Loss SOPs", href: "/weight-loss-clinic-sop-generator" },
      { name: "Clinic Policies", href: "/clinic-policy-generator" },
    ],
    resources: [
      { name: "Example HIPAA Policy", href: "/example-hipaa-policy" },
      { name: "Example Telehealth SOP", href: "/example-telehealth-sop" },
      { name: "Example Med Spa Consent", href: "/example-medspa-consent-policy" },
      { name: "Free Compliance Checklist", href: "/free-clinic-compliance-checklist" },
      { name: "Launch Page", href: "/launch" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Contact", href: "/contact" },
    ]
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-20 px-6 mt-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="text-blue-500 w-8 h-8" />
              <span className="font-bold text-2xl text-white tracking-tight">PolicyFlow AI</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              The first AI-powered clinical documentation engine built for modern telehealth, wellness, and aesthetic practices.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-sm">
              {links.product.map((l, i) => (
                <li key={i}><Link href={l.href} className="hover:text-blue-400 transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm">
              {links.resources.map((l, i) => (
                <li key={i}><Link href={l.href} className="hover:text-blue-400 transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Legal & Support</h4>
            <ul className="space-y-4 text-sm">
              {links.legal.map((l, i) => (
                <li key={i}><Link href={l.href} className="hover:text-blue-400 transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium">
          <p>© 2026 PolicyFlow AI. All rights reserved.</p>
          <p className="text-slate-600">Built for clinical excellence and regulatory compliance.</p>
        </div>
      </div>
    </footer>
  );
}
