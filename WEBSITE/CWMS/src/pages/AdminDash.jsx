import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/admindash.css';
import ViewCrypto from '../components/ViewCrypto';
import UpdateCrypto from '../components/UpdateCrypto';
import AddCrypto from '../components/AddCrypto';
import DeleteCrypto from '../components/DeleteCrypto';
import Loading from '../components/loading';

const AdminDash = ({ token }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // State to manage loading

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/adminlogin');
  };

  useEffect(() => {
    // Simulating an asynchronous action with a timeout
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after a certain time (simulating data loading)
    }, 1000); // Adjust the time as needed

    // Clear the timeout if the component unmounts or before a new effect is executed
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <header>
        <nav style={{ position: 'fixed', width: '99%' }}>
          <div className="navbar">
            <h1>ADMIN DASHBOARD</h1>
            <div className="nav-links">
              <a href="#update-crypto">Update Crypto</a>
              <a href="#view-crypto">View Crypto</a>
              <a href="#add-crypto">Add Crypto</a>
              <a href="#delete-crypto">Delete Crypto</a>
              <button id="#logout" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </nav>
      </header>

      {loading ? (
        <Loading /> // Display loading component when loading is true
      ) : (
        <div className='admin-content'>
          <div id="update-crypto" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: '10% 0 0 0' }}>
            <UpdateCrypto />
          </div>
          <div id="view-crypto" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ViewCrypto />
          </div>
          <div id="add-crypto" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AddCrypto />
          </div>
          <div id="delete-crypto" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <DeleteCrypto />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDash;
