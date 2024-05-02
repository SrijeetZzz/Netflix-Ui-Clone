import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import backgroundImage from '../assets/home.jpg';
import movieLogo from "../assets/homeTitle.webp";
import { FaPlay } from 'react-icons/fa';
import {AiOutlineInfoCircle} from "react-icons/ai";
import "./Netflix.css"
import { useDispatch } from 'react-redux';
import { getGenres } from '../store';

  function Netflix() {
    const navigate = useNavigate();

    // const dispatch = useDispatch();
    // useEffect(()=>{
    //   dispatch(getGenres());
    // })


    const [isScroled,setIsScroled] = useState(false);
    window.onscroll = ()=>{
        setIsScroled(window.scrollY > 0 ? false : true);
        return () => (window.onscroll=null);
    }

  return (
    <div className='Netflix'>
        <Navbar isScroled={isScroled}/>
        <div className="hero">
          <img src={backgroundImage} 
          alt ="background" 
          className='background-image'/>
          <div className="ncontainer">
            <div className="movielogo">
              <img src={movieLogo} alt="movieLogo"/>
            </div>
            <div className="buttons">
              <button onClick={() => navigate("/player")} >
                <FaPlay/>
                Play
              </button>
              <button>
                <AiOutlineInfoCircle/>
                More Info
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}
 export default Netflix;