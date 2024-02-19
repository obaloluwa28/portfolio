import React from 'react'
import './cards.css'
// import { BsGithub } from "react-icons/bs";

const Projectcard = ({slideImageurl, subtit, title, github, liveurl, buttonclicked}) => {
    console.log(`obaloluwa:${slideImageurl}`)

    const registeredClick = () =>{
        buttonclicked(slideImageurl)
    }
  return (
    <div className='coursecard-container-blog'>
        <div className='imgdiv-container-contain h-[200px]' onClick={() => registeredClick(slideImageurl)} onMouseEnter={() => registeredClick(slideImageurl)} onMouseLeave={() => registeredClick('')}>
            <div className='imgdiv-container' style={{ backgroundImage: `url(${slideImageurl})`}}/>
        </div>
        <div className='cc-card-body-blog p-2'>
            <div className='w-full flex flex-col gap-1 h-[180px]'>
                <div className='bg-text-container_ h-[30px] truncate text-center px-1 rounded-[5px]'>
                    <span id='bg-name'>{title}</span>
                </div>
                <div className='bg-text-container h-[150px] truncate'>
                    <span id='bg-title'>{subtit}</span>
                </div>
            </div>

            <div id="bps_mini">
                <a id= "ldemo" href={liveurl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                {/* <a href={github} target="_blank" rel="noopener noreferrer"><BsGithub id="gihub-icons"/></a> */}
            </div>
        </div>
    </div>
  )
}

export default Projectcard