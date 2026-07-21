import { Asset } from '@/types';

export const INITIAL_ASSETS: Asset[] = [
  {
    id: 'asset-1',
    name: 'Bitcoin',
    symbol: 'BTC',
    category: 'Crypto',
    amount: 0.45,
    buyPrice: 58000,
    currentPrice: 66400,
  },
  {
    id: 'asset-2',
    name: 'Ethereum',
    symbol: 'ETH',
    category: 'Crypto',
    amount: 3.5,
    buyPrice: 3200,
    currentPrice: 3480,
  },
  {
    id: 'asset-3',
    name: 'Apple Inc.',
    symbol: 'AAPL',
    category: 'Saham',
    amount: 20,
    buyPrice: 190,
    currentPrice: 224.5,
  },
  {
    id: 'asset-4',
    name: 'PT Bank Central Asia Tbk',
    symbol: 'BBCA',
    category: 'Saham',
    amount: 500,
    buyPrice: 560,
    currentPrice: 630,
  },
  {
    id: 'asset-5',
    name: 'Emas Antam Pure Gold',
    symbol: 'GOLD',
    category: 'Emas',
    amount: 50,
    buyPrice: 72,
    currentPrice: 86.4,
  },
];
