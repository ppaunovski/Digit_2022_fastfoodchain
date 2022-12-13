import React from "react";
import OrderCounter from "./OrderCounter";

export default function Modal({ props, count, setCount, modal, setModal }) {
  return (
    <div>
      <label htmlFor="my-modal-4"></label>
      <input
        type="checkbox"
        checked={modal}
        id="my-modal-4"
        className="modal-toggle"
      />

      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="my-modal-4">
          <button
            onClick={() => {
              setModal(!modal);
              setCount(1);
            }}
            className="btn btn-circle btn-outline"
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
              }}
              htmlFor="my-modal-4"
              className="btn"
            >
              Add to cart
            </label>
          </div>
        </label>
      </label>
    </div>
  );
}
