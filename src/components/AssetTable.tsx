import { Asset } from '@/types';
import { formatCurrency, formatPercent, calculateAssetMetrics } from '@/utils/format';
import { Trash2, TrendingUp, TrendingDown, Layers } from 'lucide-react';

interface AssetTableProps {
  assets: Asset[];
  onDeleteAsset?: (id: string) => void;
}

export default function AssetTable({ assets, onDeleteAsset }: AssetTableProps) {
  if (assets.length === 0) {
    return (
      <div className="p-12 text-center rounded-2xl bg-[#0c1220] border border-slate-800/90 text-slate-400">
        <Layers className="w-12 h-12 text-slate-600 mx-auto mb-3" />
        <p className="text-base font-semibold text-slate-300">Belum ada aset terdaftar</p>
        <p className="text-xs text-slate-500 mt-1">Klik tombol "+ Tambah Aset" untuk memasukkan data investasi Anda.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0c1220] border border-slate-800/90 rounded-2xl overflow-hidden shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[650px]">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/60 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <th className="py-4 px-6">Nama Aset</th>
              <th className="py-4 px-4 text-right">Jumlah</th>
              <th className="py-4 px-4 text-right">Harga Beli</th>
              <th className="py-4 px-4 text-right">Harga Sekarang</th>
              <th className="py-4 px-4 text-right">Untung / Rugi</th>
              {onDeleteAsset && <th className="py-4 px-4 text-center">Aksi</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-sm">
            {assets.map((asset) => {
              const { currentValue, profitLoss, profitLossPercent } = calculateAssetMetrics(
                asset.amount,
                asset.buyPrice,
                asset.currentPrice
              );
              const isProfit = profitLoss >= 0;

              return (
                <tr
                  key={asset.id}
                  className="hover:bg-slate-800/30 transition-colors group"
                >
                  {/* Nama Aset & Symbol */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center font-bold text-xs text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                        {asset.symbol.substring(0, 4)}
                      </div>
                      <div>
                        <div className="font-semibold text-white group-hover:text-emerald-300 transition-colors">
                          {asset.name}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span>{asset.symbol}</span>
                          <span>•</span>
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-medium text-slate-300">
                            {asset.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Jumlah */}
                  <td className="py-4 px-4 text-right font-medium text-slate-200">
                    {asset.amount.toLocaleString('en-US', { maximumFractionDigits: 4 })}
                  </td>

                  {/* Harga Beli */}
                  <td className="py-4 px-4 text-right text-slate-300">
                    {formatCurrency(asset.buyPrice)}
                  </td>

                  {/* Harga Sekarang */}
                  <td className="py-4 px-4 text-right font-semibold text-white">
                    {formatCurrency(asset.currentPrice)}
                  </td>

                  {/* Untung/Rugi */}
                  <td className="py-4 px-4 text-right">
                    <div className={`font-bold flex items-center justify-end gap-1 ${isProfit ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {isProfit ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                      <span>{isProfit ? '+' : ''}{formatCurrency(profitLoss)}</span>
                    </div>
                    <div className={`text-xs font-semibold ${isProfit ? 'text-emerald-500/90' : 'text-rose-500/90'}`}>
                      {formatPercent(profitLossPercent)}
                    </div>
                  </td>

                  {/* Delete Action */}
                  {onDeleteAsset && (
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => onDeleteAsset(asset.id)}
                        className="p-2 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-950/40 border border-transparent hover:border-rose-800/40 transition-all"
                        title="Hapus Aset"
                        aria-label={`Hapus ${asset.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
