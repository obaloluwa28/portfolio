import React,{useEffect, useState} from 'react'
import FileSaver from 'file-saver'
import { FaTwitterSquare, FaHandshake } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Thingsido from './Cards/thingsido';
import Sideimg from '../asset/Images/Logo2.png'
import './components.css'

const TopSection = ({toggleState}) => {
  console.log(`Now: ${toggleState}`)
  const [toggle, setToggle] = useState(toggleState)
  // setToggle(toggleState)

  useEffect(() => {
    setToggle(toggleState)
})

  const GithubLinks = () => {
    window.open("https://github.com/obaloluwa28/", "_blank")
}

const TwitterLinks = () => {
  window.open("https://twitter.com/oduyemiobalolu1", "_blank")
}

const LinkedlnLinks = () => {
  window.open("https://www.linkedin.com/in/oduyemi-obaloluwa-9a57861b2/", "_blank")
}

  const downloadFile = () =>{
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resources/Oba.pdf",
      "Obaloluwa_Resume.pdf"); 
  }
  return (
    <div className="myhome_container">
            <div className='textContain textContainmedia'>
              <div className='sub_textContain sum_textContainmedia'>
                <div id={toggle ? "p1" : "p1_"}>Hello I'm</div>
                <div id={toggle ? "p2" : "p2_"}>ODUYEMI OBALOLUWA</div>
                <div id={toggle ? "p3" : "p3_"}>FULL STACK WEB DEVELOPER</div>
                <div id={toggle ? "p4" : "p4_"} onClick={downloadFile}><span>Download Resume</span></div>
                <div className="icon-box">
                  <BsGithub name="github" id={toggle ? "icons" : "icons_"} onClick={GithubLinks}/>
                  <FaTwitterSquare name="twitter" id={toggle ? "icons" : "icons_"} onClick={TwitterLinks}/>
                  <BsLinkedin name="linkedln" id={toggle ? "icons" : "icons_"} onClick={LinkedlnLinks}/>
                </div>
              </div>
              {/* <div id='top-image-container' /> */}
            </div>

            <div className='things-ido'>
              <div className="sub_title_container">
                <span id={toggle ? "sub_title":"sub_title_"}>Things I do</span>
              </div>
              <div className="TID_Container">
                <Thingsido heading="Design" text="My Love for creative UI designs made me choose Figma as the best choice for me" imgid={1} />

                <Thingsido heading="FrontEnd" text="My HTML and CSS skills as well as JavaScript are top-notch" imgid={2} />

                <Thingsido heading="BackEnd" text="Fell in Love with Laravel among other backend framework like C# .NET and NodeJs due to its Easy to use feature" imgid={3} />

                <Thingsido heading="Internet of Things" text="Seeing how hardware systems communicate with one another and the enviroment through sensors gives me great pleasure" imgid={4} />
              </div>
            </div>
        </div>
  )
}

export default TopSection