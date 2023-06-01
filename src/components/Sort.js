import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import "../styles/mainStyle.css";
import { useFilterContext } from "../context/filter_context";

function Sort() {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext(); //2nd sort
  return (
    <>
      <div className="d-flex">
        <div>
          <button
            className={grid_view ? "active-btn sort-btn" : "sort-btn"}
            onClick={setGridView}
          >
            <BsFillGridFill className="icon" />
          </button>
          <button
            className={!grid_view ? "active-btn sort-btn" : "sort-btn"}
            onClick={setListView}
          >
            <BsList className="icon" />
          </button>
        </div>
        {/* 2nd column */}
        <div>
          <p>{`${filter_products.length}  Product Available`}</p>
        </div>
        {/* 3rd column */}
        <div>
          <form action="#">
            <label htmlFor="sort"></label>
            <select
              name="sort"
              id="sort"
              className="sort-section--style"
              onClick={sorting} //1st sorting
            >
              <option value="lowest">Price(lowest)</option>
              <option value="highest">Price(highest)</option>
              <option value="a-z">Price(a-z)</option>
              <option value="z-a">Price(z-a)</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
}

export default Sort;
