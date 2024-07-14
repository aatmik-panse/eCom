import React from "react";
import CartDetails from "./CartDetails";
import { title } from "process";

export const metadata = {
  title: "Shopping Cart",
};

const CartPage = () => {
  return (
    <div>
      <CartDetails />
    </div>
  );
};

export default CartPage;
