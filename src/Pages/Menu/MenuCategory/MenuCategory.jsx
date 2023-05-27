import React from "react";
import MenuCard from "../../Home/Home/Home/MenuCard/MenuCard";
import Cover from "../../Home/Home/Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline btn-secondary border-0 border-b-4">
          {" "}
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
