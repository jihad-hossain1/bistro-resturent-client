import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import MenuCard from "../Shared/MenuCard/MenuCard";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <>
      <section>
        <SectionTitle
          subHeading={"Popular Items"}
          heading={"From Our Menu"}
        ></SectionTitle>
      </section>
      <div className="grid md:grid-cols-2 gap-8">
        {menu.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
    </>
  );
};

export default PopularMenu;
