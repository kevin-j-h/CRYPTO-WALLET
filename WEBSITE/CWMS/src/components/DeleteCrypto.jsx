/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';
import '../styles/deletecrypto.css'

const DeleteCrypto = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState('');

  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      try {
        const { data, error } = await supabase.from('cryptocurrency').select();
        if (error) {
          throw error;
        }
        setCryptocurrencies(data);
      } catch (error) {
        console.error('Error fetching cryptocurrencies:', error.message);
      }
    };

    fetchCryptocurrencies();
  }, []);

  const handleDeleteCrypto = async () => {
    try {
      if (!selectedCrypto) {
        console.error('Please select a cryptocurrency to delete.');
        return;
      }

      const { data, error } = await supabase
        .from('cryptocurrency')
        .delete()
        .eq('cryptoname', selectedCrypto);

      if (error) {
        throw error;
      }

      console.log('Cryptocurrency deleted:', data);
      // Refresh the list of cryptocurrencies after deletion
      setCryptocurrencies((prevCryptos) => prevCryptos.filter((crypto) => crypto.cryptoname !== selectedCrypto));
    } catch (error) {
      console.error('Error deleting cryptocurrency:', error.message);
    }
  };

  return (
    <div className="delete-crypto-container">
      <h2>Delete Cryptocurrency</h2>
      <div className="delete-crypto-fields">
        <select onChange={(e) => setSelectedCrypto(e.target.value)}>
          <option value="">Select Cryptocurrency to Delete</option>
          {cryptocurrencies.map((crypto) => (
            <option key={crypto.cryptoname} value={crypto.cryptoname}>
              {crypto.cryptoname}
            </option>
          ))}
        </select>
        <button onClick={handleDeleteCrypto}>Delete Cryptocurrency</button>
      </div>
    </div>
  );
};

export default DeleteCrypto;
