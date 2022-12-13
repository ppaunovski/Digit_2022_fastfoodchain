import React from "react";

function MenuCategoryItem(props) {
  return (
    <div
      onClick={() => props.setCategory(props.title)}
      className="bg-white hover:shadow-md w-full h-[50px] hover:scale-110 cursor-pointer"
    >
      <div className="w-full h-full flex gap-3 items-center pl-5">
        <img className="w-6 h-6" src={props.icon}></img>
        <div>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuCategoryItem;
