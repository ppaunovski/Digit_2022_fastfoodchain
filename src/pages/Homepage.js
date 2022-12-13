import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css"

function Homepage() {

  const controlScroll = () => {
    let value = 100 - (window.scrollY / 8);

    document.querySelector(".MainImage").style.webkitFilter = "brightness(" + value + "%)";
  }

  useEffect(() => {
    window.addEventListener("scroll", controlScroll)
    
    return () => {
        window.removeEventListener("scroll", controlScroll)
    }
}, [])

  return (
    <div className="flex">
      <div className="w-1/5">Test</div>

      <div className="w-full" style={{ height: 1500 }}>
        <div className="w-full bg-base-100 shadow-xl relative">
          <img className="MainImage w-full h-fit" src="https://placeimg.com/400/225/arch" alt="Shoes" />
          <div className="cardBody m-0 p-0">
            <h1>I will be over image</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
