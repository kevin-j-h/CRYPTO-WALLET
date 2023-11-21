import React, { useState } from 'react';
import CryptoBuyTable from './CryptoBuyTable';

function CryptoBuySell() {
  const [action, setAction] = useState('');
  const [crypto, setCrypto] = useState('');
  const [amount, setAmount] = useState(''); 

  const handleCryptoChange = (event) => {
    setCrypto(event.target.value);
  };

  const handleActionChange = (event) => {
    setAction(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`You want to ${action} ${amount} of ${crypto}`);
  };

  return (
    <section className="buysell">
      <h1>Buy/Sell Cryptocurrencies</h1>
      <CryptoBuyTable />
      <div className="buysell-list">
        <div className='crypto1'>
          <p>{crypto}</p>
          <form onSubmit={handleSubmit}>
            <select value={crypto} onChange={handleCryptoChange}>
              <option value="">Select a cryptocurrency</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="DODGE">DODGE</option>
            </select>
            <input type="text" value={amount} onChange={handleAmountChange} placeholder="Enter the amount" />
            <div className="custom-select">
              <select value={action} onChange={handleActionChange}>
                <option value="">Select an action</option>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
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
