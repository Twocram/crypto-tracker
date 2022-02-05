import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { ICoin } from '../types/coin';
import List from '../components/List';
import CoinItem from '../components/CoinItem';

interface CoinsProps {}

const Coins: FC<CoinsProps> = () => {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [search, setSearch] = useState<string>('');
  useEffect(() => {
    fetchCoins();
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  async function fetchCoins() {
    const response = await axios.get<ICoin[]>(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );
    setCoins(response.data);
  }
  return (
    <div className='container[xl]'>
      <h2>Check coin stats</h2>
      <input
        className='border-2 border-black'
        type='text'
        onChange={changeHandler}
      />
      <List
        items={filteredCoins}
        renderItem={(coin: ICoin) => <CoinItem coin={coin} key={coin.id} />}
      />
    </div>
  );
};

export default Coins;
