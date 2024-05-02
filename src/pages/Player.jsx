import React from 'react'
import { BsArrowLeft } from "react-icons/bs"
import video from "../assets/video.mp4";
import { useNavigate } from 'react-router-dom';
import "./Player.css"

export default function Player() {
    const navigate = useNavigate();
  return (
    <div className='Player-body'>
        <div className="player">
            <div className="back">
                <BsArrowLeft onClick={()=>navigate(-1)}/>
            </div>
            <video src={video} autoPlay loop contols muted></video>
        </div>
    </div>
  )
}
