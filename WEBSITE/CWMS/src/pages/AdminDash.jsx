import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/admindash.css';
import ViewCrypto from '../components/ViewCrypto';
import UpdateCrypto from '../components/UpdateCrypto';
import AddCrypto from '../components/AddCrypto';
import DeleteCrypto from '../components/DeleteCrypto';
import Loading from '../components/loading';
import AdminNavbar from '../components/AdminNavbar';

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
      <AdminNavbar />

      {loading ? (
        <Loading /> // Display loading component when loading is true
      ) : (
        <div className='admin-content'>
          <div id="add-crypto" style={{marginTop: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AddCrypto />
          </div>
          <div id="view-crypto" style={{ marginTop: '200px',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ViewCrypto />
          </div>
          <div id="update-crypto" style={{ marginTop: '500px',display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: '10% 0 0 0' }}>
            <UpdateCrypto />
          </div>
          <div id="delete-crypto" style={{ marginTop: '200px',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <DeleteCrypto />
          </div>
        
        </div>
      )}
    </div>
  );
};

export default AdminDash;
