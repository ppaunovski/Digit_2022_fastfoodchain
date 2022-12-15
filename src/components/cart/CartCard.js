import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { shoppingCartContext } from "../../pages/Menupage";
import OrderedItem from "./OrderedItem";
import ProceedPayment from "./ProceedPayment";

function CartCard({ modal, setModal }) {
  const { cartItems, setCartItems } = useContext(shoppingCartContext);
  const [proceed, setProceed] = useState(false);
  console.log(cartItems);
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        checked={modal}
        onChange={() => ""}
        id="my-modal-6"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <button
            onClick={() => {
              setModal(!modal);
              setProceed(false);
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
          <h3 className="font-bold text-lg">Selected items:</h3>
          {/* <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p> */}
          {cartItems &&
            cartItems.map((item) => {
              console.log(item);
              //console.log(cartItems);
              return <OrderedItem key={item.id} item={item} id={item.id} />;
            })}
          <div className="modal-action">
            <label
              style={{ display: proceed ? "none" : "flex" }}
              onClick={() => {
                setProceed(!proceed);
                //setModal(!modal);
              }}
              htmlFor="my-modal-6"
              className="btn"
            >
              Proceed
            </label>
          </div>
          {proceed && (
            <ProceedPayment
              proceed={proceed}
              setProceed={setProceed}
              setModal={setModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CartCard;
