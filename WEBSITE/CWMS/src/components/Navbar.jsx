/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {isLoggedIn ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/searchcrypto">Cryptocurrencies</Link></li>
            <li><Link to="/buysell">Trade</Link></li>
            <li><Link to="/transactions">Transactions</Link></li>
            <li><Link to="/watchlist">Watchlist</Link></li>
            <li><Link to="/wallet">Wallet</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><Link to=" ">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
