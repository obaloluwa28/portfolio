import React, {useState} from 'react'
import './App.css';
import Projectcard from './Components/Cards/Sideporject2';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Project_data from './Json2';

// import { GrSend } from "react-icons/gr";
import FileSaver from 'file-saver'
import Aboutme from './Components/Aboutme/aboutme';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import TopSection from './Components/TopSection';
import JsonData from './json'
import Contactus from './Components/Contact/Contactus';
import Sideporject2 from './Components/Cards/Sideporject';

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
  const [move, setMove] = useState(true)
  const [move_, setMove_] = useState(false)
  const [incomingdata, setIncomingdata] = useState(JsonData);
  const [incoming, setIncoming] = useState(Project_data);
  
  const countercheck = incomingdata.length - 3


  const buttnTrig = () =>{
     
  }

  const handlePrevious = () =>{
      counter--;
      if (counter === 0){
          setActiveIndex(0)
          setMove(true)
          setMove_(false)
          counter = 0;
      } else {
          setActiveIndex(activeIndex - 400)
      }
  }

  const handleNext = () =>{
      counter++;
      setActiveIndex(activeIndex + 400)
      if(counter === countercheck) {
          setMove(false)
          setMove_(true)
      }
  }

  return (
    <div className={bgcolor ? "AppContainer" : "AppContainer_inv"}>
      <div className='nav-container'>
        <Navbar />
      </div>
      <div className='main-container'>
        <section id="home">
          <TopSection />
        </section>

        <section id="aboutme">
          <div id="aboutme_block">
              <div className='ABTme_title_container'><span className={bgcolor ? 'ABTme_title' : "ABTme_title_"}>About Me</span></div>
              <Aboutme />
          </div>
        </section>

        <section id="project">
          <div className="sideproj_container">
            <div className="sideproj_title_contain" >
              <span className={bgcolor ? "sideproj_title" : "sideproj_title_"}>Side Projects</span>
            </div>
            {/* <div className='side-card-containers'>
              {incoming.map((items) => (
                <Sideporject2 myimage = {items.imgurl} />
              ))} 
            </div> */}

            <div id='blog-card-containers'>
              <div className='blog-card-containers'>
                <div className="mtt-articles__swiper-buttons">
                    <button className="swiper-button-prev" disabled={move} onClick={handlePrevious}><FaCaretLeft id='caret-icon'/></button>
                    <button className="swiper-button-next" disabled={move_} onClick={handleNext}><FaCaretRight id='caret-icon' /></button>
                </div>
                <div className='innder-div' style={{transform: `translate(-${activeIndex}px)`}}>
                    {incomingdata.map((item) =>(
                      <Projectcard buttonclicked={buttnTrig} slideImageurl={item.imgurl} subtit={item.content} title={item.jtitle} github={item.github}/>
                    ))}
                          
                </div>
              </div>
            </div>

            <div className="buttom_side_proj">
              <div className="bsp_mini_container">
                
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
            <Contactus />
        </section>
      </div>
      
      <div>
      </div>
      
    </div>
  );
}

export default App;
