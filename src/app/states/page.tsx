import { Metadata } from 'next';
import { US_STATES, NICHES, slugify } from '@/lib/states-data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'State Compliance Directory | PolicyFlow AI',
  description: 'Select your state to find customized clinical SOPs and healthcare compliance documentation for your clinic.',
  alternates: { canonical: '/states' },
};

export default function StatesDirectoryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Compliance by State</h1>
          <p className="text-xl text-slate-600 mb-12">Select your location to access state-specific clinical protocols and SOP generators.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {US_STATES.map((state) => (
              <div key={state} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 text-blue-600 font-bold mb-6">
                  <MapPin className="w-5 h-5" />
                  {state}
                </div>
                <div className="space-y-3">
                  {NICHES.map((niche) => (
                    <Link 
                      key={niche.id}
                      href={`/${slugify(state)}-${niche.slugSuffix}`}
                      className="block text-sm text-slate-500 hover:text-blue-600 transition-colors"
                    >
                      {niche.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
