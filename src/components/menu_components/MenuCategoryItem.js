import React from "react";

function MenuCategoryItem(props) {
  return (
    <div
      onClick={() => props.setCategory(props.title)}
      className="bg-yellow-300 w-full h-[50px]"
    >
      <div className="w-full h-full flex gap-3 items-center pl-5">
        <img src="1"></img>
        <div>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuCategoryItem;
