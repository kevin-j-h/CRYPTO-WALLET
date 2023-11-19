/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/Website.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
// import SearchComponent from './Search';
import Dashboard from '../pages/Dashboard'

function Website() {
  return (
    <div className="website-container">
      <header className="header">
        <div className="logo">
          <h1>Crypto X</h1>
          <Navbar />
        </div>
      </header>

      
      <Dashboard />
      <section className="wallet">
        <div className='card'>
          <h2>Your Wallet</h2>
          <div className="wallet-info">
            <p><strong>Balance:</strong> 0.00 BTC</p>
            <p><strong>Address:</strong> Your Wallet Address</p>
          </div>
          <div className="wallet-actions">
            <a href="#" className="cta-button">Send BTC</a>
            <a href="#" className="cta-button">Receive BTC</a>
          </div>
          <br></br>
          <Link to="/wallet" className="view-button">View</Link>
        </div>
      </section>

      <section className="search">
      <div className='card'>
        <h2>View Cryptocurrencies</h2>
        <br></br>
        <Link to="/searchcrypto" className="view-button">View</Link>
        </div>
      </section>

      <section className="buy-sell">
        <div className='card'>
          <h2>Buy/Sell Cryptocurrencies</h2>
          <div className="crypto-list">
            <h4>btc</h4>
            <h4>eth</h4>
            <h4>dodge</h4>
          </div>
          <Link to="/buysell" className="view-button">View</Link>
        </div>
      </section>

      <section className="transactions">
        <div className='card'>
          <h2>Recent Transactions</h2>
          <h4>transaction1</h4>
          <h4>transaction2</h4>
          <h4>transaction3</h4>
          <h4>transaction4</h4>
          <h4>transaction5</h4>
          <br></br>
          <Link to="/transactions" className="view-button">View</Link>
        </div>
      </section>

      <section className="watchlist">
        <div className='card'>
          <h2>Your Watchlist</h2>
          <h4>watchlist icon</h4>
          <h4>watchlist icon</h4>
          <h4>watchlist icon</h4>
          <br></br>
          <Link to="/watchlist" className="view-button">View</Link>
        </div>
      </section>

      
      <footer className="footer">
        <p>Crypto Wallet</p>
      </footer>
    </div>
  );
}

export default Website;
