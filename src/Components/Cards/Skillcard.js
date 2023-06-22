import React from 'react'
import "./skillcard.css"
import { FaVuejs, FaHtml5, FaReact, FaNodeJs, FaLaravel, FaSass } from "react-icons/fa";
// import { TbCSharp } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";
import { CgFigma } from "react-icons/cg";
import { SiJavascript, SiDotnet, SiBootstrap, SiArduino, SiFastapi, SiDjango } from "react-icons/si";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faEnvelope} />

const Skillcard = ({skill, iconns}) => {
    const iconObj = {
        1 : <DiCss3 id='confIcon'/>,
        2 : <SiBootstrap id='confIcon'/>,
        3 : <FaSass id='confIcon'/>,
        4 : <FaHtml5 id='confIcon' />,
        5 : <FaReact id='confIcon'/>,
        6 : <FaVuejs id='confIcon' />,
        7 : <SiJavascript id='confIcon'/>,
        8 : <FaNodeJs id='confIcon' />,
        9 : <FaHtml5 id='confIcon' />,
        10 : <SiDotnet id='confIcon'/>,
        // 11 : <FaLaravel id='confIcon'/>,
        // 11 : <FontAwesomeIcon icon="fa-brands fa-golang" id='confIcon'/>,
        13 : <CgFigma id='confIcon'/>,
        14 : <SiArduino id='confIcon'/>,
        15 : <SiFastapi id='confIcon'/>,
        16 : <SiDjango id='confIcon'/>
    }
  return (
    <div className='oba-skill-card'>
        <div>{iconObj[iconns]}</div>
        <span>{skill}</span>
    </div>
  )
}

export default Skillcard