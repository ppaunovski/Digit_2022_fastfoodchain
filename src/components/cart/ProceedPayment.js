import React from "react";

function ProceedPayment({ proceed, setProceed }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Surname"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Address"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Phone"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <input
        type="text"
        placeholder="Card"
        className="input input-bordered w-full"
      />
      <button className="btn">Buy</button>
    </div>
  );
}

export default ProceedPayment;
