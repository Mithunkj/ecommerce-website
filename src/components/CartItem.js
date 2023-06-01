import React from "react";
import "../styles/mainStyle.css";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmoutToggle from "./CartAmoutToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

function CartItem({ id, name, image, color, price, amount }) {
  const { removeItem, setDecrease, setIncrement } = useCartContext();
  

  return (
    <div className="cart-table">
      <div className="d-flex">
        <div>
          <figure className="cartfigure">
            <img src={image} alt={id} className="imageStyle" />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="d-flex">
            <p>color:</p>
            <div
              className="btnStyle"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      <div>
        <FormatPrice price={price} />
      </div>
      <div>
       
        <CartAmoutToggle
          amount={amount}
          setDecrease={() => setDecrease(id)}
          setIncrese={() => setIncrement(id)}
        />
      </div>
      <div>
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash
          className="delite-icon"
          onClick={() => {
            removeItem(id); //1st remove cart
          }}
        />
      </div>
    </div>
  );
}

export default CartItem;
