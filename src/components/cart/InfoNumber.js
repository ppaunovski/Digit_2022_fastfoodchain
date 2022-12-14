import React, { useContext, useEffect, useState } from "react";
import { shoppingCartContext } from "../../pages/Menupage";

function InfoNumber() {
  const { cartItems, setCartItems } = useContext(shoppingCartContext);
  let style =
    "w-5 hidden h-5 rounded-full text-white bg-red-400 flex justify-center items-center";

  if (cartItems.length > 0) {
    style =
      "w-5 h-5 rounded-full text-white bg-red-400 flex justify-center items-center";
  } else {
    style =
      "w-5 h-5 hidden rounded-full text-white bg-red-400 flex justify-center items-center";
  }

  return (
    <div className="absolute  bottom-[-5px] right-[-5px]">
      <div className={style}>
        <div>
          <p>{cartItems.length}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoNumber;
