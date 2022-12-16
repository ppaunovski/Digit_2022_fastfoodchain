import React, { useContext } from "react";
import { shoppingCartContext } from "../../App";

export default function OrderedItem(props) {
  const { cartItems, setCartItems } = useContext(shoppingCartContext);
  console.log(props);
  const handleDeleteFromCart = () => {
    let newItems = cartItems.filter((item) => item.id !== props.id);
    console.log(newItems);
    setCartItems(newItems);
  };
  return (
    <div className="m-2 relative">
      <div className="card h-24 card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-16" src={props.item.item.image} alt="Movie" />
        </figure>
        <div className="card-body p-3">
          <h2 className="card-title text-sm">{props.item.item.title}</h2>
          <div className="flex text-xs">
            <p>
              Pieces: <b>{props.item.count}</b>
            </p>
            <p>
              Price per piece: <b>${props.item.item.price}</b>
            </p>
          </div>
          <p className="text-xs">
            <b>Total price: ${props.item.count * props.item.item.price} </b>
          </p>
        </div>
      </div>
      <div className="absolute top-10 right-8">
        <svg
          onClick={handleDeleteFromCart}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 hover:cursor-pointer"
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
      </div>
    </div>
  );
}
