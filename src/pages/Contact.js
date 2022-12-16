import React, { useState } from "react";
import FindUs from "./FindUs";
import "../styles/Contact.css"

const Popup = props => {
    const [useFind, setUseFind] = useState(false);
  return (
    <div>
    <label htmlFor="my-modal-4"></label>
    <input
      type="checkbox"
      checked={props.showContact}
      id="my-modal-4"
      className="modal-toggle"
    />

    <label htmlFor="my-modal-4" className="modal cursor-pointer">
      <label className="modal-box text-left relative h-96" htmlFor="my-modal-4" id = "nesto">
        <div className="font-serif font-black opacity-100" id = "nestodrugo">
        <h1 className="absolute right-8 top-3 cursor-pointer" onClick={() => props.setShowContact(false)}>X</h1>
        <h3 className = "mb-4 font-bold text-lg">How to contact us:</h3>

        <p className = "w-4/5 text-sm font-poppins">
            The sweetest choices in life, are often the easiest to find!
        </p>
        <p className = "w-4/5 text-sm font-poppins mt-10 font-bold">
            Our contact information is in your reach!
        </p>
        <ul className="font-serif mb-2 font-black text-xs">
            <li>
                Tel 1: 075/331-037
            </li>
            <li>
                Tel 2: 070/678-783
            </li>
            <li>
                Landline: 072/121-843
            </li>
        </ul>
        <div className="flex justify-end">
            <h3>
                Our mailing adress:
            </h3>
        </div>
        <div className="flex justify-end text-sm flex-col">
            <a href = "mailto: kpancevski19@gmail.com" className="flex justify-end">Sweetster_official@gmail.com</a>
        </div>
        <button className="btn btn-dark ml-5 mt-12" onClick={() => setUseFind(true)}>
            See out locations!
        </button>
        </div>
      </label>
    </label>
    {useFind &&
    <FindUs useFind={useFind} setUseFind={setUseFind} /> }
  </div>
  );
};

export default Popup;