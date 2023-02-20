import React, {useState, useEffect} from 'react'
import './App.css';
import Projectcard from './Components/Cards/Sideporject2';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import Project_data from './Json2';
import mypix from './asset/Images/myPix.png'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import TopSection from './Components/TopSection';
import JsonData from './json'
import Contactus from './Components/Contact/Contactus';
import Sideporject2 from './Components/Cards/Sideporject';
import Skills from './Components/Skills';
import axios from 'axios'
import FeedbackContainer from './Components/Feedback/FeedbackContainer';

let counter = 0;

const App = () => {
  const [bgcolor, setBgcolor] = useState(true)
  const [likes, setLikes] = useState()
  const [activeIndex, setActiveIndex] = useState(0)
  const [incomingdata] = useState(JsonData);
  const [incoming] = useState(Project_data);
  
  const countercheck = incomingdata.length - 3

  useEffect(() => {
    getViewResponse();
  }, [])

  const getViewResponse = async () =>{
    let response = await axios.get("http://localhost:5000/getlikes")
    console.log(response.data.results[0].Likes)
    setLikes(response.data.results[0].Likes)
  }

  const clickLike = async () =>{
    setLikes(likes+1)
    const obj = {mylike: likes}
    console.log(obj)
    await axios.post("http://localhost:5000/Updateviews", obj)
  }

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
        counter = 0;      // Reset Counter to initial state
        setActiveIndex(0)
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
                  <Skills toggleState={bgcolor}/>
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
              <div className={bgcolor ? 'blog-card-containers': 'blog-card-containers_'}>
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

        <section id="feedback">
          <FeedbackContainer toggleState={bgcolor}/>
        </section>

        <section id="contact">
            <Contactus toggleState={bgcolor}/>
        </section>
      </div>
    
      <Footer toggleState={bgcolor}/>
      
      <div id='lv-countainer'>
        <div id='likes-counter' onClick={clickLike}>
          <BiLike id='likeicon'/>
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
