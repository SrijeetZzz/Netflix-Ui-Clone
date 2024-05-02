import React from 'react'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { useState } from 'react';
import"./Login.css"
import {firebaseAuth} from "../utils/firebase-config";
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  // const formStyles = {
  //   display: 'grid',
  //   gridTemplateColumns: showPassword ? '1fr 1fr' : '2fr 1fr',
  // };
  const [formValues, setformValues]=useState({
    email:"",
    password:"",
  }); 
  const handleLogin = async ()=>{
    try{
      const{email,password}= formValues;
      await signInWithEmailAndPassword(firebaseAuth,email,password)
    }
    catch(err){
      console.log(err);
    }
  }  
  const navigate = useNavigate()
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/");
  })
  
  return (
    <div className="Login-Body" >
      <BackgroundImage/>
      <div className="content1">
        <Header/>
        <div className="form-container1">
          <div className="form">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container1">
            <input 
                type='email' 
                placeholder='Email Address' 
                name='email' 
                value={formValues.email} 
                onChange={(e) =>
                  setformValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }/>
                <input type='password'
                placeholder='Password' 
                name='password' 
                value={formValues.password} 
                onChange={(e) =>
                  setformValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })} 
                />
                <button onClick={handleLogin}>Log In</button>
            </div>
          </div>
        </div>
      </div>

    </div>
);
}