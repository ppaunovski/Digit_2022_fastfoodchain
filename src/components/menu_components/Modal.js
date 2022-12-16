import React, { useContext, useState } from "react";
import OrderCounter from "./OrderCounter";
import { shoppingCartContext } from "../../pages/Menupage";
import "../../styles/Buttons.css";

export default function Modal({ props, count, setCount, modal, setModal }) {
  const { cartItems, setCartItems } = useContext(shoppingCartContext);
  const handleAddToCart = () => {
    const cartItem = {
      id: props.id,
      item: props,
      count: count,
    };
    let found = cartItems.findIndex((item) => item.id === cartItem.id);

    console.log("FOUND", found);
    if (found === -1) {
      setCartItems([...cartItems, cartItem]);
    } else {
      //let newCartItems = cartItems.map((item) => item);
      cartItems[found].count += cartItem.count;
      //   console.log("new", newCartItems);
      //   setCartItems(newCartItems);
    }
  };

  return (
    <div>
      <label htmlFor="my-modal-4"></label>
      <input
        type="checkbox"
        checked={modal}
        id="my-modal-4"
        className="modal-toggle"
        onChange={() => console.log("ch")}
      />

      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="my-modal-4">
          <button
            onClick={() => {
              setModal(!modal);
              setCount(1);
            }}
            className="btn btn-circle btn-outline pinkButtonOutline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img src={props.image} className="m-auto w-72 h-72"></img>
          <h3 className="font-bold text-lg">{props.title}</h3>
          <p className="py-4">{props.description}</p>
          <p>{props.calories}</p>
          <p>${props.price}</p>
          <OrderCounter count={count} setCount={setCount} />
          <div className="modal-action flex items-center justify-between">
            <div>
              <p>
                <strong>Total: </strong>
                <span>${Math.round(count * props.price * 100) / 100}</span>
              </p>
            </div>
            <label
              onClick={() => {
                setModal(!modal);
                setCount(1);
                handleAddToCart();
              }}
              htmlFor="my-modal-4"
              className="btn pinkButton"
            >
              Add to cart
            </label>
          </div>
        </label>
      </label>
    </div>
  );
}
