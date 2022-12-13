import React, { useEffect, useState } from "react";
import OrderCounter from "./OrderCounter";

function MenuCard(props) {
  const [count, setCount] = useState(1);
  return (
    // <div
    //   className={
    //     "relative group-hover:scale-125 transition-all transform h-64  bg-green-500 rounded-xl m-3 flex flex-col items-center justify-center group"
    //   }
    // >
    //   <div className="w-full h-full items-center justify-center group-hover:flex rounded-xl text-white  bg-[#111]/40 absolute text-3xl color-black hidden">
    //     <p>{props.price}$</p>
    //   </div>
    //   <img className="w-3/4" src={props.image}></img>
    //   <p>{props.title}</p>
    // </div>

    <div className="group relative card card-compact w-56 bg-base-100 shadow-xl m-1">
      <label htmlFor="my-modal-4">
        <div className="hidden transition-all ease-in-out duration-1000 group-hover:cursor-pointer group-hover:flex justify-center items-center text-white w-full h-full rounded-xl bg-black/30 absolute">
          Order now!
        </div>
      </label>
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">Shoes!</h2>

        {/* <div className="hidden group-hover:block card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />

      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <img src={props.image} className="w-52 h-52 m-auto"></img>
          <h3 className="font-bold text-lg">{props.title}</h3>
          <p className="py-4">{props.description}</p>
          <p>{props.calories}</p>
          <p>${props.price}</p>
          <OrderCounter count={count} setCount={setCount} />
          <div className="modal-action">
            <label htmlFor="my-modal-4" className="btn">
              Add to cart
            </label>
          </div>
        </label>
      </label>
    </div>
  );
}

export default MenuCard;
