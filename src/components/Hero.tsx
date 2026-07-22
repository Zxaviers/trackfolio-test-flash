import Link from 'next/link';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background glow graphics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[200px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Smart Personal Portfolio Tracker v1.0</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Track Every Investment,{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
              One Place
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            Kelola dan pantau seluruh portofolio investasi Anda secara cerdas, cepat, dan terpusat dalam satu dashboard modern.
          </p>

          {/* CTA Buttons: Horizontal on Desktop, Vertical Stacked on Mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto mb-16">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Mulai Gratis</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 hover:text-white backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Lihat Demo</span>
            </a>
          </div>

          {/* Interactive Preview Mockup Box */}
          <div id="demo" className="relative mx-auto max-w-5xl rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-slate-800/80 via-slate-900/60 to-slate-950/80 border border-slate-700/60 shadow-2xl backdrop-blur-xl">
            <div className="rounded-xl bg-[#0b101d] border border-slate-800/80 overflow-hidden text-left p-4 sm:p-6">
              {/* Window Controls */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">trackfolio.app/dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Preview
                  </span>
                </div>
              </div>

              {/* Mockup Top Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Total Portofolio</div>
                  <div className="text-xl sm:text-2xl font-bold text-white">$45,820.50</div>
                  <div className="text-xs text-emerald-400 mt-1 font-medium">+14.2% total profit</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Return Hari Ini</div>
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400">+$1,240.00</div>
                  <div className="text-xs text-emerald-400 mt-1 font-medium">+2.78% hari ini</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Total Aset</div>
                  <div className="text-xl sm:text-2xl font-bold text-white">5 Aset</div>
                  <div className="text-xs text-slate-400 mt-1">Crypto, Saham & Emas</div>
                </div>
              </div>

              {/* Mockup Rows snippet */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-800/60 text-xs sm:text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center font-bold text-amber-400 text-xs">BTC</div>
                    <div>
                      <div className="font-semibold text-white">Bitcoin</div>
                      <div className="text-slate-400 text-xs">Crypto • 0.45 BTC</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-white">$29,880.00</div>
                    <div className="text-emerald-400 text-xs font-medium">+$3,780.00 (+14.48%)</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-800/60 text-xs sm:text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-bold text-blue-400 text-xs">AAPL</div>
                    <div>
                      <div className="font-semibold text-white">Apple Inc.</div>
                      <div className="text-slate-400 text-xs">Saham • 20 Lot</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-white">$4,490.00</div>
                    <div className="text-emerald-400 text-xs font-medium">+$690.00 (+18.16%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
