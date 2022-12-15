import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <div className="relative overflow-hidden w-full flex justify-center">
        <div className="absolute flex justify-center items-center -z-20 w-full h-full bg">
          <div className="absolute  h-[30vh] -rotate-[39deg] sm:-rotate-[30deg] md:-rotate-[24deg] lg:-rotate-[14deg] w-[2000px] bg-pink-200"></div>
        </div>
        <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box">
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/l1.png?alt=media&token=118335f7-5023-44c0-8fe3-6b12d15c3cb7"
              className="rounded-box w-72"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/l2.png?alt=media&token=18273bba-b63c-4965-9f36-abcac2fa9d3c"
              className="rounded-box w-72"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/l3.png?alt=media&token=a5d0ecde-ccd3-4f0f-899c-1c2a45523155"
              className="rounded-box w-72"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/l4.png?alt=media&token=b96bee46-87fd-40f6-b67e-8948a915ffd6"
              className="rounded-box w-72"
            />
          </div>
        </div>
      </div>
    );
  }
}
