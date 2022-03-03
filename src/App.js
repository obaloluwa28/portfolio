import React, {useState} from 'react'
import './App.css';
import Togglebutton from './Components/Togglebutton/Togglebutton';
import OurLogo from './asset/Images/Logo.png'
import Sideimg from './asset/Images/Logo2.png'
import figma from './asset/Images/Figma.png'
import react from './asset/Images/React.png'
import backend from './asset/Images/Backend.png'
import IOT from './asset/Images/IoT.png'
import vector from './asset/Images/vector.png'
import vector_ from './asset/Images/vector1.png'
import vector2 from './asset/Images/vector2.png'
import vector2_ from './asset/Images/vector2_.png'
import mypix from './asset/Images/myPix.png'
import OurLogo1 from './asset/Images/logo1.png'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
const App = () => {
  const [bgcolor, setBgcolor] = useState(true)
  const toggleState = () =>{
    setBgcolor(!bgcolor)
    console.log("Checked me")
  }

  return (
    <div className={bgcolor ? "AppContainer" : "AppContainer_inv"}>
      <div className={bgcolor ? "navbarContainer" : "navbarContainer_inv"}>
        <div className="imgContainer"><img className="myimg" src={OurLogo} alt="Logo" /></div>
        <ul className={bgcolor ? "ulistedTabs" : "ulistedTabs_inv"}>
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <Togglebutton currentState={toggleState} />
      </div>
      <div className="myhome_container">
        <div className="myhome">
          <div className='textContain'>
            <div className='sub_textContain'>
              <div id={bgcolor ? "p1" : "p1_"}>Hello I'm</div>
              <div id={bgcolor ? "p2" : "p2_"}>ODUYEMI OBALOLUWA</div>
              <div id={bgcolor ? "p3" : "p3_"}>FULL STACK WEB DEVELOPER</div>
              <div id={bgcolor ? "p4" : "p4_"}><span>Download Resume</span></div>
              <div className="icon-box">
                <BsGithub id={bgcolor ? "icons" : "icons_"}/>
                <FaTwitterSquare id={bgcolor ? "icons" : "icons_"}/>
                <BsLinkedin id={bgcolor ? "icons" : "icons_"}/>
              </div>
            </div>
          </div>

          <div className='imgContain'>
            <img className="home_img" src={Sideimg} alt="Homeimg"/>
          </div>
        </div>
        <div>
          <div className="sub_title_container">
            <span id={bgcolor ? "sub_title":"sub_title_"}>Things I do</span>
          </div>
          <div className="TID_Container">
            <div className= {bgcolor ? "TID_Box1" : "TID_Box1_"}>
              <img src={figma} alt="NoLogo" id="mini_Icons"/>
              <div className="TID_mini_container">
                <span id={bgcolor ? "TID_mini_sub" : "TID_mini_sub_"}>Design</span>
              </div>
              <div className="text_mini_container">
                <span id={bgcolor ? "text_descrpt" : "text_descrpt_"}>My Love for creative UI designs made me choose Figma as the best choice for me  </span>
              </div>
            </div>

            <div className={bgcolor ? "TID_Box1" : "TID_Box1_"}>
              <img src={react} alt="NoLogo" id="mini_Icons"/>
              <div className="TID_mini_container">
                <span id={bgcolor ? "TID_mini_sub" : "TID_mini_sub_"}>FrontEnd</span>
              </div>
              <div className="text_mini_container">
                <span id={bgcolor ? "text_descrpt" : "text_descrpt_"}>My HTML and CSS skills as well as JavaScript are top-notch</span>
              </div>
            </div>

            <div className={bgcolor ? "TID_Box1" : "TID_Box1_"}>
              <img src={backend} alt="NoLogo" id="mini_Icons"/>
              <div className="TID_mini_container">
                <span id={bgcolor ? "TID_mini_sub" : "TID_mini_sub_"}>BackEnd</span>
              </div>
              <div className="text_mini_container">
                <span id={bgcolor ? "text_descrpt" : "text_descrpt_"}>Fell in Love with Laravel among other backend framework like C# .NET and NodeJs due to its Easy to use feature</span>
              </div>
            </div>

            <div className={bgcolor ? "TID_Box1" : "TID_Box1_"}>
              <img src={IOT} alt="NoLogo" id="mini_Icons"/>
              <div className="TID_mini_container">
                <span id={bgcolor ? "TID_mini_sub" : "TID_mini_sub_"}>Internet of Things</span>
              </div>
              <div className="text_mini_container">
                <span id={bgcolor ? "text_descrpt" : "text_descrpt_"}>Seeing how hardware systems communicate with one another and the enviroment through sensors gives me great pleasure </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="aboutme_block">
          <div className='ABTme_title_container'><span className={bgcolor ? 'ABTme_title' : "ABTme_title_"}>About Me</span></div>
            <div className='ABTme_body_container'>
            {bgcolor ? <img src={vector} alt="altimg" /> : <img src={vector_} alt="altimg" />}
            <img id="mypix" src={mypix} alt="mypix"/>
            <div id="myprofile_container">
              <span id='myprofiledetaile'>
                Hi, I’m Oduyemi Obaloluwa, my journey in IT space began as an IoT Embedded System Engineer as a student Intern, and my first graduate Role as an IT project manager at Zigus Technologies Ltd; Designing Hardeware  automated systems.
                The need for a software representation of these hardware solutions made me shapen my software design skills in React,HTML and CSS.
                The need to store values of sensors and actuators from the hardware systems requires that i communicate with a database. I have developed several software and hardware side solutions. I currently work as a software and IoT Engineer at Sterling Tech and Data Science, Nigeria. 
              </span>
            </div>
          </div>
      </div>
      <div className="sideproj_container">
        <div className="sideproj_title_contain" >
          <span className={bgcolor ? "sideproj_title" : "sideproj_title_"}>Side Projects</span>
        </div>
        <div className="main-box-contain">
          <div className="Box1">
            Hi
          </div>

          <div className="Box1">
            Hi
          </div>

          <div className="Box1">
            Hi
          </div>

          <div className="Box1">
            Hi
          </div>
        </div>

        <div className="buttom_side_proj">
          <div className="bsp_mini_container">
            <div className={bgcolor ? "bsp_mini" : "bsp_mini_"}>
              <span id="sub_tag">Face Recognition Attendance Monitoring System</span>
              <span id="descptn">The project scans the face of student and marks him/her present for certain course</span>
              <div id="bps_mini">
                <span id="ldemo">Live Demo</span>
                <BsGithub id="icons"/>
              </div>
            </div>

            <div className={bgcolor ? "bsp_mini" : "bsp_mini_"}>
              <span id="sub_tag">EMS Energy Management System</span>
              <span id="descptn">The System Captures New Stocks, Knows the available stocks in the system, activates Point of Sales and View Transaction Records over a period</span>
              <div id="bps_mini">
                <span id= "ldemo">Live Demo</span>
                <BsGithub id="icons"/>
              </div>
            </div>

            <div className={bgcolor ? "bsp_mini" : "bsp_mini_"}>
              <span id="sub_tag">Inventory Management System</span>
              <span id="descptn">The application track your goods throughout your entire supply chain, from purchasing to production to end sales. The application also keeps record which can be used to prepare various books of account</span>
              <div id="bps_mini1">
                <span id="ldemo">Live Demo</span>
                <BsGithub id="icons"/>
              </div>
            </div>

            <div className={bgcolor ? "bsp_mini" : "bsp_mini_"}>
              <span id="sub_tag">Ecommerce System</span>
              <span id="descptn">New Employee into an oragnization is captured into the system and attendance, performance, PayRoll System and evaluation of employee is done on system</span>
              <div id="bps_mini">
                <span id= "ldemo">Live Demo</span>
                <BsGithub id="icons"/>
              </div>
            </div>

            <div className={bgcolor ? "bsp_mini" : "bsp_mini_"}>
              <span id="sub_tag">Employee Management System</span>
              <span id="descptn">New Employee into an oragnization is captured into the system and attendance, performance, PayRoll System and evaluation of employee is done on system</span>
              <div id="bps_mini">
                <span id="ldemo">Live Demo</span>
                <BsGithub id="icons"/>
              </div>
            </div>

            <div className={bgcolor ? "bsp_mini" : "bsp_mini_"}>
              <span id="sub_tag">IoT Home Automation System</span>
              <span id="descptn">The Project is aimed at controlling ones remote facility and Home Utilities on a button click. One can also view the facility remotely with IP Camera installed</span>
              <div id="bps_mini">
                <span id="ldemo">Live Demo</span>
                <BsGithub id="icons"/>
              </div>
            </div>
          </div>
          {bgcolor ? <img src={vector2} alt="vector2"/>:<img src={vector2_} alt="vector2"/>}
        </div>
      </div>

      <div className={bgcolor ? "foorter-container" : "foorter-container_"}>
        <img src={OurLogo1} alt="Logo" />
        <span className="copyright">Designed by Oduyemi Obaloluwa</span>
      </div>
    </div>
  );
}

export default App;
