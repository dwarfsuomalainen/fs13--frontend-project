import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useEffect} from "react";
import Panel from "../components/panel/Panel";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import {
  deleteProduct,
  fetchProducts,
  sortByName,
  sortByPrice,
} from "../redux/reducers/productReducer";
import Product from "../components/product/Product";

const Products = () => {
  //const [productList, setproductList] = useState<ProductsType[]>([]);
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.productReducer);
  const sortName = ()=> {
    dispatch(sortByName("asc"))
  }
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
  },[]);
  console.log();

  return (
    <div>
      <Panel/>
      <button onClick={sortName}>Sort by name</button>
      {products.length > 0 && (
        <div className="grid_list">
          {products.map((product) => (
            <Card className="card" sx={{ maxWidth: 345}}>
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
                  {"Price:" + product.price +"€"}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button size="small"
                onClick={()=> <Product/>}
                >Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
