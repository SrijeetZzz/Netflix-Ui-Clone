import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link , useNavigate} from 'react-router-dom';
import {FaPowerOff, FaSearch} from "react-icons/fa"
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import "./Navbar.css"



function Navbar({isScroled}) {
const [showSearch,setShowSearch] = useState(false);
const [inputHover,setInputHover] = useState(false);

onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(!currentUser) navigate("/login");
  })
const navigate = useNavigate()
const searchClasses = "search" + (showSearch ? " show-search" : "");
const scroLled = "nscrolled" + (isScroled ? "scrolled" : "");
const links = [
    {name: "Home", link: "/"},
    {name: "TV Shows", link: "/tv"},
    {name: "Movies", link: "/movies"},
    {name: "My List", link: "/mylist"}];


  return (
    <nav className={scroLled}>

        <div className="left">
            <div className="brand">
                <img src={logo} alt='logo'/>
            </div>
            <ul className="links">
                {
                    links.map(({name,link})=>
                    {
                        return (
                            <li key={name}><Link to={link}>{name}</Link></li>
                        );
                    })
                }
            </ul>
        </div>
        <div className="right">
            <div className={searchClasses}>
                <button onFocus ={()=>setShowSearch(true)} onBlur={()=> {if(!inputHover) setShowSearch(false);}} >
                    <FaSearch/>
                </button>
                <input type="text" placeholder='Search'
                onMouseEnter={()=>setInputHover(true)}
                onMouseLeave={()=> setInputHover(false)}
                onBlur={()=> {
                    setShowSearch(false);
                    setInputHover(false);}
                }
                />
            </div>
            <button onClick={()=> signOut(firebaseAuth)}>
                <FaPowerOff/>
            </button>
        </div>
    </nav>
  )
}

export default Navbar;