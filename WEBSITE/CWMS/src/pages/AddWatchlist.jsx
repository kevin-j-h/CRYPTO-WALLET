import { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';
import { useLocation } from 'react-router-dom';

const AddToWatchlistForm = () => {
  const [cryptos, setCryptos] = useState([]); // List of available cryptocurrencies
  const [selectedCryptos, setSelectedCryptos] = useState([]);
  const [wishlistID, setWishlistID] = useState()
    const location = useLocation();
    const id = location.state;
  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const { data, error } = await supabase
          .from('cryptocurrency')
          .select('symbol');

        if (error) {
          console.error('Error fetching cryptocurrencies:', error.message);
          return;
        }

        setCryptos(data);
      } catch (error) {
        console.error('Error in fetchCryptos:', error.message);
      }

      try {
        const {data, error} = await supabase.from('watchlist').select('watchlistid').eq('userid', id);
        if (error) throw error;
        setWishlistID(data[0].watchlistid)
      } catch(error) {
        console.log(error.message)
      }
    };

    fetchCryptos();
  }, [id]);

  const handleCryptoChange = (event) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedCryptos(selectedValues);
  };

  const handleAddToWatchlist = async (event) => {
    event.preventDefault();

    if (!id || selectedCryptos.length === 0) {
      console.error('User ID and at least one selected cryptocurrency are required.');
      return;
    }

    try {
      const recordsToAdd = selectedCryptos.map((crypto) => ({
        watchlistid: wishlistID,
        userid: id,
        cryptoid: crypto,
      }));      

    await supabase.from('watchlist').upsert(recordsToAdd, { onConflict: ['watchlistid', 'userid', 'crypto'] });

      setSelectedCryptos([]);

    } catch (error) {
      console.error('Error adding to watchlist:', error.message);
    }
  };

  return (
    <div>
      <h2>Add to Watchlist</h2>
      {/* <p>{wishlistID}</p> */}
      <form onSubmit={handleAddToWatchlist}>
        <label>
          Select Cryptocurrencies:
          <select
            multiple
            value={selectedCryptos}
            onChange={handleCryptoChange}
          >
            {cryptos.map((crypto) => (
              <option key={crypto.cryptoid} value={crypto.cryptoid}>
                {crypto.symbol}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add to Watchlist</button>
      </form>
    </div>
  );
};

export default AddToWatchlistForm;
