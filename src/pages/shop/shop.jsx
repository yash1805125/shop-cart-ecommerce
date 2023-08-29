import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [categoryProds, setCategoryProds] = useState([]);

  const handleCategory = (e) => {
    const cat = e.target.value;
    if (cat[0].toUpperCase() === cat[0]) {
      return setCategory("");
    }
    setCategory(cat);
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategoryProds(data);
        console.log(data);
      });
  };

  return (
    <div className="shop">
      <div className="top-bar">
        <div className="dummy">
          <input />
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for an item"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="filter-options">
          <select className="filter" value={category} onChange={handleCategory}>
            <option>Filter categories</option>
            <option>electronics</option>
            <option>jewelery</option>
            <option>men's clothing</option>
            <option>women's clothing</option>
          </select>
        </div>
      </div>

      <div className="products">
        <div className="fix-search-items">
          {search.length === 0 && category === "" ? (
            PRODUCTS.map((product) => <Product data={product} />)
          ) : category && search.length === 0 ? (
            categoryProds.map((product) => <Product data={product} />)
          ) : category && search.length !== 0 ? (
            categoryProds.map((product) =>
              product.title.toLowerCase().includes(search.toLowerCase()) ? (
                <Product data={product} />
              ) : (
                <div></div>
              )
            )
          ) : !category && search.length !== 0 ? (
            PRODUCTS.map((product) =>
              product.title.toLowerCase().includes(search.toLowerCase()) ? (
                <Product data={product} />
              ) : (
                <div></div>
              )
            )
          ) : (
            <div>Enjoy</div>
          )}
        </div>
      </div>
    </div>
  );
};
