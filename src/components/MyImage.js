// export default MyImage;

import React from "react";
import "../styles/mainStyle.css";
import { useState } from "react";

function MyImage({ imgs = [{ url: "" }] }) {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <>
      <div>
        {imgs.map((curElm, index) => {
          return (
            <figure className="figure">
              <img
                src={curElm.url}
                alt={curElm.filename}
                key={index}
                className="imageStyle"
                onMouseOver={() => {
                  setMainImage(curElm);
                }}
              />
            </figure>
          );
        })}
      </div>
      <div>
        <figure>
          <img
            src={mainImage.url}
            alt={mainImage.filename}
            className="heroImage"
          />
        </figure>
      </div>
    </>
  );
}

export default MyImage;
