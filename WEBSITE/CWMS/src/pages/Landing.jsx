/* eslint-disable no-unused-vars */   
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/landing.css'; // Make sure this path is correct

const Landing = () => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/login');
  };

  const handleAdminClick = () => {
    navigate('/adminlogin');
  };

  return (
    <div className='body1'>
    <div className="landing-container">
      <h1 className="landing-title">Welcome To CryptoX</h1>
      <h6 className="landing-subtitle">Your Secure Wallet.</h6>
      <div className="button-container">
        <button onClick={handleUserClick}>User</button>
        <button onClick={handleAdminClick}>Admin</button>
      </div>
    </div>
    </div>
  );
};

export default Landing;
