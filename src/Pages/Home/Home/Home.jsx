import React from "react";

import Banner from "./Banner/Banner";
import Category from "./Home/Category/Category";
import PopularMenu from "./Home/PopularMenu/PopularMenu";
import Feature from "./Feature/Feature";
import Testimonial from "./Home/Testimonial/Testimonial";
import BistroBoss from "./Home/BistroBoss/BistroBoss";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="my-3">
        <Category></Category>
      </div>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <Feature></Feature>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;
