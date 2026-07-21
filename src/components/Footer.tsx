import Link from 'next/link';
import { TrendingUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070a12] border-t border-slate-800/80 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Info */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
              <TrendingUp className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Track<span className="text-emerald-400">Folio</span>
            </span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Beranda</Link>
            <Link href="/dashboard" className="hover:text-emerald-400 transition-colors">Dashboard</Link>
            <a href="#fitur" className="hover:text-emerald-400 transition-colors">Fitur</a>
          </div>

          {/* Copyright text */}
          <div className="text-xs text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} TrackFolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
