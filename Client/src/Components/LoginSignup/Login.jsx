// import React, { useState } from 'react';
// import './LoginSignup.css'; // You can create a CSS file for styling
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// const Signup = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isChecked, setIsChecked] = useState(false);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   const handlePasswordVisibilityToggle = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   const handleSignup = () => {
//     // Handle signup logic here
//     console.log('Signing up...');
//   };

//   return (
//     <div className="signup-container">
//       <h3>Log in to your Udemy Account</h3>
//       <form>
//         <div className="form-group">
//           <label htmlFor="fullName">Full Name</label>
//           <input
//             type="text"
//             pla
//             id="fullName"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <div className="password-input-container">
//             <input
//               type={isPasswordVisible ? 'text' : 'password'}
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {isPasswordVisible ? (
//               <FaEyeSlash onClick={handlePasswordVisibilityToggle} />
//             ) : (
//               <FaEye onClick={handlePasswordVisibilityToggle} />
//             )}
//           </div>
//         </div>

//         <div className="checkbox-group">
//           <input
//             type="checkbox"
//             id="subscribe"
//             checked={isChecked}
//             onChange={handleCheckboxChange}
//           />
//           <label htmlFor="subscribe">
//             Send me special offers, personalized recommendations, and learning tips
//           </label>
//         </div>

//         <button className="button" type="button" onClick={handleSignup}>
//           Sign up
//         </button>
//       </form>

//       <p>By Signing up, you agree to our Terms of Use and Privacy Policy</p>

//       <hr />

//       <p>
//         Already have an account? <a href="/login">Log in</a>
//       </p>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
// import {Link} from "react-router-dom"
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
      <h3>Log in to your Udemy account</h3>
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
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            id="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            id="password"
            placeholder='Password'
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
