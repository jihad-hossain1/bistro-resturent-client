import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import featuredImg from "../../../assets/home/featured.jpg";

const Feature = () => {
  return (
    <div style={{ backgroundImage: `url(${featuredImg})` }}>
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-10 px-16 md:py-20 md:px-36 space-x-4 text-white space-y-4">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="space-y-1">
          <p>Aug 20, 2023</p>
          <p className="uppercase">What are search for Order</p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            dolorum. Cum, maxime tempora! Eius accusamus voluptate explicabo in
            consectetur aliquid!
          </p>
          <button className="btn btn-outline btn-secondary border-0 border-b-4">
            {" "}
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
