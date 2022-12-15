import React, { createContext, useContext, useEffect, useState } from "react";
import "../styles/NavigationBar.css";
import { ScrollContext } from "../App";
import { Link, NavLink, useLocation } from "react-router-dom";
import SignInSignUp from "../pages/SignInSignUp";
import { db } from "../index.js";

export const signInShowContext = createContext(false);

export default function Test(props) {
  const show = useContext(ScrollContext);
  const location = useLocation();
  const [signInShow, setSignInShow] = useState(false);

  return (
    <signInShowContext.Provider value={{signInShow, setSignInShow}}>
      <div className={"NavBarHidden " + (show && "NavBar") + " h-14 w-full"}>
        <ul className={"Menu inline-flex h-full"} style={{ visibility: show ? "visible" : "hidden" }}>
          <li className={location.pathname == "/" ? "selectedNav" : ""}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={location.pathname == "/menu" ? "selectedNav" : ""}>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>About</li>
          <li>Contact</li>
          {!props.isAuth ? (
            <li className="cursor-pointer" onClick={() => setSignInShow(true)}>
              Sign In
            </li>
          ) : ""}
        </ul>

        <SignInSignUp signInShow={signInShow} setSignInShow={setSignInShow} db={db} changeAuth={props.changeAuth} />
      </div>
    </signInShowContext.Provider>
  );
}
