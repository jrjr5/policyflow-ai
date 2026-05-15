'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function EmailCapture() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white animate-in fade-in zoom-in duration-300">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Thank you!</h3>
        <p className="text-blue-100 text-lg">Your request has been received. We&apos;ll send your free resources shortly.</p>
      </div>
    );
  }

  return (
    <section className="bg-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden relative border border-slate-800">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get free clinic SOP templates & compliance resources.</h2>
        <p className="text-slate-400 text-lg mb-8">Join 500+ clinical directors receiving our weekly compliance updates and free operational templates.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input 
            required
            type="text" 
            placeholder="Name" 
            className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <input 
            required
            type="email" 
            placeholder="Email address" 
            className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button 
            disabled={status === 'loading'}
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
          >
            {status === 'loading' ? 'Processing...' : <>Get Free Resources <Send className="w-4 h-4" /></>}
          </button>
        </form>
        <p className="mt-4 text-xs text-slate-500">We respect your privacy. No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
