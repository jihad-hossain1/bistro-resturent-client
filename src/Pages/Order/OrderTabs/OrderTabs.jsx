import React from "react";
import FoodCard from "../../../Components/FoodMenuCard/FoodCard";

// todo pagination here...
const OrderTabs = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 px-2 py-3">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTabs;
