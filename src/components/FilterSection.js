import React from "react";
import { useFilterContext } from "../context/filter_context";
import "../styles/mainStyle.css";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice";

function FilterSection() {
  const {
    filters: { text, category, color, price, minPrice, maxPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext(); /

  //TO GET THE UNIQUE DATA OF EACH FIELDS
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });
    //console.log(newVal);
    if (attr === "colors") {
     
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
   
  };
  //WE NEED UNIQUE DATA //1st category requred
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company"); 
  const colorData = getUniqueData(all_products, "colors");
  return (
    <>
      <div>
        {/*1st search name */}
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>
      {/* catagory */}
      <div>
        <h3>Category</h3>
        <div className="btn-catagory">
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
      {/*3rd company */}
      <div>
        <form action="#">
          <select name="company" id="company" onClick={updateFilterValue}>
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      {/* colors */}
      <div>
        <h3>Colors</h3>
        <div>
          {colorData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  name="color"
                  value={curColor}
                  onClick={updateFilterValue}
                >
                  All
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                name="color"
                value={curColor}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                style={{ backgroundColor: curColor }}
                onClick={updateFilterValue}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      {/* ranging filter */}
      <div>
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      {/* Clearfilter */}
      <div>
        <button onClick={clearFilters}>Clearfilter</button>
      </div>
    </>
  );
}

export default FilterSection;
