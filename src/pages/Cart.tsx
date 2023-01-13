import { SwipeableDrawer } from "@mui/material";
import Button from "@mui/material/Button/Button";
import React from "react";

const Cart = () => {
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
     </div>;
};

export default Cart;
