import React from "react";
import Banner from "../Banner/Banner";
import Category from "./Home/Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import Feature from "../Feature/Feature";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="my-3">
        <Category></Category>
      </div>
      <PopularMenu></PopularMenu>
      <Feature></Feature>
    </>
  );
};

export default Home;
