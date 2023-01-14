import { SwipeableDrawer } from "@mui/material";
import Button from "@mui/material/Button/Button";
import React from "react";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate()
  return <div>
    <h1 className="cart_header">Your cart</h1>
    <table className="cart_table">
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Qty.</th>
        <th>Sub total</th>
        <th>Edit</th>
      </tr>
    </table>
    <button onClick={()=> navigate(-1)}>Back to store</button>
     </div>;
};

export default Cart;
