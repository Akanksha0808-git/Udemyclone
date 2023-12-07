import React, { useState } from 'react';
import axios from "axios";
import './LoginSignup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate  } from "react-router-dom";
import Footer from '../Footer/Footer';

const Signup = () => {
  const nav = useNavigate();
  const notify = () => toast.success("User registered Successfully");
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [data, setdata] = useState();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // const handleSignup = () => {
  //   // Handle signup logic here
  //   console.log('Signing up...');
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
const url="https://udemyclone-rx0k.onrender.com/signup"
// const url="http://localhost:7000/signup"

    console.log(formData);
    axios.post(url, formData)
      .then((res) => {
        if (res.data.user) {
          setFormData({
            name: "",
            email: "",
            password: "",
          });
          notify("user registered successfully");
          nav("/login");
        } else {
          setdata(res.data.msg);
        }
      })
      .catch((error) => {
        console.error("Error registering:", error);
      });
        
};

  return (
    <>
    <ToastContainer/>

    <div className="signup-container">
      <h3>Signup and Start Learning</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label htmlFor="fullName">Full Name</label> */}
          <input
            type="text"
            id="fullName"
            name='name'
            placeholder='Full Name'
            value={formData.name} onChange={handleInputChange} required
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="email">Email</label> */}
          <input
          name='email'
            type="email"
            id="email"
            placeholder='Email'
            value={formData.email} onChange={handleInputChange} required
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            id="password"
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="subscribe"
            className='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="subscribe">
            Send me special offers, personalized <br /> recommendations, and learning tips.
          </label>
        </div>

        <button className='button' type="submit" >
          Sign up
        </button>
      </form>

      <p>By Signing up, you agree to our Terms of Use and Privacy Policy</p>

      <hr />

      <p>Already have an account? <a href="/login">Log in</a></p>
    </div>

    </>
  );
};

export default Signup;

