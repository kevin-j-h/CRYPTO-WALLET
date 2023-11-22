// import React, { useState, useEffect } from 'react';
// import { supabase } from '../config/supabaseClient';
// import '../styles/updatecrypto.css';

// const CryptoUpdate = () => {
//   const [cryptoUpdate, setCryptoUpdate] = useState({
//     cryptoid:'',
//     cryptoname: '',
//     cryptoprice: '',

    
//   });

//   const [cryptoList, setCryptoList] = useState([]);

//   useEffect(() => {
//     async function fetchCryptoList() {
//       try {
//         const { data, error } = await supabase
//           .from('cryptocurrency')
//           .select('cryptoid, cryptoname, symbol');

//         if (error) {
//           throw error;
//         }

//         setCryptoList(data);
//       } catch (error) {
//         console.error('Error fetching crypto list:', error.message);
//       }
//     }

//     fetchCryptoList();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCryptoUpdate({
//       ...cryptoUpdate,
//       cryptoid: value, // assuming 'value' contains the cryptoid
//       [name]: value
//     });
//   };
  

//   const handleUpdate = async () => {
//     try {
//       const { data, error } = await supabase
//         .from('cryptocurrency')
//         .update({ cryptoprice: cryptoUpdate.cryptoprice })
//         .eq('cryptoid', cryptoUpdate.cryptoid)
//         .select();
  
//       if (error) {
//         throw error;
//       }
  
//       console.log('Cryptocurrency price updated:', data);
//     } catch (error) {
//       console.error('Error updating cryptocurrency price:', error.message);
//     }
//   };

//   return (
//     <div className="crypto-update-container">
//       <h2>Update Cryptocurrency Data</h2>
//       <div className="update-fields">
//         <select name="symbol" onChange={handleChange} value={cryptoUpdate.symbol}>
//           <option value="">Select a cryptocurrency</option>
//           {cryptoList.map((crypto) => (
//             <option key={crypto.cryptoid} value={crypto.cryptoid}>
//               {crypto.cryptoname} - {crypto.symbol}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           name="cryptoname"
//           value={cryptoUpdate.cryptoname}
//           onChange={handleChange}
//           placeholder="Enter Cryptoname"
//         />
//         <input
//           type="number"
//           name="cryptoprice"
//           value={cryptoUpdate.cryptoprice}
//           onChange={handleChange}
//           placeholder="Enter Cryptoprice"
//         />
        
//         <button onClick={handleUpdate}>Update</button>
//       </div>
//     </div>
//   );
// };

// export default CryptoUpdate;

import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';

const CryptoUpdate = () => {
  const [cryptoUpdate, setCryptoUpdate] = useState({
    cryptoid: '',
    cryptoprice: '',
  });

  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    async function fetchCryptoList() {
      try {
        const { data, error } = await supabase
          .from('cryptocurrency')
          .select('cryptoid, cryptoname');

        if (error) {
          throw error;
        }

        setCryptoList(data);
      } catch (error) {
        console.error('Error fetching crypto list:', error.message);
      }
    }

    fetchCryptoList();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCryptoUpdate({
      ...cryptoUpdate,
      [name]: value
    });
  };

  const handleUpdate = async () => {
    try {
      const { data, error } = await supabase
        .from('cryptocurrency')
        .update({ cryptoprice: cryptoUpdate.cryptoprice })
        .eq('cryptoid', cryptoUpdate.cryptoid)
        .select();

      if (error) {
        throw error;
      }

      console.log('Cryptocurrency price updated:', data);
    } catch (error) {
      console.error('Error updating cryptocurrency price:', error.message);
    }
  };

  return (
    <div className="crypto-update-container">
      <h2>Update Cryptocurrency Data</h2>
      <div className="update-fields" >
        <select name="cryptoid" onChange={handleChange} value={cryptoUpdate.cryptoid}>
          <option value="">Select a cryptocurrency</option>
          {cryptoList.map((crypto) => (
            <option key={crypto.cryptoid} value={crypto.cryptoid}>
              {crypto.cryptoname}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="cryptoprice"
          value={cryptoUpdate.cryptoprice}
          onChange={handleChange}
          placeholder="Enter Cryptoprice"
          
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default CryptoUpdate;
