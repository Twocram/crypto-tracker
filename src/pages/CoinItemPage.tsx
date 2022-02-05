import React, { FC, useState, useEffect } from 'react';
import { ICoin } from '../types/coin';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CoinItemPageParams } from '../types/coin';

const CoinItemPage: FC = () => {
  const [coin, setCoin] = useState<ICoin | null>(null);
  const params = useParams<CoinItemPageParams>();
  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const response = await axios.get<ICoin>(
      'https://api.coingecko.com/api/v3/coins/' + params.id
    );
    setCoin(response.data);
  }
  return (
    <div className='flex'>
      <h1>{coin?.name}</h1>
      <img src={coin?.image} alt={coin?.symbol} />
    </div>
  );
};

export default CoinItemPage;
