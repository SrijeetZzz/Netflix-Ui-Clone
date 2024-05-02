import React from 'react'
// import styled from "styled-components"
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { useState } from 'react';
import "./Signup.css"
import {firebaseAuth} from "../utils/firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [showPassword,setshowPassword] = useState(false);
  const formStyles = {
    display: 'grid',
    gridTemplateColumns: showPassword ? '1fr 1fr' : '2fr 1fr',
  };
  const [formValues, setformValues]=useState({
    email:"",
    password:"",
  }); 
  const handleSignin = async ()=>{
    try{
      const{email,password}= formValues;
      await createUserWithEmailAndPassword(firebaseAuth,email,password)
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
    <div className="Signup-Body" >
        <BackgroundImage/>
        <div className="content">
        <Header login/>
        <div className="body ">
            <div className="text ">
                <h1>Unlimited movies, TV shows and more</h1>
                <h4>Watch anywhere. Cancel anytime</h4>
                <h6>Ready to Watch? Enter your Email to create or restart membership</h6>
            </div>
            <div className="form1 " style={formStyles}>
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
                {showPassword && (<input type='password'
                placeholder='Password' 
                name='password' 
                value={formValues.password} 
                onChange={(e) =>
                  setformValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })} 
                />)}
                {!showPassword &&(<button onClick={()=>setshowPassword(true)}>Get Started</button>)}
            </div>
            <button  onClick={handleSignin}>Sign Up</button>
        </div>
        </div>
      </div>
  )
}


// const Container = styled.div`
//   position: relative;
//   .content{
//     position: absolute;
//     top: 0;
//     background-color: rgba(0,0,0,0.5);
//     height: 100vh;
//     width: 100vw;
//     display: grid;
//     grid-template-rows: 15vh 85vh;
//   }
// `;