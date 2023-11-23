/* eslint-disable no-unused-vars */
import "../styles/adminlogin.css";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {supabase} from '../config/supabaseClient'

const AdminLogin = ({setToken}) => {
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
    console.log(state)
        try {
            if(email!='admin123@gmail.com' && password!='admin123'){
                navigate('/adminlogin')
                throw new Error('Invalid Admin');
                
            }
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
          setToken(data)
          navigate("/admindash");
       
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
    <div className="body2">
    <div id="login-form">
      <h1>Login</h1>
      <form onSubmit={handleOnSubmit}>
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
        <input type="submit" value="Submit" />
        <Link to="/">Back to Home</Link>
      </form>
      
    </div>
    </div>
  );
};

export default AdminLogin;
