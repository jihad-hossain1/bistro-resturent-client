import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Home/Home/Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import desertImg from "../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

import useMenu from "../../Hook/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>

      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* main cover  */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* offered menu items  */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items  */}
      <MenuCategory
        items={desserts}
        title="dessert"
        img={desertImg}
      ></MenuCategory>
      {/* salad menu items  */}
      <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
      {/* pizza menu items  */}
      <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
      {/* soup menu items  */}
      <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
    </>
  );
};

export default Menu;
