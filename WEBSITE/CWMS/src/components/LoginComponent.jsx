// LoginComponent.jsx
import React from 'react';
import { Auth } from '@supabase/auth-ui-react'; // Import Auth from '@supabase/auth-ui-react'
import { supabase } from '../config/supabaseClient'; // Import Supabase client
import { useNavigate } from 'react-router-dom';
const LoginComponent = () => {
  const navigate = useNavigate(); // Add parentheses to useNavigate()

supabase.auth.onAuthStateChange(async (event) => {
  if (event !== 'SIGNOUT') {
    navigate('/website');
  } else {
    navigate('/');
  }
});
  return (
    <div>
      <h1>Login</h1>
      <Auth
        supabaseClient={supabase}
        providers={['google']} // Add authentication providers you want to support
        // Additional configurations as needed
      />
    </div>
  );
};

export default LoginComponent;
