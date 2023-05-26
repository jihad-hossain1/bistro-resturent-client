import React, { useState } from "react";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import Cover from "../Home/Home/Shared/Cover/Cover";
import { Helmet } from "react-helmet-async";

// react tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hook/useMenu";
import FoodCard from "../../Components/FoodMenuCard/FoodCard";
import OrderTabs from "./OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];

  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log(category);
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Order</title>
      </Helmet>
      <Cover img={orderCoverImg} title="Order Food"></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTabs items={salad}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={pizza}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={soup}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={desserts}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={drinks}></OrderTabs>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Order;
