'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import SummaryCards from '@/components/SummaryCards';
import AssetTable from '@/components/AssetTable';
import AddAssetModal from '@/components/AddAssetModal';
import { INITIAL_ASSETS } from '@/data/mockData';
import { Asset, NewAssetInput } from '@/types';
import { Plus, LayoutDashboard, ArrowRightLeft, Settings, ShieldAlert } from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [assets, setAssets] = useState<Asset[]>(INITIAL_ASSETS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddAsset = (newAsset: NewAssetInput) => {
    const createdAsset: Asset = {
      id: `asset-${Date.now()}`,
      name: newAsset.name,
      symbol: newAsset.symbol,
      category: newAsset.category,
      amount: newAsset.amount,
      buyPrice: newAsset.buyPrice,
      currentPrice: newAsset.currentPrice ?? newAsset.buyPrice,
    };

    setAssets((prev) => [createdAsset, ...prev]);
  };

  const handleDeleteAsset = (id: string) => {
    setAssets((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#090d16] text-slate-100">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Top Content Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>TrackFolio Dashboard</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {activeTab === 'overview' && 'Ringkasan Portofolio'}
              {activeTab === 'transaksi' && 'Riwayat Transaksi'}
              {activeTab === 'pengaturan' && 'Pengaturan Akun'}
            </h1>
          </div>

          {activeTab === 'overview' && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30 transition-all duration-200"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Aset</span>
            </button>
          )}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* 3 Summary Cards */}
            <SummaryCards assets={assets} />

            {/* Asset List Section Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Daftar Portofolio Aset</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Daftar instrumen investasi aktif beserta kalkulasi untung/rugi terkini.
                </p>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Total: <strong className="text-emerald-400 font-sans">{assets.length}</strong> Aset
              </span>
            </div>

            {/* Assets Table */}
            <AssetTable assets={assets} onDeleteAsset={handleDeleteAsset} />
          </div>
        )}

        {/* Tab 2: Transaksi */}
        {activeTab === 'transaksi' && (
          <div className="p-8 rounded-2xl bg-[#0c1220] border border-slate-800 text-center text-slate-400">
            <ArrowRightLeft className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Riwayat Transaksi</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
              Fitur pencatatan riwayat beli/jual detail sedang disiapkan. Semua aset yang Anda tambahkan di Overview tercatat secara otomatis.
            </p>
            <button
              onClick={() => setActiveTab('overview')}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 hover:bg-emerald-900/80 transition-colors"
            >
              Kembali ke Overview
            </button>
          </div>
        )}

        {/* Tab 3: Pengaturan */}
        {activeTab === 'pengaturan' && (
          <div className="max-w-2xl space-y-6">
            <div className="p-6 rounded-2xl bg-[#0c1220] border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-bold text-white">Pengaturan Portofolio</h3>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between py-3 border-b border-slate-800">
                  <div>
                    <div className="font-semibold text-white">Mata Uang Utama</div>
                    <div className="text-xs text-slate-400">Mata uang tampilan harga portofolio</div>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-emerald-400">
                    USD ($)
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-800">
                  <div>
                    <div className="font-semibold text-white">Penyimpanan Data</div>
                    <div className="text-xs text-slate-400">Data tersimpan di React In-Memory State</div>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300">
                    Local Memory
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Add Asset Modal */}
      <AddAssetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddAsset={handleAddAsset}
      />
    </div>
  );
}
