import React, {useState} from 'react'
import './cards.css'
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Sideporject2 = ({myimage}) => {
    const [toggle, setToggle] = useState(true)
    const project1 = () => {
        window.open("https://frc-attendance-monsys.herokuapp.com/", "_blank")
    }
  return (
    <div className={toggle ? "sideproj_tw" : "sideproj_tw_"}>
        <div className='proj_img_container' style={{ backgroundImage: `url(${myimage})`}}/>
        <div className='proj_textContainer'></div>
    </div>
  )
}

export default Sideporject2