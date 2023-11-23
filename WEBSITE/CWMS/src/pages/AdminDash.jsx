/* eslint-disable no-unused-vars */
//admin dash
import React,{ useEffect, useState }from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/admindash.css'
import ViewCrypto from '../components/ViewCrypto';
import UpdateCrypto from '../components/UpdateCrypto'

const AdminDash = ({token}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    sessionStorage.removeItem('token')
    // For example, clear tokens or user session
    navigate('/adminlogin'); // Redirect to login page after logout
  };

  return (
<div>
    <header>
      <nav>
        <div className="navbar">
          <h1>ADMIN DASHBOARD</h1>
          <div className="nav-links">
            <a href="#manage-users">Manage Users</a>
            <a href="#update-crypto">Update Crypto</a>
            <button id="#logout" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>
    </header>
<div id="update-crypto" style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',margin:'10% 0 0 0'}}>
  <UpdateCrypto />
</div>
<div id="viewcrypto"style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  <ViewCrypto />
</div>

</div>
    // Other content of the admin dashboard
  


  );
};

export default AdminDash;
