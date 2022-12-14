import React, { useContext, useEffect, useState } from "react";
import "../styles/NavigationBar.css";
import { ScrollContext } from "../App";
import { Link, NavLink } from "react-router-dom";

export default function Test() {
  const show = useContext(ScrollContext);

  return (
    <div className={"NavBarHidden " + (show && "NavBar") + " h-14 w-full"}>
      <ul
        className={"Menu inline-flex h-full"}
        style={{ visibility: show ? "visible" : "hidden" }}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
