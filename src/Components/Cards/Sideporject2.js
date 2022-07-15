import React from 'react'
import './cards.css'
import { BsGithub } from "react-icons/bs";

const Projectcard = ({slideImageurl, subtit, title, github, liveurl, buttonclicked}) => {
    console.log(`obaloluwa:${slideImageurl}`)

    const registeredClick = () =>{
        buttonclicked(true)
    }
  return (
    <div className='coursecard-container-blog' onClick={registeredClick}>
        <div className='imgdiv-container-contain'>
            <div className='imgdiv-container' style={{ backgroundImage: `url(${slideImageurl})`}}/>
        </div>
        <div className='cc-card-body-blog'>
            <div className='bg-text-container_'>
                <span id='bg-name'>{title}</span>
            </div>
            <div className='bg-text-container'>
                <span id='bg-title'>{subtit}</span>
            </div>
            <div id="bps_mini">
                <a id= "ldemo" href={liveurl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={github} target="_blank" rel="noopener noreferrer"><BsGithub id="gihub-icons"/></a>
            </div>
        </div>
    </div>
  )
}

export default Projectcard