export interface Asset {
  id: string;
  name: string;
  symbol: string;
  category: 'Crypto' | 'Saham' | 'Emas' | 'Reksa Dana' | 'Lainnya';
  amount: number;
  buyPrice: number;
  currentPrice: number;
}

export interface SummaryStats {
  totalPortfolio: number;
  todayReturn: number;
  todayReturnPercent: number;
  totalAssetsCount: number;
}

export interface NewAssetInput {
  name: string;
  symbol: string;
  category: 'Crypto' | 'Saham' | 'Emas' | 'Reksa Dana' | 'Lainnya';
  amount: number;
  buyPrice: number;
  currentPrice?: number;
}
