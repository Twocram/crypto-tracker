import React, { FC } from 'react';
import { ICoin } from '../types/coin';
import { useNavigate } from 'react-router-dom';
interface CoinItemProps {
  coin: ICoin;
}

const CoinItem: FC<CoinItemProps> = ({ coin }) => {
  const navigate = useNavigate();
  return (
    <div className='grid grid-cols-6 items-center p-2 border-b-2 border-white mb-4'>
      <img className='w-12 h-12' src={coin.image} alt={coin.symbol} />
      <span>{coin.name}</span>
      <span>{coin.symbol}</span>
      <span>${coin.current_price.toLocaleString('fi-FI')}</span>
      <span>${coin.market_cap.toLocaleString('fi-FI')}</span>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          navigate(`/${coin.id}`)
        }
        className='text-black bg-white rounded-sm p-2'>
        Go to page
      </button>
    </div>
  );
};

export default CoinItem;
