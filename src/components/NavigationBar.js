import React, { createContext, useContext, useEffect, useState } from "react";
import "../styles/NavigationBar.css";
import { ScrollContext, signInShowContext } from "../App";
import { Link, NavLink, useLocation } from "react-router-dom";
import SignInSignUp from "../pages/SignInSignUp";
import { db } from "../index.js";
import FindUs from "../pages/FindUs";
import { auth } from "../firebase.js";
import "../styles/Buttons.css";
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
  const { signInShow, setSignInShow, logOutShow, setLogOutShow } =
    useContext(signInShowContext);
  const [aboutShow, setAboutShow] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // const styledNav = ""

  // const s = "background-color: #ffffff;
  // background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff3636' fill-opacity='0.84' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");"

  return (
    <div>
      <div
        className="bg-[#F391C2] h-16 fixed right-0  w-full z-50 top-0"
        //className={"NavBarHidden " + (show && "NavBar") + " h-14 w-full"}
      >
        <div
          className="h-full flex justify-center items-center gap-5 sm:gap-8 md:gap-14"
          //className={"Menu inline-flex h-full"}
          //style={{ visibility: show ? "visible" : "hidden" }}
        >
          <div className={location.pathname == "/" ? "relative" : ""}>
            <NavLink to="/" className="text-white">
              Home
            </NavLink>
            <div
              className={
                location.pathname == "/"
                  ? "absolute -bottom-5 w-full "
                  : "hidden"
              }
            >
              <img src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/7-70496_bow-tie-drawing-ribbon-clip-art-clipart-hair(3).png?alt=media&token=9fb222f9-73f5-4649-973a-c68822465ee9"></img>
            </div>
          </div>
          <div
            className={location.pathname.includes("/menu") ? "relative" : ""}
          >
            <NavLink to="/menu" className="text-white">
              Menu
            </NavLink>
            <div
              className={
                location.pathname.includes("/menu")
                  ? "absolute -bottom-5 w-full "
                  : "hidden"
              }
            >
              <img src="https://firebasestorage.googleapis.com/v0/b/digit-2022.appspot.com/o/7-70496_bow-tie-drawing-ribbon-clip-art-clipart-hair(3).png?alt=media&token=9fb222f9-73f5-4649-973a-c68822465ee9"></img>
            </div>
          </div>
          <div className="cursor-pointer" onClick={() => setAboutShow(true)}>
            About
          </div>
          <div className="cursor-pointer" onClick={() => setShowContact(true)}>
            Contact
          </div>
          {!props.isAuth && !window.localStorage.getItem("token") ? (
            <div
              className="cursor-pointer text-white absolute right-8"
              onClick={() => setSignInShow(true)}
            >
              Sign In
            </div>
          ) : (
            <div
              className="text-white cursor-pointer absolute right-8"
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
            </div>
          )}
        </div>

        <SignInSignUp
          signInShow={signInShow}
          setSignInShow={setSignInShow}
          db={db}
          changeAuth={props.changeAuth}
        />
        <FindUs aboutShow={aboutShow} setAboutShow={setAboutShow} />
        <Contact
          showContact={showContact}
          setShowContact={setShowContact}
        ></Contact>
      </div>
    </div>
  );
}
