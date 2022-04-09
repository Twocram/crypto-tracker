import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { ICoin } from "../types/coin";
import List from "../components/List";
import CoinItem from "../components/CoinItem";

interface CoinsProps {}

const Coins: FC<CoinsProps> = () => {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    setTimeout(() => {
      fetchCoins();
    }, 1000);
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  async function fetchCoins() {
    const response = await axios.get<ICoin[]>(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
    );
    setCoins(response.data);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2>Check coin stats</h2>
        <input
          className="w-80 mt-3 p-3 outline-none bg-gradient-to-r from-violet-500 to-indigo-600"
          type="text"
          onChange={changeHandler}
          placeholder="Type name of crypto"
        />
      </div>

      {coins.length > 0 ? (
        <List
          items={filteredCoins}
          renderItem={(coin: ICoin) => <CoinItem coin={coin} key={coin.id} />}
        />
      ) : (
        <div className={"flex justify-center mt-[50px] text-2xl"}>
          Loading...
        </div>
      )}
    </>
  );
};

export default Coins;
