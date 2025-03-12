import React, { useState, useEffect, useRef } from "react";
// import Barcharts from './Barchart/Barcharts'
import Skills_data from "../jsondata";
import Skillcard from "./Cards/Skillcard";

const Skills = ({ toggleState }) => {
  const [incomingdata] = useState(Skills_data);
  const [toggle, setToggle] = useState(true);
  const skillRef = useRef([]);

  useEffect(() => {
    setToggle(toggleState);
  }, [toggleState]);

  useEffect(() => {
    const observerOptions = {
      root: null, // Observe relative to the viewport
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the element is visible
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

    skillRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      skillRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="skills-container text-center">
      <span className={toggle ? "text-xl font-bold" : "text-lg font-semibold"}>
        SKILLS
      </span>
      <div className="oba-skills-sub-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 mt-4">
        {incomingdata.map((items, index) => (
          <div
            ref={(el) => (skillRef.current[index] = el)}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
            key={index}
          >
            <Skillcard skill={items.lvlLabel} iconns={items.iconnum} />
          </div>
        ))}
      </div>
      {/* {incomingdata.map((items) => (
            <Barcharts labels={items.lvlLabel} level={items.lvlWidth}/>
        ))} */}
    </div>
  );
};

export default Skills;
