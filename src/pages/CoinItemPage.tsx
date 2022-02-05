import React, { FC, useState, useEffect } from 'react';
import { TCoinItem } from '../types/coin';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { CoinItemPageParams } from '../types/coin';

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
    fetchUser();
  }, []);

  function getBack(e: React.MouseEvent<HTMLButtonElement>) {
    setCoin(null);
    navigate('/');
  }
  return (
    <div className='flex'>
      <button
        className='text-black bg-white rounded-sm p-2 w-24'
        onClick={getBack}>
        Back
      </button>
      <h1>{coin?.name}</h1>
      <img src={coin?.image.small} alt={coin?.symbol} />
    </div>
  );
};

export default CoinItemPage;
