import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../redux/reducers/productReducer";
import { MainState } from "../redux/store";
import { ProductsType } from "../types/productsType";

const Products = () => {
  const [productList, setproductList] = useState<ProductsType[]>([]);
  const products = useSelector<MainState>(state => state.productReducer)
  const dispatch = useDispatch()
  const onDelete = (id: string) => {
    dispatch(deleteProduct(id))
  }
  console.log(Products);
  useEffect(() => {
    const fetchList = async () => {
      const resp = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await resp.json();
      setproductList(data);
    };
    fetchList()
  }, []);
  return (<div>
    {productList.length > 0 && (
      <ul>
      {productList.map(product => (
        <li key={product.id}>{product.title}</li>
      ))}
      </ul>
    )}
  </div>);
};

export default Products;
function dispatch() {
  throw new Error("Function not implemented.");
}

