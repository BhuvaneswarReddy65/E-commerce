import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

import SortDropdown from "./SortDropdown";
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
  const [productLists, setProductLists] = useState([]);
  const [sortOrder, setSortOrder] = useState("lowToHigh");

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    console.log(json);
    setProductLists(json);
  };
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedProducts = productLists.slice().sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });
  console.log();
  return (
    <>
      <div>
        <SortDropdown handleSortChange={handleSortChange} />
        <div className="flex flex-wrap m-5">
          {sortedProducts.map((product) => (
            <ProductCard dataList={product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductList;
