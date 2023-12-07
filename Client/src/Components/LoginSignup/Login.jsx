import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

import './LoginSignup.css'; // You can create a CSS file for styling
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa'; // Import icons from react-icons library
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const Navi = useNavigate();
  const notify= () =>toast.success("Login Successfully")

  const [formData, setFormData] = useState({
    email:"",
    name:"",
    password: "",
  });
  const [data, setdata] = useState();
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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const url = "http://localhost:7000/login";
const url="https://udemyclone-rx0k.onrender.com/login"

  
   
    axios.post(url, formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.user) {
          const email = response.data.user[0];
          // const name=response.data.user;
          const token = response.data.token;
          const usersid = response.data.userid;
  
          // Set tokens in localStorage
          localStorage.setItem("token", token);
          localStorage.setItem("userid", usersid);
          localStorage.setItem("email", email);
          notify("Login Successfully")

          // window.alert("login Successfully")
          Navi("/"); 

        
          
          
        } else {
          toast.warn(response.data.msg)
          // setdata(response.data.msg);
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error.message);
        toast.error(`Error: ${error.message}`, {
          position: "top-center",
        });
      });
  };
  return (
    <>
    <div className="login-container">
      <h3>Log in to your Udemy account</h3>
      <div className="social-login">
        <div className="social-button" >
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

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label htmlFor="email">Email</label> */}
          <input
          name='email'
            type="email"
            id="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="password">Password</label> */}
          <input
          name='password'
            type="password"
            value={formData.password}
            id="password"
            placeholder='Password'
        
            onChange={handleInputChange}
            required
          />
        </div>

        <button className='button' type="submit" >
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
<ToastContainer/>

    </>
  );
};

export default Login;
