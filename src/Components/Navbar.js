import React, {useState} from 'react'
import Togglebutton from './Togglebutton/Togglebutton'
import Togglevisible from './Togglevisible/Togglevisible'
import OurLogo from '../asset/Images/Logo.png'
import {Link} from 'react-scroll'
import './components.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(true)
    const [menuClick, setMenuClick] = useState(true)

    const toggleState = () =>{
      setToggle(!toggle)
      console.log("Checked me")
    }

    const toggleTogState = () =>{
      setMenuClick(!menuClick)
    }

  return (
    <div className={toggle ? "navbarContainer" : "navbarContainer_inv"}>
        {menuClick && <div className="imgContainer" />}

        <div className='right-container'>
          {menuClick && <ul className={toggle ? "ulistedTabs" : "ulistedTabs_inv"}>
            {/* <li><a href="#home">Home</a></li> */}
            <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
            <li><Link to="aboutme" spy={true} smooth={true}>About Me</Link></li>
            <li><Link to="project" spy={true} smooth={true}>Projects</Link></li>
            <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
          </ul>}

          {menuClick && <div className="toggcontainer">
            <Togglebutton currentState={toggleState} />
          </div>}

        </div>
        
          <div className= {menuClick ? "toggcontainer_2": "toggcontainer_2_"}>
            <Togglevisible currentTogState={toggleTogState} />
          </div>
        
      </div>
  )
}

export default Navbar