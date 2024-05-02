import React from 'react'
import "./Background.css"
import background from "../assets/login.jpg";


export default function BackgroundImage() {
  return (
    <div className="Background-Body">
      <img src={background} alt="background"/>
    </div>      
  )
}


// const Container = styled.div`
//   height: 100vh;
//   width: 100vw;
//   img{
//     height: 100vh;
//     width: 100vw;
//   }
// `;