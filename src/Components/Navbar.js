import React, {useState} from 'react'
import Togglebutton from './Togglebutton/Togglebutton'
import Togglevisible from './Togglevisible/Togglevisible'
import {Link} from 'react-scroll'
import './components.css'

const Navbar = ({changeState}) => {
    const [toggle, setToggle] = useState(true)
    const [menuClick] = useState(true)
    const [togMenu, setTogMenu] = useState(true)
    const [toggles, setToggles] = useState(true)

    const toggleState = (passedstate) =>{
      setToggle(!toggle)
      console.log("Checked me")
      changeState(passedstate)
    }

    const toggleTogState = () =>{
      // setMenuClick(!menuClick)
      console.log("Checked me Out")
      setTogMenu(!togMenu)
    }

    const toggleTogSt = () =>{
      setToggles(!toggles)
      // setTogMenu(!togMenu)
    }

  return (
    <div className={toggle ? "navbarContainer" : "navbarContainer_inv"}>
        {menuClick && <div className="imgContainer" />}

          <div className={togMenu ? 'right-container' : 'right-container-inv'}>
            {menuClick && <ul className={toggle ? "ulistedTabs" : "ulistedTabs_inv"}>
              {/* <li><a href="#home">Home</a></li> */}
              <li><Link onClick={toggleTogSt} id='test' activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
              <li><Link onClick={toggleTogSt} id='test' to="aboutme" spy={true} smooth={true}>About Me</Link></li>
              <li><Link onClick={toggleTogSt} id='test' to="project" spy={true} smooth={true}>Projects</Link></li>
              {/* <li><Link onClick={toggleTogSt} id='test' to="project" spy={true} smooth={true}>Blog</Link></li> */}
              <li><Link onClick={toggleTogSt} id='test' to="contact" spy={true} smooth={true}>Contact</Link></li>
            </ul>}
          </div>

          <div className='portfolio-nav-right'>
            {menuClick && <div className="toggcontainer">
              <Togglebutton currentState={toggleState} />
            </div>}
          
            <div className= {menuClick ? "toggcontainer_2": "toggcontainer_2_"}>
              <Togglevisible currentTogState={toggleTogState} mytoggle={toggles}/>
            </div>
          </div>
        
      </div>
  )
}

export default Navbar