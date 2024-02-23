import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import pic1 from '../images/paint-logo.png';
import pic2 from '../images/young-woman-glasses-works-laptop-while-sitting-table.jpg';


export default function Register(){
  const nav=useNavigate(); 


  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  

const Submit  = async (e) => {
  e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('User found.');
        // Implement authentication logic here
      } else {
        console.log('User not found.');
        // Handle the case where the user is not found
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };












    
  return(
    <>
    <div className="login-full">
      
      <div className="log-image"><div>
    <div>
      <h2 className="sign-in">Welcome Back.</h2><br/>
      <div className="log-head">
      <h4>Login into </h4><img src={pic1} className='logo-login' roundedCircle></img></div>
    </div>

    <form className="form-con" onSubmit={Submit}>

<p className="input-container">
    <input type="email" placeholder="Enter your email" className="input-field" onChange={(e)=>setEmail(e.target.value)}/>
    <label className="input-label" >Email</label>
</p>

<p className="input-container">
    <input type="password" placeholder="Enter your password" className="input-field" onChange={(e)=>setPassword(e.target.value)}/>
    <label className="input-label">Password</label>
</p>

<button className="cta">
  <span className="hover-underline-animation"> Login </span>
  <svg
    id="arrow-horizontal"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="10"
    viewBox="0 0 46 16"
  >
    <path
      id="Path_10"
      data-name="Path 10"
      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
      transform="translate(30)"
    ></path>
  </svg>
</button>
    </form></div>
    <div className="image-container ">
      <img className="log-pic animated-image" src={pic2}></img>
      
    </div></div>
    </div></>
  )
}