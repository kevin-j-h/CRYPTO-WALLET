import React, { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import CryptoBuyTable from "./CryptoBuyTable";
import { useLocation } from "react-router-dom";

function CryptoBuySell() {
  const location = useLocation;
  const walletDetails = location.state;
  console.log(walletDetails);

  const [action, setAction] = useState("");
  const [crypto, setCrypto] = useState("");
  const [amount, setAmount] = useState("");
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState('');

  // fetches all crypto in crypto table
  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      try {
        const {data, error} = await supabase.from('cryptocurrency').select('symbol')
        if (error) {
          throw error
        }
        setCryptocurrencies(data);
      } catch (error) {
        console.log(error.message)
      }
    };

    fetchCryptocurrencies();
  }, []);

  const handleCryptoChange = (event) => {
    setCrypto(event.target.value);
  };

  const handleActionChange = (event) => {
    setAction(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!crypto || !action || !amount){
      console.error('Please fill in all details');
    }
    console.log(`You want to ${action} ${amount} ${crypto}`);

    if (action === 'buy'){
      //add to wallet, transaction, sub bal

    }

    if (action === 'sell'){
      //sub from wallet, transaction, add bal
    }
    try {
      const {data, error} = await supabase.from('cryptocurrency')
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <section className="buysell">
      <h1>Buy/Sell Cryptocurrencies</h1>
      <CryptoBuyTable />
      <div className="buysell-list">
        <div className="crypto1">
          <p>{crypto}</p>
          <form onSubmit={handleSubmit}>
            <select value={crypto} onChange={handleCryptoChange}>
              <option value="">Select a cryptocurrency</option>
              {cryptocurrencies.map((crypto) => (
                <option key={crypto.symbol} value={crypto.symbol}>
                  {crypto.symbol}
                </option>
              ))}
            </select>

            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter the amount"
            />

            <div className="custom-select">
              <select value={action} onChange={handleActionChange}>
                <option value="">Select an action</option>
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
              </select>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CryptoBuySell;
