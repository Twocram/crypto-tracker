import React, { FC, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TCoinItem, CoinItemPageParams } from '../types/coin';
import axios from 'axios';

const CoinItemPage: FC = () => {
  const [coin, setCoin] = useState<TCoinItem | null>(null);
  const navigate = useNavigate();
  const params = useParams<CoinItemPageParams>();

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get<TCoinItem>(
        'https://api.coingecko.com/api/v3/coins/' + params.id
      );
      setCoin(response.data);
    }
    setInterval(() => {
      fetchUser();
    }, 1000);
  }, []);

  function getBack(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    navigate('/');
  }
  return (
    <div className='flex flex-col'>
      <button
        className='text-black bg-white rounded-sm p-2 w-24'
        onClick={getBack}>
        Back
      </button>
      <div className='flex flex-col items-center justify-center'>
        <img
          src={coin?.image.small}
          className='w-[72px] h-[72px]'
          alt={coin?.symbol}
        />
        <h1 className='text-xl font-bold'>
          {coin?.name} ({coin?.symbol})
        </h1>
        <span className='text-xl'>
          Current Price: {coin?.market_data.current_price.usd}$
        </span>
        <span className='text-xl'>
          Total Price: {coin?.market_data.market_cap.usd}$
        </span>
        <span className='text-xl'>
          Price change percentage 24h:{' '}
          <span>
            {coin?.market_data.price_change_percentage_24h.toFixed(2)}
          </span>
        </span>
      </div>
    </div>
  );
};

export default CoinItemPage;
