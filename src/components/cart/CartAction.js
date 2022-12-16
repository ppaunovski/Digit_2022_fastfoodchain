import React, { useContext, useState } from "react";
import { shoppingCartContext } from "../../pages/Menupage";
import CartCard from "./CartCard";
import InfoNumber from "./InfoNumber";
import { IsAuthenticated } from "../../App";
import { useNavigate } from "react-router-dom";
import { signInShowContext } from "../../App";
import "../../styles/Buttons.css";

export default function CartAction() {
  const [modal, setModal] = useState(false);
  const [notAuthModal, setNotAuthModal] = useState(false);
  const { isAuth, changeAuth } = useContext(IsAuthenticated);
  const navigate = useNavigate();
  const { signInShow, setSignInShow } = useContext(signInShowContext);

  return (
    <div className="relative">
      <button
        onClick={() =>
          window.localStorage.getItem("token")
            ? setModal(!modal)
            : setNotAuthModal(!notAuthModal)
        }
        className="pinkButtonOutline fixed z-20 top-24 right-10 btn btn-square btn-outline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-cart"
          viewBox="0 0 16 16"
        >
          {" "}
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
        </svg>
        <InfoNumber />
      </button>
      <CartCard modal={modal} setModal={setModal} />

      <input
        type="checkbox"
        checked={notAuthModal}
        id="my-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <div className="flex relative">
            <h3 className="font-bold text-lg">Please sign in first :)</h3>
            <h3
              className="text-lg absolute right-2 cursor-pointer"
              onClick={() => {
                setNotAuthModal(!notAuthModal);
              }}
            >
              X
            </h3>
          </div>
          <p className="py-4">
            To get an order you must first sign in.
            <br />
            <br />
            If this is your first time, you can always create a new account.
          </p>
          <div className="modal-action">
            <label
              onClick={() => {
                setNotAuthModal(!notAuthModal);
                setSignInShow(true);
              }}
              className="btn"
            >
              Sign In!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
