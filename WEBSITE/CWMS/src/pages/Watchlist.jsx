import React, { useEffect, useState } from 'react';
import { supabase } from '../config/supabaseClient';
import { useLocation } from 'react-router-dom';

const Watchlist = () => {
  const location = useLocation();
  const userid = location.state;
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlistData = async () => {
      try {
        // Fetch the user's watchlist based on userid
        const { data: watchlistData, error: watchlistError } = await supabase
          .from('watchlist')
          .select('watchlistid', 'cryptoid')
          .eq('userid', userid);

        if (watchlistError) {
          console.error('Error fetching watchlist data:', watchlistError.message);
          return;
        }

        setWatchlist(watchlistData || []);
      } catch (error) {
        console.error('Error in fetchWatchlistData:', error.message);
      }
    };

    fetchWatchlistData();
  }, []);

  return (
    <div>
      <h2>My Watchlist</h2>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Crypto Name</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.map(async (watchlistItem) => {
            try {
              // Fetch additional information from the cryptocurrency table
              const { data: cryptoData, error: cryptoError } = await supabase
                .from('cryptocurrency')
                .select('symbol', 'name', 'price', 'market_cap')
                .eq('cryptoid', watchlistItem.cryptoid);
                console.log(JSON.stringify(cryptoData, null, 2))



              if (cryptoError) {
                console.error('Error fetching cryptocurrency data:', cryptoError.message);
                return;
              }

              const cryptoInfo = cryptoData[0];

              return (
                <tr key={watchlistItem.watchlistid}>
                  <td>{cryptoInfo.symbol}</td>
                  <td>{cryptoInfo.name}</td>
                  <td>{cryptoInfo.price}</td>
                  <td>{cryptoInfo.market_cap}</td>
                </tr>
              );
            } catch (error) {
              console.error('Error in fetching cryptocurrency data:', error.message);
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Watchlist;
