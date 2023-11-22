import { useEffect, useState } from 'react';
import { supabase } from '../config/supabaseClient';
import { useLocation } from 'react-router-dom';

const Watchlist = () => {
  const location = useLocation();
  const id = location.state;
  const [watchlist, setWatchlist] = useState([]);
  const [cryptoInfoArray, setCryptoInfoArray] = useState([]);

  useEffect(() => {
    const fetchWatchlistData = async () => {
      try {
        const { data: watchlistData, error: watchlistError } = await supabase
          .from('watchlist')
          .select('cryptoid')
          .eq('userid', id);

        if (watchlistError) {
          console.error('Error fetching watchlist data:', watchlistError.message);
          return;
        }

        const watch = watchlistData[0]?.cryptoid || [];
        setWatchlist(watch);
      } catch (error) {
        console.error('Error in fetchWatchlistData:', error.message);
      }
    };

    fetchWatchlistData();
  }, [id]);

  useEffect(() => {
    const fetchDataForWatchlist = async () => {
      try {
        const promises = watchlist.map(async (watchlistItem) => {
          const { data: cryptoData, error: cryptoError } = await supabase
            .from('cryptocurrency')
            .select()
            .eq('cryptoid', watchlistItem);

          if (cryptoError) {
            console.error('Error fetching cryptocurrency data:', cryptoError.message);
            return null;
          }

          return cryptoData[0];
        });

        const cryptoInfoArray = await Promise.all(promises);
        setCryptoInfoArray(cryptoInfoArray);
      } catch (error) {
        console.error('Error in fetching cryptocurrency data:', error.message);
      }
    };

    fetchDataForWatchlist();
  }, [watchlist]);

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
          {cryptoInfoArray.map((cryptoInfo, index) => (
            <tr key={index}>
              <td>{cryptoInfo.symbol}</td>
              <td>{cryptoInfo.cryptoname}</td>
              <td>{cryptoInfo.cryptoprice}</td>
              <td>{cryptoInfo.marketcap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Watchlist;
