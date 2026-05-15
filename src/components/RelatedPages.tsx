import Link from 'next/link';
import { STATES, INDUSTRIES, POLICY_TYPES, slugify } from '@/lib/p-seo';

interface RelatedPagesProps {
  currentState?: string;
  currentIndustry?: string;
  currentPolicy?: string;
}

export default function RelatedPages({ currentState, currentIndustry, currentPolicy }: RelatedPagesProps) {
  // Select 8 random states, 5 industries, and 5 policy types to link to
  const randomStates = [...STATES].sort(() => 0.5 - Math.random()).slice(0, 8);
  const randomIndustries = [...INDUSTRIES].sort(() => 0.5 - Math.random()).slice(0, 5);
  const randomPolicies = [...POLICY_TYPES].sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-black text-slate-900 mb-12">Related Clinical Resources</h3>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* State Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">By State</h4>
            <ul className="space-y-3">
              {randomStates.map(state => (
                <li key={state}>
                  <Link 
                    href={`/${slugify(state)}-${currentIndustry || 'clinic'}-policies`}
                    className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                    {state} {currentIndustry || 'Clinic'} Policies
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">By Specialty</h4>
            <ul className="space-y-3">
              {randomIndustries.map(ind => (
                <li key={ind.slug}>
                  <Link 
                    href={`/${slugify(currentState || 'Texas')}-${ind.slug}-policies`}
                    className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                    {currentState || 'Texas'} {ind.name} SOPs
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Popular Templates</h4>
            <ul className="space-y-3">
              {randomPolicies.map(pol => (
                <li key={pol.slug}>
                  <Link 
                    href={`/${slugify(currentState || 'Florida')}-${pol.slug}-template`}
                    className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                    {pol.name} {currentState || 'Florida'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
