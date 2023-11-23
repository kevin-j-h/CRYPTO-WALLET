/* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unknown-property */
// /* eslint-disable no-unused-vars */
// import React, { useEffect } from 'react';

// const LiveCoinWatchWidget = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://www.cryptohopper.com/widgets/js/script';
//     script.defer = true;
//     document.body.appendChild(script);
//   }, []);

//   return (
// <div class="cryptohopper-web-widget" data-id="1" data-chart_color="#000000" data-numcoins="100" data-realtime="on"></div>

//  );
// };

// export default LiveCoinWatchWidget;


import React, { useEffect, useState } from 'react';
import { supabase } from '../config/supabaseClient';
import '../styles/CryptoTable.css';
const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);

  const fetchData = async () => {
    // Fetch data from the "cryptocurrency" table in Supabase
    const { data, error } = await supabase.from('cryptocurrency').select('*');
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setCryptoData(data); // Set the fetched data to the state
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='tablebody'>
    <div className="p-4">
      <h1>Crypto Table</h1>
      <table>
        <thead>
          <tr>
            <th>Crypto Name</th>
            <th>Crypto Price</th>
            <th>Marketcap</th>
            <th>Symbol</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <tr key={index}>
              <td>{crypto.cryptoname}</td>
              <td>{crypto.cryptoprice}</td>
              <td>{crypto.marketcap}</td>
              <td>{crypto.symbol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default CryptoTable;
