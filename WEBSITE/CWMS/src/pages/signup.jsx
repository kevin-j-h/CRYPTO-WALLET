import React, { useState } from 'react';
import { supabase } from '../config/supabaseClient'; // Import your Supabase client

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    phoneNumber: '',
    address: '',
    country: '',
    state: '',
    pincode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDateOfBirth = formData.dateOfBirth ? new Date(formData.dateOfBirth).toISOString().split('T')[0] : null;
    const formattedPincode = Number(formData.pincode);
    const formattedPhoneNo = Number(formData.phoneNumber);
   
    if (formData.password !== formData.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const { data, error } = await supabase.from('user').insert([
        {
          userid: supabase.auth.getUser().id,
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          password: formData.password,
          confirmPassword: '',
          dateofbirth: formData.formattedDateOfBirth,
          phoneno: formData.formattedPhoneNo,
          address: formData.address,
          country: formData.country,
          state: formData.state,
          pincode: formData.formattedPincode,
        },
      ]);
      if (error) {
        throw error;
      }
      console.log('User data inserted:', data);
      // Clear the form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
        phoneNumber: '',
        address: '',
        country: '',
        state: '',
        pincode: '',
      });
    } catch (error) {
      console.error('Error inserting user data:', error.message);
    }
  };
  

  return (
    <div>
      <h2>Signup</h2>
      <form className="signup-form"onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
    Email:
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      required
    />
  </label>
  <label>
    Password:
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      required
    />
  </label>
  <label>
    Confirm Password:
    <input
      type="password"
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
      required
    />
  </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateofbirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneno"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </label>
        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </label>
        <label>
          Pincode:
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

