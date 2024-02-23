//finished register

import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import pic3 from "../images/loginimage.png";
import pic1 from '../images/paint-logo.png';

export default function Login(){

  const nav=useNavigate(); 

  const [name,setName]=useState()
  const [designation,setDesignation]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()

  const Submit=(e)=>{
    e.preventDefault();
    axios.post("http://127.0.0.1:3001/Login",{name,designation,email,password})
    .then(result=>{console.log(result)
      nav('/')
    })
    .catch(err=>console.log(err))
  }
    
  return(
    <>
    <div className="login-full">
      
      <div className="log-image"><div>
    <div>
      <h2 className="sign-in">Register.</h2><br/>
      <div className="log-head">
      <h4>Register into </h4><img src={pic1} className='logo-login' roundedCircle></img></div>
    </div>

    <form className="form-con" onSubmit={Submit}>
<p className="input-container">
    <input type="text" placeholder="Enter your name"  className="input-field" onChange={(e)=>setName(e.target.value)}/>
    <label className="input-label" >Name</label>
</p>

<p className="input-container">
    <input type="text" placeholder="Admin or user" className="input-field" onChange={(e)=>setDesignation(e.target.value)}/>
    <label className="input-label" >Designation</label>
</p>

<p className="input-container">
    <input type="email" placeholder="Enter your email" className="input-field" onChange={(e)=>setEmail(e.target.value)}/>
    <label className="input-label" >Email</label>
</p>

<p className="input-container">
    <input type="password" placeholder="Enter your password" className="input-field" onChange={(e)=>setPassword(e.target.value)} />
    <label className="input-label" >Password</label>
</p>

<button className="cta">
  <span className="hover-underline-animation"> Register </span>
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
      <img className="log-pic animated-image" src={pic3}></img>
      
    </div></div>

    <div className="login-but-con">
      <h4>Already have an account?</h4>

      <button className="cta" onClick={()=>nav('/register')}>
  <span className="hover-underline-animation"> Sign in </span>
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
    </div>
    

    

    </div></>
  )
}


















