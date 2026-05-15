import React from 'react';
import { 
  Video, 
  Sparkles, 
  HeartPulse, 
  Scale, 
  Brain, 
  Droplets, 
  Activity, 
  Stethoscope, 
  Rocket,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const WhoItsFor = () => {
  const niches = [
    { name: "Telehealth Clinics", icon: Video, href: "/telehealth-policy-generator" },
    { name: "Med Spas", icon: Sparkles, href: "/medspa-sop-generator" },
    { name: "Wellness Clinics", icon: HeartPulse, href: "/specialties/wellness-clinics" },
    { name: "Weight Loss Clinics", icon: Scale, href: "/weight-loss-clinic-sop-generator" },
    { name: "Psychiatry Practices", icon: Brain, href: "/specialties/psychiatry-clinics" },
    { name: "IV Therapy Clinics", icon: Droplets, href: "/specialties/iv-therapy-clinics" },
    { name: "Chiropractic Clinics", icon: Stethoscope, href: "/specialties/chiropractic-clinics" },
    { name: "Urgent Care Clinics", icon: Activity, href: "/specialties/urgent-care-clinics" },
    { name: "Healthcare Startups", icon: Rocket, href: "/launch" }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Who It's For</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Designed for modern healthcare practices.</h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Operational documentation built for specialized clinical environments and digital health leaders.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {niches.map((niche, i) => (
            <Link 
              key={i} 
              href={niche.href}
              className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <niche.icon className="w-6 h-6" />
                </div>
                <span className="text-lg font-bold text-slate-900">{niche.name}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
