import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/adminlogin');
  };

  return (
    <header>
      <nav style={{ position: 'fixed', width: '99%',smooth:'true',duration:'500'}}>
        <div className="navbar">
          <h1>ADMIN DASHBOARD</h1>
          <div className="nav-links">
 

            <a href="#add-crypto">Add Crypto</a>
            <a href="#view-crypto">View Crypto</a>
            <a href="#update-crypto">Update Crypto</a>
            <a href="#delete-crypto">Delete Crypto</a>
            <button id="#logout" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AdminNavbar;
