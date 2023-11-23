// import { useEffect, useState } from 'react';
// import { supabase } from '../config/supabaseClient';
import { useLocation, useNavigate } from 'react-router-dom';
// import "../styles/watchlist.css";

// const Watchlist = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const id = location.state;
//   const [watchlist, setWatchlist] = useState([]);
//   const [cryptoInfoArray, setCryptoInfoArray] = useState([]);

//   useEffect(() => {
//     const fetchWatchlistData = async () => {
//       try {
//         const { data: watchlistData, error: watchlistError } = await supabase
//           .from('watchlist')
//           .select('cryptoid')
//           .eq('userid', id);

//         if (watchlistError) {
//           console.error('Error fetching watchlist data:', watchlistError.message);
//           return;
//         }

//         const watch = watchlistData[0]?.cryptoid || [];
//         setWatchlist(watch);
//       } catch (error) {
//         console.error('Error in fetchWatchlistData:', error.message);
//       }
//     };

//     fetchWatchlistData();
//   }, [id]);

//   useEffect(() => {
//     const fetchDataForWatchlist = async () => {
//       try {
//         const promises = watchlist.map(async (watchlistItem) => {
//           const { data: cryptoData, error: cryptoError } = await supabase
//             .from('cryptocurrency')
//             .select()
//             .eq('cryptoid', watchlistItem);

//           if (cryptoError) {
//             console.error('Error fetching cryptocurrency data:', cryptoError.message);
//             return null;
//           }

//           return cryptoData[0];
//         });

//         const cryptoInfoArray = await Promise.all(promises);
//         setCryptoInfoArray(cryptoInfoArray);
//       } catch (error) {
//         console.error('Error in fetching cryptocurrency data:', error.message);
//       }
//     };

//     fetchDataForWatchlist();
//   }, [watchlist]);

//   return (
//     <div className='pagee'>
      
//     <div className="watchlist-container">
//       <h2>My Watchlist</h2>
//       <button onClick={() => navigate('addWatchlist', {state: id})}>Add</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Symbol</th>
//             <th>Crypto Name</th>
//             <th>Price</th>
//             <th>Market Cap</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cryptoInfoArray.map((cryptoInfo, index) => (
//             <tr key={index}>
//               <td>{cryptoInfo.symbol}</td>
//               <td>{cryptoInfo.cryptoname}</td>
//               <td>{cryptoInfo.cryptoprice}</td>
//               <td>{cryptoInfo.marketcap}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </div>
//   );
// };

// export default Watchlist;
import React, { useEffect, useState } from 'react';
import { supabase } from '../config/supabaseClient';
import '../styles/watchlist.css';

const Watchlist = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state;
  const [cryptos, setCryptos] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const [watchlist, setWatchlist] = useState([]);
  const [cID, setCID] = useState([])

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
    async function fetchCryptoData() {
      try {
        let { data: cryptocurrency, error } = await supabase
          .from('cryptocurrency')
          .select('cryptoid, cryptoname, cryptoprice, symbol');

        if (error) {
          throw error;
        }

        setCryptos(cryptocurrency);
      } catch (error) {
        console.error('Error fetching crypto data:', error.message);
      }
    }

    async function fetchWatchlistData() {
      try {
        let { data: watchlistData, error } = await supabase
          .from('watchlist')
          .select('cryptoid, date')
          .order('date', { ascending: false });

        if (error) {
          throw error;
        }

        setWatchlist(watchlistData);
      } catch (error) {
        console.error('Error fetching watchlist data:', error.message);
      }
    }

    fetchCryptoData();
    fetchWatchlistData();
  }, []);

  const handleAddToWatchlist = async () => {
    const oldWatchlist = [...watchlist, selectedCrypto]
    console.log(oldWatchlist)
    try {
      const { data, error } = await supabase
        .from('watchlist')
        .update({ cryptoid: oldWatchlist })
        .eq('userid', id);

      if (error) {
        throw error;
      }

      console.log('Crypto added to watchlist:', data);
      // Refresh watchlist data

      

      const { data: updatedWatchlist, error: updatedError } = await supabase
        .from('watchlist')
        .select('cryptoid, date')
        .order('date', { ascending: false });

      if (updatedError) {
        throw updatedError;
      }

      setWatchlist(updatedWatchlist);
    } catch (error) {
      console.error('Error adding crypto to watchlist:', error.message);
    }

    try {
      const { data, error } = await supabase
        .from('cryptocurrency')
        .select()
        .in('cryptoid', oldWatchlist);
  
      if (error) {
        throw error;
      }
      
      setCID(data)
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching cryptocurrency details:', error.message);
      return null;
    }
  };

  return (
    <div className="watchlist-container">
      <h2>My Watchlist</h2>
      <div className="add-crypto">
        <select value={selectedCrypto} onChange={(e) => setSelectedCrypto(e.target.value)}>
          <option value="">Select a cryptocurrency</option>
          {cryptos.map((crypto) => (
            <option key={crypto.cryptoid} value={crypto.cryptoid}>
              {crypto.cryptoname} - {crypto.symbol}
            </option>
          ))}
        </select>
        <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
      </div>
      <div className="watchlist-items">
        <h3>Watchlist Items</h3>
        <table>
          <thead>
            <tr>
              <th>Crypto Name</th>
              <th>Symbol</th>
              <th>Crypto Price</th>
            </tr>
          </thead>
          <tbody>
            {cID.map((item) => (
              <tr key={item.cryptoid}>
                <td>{item.cryptoname}</td>
                <td>{item.symbol}</td>
                <td>{item.cryptoprice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Watchlist;
