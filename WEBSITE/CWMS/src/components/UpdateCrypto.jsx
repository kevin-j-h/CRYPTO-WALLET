
/* eslint-disable no-unused-vars */


import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';

const CryptoUpdate = () => {
  const [cryptoUpdate, setCryptoUpdate] = useState({
    cryptoid: '',
    cryptoprice: '',
    marketcap: '',
  });

  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    async function fetchCryptoList() {
      try {
        const { data, error } = await supabase
          .from('cryptocurrency')
          .select('cryptoid, cryptoname,marketcap');

        if (error) {
          throw error;
        }

        setCryptoList(data);
      } catch (error) {
        console.error('Error fetching crypto list:', error.message);
      }
    }

    fetchCryptoList();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCryptoUpdate({
      ...cryptoUpdate,
      [name]: value
    });
  };

  const handleUpdate = async () => {
    try {
      const { data, error } = await supabase
        .from('cryptocurrency')
        .update({
          cryptoprice: cryptoUpdate.cryptoprice,
          marketcap: cryptoUpdate.marketcap,
        })
        .eq('cryptoid', cryptoUpdate.cryptoid)
        .select();

      if (error) {
        throw error;
      }

      console.log('Cryptocurrency data updated:', data);
    } catch (error) {
      console.error('Error updating cryptocurrency data:', error.message);
    }
  };

  return (
    <div className="crypto-update-container">
      <h2>Update Cryptocurrency Data</h2>
      <div className="update-fields">
        <select name="cryptoid" onChange={handleChange} value={cryptoUpdate.cryptoid}>
          <option value="">Select a cryptocurrency</option>
          {cryptoList.map((crypto) => (
            <option key={crypto.cryptoid} value={crypto.cryptoid}>
              {crypto.cryptoname}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="cryptoprice"
          value={cryptoUpdate.cryptoprice}
          onChange={handleChange}
          placeholder="Enter Cryptoprice"
        />
        <input
          type="text"
          name="marketcap"
          value={cryptoUpdate.marketcap}
          onChange={handleChange}
          placeholder="Enter Market Cap"
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default CryptoUpdate;
