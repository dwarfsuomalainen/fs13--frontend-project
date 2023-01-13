import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  sortByName,
  sortByPrice,
} from "../redux/reducers/productReducer";
import Product from "../components/product/Product";
import { Panel } from "../components/panel/Panel";
import { ProductsType } from "../types/productsType";

const Products = () => {
  //const [productList, setproductList] = useState<ProductsType[]>([]);
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");

  const products = useAppSelector(state => state.productReducer) 

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

 
 
  const sortName = () => {
    dispatch(sortByName("asc"));
  };

  const sortPrice = () => {
    dispatch(sortByPrice("asc"));
  };
  const createNewProduct = () => {
    dispatch(
      createProduct({
        title: "Roman B Test producte ",
        price: 10,
        description: "A description",
        categoryId: 1,
        images: ["https://placeimg.com/640/480/any"],
      })
    );
  };

  const onDelete = (id: number) => {
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

  return (
    <div>
      <h1 className="cart_header">On sale now</h1>
      <Panel
        sortName={sortName}
        sortPrice={sortPrice}
        search={search}
        setSearch={setSearch}
      />
      <button onClick={createNewProduct}>Create product</button>
      {products.length > 0 && (
        <div className="grid_list">
          {products.map((product) => (
            <Card className="card" sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={product.images?.[0]}
                title={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {"Category: " + product.category.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {"Price:" + product.price + "€"}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button size="small" onClick={() => <Product />}>
                  Learn More
                </Button>
                <Button onClick={() => onDelete(product.id)} size="small">
                  Delete product
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
