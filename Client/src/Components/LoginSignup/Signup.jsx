// import React from 'react'

// const Signup = () => {
//   return (
//     <div>
//       hi Signup
//     </div>
//   )
// }

// export default Signup
import React, { useState } from 'react';
import './LoginSignup.css'; // You can create a CSS file for styling

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Signing up...');
  };

  return (
    <div className="signup-container">
      <h2>Signup and Start Learning</h2>
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="subscribe"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="subscribe">
            Send me special offers, personalized recommendations, and learning tips
          </label>
        </div>

        <button className='button' type="button" onClick={handleSignup}>
          Sign up
        </button>
      </form>

      <p>By Signing up, you agree to our Terms of Use and Privacy Policy</p>

      <hr />

      <p>Already have an account? <a href="/login">Log in</a></p>
    </div>
  );
};

export default Signup;

