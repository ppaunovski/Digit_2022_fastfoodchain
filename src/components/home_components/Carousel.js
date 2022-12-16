import React, { Component } from 'react'

export default class Carousel extends Component {
  render() {
    return (
        <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box h-56">
        <div className="carousel-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/Map_kisela voda.png?alt=media&token=321bb6bd-f16b-4566-8e0c-46fc03b03de6" className="rounded-box w-72" />
        </div> 
        <div className="carousel-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/Map_karposh.png?alt=media&token=fe1cbc21-2bb8-4bed-8d0f-d2307e111be0" className="rounded-box w-72" />
        </div> 
        <div className="carousel-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/Mat%20aerodrom.png?alt=media&token=fcee4b84-5625-43d5-bc71-c3b0ba050f61" className="rounded-box w-72" />
        </div> 
        <div className="carousel-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/Map%20centar.png?alt=media&token=4fdf14ec-9ce0-4c06-871a-a81e09207995" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/Map%20avtokomanda.png?alt=media&token=245c5f44-1993-4121-92e8-e8aefbfbb70d" className="rounded-box" />
        </div> 
        <div className="carousel-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/Logo%20background.jpg?alt=media&token=13b7bde1-c3d6-4981-99f4-a14bcf861afb" className="rounded-box" />
        </div> 
      </div>
    )
  }
}
