'use client';

import { useState, useEffect } from 'react';
import { Activity, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';

interface ActivityItem {
  id: number;
  state: string;
  clinicType: string;
  policyType: string;
  timeAgo: string;
}

const ACTIVITIES: ActivityItem[] = [
  { id: 1, state: 'Texas', clinicType: 'Telehealth', policyType: 'Telehealth Consent SOP', timeAgo: '2 minutes ago' },
  { id: 2, state: 'California', clinicType: 'Med Spa', policyType: 'Med Spa Intake Policy', timeAgo: '5 minutes ago' },
  { id: 3, state: 'Florida', clinicType: 'Wellness Clinic', policyType: 'HIPAA Privacy Policy', timeAgo: '12 minutes ago' },
  { id: 4, state: 'Wisconsin', clinicType: 'Primary Care', policyType: 'Employee Handbook', timeAgo: '18 minutes ago' },
  { id: 5, state: 'Arizona', clinicType: 'Weight Loss Clinic', policyType: 'Weight Loss Clinic SOP', timeAgo: '24 minutes ago' },
  { id: 6, state: 'New York', clinicType: 'Mental Health', policyType: 'Patient Communication Workflow', timeAgo: '31 minutes ago' },
  { id: 7, state: 'Illinois', clinicType: 'Disabled Clinic', policyType: 'No-Show Policy', timeAgo: '42 minutes ago' },
  { id: 8, state: 'Georgia', clinicType: 'Infusion Clinic', policyType: 'IV Therapy SOP', timeAgo: '54 minutes ago' },
  { id: 9, state: 'Washington', clinicType: 'Multi-Specialty', policyType: 'Clinic Documentation Policy', timeAgo: '1 hour ago' },
  { id: 10, state: 'Nevada', clinicType: 'Med Spa', policyType: 'Med Spa Sanitation SOP', timeAgo: '1 hour ago' },
];

export default function RecentActivity() {
  const [items, setItems] = useState<ActivityItem[]>([]);

  useEffect(() => {
    // Simulate dynamic updates by shuffling slightly or just loading
    setItems([...ACTIVITIES].sort(() => Math.random() - 0.5).slice(0, 8));
  }, []);

  return (
    <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-black rounded-full mb-6 uppercase tracking-widest">
            <Activity className="w-4 h-4" /> Live Activity
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Recently Generated Policies</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Healthcare businesses across the United States are generating operational policies, SOPs, and compliance workflows using PolicyFlow AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {item.state}
                </span>
                <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold">
                  <Clock className="w-3 h-3" /> {item.timeAgo}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                {item.policyType}
              </h3>
              
              <p className="text-slate-500 text-xs mb-6 flex-grow flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-green-500" /> {item.clinicType}
              </p>

              <div className="pt-4 border-t border-slate-50 space-y-2">
                <Link 
                  href="/#generator" 
                  className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all"
                >
                  Generate Similar
                </Link>
                <Link 
                  href="/#generator" 
                  className="w-full py-2.5 bg-white text-slate-600 border border-slate-200 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
                >
                  Create Your Own
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <Link 
             href="/#generator" 
             className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200"
           >
             Start Your Documentation Pack <ArrowRight className="w-5 h-5" />
           </Link>
        </div>
      </div>
    </section>
  );
}
