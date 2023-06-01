import React from "react";
import Product from "./Product";
import "../styles/mainStyle.css";

function GridView({ products }) {
  return (
    <>
      <div className="d-flex d-wrap ">
        {products.map((curElm, id) => {
          return <Product key={curElm.id} {...curElm} />;
        })}
      </div>
    </>
  );
}

export default GridView;
