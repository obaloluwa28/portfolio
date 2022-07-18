import React, {useState} from 'react'
import './cards.css'
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Sideporject2 = ({myimage, txttitle, creator}) => {
    const [toggle, setToggle] = useState(true)

  return (
    <div className={toggle ? "sideproj_tws" : "sideproj_tws_"}>
        <div className='proj_img_container' style={{ backgroundImage: `url(${myimage})`}}/>
        <div className='proj_textContainer'>
          <span id='side-proj-title'>{txttitle}</span>
          <span id='what-i-used'>{creator}</span>
          <button id='learn-more'>LEARN MORE</button>
        </div>
    </div>
  )
}

export default Sideporject2