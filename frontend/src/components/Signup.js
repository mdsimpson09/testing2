import React, { useState } from 'react';
import { DropDownList } from "@progress/kendo-react-dropdowns";
import "./Signup.css"

const categories = ["He/Him", "She/Her", "They/Them", "Other"]

const RegisterPlayer = ( { onRegistrationSuccess }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    Date_of_birth: '', // Make sure to handle date input appropriately
    preferred_pronouns: '',
    zip_code: '',
    photo: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegistration = async () => {
    try {
      const response = await fetch('/api/registerPlayer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Player registered successfully:', data.player);
        // Handle successful registration, e.g., redirect the user
        onRegistrationSuccess();
      } else {
        console.error('Error registering player:', response.statusText);
        // Handle registration error
      }
    } catch (error) {
      console.error('Error registering player:', error.message);
      // Handle registration error
    }
    
  };

  return (
    <div className="container">
      <h2>Player Registration</h2>
      <div className="form-group">
      <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          onChange={handleChange}
          value={formData.first_name || ''}
        />
            <label htmlFor="first_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          onChange={handleChange}
          value={formData.last_name || ''}
        />
            <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={formData.username || ''}
        />
            <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={handleChange}
          value={formData.password || ''}
        />
            <label htmlFor="date_of_birth">Date of Birth</label>
        <input
          type="date"
          id="date"
          name="date_of_birth"
          onChange={handleChange}
          value={formData.Date_of_birth || ''}
        />

      
      
            <label htmlFor="zip_code">Zip Code</label>
        <input
          type="text"
          id="zip_code"
          name="zip_code"
          onChange={handleChange}
          value={formData.zip_code || ''}
        />
            <label htmlFor="photo">Insert photo URL</label>
        <input
          type="text"
          id="photo"
          name="photo"
          onChange={handleChange}
          value={formData.photo || ''}
        />

      </div>

      <div className="component-container">
              <form className="k-form" onSubmit={(e) => e.preventDefault()}>
                <fieldset>
                  <div>Pronouns</div>
                  <DropDownList
                    style={{
                      width: "300px",
                    }}
                    data={categories}
                    defaultValue="Select Pronouns"
                  />
                </fieldset>
              </form>
              </div>

      {/* Render your registration form with input fields */}
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default RegisterPlayer;