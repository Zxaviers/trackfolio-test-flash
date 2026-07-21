import { Asset } from '@/types';
import { formatCurrency, formatPercent } from '@/utils/format';
import { Wallet, TrendingUp, Layers, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface SummaryCardsProps {
  assets: Asset[];
}

export default function SummaryCards({ assets }: SummaryCardsProps) {
  // Calculate aggregate metrics
  const totalPortfolio = assets.reduce(
    (sum, asset) => sum + asset.amount * asset.currentPrice,
    0
  );

  const totalBuyCost = assets.reduce(
    (sum, asset) => sum + asset.amount * asset.buyPrice,
    0
  );

  const totalProfitLoss = totalPortfolio - totalBuyCost;
  const totalProfitLossPercent =
    totalBuyCost > 0 ? (totalProfitLoss / totalBuyCost) * 100 : 0;

  const totalAssetsCount = assets.length;

  const isProfit = totalProfitLoss >= 0;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6 mb-8">
      {/* Card 1: Total Portofolio */}
      <div className="p-5 rounded-2xl bg-[#0c1220] border border-slate-800/90 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Total Portofolio
          </span>
          <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Wallet className="w-5 h-5" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
          {formatCurrency(totalPortfolio)}
        </div>
        <div className="text-xs text-slate-400">
          Dari <span className="text-white font-medium">{totalAssetsCount}</span> instrumen aset
        </div>
      </div>

      {/* Card 2: Return Hari Ini */}
      <div className="p-5 rounded-2xl bg-[#0c1220] border border-slate-800/90 shadow-lg relative overflow-hidden group">
        <div
          className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-colors ${
            isProfit ? 'bg-emerald-500/10' : 'bg-rose-500/10'
          }`}
        />
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Return (Profit/Loss)
          </span>
          <div
            className={`w-9 h-9 rounded-xl border flex items-center justify-center ${
              isProfit
                ? 'bg-emerald-950/80 border-emerald-500/30 text-emerald-400'
                : 'bg-rose-950/80 border-rose-500/30 text-rose-400'
            }`}
          >
            {isProfit ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
          </div>
        </div>
        <div
          className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-1 ${
            isProfit ? 'text-emerald-400' : 'text-rose-400'
          }`}
        >
          {isProfit ? '+' : ''}
          {formatCurrency(totalProfitLoss)}
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold">
          <span
            className={`px-2 py-0.5 rounded-md ${
              isProfit
                ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60'
                : 'bg-rose-950/80 text-rose-400 border border-rose-800/60'
            }`}
          >
            {formatPercent(totalProfitLossPercent)}
          </span>
          <span className="text-slate-400 font-normal">total imbal hasil</span>
        </div>
      </div>

      {/* Card 3: Total Aset (spans full width on mobile grid if needed) */}
      <div className="col-span-2 sm:col-span-1 p-5 rounded-2xl bg-[#0c1220] border border-slate-800/90 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-teal-500/10 transition-colors" />
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Total Aset
          </span>
          <div className="w-9 h-9 rounded-xl bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-400">
            <Layers className="w-5 h-5" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
          {totalAssetsCount} <span className="text-base font-medium text-slate-400">Aset</span>
        </div>
        <div className="text-xs text-slate-400">
          Modal Awal:{' '}
          <span className="text-slate-200 font-medium">{formatCurrency(totalBuyCost)}</span>
        </div>
      </div>
    </div>
  );
}
