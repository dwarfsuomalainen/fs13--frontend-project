import React, { useEffect, useState } from "react";
import { products } from "../types/products";

const Products = () => {
  const [productList, setproductList] = useState<products[]>([]);
  console.log(productList);
  useEffect(() => {
    const fetchList = async () => {
      const resp = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await resp.json();
      setproductList(data);
    };
    fetchList()
  }, []);
  return <div></div>;
};

export default Products;
