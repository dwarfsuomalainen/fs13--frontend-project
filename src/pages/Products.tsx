import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import {
  deleteProduct,
  fetchProducts,
  sortByName,
  sortByPrice,
} from "../redux/reducers/productReducer";
import { MainState } from "../redux/store";
import { ProductsType } from "../types/productsType";

const Products = () => {
  //const [productList, setproductList] = useState<ProductsType[]>([]);
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.productReducer);
  const onDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };

  // useEffect(() => {
  //   const fetchList = async () => {
  //     const resp = await fetch("https://api.escuelajs.co/api/v1/products");
  //     const data = await resp.json();
  //     setproductList(data);
  //   };
  //   fetchList()
  // }, []);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log();

  return (
    <div>
      {products.length > 0 && (
        <ul className="grid_list">
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );

  //   <Card sx={{ maxWidth: 345 }}>
  //   <CardMedia
  //     sx={{ height: 140 }}
  //     image="/static/images/cards/contemplative-reptile.jpg"
  //     title="green iguana"
  //   />
  //   <CardContent>
  //     <Typography gutterBottom variant="h5" component="div">
  //       Lizard
  //     </Typography>
  //     <Typography variant="body2" color="text.secondary">
  // {}
  //     </Typography>
  //   </CardContent>
  //   <CardActions>
  //     <Button size="small">Share</Button>
  //     <Button size="small">Learn More</Button>
  //   </CardActions>
  // </Card>
};

export default Products;

