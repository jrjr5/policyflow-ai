'use client';

import { useState } from 'react';
import { Activity, ArrowLeft, Mail, MessageSquare, Building2, User, Send } from 'lucide-react';
import Link from 'next/link';

export default function ContactClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

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
          
          <p className="text-slate-600 leading-relaxed text-lg mb-10">
            For questions, support, or partnership inquiries, please contact us.
          </p>

          {isSubmitted ? (
            <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-200">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h2>
              <p className="text-slate-600 italic">
                Thank you — your message has been received. We&apos;ll follow up soon.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-blue-600 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-400" /> Full Name
                  </label>
                  <input 
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400" /> Email Address
                  </label>
                  <input 
                    required
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-400" /> Company or Clinic Name
                </label>
                <input 
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Medical Center LLC"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Reason for contacting</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Partnership Proposal</option>
                  <option>Billing Question</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                disabled={isLoading}
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          )}

          <p className="mt-10 text-sm text-slate-400 text-center">
            We typically respond to all inquiries within 24-48 business hours.
          </p>
        </div>
      </div>
    </main>
  );
}
