import React, { useEffect, useState } from "react";
import Carousel from "../components/home_components/Carousel";
import "../styles/Homepage.css"
import MenuCard from "../components/menu_components/MenuCard";

function Homepage() {
  const [cardIsHovered, setCardIsHovered] = useState(false);

  const controlScroll = () => {
    let value = 100 - (window.scrollY / 8);

    document.querySelector(".TopDiv").style.webkitFilter = "brightness(" + value + "%)";
    document.querySelector(".TopDiv").style.opacity = value + "%";
  }

  useEffect(() => {
    window.addEventListener("scroll", controlScroll)

    return () => {
      window.removeEventListener("scroll", controlScroll)
    }
  }, [])

  return (
    <div>
      <div className="TopDiv flex">
        <div className={"UnHoveredSide " + (cardIsHovered && "HoveredSide")}
          onMouseEnter={() => setCardIsHovered(true)} onMouseLeave={() => setCardIsHovered(false)}>
          <div className="HomeCard w-11/12 h-1/3">
          <MenuCard
                    title={"Berry crepe"}
                    // image={}
                    // price={}
                    // description={}
                    // calories={}
                  />
          </div>
          <div className="HomeCard w-11/12 h-1/3">
            <div className="imgDiv w-full h-full">
              <img className="w-full h-full block" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/04/strawberry-cake-8c9a6b6-e1657200661127.jpg?quality=90&webp=true&resize=375,341" alt=""></img>
            </div>
          </div>
          <div className="HomeCard w-11/12 h-1/3">
            <div className="imgDiv w-full h-full">
              <img className="w-full h-full block rounded-br-box" src="https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Fluffy-Pancakes-New-CMS.jpg" alt=""></img>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full bg-base-100 shadow-xl relative rounded-bl-full">
            <img className="MainImage w-full h-fit" src="https://img-global.cpcdn.com/recipes/d1c923959141133b/1200x630cq70/photo.jpg" alt="Shoes" />
            <div className="cardBody w-full h-44 flex rounded-bl-full justify-end">
              <div className="flex flex-col justify-end relative">
                <h1 className="mb-20">Check out our new muffin!</h1>
                <button className="btn glass w-60 h-16 absolute right-1 bottom-3 opacity-50 hover:opacity-100 duration-500 bg-rose-900 rounded-box">
                  Order Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full text-center">
        <Carousel />
      </div>
      <p>Tastiest sweets in town</p>
    </div>
  );
}

export default Homepage;
