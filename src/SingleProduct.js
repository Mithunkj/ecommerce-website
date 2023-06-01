import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./context/productcontex";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import FormatPrice from "../src/Helpers/FormatPrice";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products"; //3rd

function SingleProduct() {
  const { isSingleLoading, getSingleProduct, singleProduct } =
    useProductContext(); //4th
  // console.log(singleProduct);

  const { id } = useParams(); //1st
  console.log(id);

  const {
    id: alias,
    name,
    company,
    price,
    description,
    stock,
    reviews,
    image,
    stars,
  } = singleProduct; //5th

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`); //2nd
  }, []);

  if (isSingleLoading) {
    return <div>....Loading</div>; //6th
  }

  return (
    <>
      <PageNavigation title={name} />
      <div className="container">
        <div className="row">
          <div className="productImage">
            <MyImage imgs={image} />
          </div>
          <div className="productData">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />

            <div className="productDataPrice">
              MRP:
              <del>
                <FormatPrice price={price + 2500} />
              </del>
            </div>
            <div>
              <h3>
                Deal of the Day:
                <FormatPrice price={price} />
              </h3>
              <p>{description}</p>
            </div>
            <div>
              <p>
                Available:<span>{stock > 0 ? "In Stock" : "Not Avilable"}</span>
              </p>
              <p>
                ID: <span>{id}</span>
              </p>
              <p>
                BRAND: <span>{company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </>
  );
}

//Style part
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
