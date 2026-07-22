import { TrendingUp, PieChart, ShieldCheck } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Pelacakan Portofolio Real-Time',
      description: 'Pantau nilai investasi, profit/loss, dan pergerakan aset Anda secara serentak tanpa perlu perhitungan manual.',
    },
    {
      icon: PieChart,
      title: 'Multi-Aset & Diversifikasi',
      description: 'Dukungan penuh untuk pencatatan berbagai jenis aset mulai dari Kripto, Saham, Emas, hingga Reksa Dana dalam satu tempat.',
    },
    {
      icon: ShieldCheck,
      title: 'Privat & Tanpa Registrasi Bank',
      description: 'Seluruh data portofolio Anda tersimpan secara langsung di memori perangkat tanpa memerlukan kredensial perbankan.',
    },
  ];

  return (
    <section id="fitur" className="py-20 bg-slate-950/60 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
            Keunggulan Utama
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Semua Fitur yang Anda Butuhkan untuk Mengelola Investasi
          </p>
        </div>

        {/* 3 Feature Cards Grid (3 cols on desktop, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/40 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1"
              >
                {/* Accent top border glow */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-500/0 group-hover:via-emerald-500/60 to-transparent transition-all duration-500" />

                <div className="w-14 h-14 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-md shadow-emerald-500/10">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
