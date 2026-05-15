import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Shield, Zap, Layout } from 'lucide-react';

interface InternalLink {
  title: string;
  href: string;
  desc?: string;
  icon?: any;
}

interface RelatedPagesProps {
  title?: string;
  category?: 'generators' | 'templates' | 'examples' | 'pillars' | 'all';
  links?: InternalLink[];
}

const ALL_LINKS: Record<string, InternalLink[]> = {
  generators: [
    { title: "HIPAA Policy Generator", href: "/hipaa-policy-generator", desc: "Generate audit-ready HIPAA privacy and security policies.", icon: Shield },
    { title: "Telehealth SOP Generator", href: "/telehealth-policy-generator", desc: "Virtual care protocols and cross-state consent forms.", icon: Zap },
    { title: "Med Spa SOP Generator", href: "/medspa-sop-generator", desc: "Clinical oversight and aesthetic treatment protocols.", icon: Layout },
    { title: "Weight Loss SOP Generator", href: "/weight-loss-clinic-sop-generator", desc: "GLP-1 titration and clinical monitoring workflows.", icon: FileText },
    { title: "Clinic Policy Generator", href: "/clinic-policy-generator", desc: "General operational documentation for medical practices.", icon: Layout },
    { title: "Employee Handbook Generator", href: "/clinic-employee-handbook-generator", desc: "Professional staff policies for healthcare businesses.", icon: FileText }
  ],
  templates: [
    { title: "HIPAA Policy Template", href: "/free-hipaa-policy-template", desc: "Free structural template for HIPAA documentation." },
    { title: "Telehealth SOP Template", href: "/free-telehealth-sop-template", desc: "Downloadable telehealth visit protocol template." },
    { title: "Compliance Checklist", href: "/free-clinic-compliance-checklist", desc: "Complete healthcare compliance audit checklist." }
  ],
  examples: [
    { title: "Example HIPAA Policy", href: "/example-hipaa-policy", desc: "See a sample AI-generated HIPAA privacy policy." },
    { title: "Example Telehealth SOP", href: "/example-telehealth-sop", desc: "Preview a virtual care consent and triage workflow." },
    { title: "Example Med Spa Policy", href: "/example-medspa-consent-policy", desc: "Review an aesthetic clinic informed consent SOP." }
  ],
  pillars: [
    { title: "HIPAA Compliance Guide", href: "/hipaa-compliance", desc: "Complete guide to healthcare data protection." },
    { title: "Telehealth SOP Guide", href: "/telehealth-sops", desc: "Building your virtual care operations manual." },
    { title: "Med Spa Compliance", href: "/medspa-compliance", desc: "Regulatory standards for aesthetic medicine." },
    { title: "Clinic SOP Guide", href: "/healthcare-sop-templates", desc: "How to draft professional medical procedures." }
  ]
};

export default function RelatedPages({ title, category = 'all', links }: RelatedPagesProps) {
  let displayLinks = links;

  if (!displayLinks) {
    if (category === 'all') {
      displayLinks = [...ALL_LINKS.generators, ...ALL_LINKS.pillars, ...ALL_LINKS.examples].slice(0, 12);
    } else {
      displayLinks = ALL_LINKS[category] || [];
    }
  }

  return (
    <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-2xl font-bold text-slate-900 mb-10 tracking-tight">{title}</h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayLinks.map((link, i) => (
            <Link 
              key={i} 
              href={link.href}
              className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-500 hover:shadow-lg transition-all group flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{link.title}</h3>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
              {link.desc && (
                <p className="text-slate-500 text-sm leading-relaxed">{link.desc}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
