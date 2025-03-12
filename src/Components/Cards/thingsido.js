import React, { useState, useEffect, useRef } from "react";
import figma from "../../asset/Images/Figma.png";
import reacts from "../../asset/Images/React.png";
import backend from "../../asset/Images/nodejs.png";
import IOT from "../../asset/Images/IoT.png";
import "./cards.css";

const imgurls = [
  { id: 1, tag: figma },
  { id: 2, tag: reacts },
  { id: 3, tag: backend },
  { id: 4, tag: IOT },
];

const Thingsido = ({ colorChange, heading, text, imgid }) => {
  const imgpath = imgurls.find((m) => m.id === imgid)?.tag;
  const [toggle, setToggle] = useState(colorChange);
  const boxRef = useRef(null);

  useEffect(() => {
    setToggle(colorChange);
  }, [colorChange]);

  useEffect(() => {
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

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={`p-6 rounded-lg shadow-md transition-all duration-700 ease-out opacity-0 translate-y-10 ${
        toggle ? "TID_Box1" : "TID_Box1_"
      }`}
    >
      <div className="img-logo-container">
        <img src={imgpath} alt="NoLogo" id="mini_Icons" />
      </div>

      <div className="TID_mini_container">
        <span id={toggle ? "TID_mini_sub" : "TID_mini_sub_"}>{heading}</span>
      </div>

      <div className="text_mini_container">
        <span id={toggle ? "text_descrpt" : "text_descrpt_"}>{text}</span>
      </div>
    </div>
  );
};

export default Thingsido;
