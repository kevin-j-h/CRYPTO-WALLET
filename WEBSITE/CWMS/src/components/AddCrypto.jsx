/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { supabase } from '../config/supabaseClient';

const AddCrypto = () => {
  const [newCrypto, setNewCrypto] = useState({
    cryptoname: '',
    cryptoprice: '',
    marketcap: '',
    symbol: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCrypto({
      ...newCrypto,
      [name]: value
    });
  };

  const handleAddCrypto = async () => {
    try {
      const { data, error } = await supabase
        .from('cryptocurrency')
        .insert([newCrypto]);

      if (error) {
        throw error;
      }

      console.log('Cryptocurrency added:', data);
    } catch (error) {
      console.error('Error adding cryptocurrency:', error.message);
    }
  };

  return (
    <div className="add-crypto-container">
      <h2>Add New Cryptocurrency</h2>
      <div className="add-crypto-fields">
        <input
          type="text"
          name="cryptoname"
          value={newCrypto.cryptoname}
          onChange={handleChange}
          placeholder="Enter Cryptoname"
        />
        <input
          type="text"
          name="cryptoprice"
          value={newCrypto.cryptoprice}
          onChange={handleChange}
          placeholder="Enter Cryptoprice"
        />
        <input
          type="text"
          name="marketcap"
          value={newCrypto.marketcap}
          onChange={handleChange}
          placeholder="Enter Market Cap"
        />
        <input
          type="text"
          name="symbol"
          value={newCrypto.symbol}
          onChange={handleChange}
          placeholder="Enter Symbol"
        />
        <button onClick={handleAddCrypto}>Add Cryptocurrency</button>
      </div>
    </div>
  );
};

export default AddCrypto;
