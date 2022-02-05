import React, { FC } from 'react';
import { ICoin } from '../types/coin';

interface CoinItemProps {
  coin: ICoin;
}

const CoinItem: FC<CoinItemProps> = ({ coin }) => {
  return (
    <div className='flex'>
      <img className='mr-3' src={coin.image} alt={coin.symbol} />
      <span className='mr-3'>{coin.name}</span>
      <span className='mr-3'>{coin.symbol}</span>
      <span className='mr-3'>{coin.current_price}</span>
      <span className='mr-3'>{coin.market_cap}</span>
    </div>
  );
};

export default CoinItem;
