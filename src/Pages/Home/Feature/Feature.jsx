import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Feature = () => {
  return (
    <div>
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="flex justify-center items-center">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p>Aug 20, 2023</p>
          <p className="uppercase">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            dolorum. Cum, maxime tempora! Eius accusamus voluptate explicabo in
            consectetur aliquid!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
