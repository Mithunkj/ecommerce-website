import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/mainStyle.css";
import FormatPrice from "../Helpers/FormatPrice";

function Product(curElem) {
  const { id, image, name, price, catagory } = curElem;
  return (
    <>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
          <figure className="figure">
            <img src={image} alt={name} className="imageStyle" />
            <figure>{catagory}</figure>
          </figure>
          <div>
            <h4>{name}</h4>
            <p>
              <FormatPrice price={price} />
            </p>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default Product;
