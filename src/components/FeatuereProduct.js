import { useProductContext } from "../context/productcontex";
import Product from "./Product";
import "../styles/mainStyle.css";

const FeatuereProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  console.log(featureProducts);

  if (isLoading) {
    return (
      <div>
        <h3>.....Loading</h3>
      </div>
    );
  }

  return (
    <>
      <div className="seaction">
        <div className="container">
          <div>
            <h2>Check Now!</h2>
          </div>
          <div>
            <h3>Our Feacture Service</h3>
          </div>
          <div className="d-flex d-wrap">
            {featureProducts.map((curElem) => {
              return <Product key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatuereProduct;
