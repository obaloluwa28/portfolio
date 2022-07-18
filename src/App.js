import React, {useState} from 'react'
import './App.css';
import Projectcard from './Components/Cards/Sideporject2';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Project_data from './Json2';
import mypix from './asset/Images/myPix.png'

// import { GrSend } from "react-icons/gr";
import FileSaver from 'file-saver'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import TopSection from './Components/TopSection';
import JsonData from './json'
import Contactus from './Components/Contact/Contactus';
import Sideporject2 from './Components/Cards/Sideporject';
import Skills from './Components/Skills';

let counter = 0;

const App = () => {
  const [bgcolor, setBgcolor] = useState(true)
  const [menuClick, setMenuClick] = useState(false)

  const toggleState = () =>{
    setBgcolor(!bgcolor)
    console.log("Checked me")
  }

  const toggleTogState = () =>{
    setMenuClick(!menuClick)
  }

  const downloadFile = () =>{
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resources/Oba.pdf",
      "Obaloluwa_Resume.pdf"); 
  }

  const GithubLinks = () => {
      window.open("https://github.com/obaloluwa28/", "_blank")
  }

  const TwitterLinks = () => {
    window.open("https://twitter.com/oduyemiobalolu1", "_blank")
  }

  const [activeIndex, setActiveIndex] = useState(0)
  const [move, setMove] = useState(false)
  const [move_, setMove_] = useState(false)
  const [incomingdata, setIncomingdata] = useState(JsonData);
  const [incoming, setIncoming] = useState(Project_data);
  
  const countercheck = incomingdata.length - 1


  const buttnTrig = () =>{
     
  }

  // If Previous is Clicked
  const handlePrevious = () =>{
    counter--;
    if (counter <= 0){
        setActiveIndex(0)
        counter = 0;      // Reset Counter
      } else {
          setActiveIndex(activeIndex - 400)
      }
  }

  const handleNext = () =>{
      counter++;
      if(counter <= countercheck) {
        setActiveIndex(activeIndex + 400)
      }else{
        counter--;      // Reset Counter to initial state
      }
  }

  const changeFunc = (income) =>{
    console.log(`Income: ${income}`)
    setBgcolor(income)
  }

  return (
    <div className={bgcolor ? "AppContainer" : "AppContainer_inv"}>
      <div className='nav-container'>
        <Navbar changeState={changeFunc}/>
      </div>
      <div className='main-container'>
        <section id="home">
          <TopSection toggleState={bgcolor}/>
        </section>

        <section id="aboutme">
          <div id="aboutme_block">
              <div className='ABTme_title_container'><span className={bgcolor ? 'ABTme_title' : "ABTme_title_"}>About Me</span></div>
              <div className='skills-contain'>
                <div className='skills-contain-left'>
                  <img id="mypixs" src={mypix} alt="mypix"/>
                  <span id={bgcolor ? 'aboutme-text' : 'aboutme-text_'} >I'm an innovative purpose-driven professional with experience in web-design, development and software development across industries. Equipped with record of success in consistently identifying and providing the technological needs of companies through ingenious innovations.
                    I'm very passionate about emerging technologies like 5G & IoT, Robotics & Autonomous Vehicles, Web 3.0 & Block-Chain.
                  </span>
                </div>
                <div className='skills-contain-right'>
                  <Skills />
                </div>
              </div>
              
          </div>
        </section>

        <section id="project">
          <div className="sideproj_container">
            <div className="sideproj_title_contain" >
              <span className={bgcolor ? "sideproj_title" : "sideproj_title_"}>Projects</span>
            </div>

            <div id='blog-card-containers'>
              <div className='blog-card-containers'>
                <div className="mtt-articles__swiper-buttons">
                    <button className="swiper-button-prev"  onClick={handlePrevious}><FaCaretLeft id='caret-icon'/></button>
                    <button className="swiper-button-next" onClick={handleNext}><FaCaretRight id='caret-icon' /></button>
                </div>
                <div className='innder-div' style={{transform: `translate(-${activeIndex}px)`}}>
                    {incomingdata.map((item) =>(
                      <Projectcard buttonclicked={buttnTrig} liveurl={item.liveurl} slideImageurl={item.imgurl} subtit={item.content} title={item.jtitle} github={item.github}/>
                    ))}
                          
                </div>
              </div>
            </div>

            <div className="buttom_side_proj">
              <span className={bgcolor ? "sideproj_title" : "sideproj_title_"}>In Development</span>
              <div className='side-card-containers'>
                {incoming.map((items) => (
                  <Sideporject2 myimage = {items.imgurl} txttitle={items.jtitle} creator={items.content} />
                ))} 
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
            <Contactus />
        </section>
      </div>
    
      <Footer />
      
    </div>
  );
}

export default App;
