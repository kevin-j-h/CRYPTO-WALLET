/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "../styles/send.css";

function SendReceiveCrypto() {
  const [destination, setDestination] = useState({ address: '', amount: 0, crypto: '' });
  const [loading, setLoading] = useState(false);

  const handleDestinationChange = (event) => {
    setDestination({ ...destination, address: event.target.value });
  };

  const handleAmountChange = (event) => {
    setDestination({ ...destination, amount: event.target.value });
  };

  const handleCryptoChange = (event) => {
    setDestination({ ...destination, crypto: event.target.value });
  };

  const handleSend = async (event) => {
    event.preventDefault();
    setLoading(true);
    // Code for sending tokens using the selected cryptocurrency
    setLoading(false);
  };

  return (
    <div className='walletcont'>

    <div className="send-receive-container">
      <h2>Send/Receive Crypto</h2>
      <div className="send-receive-form">
        <form onSubmit={handleSend}>
          <select value={destination.crypto} onChange={handleCryptoChange}>
            <option value="">Select a cryptocurrency</option>
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="DODGE">Dogecoin (DODGE)</option>
          </select>
          <input type="text" value={destination.address} onChange={handleDestinationChange} placeholder="Enter destination address" style={{ width: '250px' }} />
          <input type="number" value={destination.amount} onChange={handleAmountChange} placeholder="Enter the amount" style={{ width: '150px' }} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    
    </div>
  );
}

export default SendReceiveCrypto;
