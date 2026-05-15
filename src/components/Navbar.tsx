'use client';

import { Activity } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  onStart?: () => void;
  onHomeClick?: () => void;
}

export default function Navbar({ onStart, onHomeClick }: NavbarProps) {
  return (
    <nav className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 cursor-pointer" onClick={onHomeClick}>
          <Activity className="text-blue-600 w-8 h-8" />
          <span className="font-bold text-xl tracking-tight text-slate-900">PolicyFlow AI</span>
        </Link>
        <div className="flex gap-6 items-center text-sm">
          <Link href="/states" className="text-slate-600 hover:text-blue-600 font-bold uppercase tracking-widest hidden md:block">States</Link>
          <Link href="/hipaa-compliance" className="text-slate-600 hover:text-blue-600 font-bold uppercase tracking-widest hidden md:block">HIPAA Guide</Link>
          <Link href="/#pricing" className="text-slate-600 hover:text-blue-600 font-bold uppercase tracking-widest">Pricing</Link>
          {onStart ? (
            <button onClick={onStart} className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
              Generate 1 Free Policy
            </button>
          ) : (
            <Link href="/#generator" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
              Generate 1 Free Policy
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
