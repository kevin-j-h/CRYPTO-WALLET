import React, { useState } from 'react';

function SignUp() {
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    dateofbirth: '',
    phoneno: '',
    address: '',
    country: '',
    state: '',
    pincode: ''
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const {
      firstname,
      lastname,
      dateofbirth,
      phoneno,
      address,
      country,
      state,
      pincode
    } = state;

    // Here, you can perform the necessary actions like saving the user data to your database (Supabase, in this case)
    alert(`You are signing up with:
      First Name: ${firstname},
      Last Name: ${lastname},
      Date of Birth: ${dateofbirth},
      Phone Number: ${phoneno},
      Address: ${address},
      Country: ${country},
      State: ${state},
      Pincode: ${pincode}
    `);

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
        {/* ... (social buttons or other elements) ... */}
        <span>or use your email for registration</span>
        <input
          type="text"
          name="firstname"
          value={state.firstname}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastname"
          value={state.lastname}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="date"
          name="dateofbirth"
          value={state.dateofbirth}
          onChange={handleChange}
          placeholder="Date of Birth"
        />
        <input
          type="tel"
          name="phoneno"
          value={state.phoneno}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <input
          type="text"
          name="address"
          value={state.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <input
          type="text"
          name="country"
          value={state.country}
          onChange={handleChange}
          placeholder="Country"
        />
        <input
          type="text"
          name="state"
          value={state.state}
          onChange={handleChange}
          placeholder="State"
        />
        <input
          type="number"
          name="pincode"
          value={state.pincode}
          onChange={handleChange}
          placeholder="Pincode"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
