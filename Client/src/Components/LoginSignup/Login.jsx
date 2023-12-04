// import React from 'react'

// const Login = () => {
//   return (
//     <div>
//       hi login
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import './LoginSignup.css'; // You can create a CSS file for styling
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa'; // Import icons from react-icons library

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in...');
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot password...');
  };

  return (
    <div className="login-container">
      <div className="social-login">
        <div className="social-button" onClick={() => console.log('Google login')}>
          <FaGoogle />
          <span>Continue with Google</span>
        </div>

        <div className="social-button" onClick={() => console.log('Facebook login')}>
          <FaFacebook />
          <span>Continue with Facebook</span>
        </div>

        <div className="social-button" onClick={() => console.log('Apple login')}>
          <FaApple />
          <span>Continue with Apple</span>
        </div>
      </div>

      <form>
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

        <button className='button' type="button" onClick={handleLogin}>
          Log in
        </button>
      </form>

      <p>
        <span>or</span> <a href="#" onClick={handleForgotPassword}>Forget Password</a>
      </p>

      <hr />

      <p>
        Don't have an account? <a href="/signup">Signup</a>
      </p>
    </div>
  );
};

export default Login;

