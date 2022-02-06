export interface ICoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

export type CoinItemPageParams = {
  id: string;
};

export type TCoinItem = {
  id: string;
  symbol: string;
  name: string;
  image: TCoinItemImage;
  market_data: TCoinItemMarketData;
};

type TCoinItemImage = {
  thumb: string;
  small: string;
  large: string;
};

type TCoinItemMarketData = {
  current_price: {
    usd: number;
  };
  market_cap: {
    usd: number;
  };
  price_change_percentage_24h: number;
};
