// LoginComponent.jsx
import React from 'react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { supabase } from '../config/supabaseClient';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const LoginComponent = () => {

  const navigate = useNavigate(); // Add parentheses to useNavigate()

  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== 'SIGNOUT') {
      navigate('/home');
    } else {
      navigate('/');
    }
  });
  
  return(
    <div>
      <h1>Login</h1>
      <Auth 
      supabaseClient={supabase}
      appearance={{theme: ThemeSupa}}
      theme="dark"
      providers={["google"]}
      />
    </div>
  );
  }
 

export default LoginComponent;
