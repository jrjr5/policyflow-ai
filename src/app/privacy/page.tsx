import { Activity, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-12 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-slate-100">
          <div className="flex items-center gap-2 mb-8">
            <Activity className="text-blue-600 w-8 h-8" />
            <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
          </div>
          
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">Effective Date: May 15, 2026</p>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
              <p>PolicyFlow AI collects information you provide directly to us when you use our generator, including clinic type, state, and operational details. We also collect basic account information if you choose to upgrade.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. How We Use Your Data</h2>
              <p>We use the data provided in the generator solely to produce the requested policy drafts. Input data may be processed by third-party AI models (such as OpenAI) to generate content, but we do not sell your personal or business data to third parties.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Data Security</h2>
              <p>We implement industry-standard security measures to protect your information. However, users are responsible for ensuring that the documentation generated meets their local and federal compliance standards (e.g., HIPAA) before implementation.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please reach out via our contact form.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
