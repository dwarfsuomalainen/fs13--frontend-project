
import React from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";

import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Products from "./pages/Products";

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
          <Route path="" element={<Main/>}>
            <Route path="" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/info" element={<Info />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products">
              <Route path="" element={<Products />} />
              <Route path=":id" element={<Product />} />
            </Route>
          </Route>

          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
