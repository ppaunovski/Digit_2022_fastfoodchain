import React, { useEffect, useState } from "react";
import Carousel from "../components/home_components/Carousel";
import "../styles/Homepage.css";
import Sidebar from "../components/Sidebar";
import Stores from "../components/Stores";
import Footer from "../components/Footer";

function Homepage(props) {
  const controlScroll = () => {
    let value = 100 - window.scrollY / 15;

    document.querySelector(".TopDiv").style.webkitFilter =
      "brightness(" + value + "%)";
    document.querySelector(".TopDiv").style.opacity = value + "%";
  };

  useEffect(() => {
    window.addEventListener("scroll", controlScroll);

    return () => {
      window.removeEventListener("scroll", controlScroll);
    };
  }, []);

  return (
    <div className="mt-16">
      <div>
        <Sidebar />
      </div>
      <div>
        <Stores />
      </div>
      <div className="flex w-full text-center">
        <Carousel />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
