/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {supabase} from '../config/supabaseClient'
import { Link } from 'react-router-dom';
function SignInForm() {
  const navigate =useNavigate();

  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { email, password } = state;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        throw error;
      }

      console.log('Sign-in successful:', data);
      const userId = data.user.id
      // console.log(userId)
      navigate("/dashboard", { state: data }); 
    } catch (error) {
      console.error('Error signing in:', error.message);
      alert('Invalid email or password. Please try again.');
    }
    for (const key in state) {
      setState({
        ...state,
        [key]: ''
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <Link to="/">Back to Home</Link>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
