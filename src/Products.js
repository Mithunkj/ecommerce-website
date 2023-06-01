import styled from "styled-components";
import "./styles/mainStyle.css";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import { useFilterContext } from "./context/filter_context";

const Products = () => {
  const { filter_products, all_products } = useFilterContext();

  console.log(filter_products);
  console.log(all_products);
  return (
    <>
      <div className="conatiner grid grid-filter" style={{ display: "flex" }}>
        <div>
          <FilterSection />
        </div>
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
