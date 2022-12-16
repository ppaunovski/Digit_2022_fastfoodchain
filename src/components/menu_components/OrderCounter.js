import React, { useState } from "react";
import "../../styles/Buttons.css";

export default function ({ count, setCount }) {
  //const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className="btn btn-square pinkButton scale-[.65] text-2xl"
        onClick={() => {
          if (count == 1) {
            return;
          }
          setCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className="btn btn-square pinkButton scale-[.65] text-2xl"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}
