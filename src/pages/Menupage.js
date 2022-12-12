import React from "react";
import { Link } from "react-router-dom";

function Menupage() {
  return (
    <div>
      Menupage
      <div>
        <Link to="/">
          <button className="w-100 h-50 bg-slate-500">Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Menupage;
