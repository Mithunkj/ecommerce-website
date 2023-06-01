import React, { useState } from "react";
import "../styles/mainStyle.css";
import { FaCheck } from "react-icons/fa";
import CartAmoutToggle from "./CartAmoutToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

function AddToCart({ product }) {
  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrese = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div>
      <div className="colors">
        <p>
          colors:
          {colors.map((curColor, index) => {
           
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => {
                  setColor(curColor);
                }}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to cart  */}
      <CartAmoutToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrese={setIncrese}
      />

      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
        <button>Add To Cart</button>
      </NavLink>
    </div>
  );
}

export default AddToCart;
