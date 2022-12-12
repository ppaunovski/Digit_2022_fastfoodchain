import React, { useEffect, useState } from "react";

function MenuCard(props) {
  return (
    <div
      className={
        "relative group-hover:scale-125 transition-all transform h-64  bg-green-500 rounded-xl m-3 flex flex-col items-center justify-center group"
      }
    >
      <div className="w-full h-full items-center justify-center group-hover:flex rounded-xl text-white  bg-[#111]/40 absolute text-3xl color-black hidden">
        <p>{props.price}$</p>
      </div>
      <img className="w-3/4" src={props.image}></img>
      <p>{props.title}</p>
    </div>
  );
}

export default MenuCard;
