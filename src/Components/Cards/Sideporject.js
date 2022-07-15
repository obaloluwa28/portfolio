import React, {useState} from 'react'
import './cards.css'
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Sideporject2 = () => {
    const [toggle, setToggle] = useState(true)
    const project1 = () => {
        window.open("https://frc-attendance-monsys.herokuapp.com/", "_blank")
    }
  return (
    <div className={toggle ? "sideproj_tw" : "sideproj_tw_"}>
        <span id="sub_tag">Face Recognition Attendance Monitoring System</span>
        <span id="descptn">The project scans the face of student and marks him/her present for certain course</span>
        <div id="bps_mini">
            <span id="ldemo" onClick={project1}>Live Demo</span>
            <BsGithub id="icons"/>
        </div>
    </div>
  )
}

export default Sideporject2