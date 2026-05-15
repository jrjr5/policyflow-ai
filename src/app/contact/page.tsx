import { Activity, ArrowLeft, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-12 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-slate-100">
          <div className="flex items-center gap-2 mb-8">
            <Activity className="text-blue-600 w-8 h-8" />
            <h1 className="text-3xl font-bold text-slate-900">Contact PolicyFlow AI</h1>
          </div>
          
          <div className="space-y-8 text-slate-600 leading-relaxed text-lg">
            <p className="flex items-start gap-4">
              <MessageSquare className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
              <span>For questions, support, or partnership inquiries, please contact us.</span>
            </p>
            
            <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 group transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">Email Us</p>
                  <a href="mailto:jess.rroberson@gmail.com" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    jess.rroberson@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-slate-400">
              We typically respond to all inquiries within 24-48 business hours.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
