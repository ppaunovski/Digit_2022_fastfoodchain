import React, { useContext, useState } from "react";
import { shoppingCartContext } from "../../pages/Menupage";
import FinalModal from "./FinalModal";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../index";

function ProceedPayment({ proceed, setProceed, setModal }) {
  const [finalModal, setFinalModal] = useState(false);
  const { cartItems, setCartItems } = useContext(shoppingCartContext);

  const uploadPurchese = async () => {
    console.log(window.localStorage.getItem("uid"));
    await updateDoc(doc(db, "users", window.localStorage.getItem("uid")), {
      items: cartItems,
    });
    setCartItems([]);
  };
  return (
    <div className="">
      {!finalModal && (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Name on card"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Credit Card Number"
            className="input input-bordered w-full"
          />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Expiration Date"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="CVC"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <button
            className="btn"
            onClick={() => {
              setFinalModal(true);
              //setProceed(false);
              //setModal(false);
              uploadPurchese();
            }}
          >
            Buy
          </button>{" "}
        </div>
      )}

      {finalModal && (
        <div>
          <p className="text-center mb-8 text-xl">
            Thank you <b>{window.localStorage.getItem("name")}</b> for shopping
            with us!
          </p>
          <div className="alert alert-success shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Your purchase has been confirmed!</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProceedPayment;
