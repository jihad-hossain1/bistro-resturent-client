import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../Hook/useCart";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>

      <div className="uppercase">
        <h3 className="">
          Total Item
          {cart.length}
        </h3>
        <h3 className="">Total Price ${total}</h3>
      </div>
    </>
  );
};

export default MyCart;
