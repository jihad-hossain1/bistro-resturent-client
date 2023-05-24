import React from "react";

const MenuCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "0 200px 200px" }}
        className="w-[120px] rounded-md"
        src={image}
        alt=""
      />
      <div className="flex">
        <div>
          <h3>
            <h3 className="uppercase">{name}--------</h3>
          </h3>
          <p>{recipe}</p>
        </div>
        <p className="text-yellow-500">${price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
