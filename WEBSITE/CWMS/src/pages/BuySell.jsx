/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import CryptoBuyTable from "./CryptoBuyTable";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';  

import "../styles/buysell.css";
function CryptoBuySell() {
  const [wallet, setWallet] = useState("");
  const location = useLocation();
  const id = location.state;
  console.log(id)
  const uid = id.userid;
  console.log(wallet);
  const [action, setAction] = useState("");
  const [crypto, setCrypto] = useState("");
  const [amount, setAmount] = useState("");
  const [cryptoHoldings, setCryptoHoldings] = useState([]);
  const [cryptoBal, setCryptoBal] = useState([]);
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  // fetches all crypto in crypto table
  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      try {
        const { data, error } = await supabase.from("cryptocurrency").select();
        if (error) {
          throw error;
        }
        setCryptocurrencies(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCryptocurrencies();
  }, []);

  // Assuming wallet object has cryptoHoldings and cryptoBal properties
  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const { data, error } = await supabase
          .from("wallet")
          .select()
          .eq("userid", uid)
          .single();
        if (error) {
          throw error;
        }
        setWallet(data);
        setCryptoHoldings(data.cryptoid || []);
        setCryptoBal(data.quantity || []);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchWallet();
  }, [action, amount]); // Dependency array with id

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
    if (!crypto || !action || !amount) {
      console.error("Please fill in all details");
      return;
    }
    console.log(`You want to ${action} ${amount} ${crypto}`);

    if (action === "buy") {
      // add to wallet, transaction, sub bal
      // Implement the buy logic here
    } else if (action === "sell") {
      // sub from wallet, transaction, add bal
      // Implement the sell logic here
      const index = cryptoHoldings.indexOf(crypto);
      if (index !== -1) {
        const bal = cryptoBal[index];
        if (bal >= amount) {
          const updatedCryptoBal = [...cryptoBal];
          updatedCryptoBal[index] = bal - amount;
          setCryptoBal(updatedCryptoBal);

          try {
            const { data, error } = await supabase
              .from("wallet")
              .update({ quantity: updatedCryptoBal })
              .eq("walletid", wallet.walletid);

            if (error) {
              console.error(
                "Error updating cryptoBal in the wallet table:",
                error.message
              );
            } else {
              console.log("CryptoBal updated in the wallet table:", data);
              try {
                const tId = uuidv4();
                const { data, error } = await supabase.from("transaction").insert({transactionid: tId, timestamp: new Date().toISOString(), amount: amount, walletid: id.walletid, userid: uid});
                if (error) {throw error;}
              } catch (error) {
                console.log(error.message)
              }
            }
          } catch (error) {
            console.error(
              "Error updating cryptoBal in the wallet table:",
              error.message
            );
          }
        } else {
          console.error("Not enough crypto to sell the given amount!");
        }
      } else {
        console.error("The mentioned crypto is not in your holdings!");
      }
    }
  };

  return (
    <div className="page1">
    <section className="buysell">
      <h1>Buy-Sell Cryptocurrencies</h1>
      <CryptoBuyTable />
      <div className="buysell-list">
        <div className="crypto1">
          {/* <p>{crypto}</p> */}
          <form onSubmit={handleSubmit}>
            <select value={crypto} onChange={handleCryptoChange}>
              <option value="">Select a cryptocurrency</option>
              {cryptocurrencies.map((crypto) => (
                <option key={crypto.symbol} value={crypto.cryptoid}>
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
    </div>
  );
}

export default CryptoBuySell;
