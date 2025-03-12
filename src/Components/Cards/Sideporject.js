import React, { useState, useRef, useEffect } from "react";

const SideProject2 = ({ myimage, txttitle, creator }) => {
  const [toggle] = useState(true);
  const projRef = useRef(null);

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

    if (projRef.current) {
      observer.observe(projRef.current);
    }

    return () => {
      if (projRef.current) {
        observer.unobserve(projRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={projRef}
      className={`p-6 rounded-lg shadow-lg transition-all duration-700 ease-out opacity-0 translate-y-10 ${
        toggle ? "bg-white text-black" : "bg-gray-800 text-gray-200"
      }`}
    >
      <div
        className="w-full h-48 bg-cover bg-center rounded-md"
        style={{ backgroundImage: `url(${myimage})` }}
      />

      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">{txttitle}</h3>
        <p className="text-sm text-gray-500">{creator}</p>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default SideProject2;
