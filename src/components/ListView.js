import React from "react";
import "../styles/mainStyle.css";
import FormatPrice from "../Helpers/FormatPrice";
import { NavLink } from "react-router-dom";

function ListView({ products }) {
  return (
    <>
      <div>
        <h3>Product list</h3>
        {products.map((curElm) => {
          const { id, name, image, price, description } = curElm;
          return (
            <>
              <div className="d-flex">
                <figure>
                  <img src={image} alt={name} className="figure" />
                </figure>
                <div>
                  <h3>{name}</h3>
                  <p>
                    <FormatPrice price={price} />
                  </p>
                  <p>{description.slice(0, 88)} ...</p>
                  <NavLink to={`/singleproduct/${id}`}>
                    <button>Veiw More</button>
                  </NavLink>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ListView;
