import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  InputBase,
  styled,
  alpha,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  singleProduct,
  sortByName,
  sortByPrice,
} from "../redux/reducers/productReducer";
import Product from "../components/product/ProductCard";
import { Panel } from "../components/panel/Panel";
import { ProductsType } from "../types/productsType";
import { useNavigate } from "react-router";
import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

const Products = () => {
  //const [productList, setproductList] = useState<ProductsType[]>([]);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");

  //Search
  const products = useAppSelector((state) => {
    return state.productReducer.filter((item) => {
      return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  });

  // const onFilterList = (search:string, list: ProductsType[])=>{
  //   if(!search){
  //     return list
  //   }
  //   return list.filter(item=> {
  //     return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1
  // })}
  // const list = onFilterList(search, products)
  // console.log("list", list)
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
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="cart_header">On sale now</h1>
      <Panel sortName={sortName} sortPrice={sortPrice} />

      <Box className="panel" sx={{ width: "100%" }}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Search..."
            variant="standard"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
      </Box>
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
                <Button
                  onClick={() => navigate("/products/" + product.id)}
                  size="small"
                >
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
