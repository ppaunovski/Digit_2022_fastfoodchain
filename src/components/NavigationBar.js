import React, { useContext, useEffect, useState } from "react";
import "../styles/NavigationBar.css";
import { ScrollContext } from "../App";

export default function Test() {
  const show = useContext(ScrollContext);

  return (
    <div className={"NavBarHidden " + (show && "NavBar") + " h-14 w-full"}>
      <ul
        className={"Menu inline-flex h-full"}
        style={{ visibility: show ? "visible" : "hidden" }}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
