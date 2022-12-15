import React, { useEffect, useState } from "react";
import Carousel from "../components/home_components/Carousel";
import "../styles/Homepage.css"
import HomeCard from "../components/home_components/HomeCard";

function Homepage(props) {
  const [cardIsHovered, setCardIsHovered] = useState(false);
  const [bigImgSrc, setBigImgSrc] = useState("https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/chocolate-cupcake.png?alt=media&token=dd6fa2fa-fea5-4a1e-83d9-7f5269532442");

  const controlScroll = () => {
    let value = 100 - (window.scrollY / 15);

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
          <div className="HomeCard w-11/12 ">
            <HomeCard title={"Pancake"} cardIsHovered={cardIsHovered} setBigImgSrc={setBigImgSrc} homeCardImg={"https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/22180-waffles-mfs-80-e198bfc72b4846a8804309245f1ece54-removebg-preview.png?alt=media&token=7478a9d2-d331-4720-8fd8-6d1082bf7783"}/>
          </div>
          <div className="HomeCard w-11/12 ">
            <HomeCard title={"Cookies"} cardIsHovered={cardIsHovered} setBigImgSrc={setBigImgSrc} homeCardImg={"https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/chocolate-chip-cookie.png?alt=media&token=5c67c71e-1b02-4b54-a459-79144c70ac1f"}/>
          </div>
          <div className="HomeCard w-11/12 ">
            <HomeCard title={"Muffins"} cardIsHovered={cardIsHovered} setBigImgSrc={setBigImgSrc} homeCardImg={"https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/chocolate-cupcake.png?alt=media&token=dd6fa2fa-fea5-4a1e-83d9-7f5269532442"}/>
          </div>
          <div className="HomeCard w-11/12">
            <HomeCard title={"Cake"} cardIsHovered={cardIsHovered} setBigImgSrc={setBigImgSrc} homeCardImg={"https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/chocolate-cake.png?alt=media&token=e907cde8-9a59-4755-aab4-c9679ddc6129"}/>
          </div>
        </div>

        <div className="w-full">
          <div className="relative text-right overflow-hidden pl-36 h-56">
            <img className="h-64" src={"https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/sweetster.png?alt=media&token=6dba84bb-73dc-44d5-b9e6-b4dc676ea93f"} />
          </div>

          <div className="bg-base-100 shadow-xl relative" style={{borderBottomLeftRadius: 50, borderTopLeftRadius: 50, height: 540}}>
            <img className="MainImage" src={bigImgSrc} alt="Shoes" />
            <div className="cardBody w-full h-44 flex justify-end" style={{borderBottomLeftRadius: 50}}>
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
    </div>
  );
}

export default Homepage;
