// LoginComponent.jsx
import React, { useState } from 'react';
import { supabase } from '../config/supabaseClient'; // Import Supabase client
import { Link } from 'react-router-dom'; // If using React Router for navigation

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { user, error } = await supabase.auth.signIn({ email, password });

      if (error) {
        // Handle login error (display error message, etc.)
        console.error('Error signing in:', error.message);
        return;
      }

      // Handle successful login
      console.log('Logged in successfully:', user);
    } catch (error) {
      // Handle other errors
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/signup">Signup</Link> {/* Redirect to signup page */}
      </p>
    </div>
  );
};

export default LoginComponent;
