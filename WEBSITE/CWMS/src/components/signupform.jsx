/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { supabase } from '../config/supabaseClient';
import { Link, useNavigate } from 'react-router-dom';

function SignUpForm() {
  const navigate = useNavigate();
  const [ustate, setUstate] = useState({
    firstname: '',
    lastname:'',
    email: '',
    password: '',
    address:'',
    dateofbirth:'',
    country:'',
    state:'',
    pincode:'',
    phoneno:''
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setUstate({
      ...ustate,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { firstname,
      lastname,
      dateofbirth,
      email,
      password,
      phoneno,
      address,
      country,
      state,
      pincode,
       } = ustate;
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
    
    try{
      const { data, error } = await supabase.auth.signUp({
        email:email,
        password: password,
        
    })

    const { err } = await supabase
    .from('user')
    .insert({
      userid :data.user.id,
      firstname :firstname,
      lastname :lastname,
      dateofbirth :dateofbirth,
      phoneno :phoneno,
      address :address,
      country :country,
      state :state,
      pincode :pincode
      })
      if (err) {
        throw err;
      }
    if (error) {
      throw error;
    }
    navigate('/dashboard', {state: data})
    }catch(error){
console.error('Error signing up:', error.message);
    }
  

    for (const key in ustate) {
      setUstate({
        ...ustate,
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
          value={ustate.firstname}
          onChange={handleChange}
          placeholder="First Name"
          style={{width:'48%'}}
        />
        <input
          type="text"
          name="lastname"
          value={ustate.lastname}
          onChange={handleChange}
          placeholder="Last Name"
          style={{width:'48%'}}
        />
        </div>
        <input
          type="email"
          name="email"
          value={ustate.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={ustate.password}
          onChange={handleChange}
          placeholder="Password"
        />
        
        
        <input
          type="text"
          name="address"
          value={ustate.address}
          onChange={handleChange}
          placeholder="Address"
        />
         <div style={{display:'flex' ,justifyContent:'space-between', justifyItems:'center'}}>
        <input
          type="date"
          name="dateofbirth"
          value={ustate.dateofbirth}
          onChange={handleChange}
          placeholder="Date of Birth"
          style={{width:'45%'}}
        />
        <input
          type="tel"
          name="phoneno"
          value={ustate.phoneno}
          onChange={handleChange}
          placeholder="Phone Number"
          style={{width:'50%'}}
        />
        </div>
        <div style={{display:'flex' ,justifyContent:'space-between', justifyItems:'center'}}>
        <input
          type="text"
          name="country"
          value={ustate.country}
          onChange={handleChange}
          placeholder="Country"
          style={{width:'30%'}}
        />
        <input
          type="text"
          name="state"
          value={ustate.state}
          onChange={handleChange}
          placeholder="State"
          style={{width:'30%'}}
        />
        <input
          type="number"
          name="pincode"
          value={ustate.pincode}
          onChange={handleChange}
          placeholder="Pincode"
          style={{width:'35%'}}
        />
        </div>
        <Link to="/">Back to Home</Link>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
