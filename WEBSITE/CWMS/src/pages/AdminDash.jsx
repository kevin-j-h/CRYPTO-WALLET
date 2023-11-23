/* eslint-disable no-unused-vars */
//admin dash
import React,{ useEffect, useState }from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/admindash.css'
import ViewCrypto from '../components/ViewCrypto';
import UpdateCrypto from '../components/UpdateCrypto'
import AddCrypto from '../components/AddCrypto';
import DeleteCrypto from '../components/DeleteCrypto';

// eslint-disable-next-line react/prop-types
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
      <nav style={{position:'fixed',width:'99%'}}>
        <div className="navbar">
          <h1>ADMIN DASHBOARD</h1>
          <div className="nav-links">
            {/* <a href="#manage-users">Manage Users</a> */}
            <a href="#update-crypto">Update Crypto</a>
            <a href="#view-crypto">View Crypto</a>
            <a href="#add-crypto">Add Crypto</a>
            <a href="#delete-crypto">Delete Crypto</a>
            <button id="#logout" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>
    </header>
<div id="update-crypto" style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',margin:'10% 0 0 0'}}>
  <UpdateCrypto />
</div>
<div id="view-crypto"style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  <ViewCrypto />
</div>
<div id="add-crypto"style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  <AddCrypto />
</div>
<div id="delete-crypto"style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  <DeleteCrypto />
</div>

</div>
  
  


  );
};

export default AdminDash;
