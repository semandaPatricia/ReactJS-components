import { useState } from 'react'

import './App.css'

function App() {
  const [values, setValues] = useState({
    firstName:" " ,
    lastName: " " ,
    email :" ",

  });

  const [submitted ,setSubmitted] = useState(false);
  const [valid ,setValid] = useState( false)

  const handleFirstNameInputChange = (event) => {
    setValues ({...values ,firstName : event.target.value})
  };
  const handleLastNameInputChange = (event) => {
    setValues ({...values ,lastName : event.target.value})
  };
  const handleEmailInputChange = (event) => {
    setValues ({...values ,firstName : event.target.value})
  };

  const handleSubmit = (event) => {
   event.preventDefault ();
   if (values.firstName &&values .lastName && values .email) {
    setValid(true);
    
   }
   setSubmitted(true);
  };


  return (
  <div className='form-container'>
        <form className="register-form">
        {/* Uncomment the next line to show the success message */}
        { submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null }
        <input
        onChange={handleFirstNameInputChange}
        value={values.firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        { submitted && ! values .firstName  ? <span id="first-name-error">Please enter a first name</span> : null }
        <input
        onChange={handleLastNameInputChange}
         value={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        { submitted && !values .lastName ?<span id="last-name-error">Please enter a last name</span> : null }
        <input
        onChange={handleEmailInputChange}
         value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        { submitted && !values .email ? <span id="email-error">Please enter an email address</span> : null }
        <button className="btn" type="submit">
          Register
        </button>
      </form>
  </div>
  )
}

export default App


