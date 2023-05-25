import React from "react";
import MenuCard from "../../Home/Home/Home/MenuCard/MenuCard";
import Cover from "../../Home/Home/Shared/Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
