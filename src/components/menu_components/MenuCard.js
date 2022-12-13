import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import OrderCounter from "./OrderCounter";

function MenuCard(props) {
  const [count, setCount] = useState(1);
  const [modal, setModal] = useState(false);
  return (
    // <div
    //   className={
    //     "relative group-hover:scale-125 transition-all transform h-64  bg-green-500 rounded-xl m-3 flex flex-col items-center justify-center group"
    //   }
    // >
    //   <div className="w-full h-full items-center justify-center group-hover:flex rounded-xl text-white  bg-[#111]/40 absolute text-3xl color-black hidden">
    //     <p>{props.price}$</p>
    //   </div>
    //   <img className="w-3/4" src={props.image}></img>
    //   <p>{props.title}</p>
    // </div>

    <div className="group relative card card-compact w-56 bg-base-100 shadow-xl m-1">
      <div
        onClick={() => setModal(!modal)}
        className="hidden transition-all ease-in-out duration-1000 group-hover:cursor-pointer group-hover:flex justify-center items-center text-white w-full h-full rounded-xl bg-black/30 absolute"
      >
        Order now!
      </div>

      <figure>
        <img className="w-52 h-52" src={props.image} alt={props.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{props.title}</h2>

        {/* <div className="hidden group-hover:block card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>

      {modal && (
        <Modal
          props={props}
          count={count}
          modal={modal}
          setModal={setModal}
          setCount={setCount}
        />
      )}
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
    </div>
  );
}

export default MenuCard;
