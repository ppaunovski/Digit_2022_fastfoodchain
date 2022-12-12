import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      Homepage
      <div>
        <Link to="/menu">
          <button className="w-100 h-50 bg-slate-500">Menu</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
