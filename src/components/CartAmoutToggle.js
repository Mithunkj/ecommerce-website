import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "../styles/mainStyle.css";
//import { NavLink } from "react-router-dom";

function CartAmoutToggle({ amount, setDecrease, setIncrese }) {
  return (
    <>
      <div className="d-flex">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div>
          <h3>{amount}</h3>
        </div>
        <button onClick={() => setIncrese()}>
          <FaPlus />
        </button>
      </div>
     
    </>
  );
}

export default CartAmoutToggle;
