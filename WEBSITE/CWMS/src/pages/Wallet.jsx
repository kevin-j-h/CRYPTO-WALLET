/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/wallet.css";
function Wallet() {
  const location = useLocation();
  // console.log(location);
  const walletDetails = location.state;
  console.log(walletDetails)
  
  return (
    <div>
    {/* <Navbar /> */}
    <div className='bodyy'>
    <section className="wallet1">
        <h2>Your Wallet</h2>
        <div className="wallet-info">
          <p><strong>Balance:</strong> 0.00 BTC</p>
          <p><strong>Address:</strong> Your Wallet Address</p>
        </div>
        <div className="wallet1-actions">
        <Link to="/sendreceive" className="cta-button">Send BTC</Link>
          <a href="#" className="cta-button">Receive BTC</a>
        </div>
        <br></br>

      </section>
      </div>
      </div>
  );
}

export default Wallet;

