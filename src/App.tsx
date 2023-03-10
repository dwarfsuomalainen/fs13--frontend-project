import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "info",
        element: <Info />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="" element={<Main />}>
    //       <Route path="" element={<Home />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/cart" element={<Cart />} />
    //       <Route path="/info" element={<Info />} />
    //       <Route path="/home" element={<Home />} />
    //       <Route path="/products">
    //         <Route path="" element={<Products />} />
    //         <Route path=":id" element={<Product />} />
    //       </Route>
    //     </Route>

    //     <Route path="/*" element={<Error404 />} />
    //   </Routes>
    // </BrowserRouter>

    <RouterProvider router={router} />
  );
};

export default App;
