/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/Website.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

function Website() {
  return (
    <div className="website-container">

      <header className="header">
        <div className="logo">
          <h1>Crypto X</h1>
          <Navbar /> {}
        </div>
      </header>

      <section className="hero">
        <h2>Welcome MR.X</h2>
        <p>Cryptocurrency Wallet Is Active.</p>
        <br></br>
        <a href="#" className="cta-button">WALLET ID</a>
      </section>

      <section className="search">
        <h2>Search for Cryptocurrencies</h2>
        <form className="search-form">
          <input type="text" placeholder="Enter cryptocurrency name or symbol" />
          <button type="submit">Search</button>
        </form>
        <br></br>
        <a href="#" className="view-button">View</a>
      </section>

      <section className="buy-sell">
        <h2>Buy/Sell Cryptocurrencies</h2>
        <div className="crypto-list">
          <h4>btc</h4>
          <h4>eth</h4>
          <h4>dodge</h4>
        </div>
        <a href="#" className="view-button">View</a>
      </section>

      <footer className="footer">
        <p>Crypto Wallet</p>
      </footer>
    </div>
  );
}

export default Website;