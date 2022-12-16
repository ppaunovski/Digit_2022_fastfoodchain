import React, { createContext, useContext, useEffect, useState } from "react";
import "../styles/NavigationBar.css";
import { ScrollContext, signInShowContext } from "../App";
import { Link, NavLink, useLocation } from "react-router-dom";
import SignInSignUp from "../pages/SignInSignUp";
import { db } from "../index.js";
import FindUs from "../pages/FindUs";
import { auth } from "../firebase.js";
import Contact from "../pages/Contact";

// export const signInShowContext = createContext({
//   signInShow: false,
//   setSignInShow: (value) => {},
// });

export default function Test(props) {
  const logout = async () => {
    await auth.signOut();
  };

  const show = useContext(ScrollContext);
  const location = useLocation();
  const {signInShow, setSignInShow,logOutShow, setLogOutShow} = useContext(signInShowContext)
  const [aboutShow, setAboutShow] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div>
      <div className={"NavBarHidden " + (show && "NavBar") + " h-14 w-full"}>
        <ul
          className={"Menu inline-flex h-full"}
          style={{ visibility: show ? "visible" : "hidden" }}
        >
          <li className={location.pathname == "/" ? "selectedNav" : ""}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={location.pathname == "/menu" ? "selectedNav" : ""}>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li className="cursor-pointer" onClick={() => setAboutShow(true)}>
            About
          </li>
          <li className = "cursor-pointer" onClick = {() => setShowContact(true)}>
            Contact
            </li>
          {!props.isAuth && !window.localStorage.getItem("token") ? (
            <li className="cursor-pointer" onClick={() => setSignInShow(true)}>
              Sign In
            </li>
          ) : (
            <li
              onClick={() => {
                window.localStorage.setItem("token", "");
                window.localStorage.setItem("name", "");
                window.localStorage.setItem("username", "");
                window.localStorage.setItem("surname", "");
                setLogOutShow(!logOutShow);
                logout();
              }}
            >
              Log out
            </li>
          )}
        </ul>

        <SignInSignUp
          signInShow={signInShow}
          setSignInShow={setSignInShow}
          db={db}
          changeAuth={props.changeAuth}
        />
        <FindUs aboutShow={aboutShow} setAboutShow={setAboutShow} />
        <Contact showContact = {showContact} setShowContact={setShowContact}></Contact>
      </div>
    </div>
  );
}
