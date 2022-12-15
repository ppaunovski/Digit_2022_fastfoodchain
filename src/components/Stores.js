import React from "react";

function Stores() {
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden relative">
      <div className="absolute flex justify-center items-center -z-30 w-full h-full bg">
        <div className="absolute  h-[8vh] w-full bg-pink-500/60 top-0"></div>
      </div>
      <div className="absolute flex justify-center items-center -z-20 w-full h-full bg">
        <div className="absolute  h-[30vh] -rotate-[39deg] sm:-rotate-[30deg] md:-rotate-[24deg] lg:-rotate-[18deg] w-[2000px] bg-pink-200"></div>
      </div>
      <div className="absolute flex justify-center items-center -z-30 w-full h-full bg">
        <div className="absolute  h-[8vh] w-full bg-pink-500/60 bottom-0"></div>
      </div>
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item flex items-center justify-center relative w-full"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/Sugar%20Box%20Cake%20Shop%20in%20Saudi%20Arabia.jpg?alt=media&token=eea77dc7-1292-42d1-8acd-f85f6c442033"
            className="w-[80vw] lg:w-[65vw] xl:w-[50vw]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item flex items-center justify-center relative w-full"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/Sugar%20Box%20Cake%20Shop%20in%20Saudi%20Arabia.jpg?alt=media&token=eea77dc7-1292-42d1-8acd-f85f6c442033"
            className="w-[80vw] lg:w-[65vw] xl:w-[50vw]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item flex items-center justify-center relative w-full"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/Sugar%20Box%20Cake%20Shop%20in%20Saudi%20Arabia.jpg?alt=media&token=eea77dc7-1292-42d1-8acd-f85f6c442033"
            className="w-[80vw] lg:w-[65vw] xl:w-[50vw]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item flex items-center justify-center relative w-full"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/Sugar%20Box%20Cake%20Shop%20in%20Saudi%20Arabia.jpg?alt=media&token=eea77dc7-1292-42d1-8acd-f85f6c442033"
            className="w-[80vw] lg:w-[65vw] xl:w-[50vw]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stores;
