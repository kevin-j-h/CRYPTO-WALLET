import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dash = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    // For example, clear tokens or user session
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      {/* Add your dashboard content here */}
    </div>
  );
};

export default Dash;
