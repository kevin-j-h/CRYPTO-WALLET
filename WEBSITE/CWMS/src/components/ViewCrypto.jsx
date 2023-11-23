
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { supabase } from '../config/supabaseClient';
import '../styles/viewcrypto.css';

const ViewCrypto = () => {
  const [cryptos, setCryptos] = useState([]);
  const [searchSymbol, setSearchSymbol] = useState('');

  const handleSearch = async () => {
    try {
        const { data, error } = await supabase
        .from('cryptocurrency')
        .select('symbol, cryptoname, cryptoprice,marketcap')
        .or(`symbol.ilike.%${searchSymbol}%,cryptoname.ilike.%${searchSymbol}%`);
      

      if (error) {
        throw error;
      }

      if (data) {
        setCryptos(data);
      }
    } catch (error) {
      console.error('Error fetching cryptocurrency data:', error.message);
    }
  };

  useEffect(() => {
    async function fetchCryptoData() {
      try {
        let { data: cryptocurrency, error } = await supabase
          .from('cryptocurrency')
          .select('symbol, cryptoname, cryptoprice,marketcap');

        if (error) {
          throw error;
        }

        setCryptos(cryptocurrency);
      } catch (error) {
        console.error('Error fetching crypto data:', error.message);
      }
    }

    fetchCryptoData();
  }, []);

  return (
    <div className="crypto-container">
      <h2>Cryptos Available</h2>
      <div style={{display:'block',justifyContent:'space-around',}}>
        <input
        type="text"
        value={searchSymbol}
        onChange={(e) => setSearchSymbol(e.target.value)}
        placeholder="Search by symbol"
        style={{margin:'5% 2%'}}
      />
      <button style={{margin:'0 23%'}} onClick={handleSearch}>Search</button>
      </div>
      <div className="crypto-list">
        {cryptos.map((crypto, index) => (
          <div key={index} className="crypto-item">
            <p>Name: {crypto.cryptoname}</p>
            <p>Symbol: {crypto.symbol}</p>
            <p>Price: ${crypto.cryptoprice}</p>
            <p>MarketCap: {crypto.marketcap}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCrypto;
