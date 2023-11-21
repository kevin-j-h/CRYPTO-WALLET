import React, { useState } from 'react';
import { supabase } from '../config/supabaseClient';
import '../styles/login.css'
function SignUp2Form() {
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    dateofbirth: '',
    phoneno: '',
    address: '',
    country: '',
    state: '',
    pincode: '',
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

    const {
      firstname,
      lastname,
      dateofbirth,
      phoneno,
      address,
      country,
      state,
      pincode,
      email,
      password
    } = state;

    alert(`You are signing up with:
      First Name: ${firstname},
      Last Name: ${lastname},
      Date of Birth: ${dateofbirth},
      Phone Number: ${phoneno},
      Address: ${address},
      Country: ${country},
      State: ${state},
      Pincode: ${pincode},
      Email: ${email},
      Password: ${password}
    `);

    try {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password
      });

      if (error) {
        throw error;
      }

      // Use the received user object or perform additional operations with it

    } catch (error) {
      console.error('Error signing up:', error.message);
    }
try {
  const user = supabase.auth.user(); // Get the current authenticated user

const { data, error } = await supabase
  .from('user')
  .insert([
    {
      userid: user.id, // Using the authenticated user's ID
      firstname: firstname,
      lastname: lastname,
      dateofbirth: dateofbirth,
      phoneno: phoneno,
      address: address,
      country: country,
      state: state,
      pincode: pincode,
    },
  ])
  .select();

} catch (error) {
  
}
    for (const key in state) {
      setState({
        ...state,
        [key]: ''
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <div style={{display:'flex' ,justifyContent:'space-between', justifyItems:'center'}}>
        <input
          type="text"
          name="firstname"
          value={state.firstname}
          onChange={handleChange}
          placeholder="First Name"
          style={{width:'48%'}}
        />
        <input
          type="text"
          name="lastname"
          value={state.lastname}
          onChange={handleChange}
          placeholder="Last Name"
          style={{width:'48%'}}
        />
        </div>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        
        
        <input
          type="text"
          name="address"
          value={state.address}
          onChange={handleChange}
          placeholder="Address"
        />
         <div style={{display:'flex' ,justifyContent:'space-between', justifyItems:'center'}}>
        <input
          type="date"
          name="dateofbirth"
          value={state.dateofbirth}
          onChange={handleChange}
          placeholder="Date of Birth"
          style={{width:'45%'}}
        />
        <input
          type="tel"
          name="phoneno"
          value={state.phoneno}
          onChange={handleChange}
          placeholder="Phone Number"
          style={{width:'50%'}}
        />
        </div>
        <div style={{display:'flex' ,justifyContent:'space-between', justifyItems:'center'}}>
        <input
          type="text"
          name="country"
          value={state.country}
          onChange={handleChange}
          placeholder="Country"
          style={{width:'30%'}}
        />
        <input
          type="text"
          name="state"
          value={state.state}
          onChange={handleChange}
          placeholder="State"
          style={{width:'30%'}}
        />
        <input
          type="number"
          name="pincode"
          value={state.pincode}
          onChange={handleChange}
          placeholder="Pincode"
          style={{width:'35%'}}
        />
        </div>
       
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp2Form;
