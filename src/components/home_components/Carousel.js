import React, { Component } from 'react'

export default class Carousel extends Component {
  render() {
    return (
        <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box">
        <div className="carousel-item">
          <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
        </div>
      </div>
    )
  }
}
