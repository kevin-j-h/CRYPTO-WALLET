/* eslint-disable no-unused-vars */     
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {
  const navigate = useNavigate();
  return (
    
<header className="header1" style={{backgroundColor:'black',position:'fixed',width:"100%", height:'100px'}}>
  <div className='header'></div>
  <div className='Logbtn'><button style={{position:'relative',marginTop:'5px'}} onClick={()=> navigate('/login')}>Logout</button></div>

        <div className="logo" style={{display:'flex'}}>
          <h1 style={{position:'relative',marginLeft:'45%'}}>Crypto X </h1>
          </div>
          <div><nav className="navbar" >
            <ul className="nav-links"> </ul>
          </nav></div>
          
        
      </header>
          
            );
}

export default Navbar;

{/* <li><Link to="/dashboard">Home</Link></li>
              <li><Link to="/searchcrypto">Cryptocurrencies</Link></li>
              <li><Link to="/buysell">Trade</Link></li>
              <li><Link to="/transactions">Transactions</Link></li>
              <li><Link to="/watchlist">Watchlist</Link></li>
              <li><Link to="/wallet">Wallet</Link></li> */}