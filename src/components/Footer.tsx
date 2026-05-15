'use client';

import { Activity } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm">
        <div className="flex items-center gap-2">
          <Activity className="text-blue-500 w-6 h-6" />
          <span className="font-bold text-white">PolicyFlow AI</span>
        </div>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <p>© 2026 PolicyFlow AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
