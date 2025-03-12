import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Projectcard from "./Components/Cards/Sideporject2";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import Project_data from "./Json2";
import mypix from "./asset/Images/myPix.png";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import TopSection from "./Components/TopSection";
import JsonData from "./json";
import Contactus from "./Components/Contact/Contactus";
import Sideporject2 from "./Components/Cards/Sideporject";
import Skills from "./Components/Skills";
import axios from "axios";
import FeedbackContainer from "./Components/Feedback/FeedbackContainer";
import { Responsive } from "./responsive/responsive";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

let counter = 0;

const App = () => {
  const aboutMeRef = useRef(null);
  const [bgcolor, setBgcolor] = useState(true);
  const [likes, setLikes] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [incomingdata] = useState(JsonData);
  const [incoming] = useState(Project_data);
  const [images, setImages] = useState("");

  const countercheck = incomingdata.length - 3;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const observerOptions = {
      root: null, // Viewport
      rootMargin: "0px",
      threshold: 0.2, // 20% visibility triggers the animation
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        } else {
          entry.target.classList.add("opacity-0", "translate-y-10");
          entry.target.classList.remove("opacity-100", "translate-y-0");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);

  const getViewResponse = async () => {
    let response = await axios.get("http://localhost:5000/getlikes");
    console.log(response.data.results[0].Likes);
    setLikes(response.data.results[0].Likes);
  };

  const clickLike = async () => {
    setLikes(likes + 1);
    const obj = { mylike: likes };
    console.log(obj);
    await axios.post("http://localhost:5000/Updateviews", obj);
  };

  const buttnTrig = (imgurlprops) => {
    setImages(imgurlprops);
  };

  // If Previous is Clicked
  const handlePrevious = () => {
    counter--;
    if (counter <= 0) {
      setActiveIndex(0);
      counter = 0; // Reset Counter
    } else {
      setActiveIndex(activeIndex - 400);
    }
  };

  const handleNext = () => {
    counter++;
    if (counter <= countercheck) {
      setActiveIndex(activeIndex + 400);
    } else {
      counter = 0; // Reset Counter to initial state
      setActiveIndex(0);
    }
  };

  const changeFunc = (income) => {
    console.log(`Income: ${income}`);
    setBgcolor(income);
  };

  const handleClose = () => {
    setImages("");
  };

  return (
    <div
      className={`${bgcolor ? "AppContainer" : "AppContainer_inv"} relative`}
    >
      <div className="nav-container">
        <Navbar changeState={changeFunc} />
      </div>
      <div className="main-container">
        <section id="home">
          <TopSection toggleState={bgcolor} />
        </section>

        <section id="aboutme">
          <div id="aboutme_block">
            <div className="ABTme_title_container">
              <span className={bgcolor ? "ABTme_title" : "ABTme_title_"}>
                About Me
              </span>
            </div>
            <div className="skills-contain">
              <div className="skills-contain-left">
                <img id="mypixs" src={mypix} alt="mypix" />
                <div
                  ref={aboutMeRef}
                  className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
                >
                  <p
                    className={`text-lg mt-4 md:mt-0 ${
                      bgcolor ? "text-black" : "text-gray-300"
                    }`}
                  >
                    I am a results-driven Full-Stack Software Engineer with
                    expertise in designing and developing scalable web
                    applications, automation systems, and microservices. With a
                    proven track record of optimizing performance, streamlining
                    deployments, and enhancing system reliability, I specialize
                    in React, Next.js, Node.js, Golang, and cloud-based
                    solutions. Passionate about emerging technologies, I explore
                    advancements in IoT, AI, Blockchain, and automation to drive
                    innovation and efficiency across industries.
                  </p>
                </div>
              </div>
              <div className="skills-contain-right">
                <Skills toggleState={bgcolor} />
              </div>
            </div>
          </div>
        </section>

        <section id="project">
          <div className="sideproj_container">
            <div className="sideproj_title_contain">
              <span className={bgcolor ? "sideproj_title" : "sideproj_title_"}>
                Projects
              </span>
            </div>

            <div id="blog-card-containers">
              <div
                className={
                  bgcolor ? "blog-card-containers" : "blog-card-containers_"
                }
              >
                {/* <div className="mtt-articles__swiper-buttons">
                    <button className="swiper-button-prev"  onClick={handlePrevious}><FaCaretLeft id='caret-icon'/></button>
                    <button className="swiper-button-next" onClick={handleNext}><FaCaretRight id='caret-icon' /></button>
                </div>
                <div className='innder-div' style={{transform: `translate(-${activeIndex}px)`}}>
                    {incomingdata.map((item) =>(
                      <Projectcard buttonclicked={buttnTrig} liveurl={item.liveurl} slideImageurl={item.imgurl} subtit={item.content} title={item.jtitle} github={item.github}/>
                    ))}  
                </div> */}

                <Carousel
                  slidesToSlide={2}
                  infinite={true}
                  responsive={Responsive}
                  // customLeftArrow={<IoIosArrowDroprightCircle size={25} color="#333"/>}
                  // customRightArrow={<IoIosArrowDropleftCircle size={25} color="#333"/>}
                >
                  {incomingdata
                    .slice() // Create a shallow copy to avoid mutating the original array
                    .sort((a, b) => a.id - b.id) // Sort in ascending order based on id
                    .map((item, index) => (
                      <Projectcard
                        key={index}
                        buttonclicked={buttnTrig}
                        liveurl={item.liveurl}
                        slideImageurl={item.imgurl}
                        subtit={item.content}
                        title={item.jtitle}
                        github={item.github}
                      />
                    ))}
                </Carousel>
              </div>
            </div>

            <div className="buttom_side_proj">
              <span className={bgcolor ? "sideproj_title" : "sideproj_title_"}>
                In Development
              </span>
              <div className="side-card-containers gap-2">
                {incoming.map((items) => (
                  <Sideporject2
                    myimage={items.imgurl}
                    txttitle={items.jtitle}
                    creator={items.content}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="feedback">
          <FeedbackContainer toggleState={bgcolor} />
        </section>

        <section id="contact">
          <Contactus toggleState={bgcolor} />
        </section>
      </div>

      <Footer toggleState={bgcolor} />

      {/* <div id="lv-countainer">
        <div id="likes-counter" onClick={clickLike}>
          <BiLike id="likeicon" />
          <span>{likes}</span>
        </div>
      </div> */}

      {images !== "" && (
        <div className="w-full h-[100vh] z-20 flex justify-center top-0 items-center fixed bg-[#ccc]">
          <div
            className="w-[80%] h-fill max-h-[90%] min-h-[screen] bg-[white] flex flex-col p-2 gap-2 relative mobileview:h-[50%] micro_mobileview:h-[35%]"
            onMouseLeave={handleClose}
          >
            <div className="w-full flex items-center justify-end">
              <AiOutlineCloseCircle
                size={20}
                className="cursor-pointer"
                onClick={handleClose}
              />
            </div>
            <img src={images} alt="myimage" className="w-fit h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
