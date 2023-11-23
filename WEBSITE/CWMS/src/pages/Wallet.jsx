/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { supabase } from '../config/supabaseClient';
import { Link, useLocation } from 'react-router-dom';
import "../styles/wallet.css";

function Wallet() {
  const location = useLocation();
  const walletDetails = location.state;
  const walletId = walletDetails.walletid; // Fix variable name here
  console.log(walletDetails);

  const [cryptoDetails, setCryptoDetails] = useState([]);

  useEffect(() => {
    const fetchCryptoDetails = async () => {
      try {
        const { data: walletData, error: walletError } = await supabase
          .from("wallet")
          .select("cryptoid")
          .eq("walletid", walletId);

        if (walletError) {
          throw walletError;
        }

        const cryptoIdList = walletData[0].cryptoid; // Assuming cryptoid is an array in your wallet table

        if (cryptoIdList && cryptoIdList.length > 0) {
          const { data: cryptoData, error: cryptoError } = await supabase
            .from("cryptocurrency")
            .select("cryptoname")
            .in("cryptoid", cryptoIdList);

          if (cryptoError) {
            throw cryptoError;
          }

          setCryptoDetails(cryptoData);
        }
      } catch (error) {
        console.error('Error fetching wallet or cryptocurrency details:', error.message);
      }
    };

    fetchCryptoDetails();
  }, [walletId]);

  return (
    <div>
      <div className='bodyy'>
        <section className="wallet1">
          <h2>Your Wallet</h2>
          <div className="wallet-info">
            {/* Display other wallet information here */}
          </div>
          <div className="wallet1-actions">
            {/* Add wallet action links here */}
          </div>
          <br></br>

          {cryptoDetails.map((crypto, index) => (
            <div key={index} className="crypto-balance">
              <p><strong>Cryptoname:</strong> {crypto.cryptoname}</p>
            </div>
          ))}
          <p>Total balance: {walletDetails.balance}</p>
        </section>
      </div>
    </div>
  );
}

export default Wallet;
