import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

import slide1 from "../../../../../assets/home/slide1.jpg";
import slide2 from "../../../../../assets/home/slide2.jpg";
import slide3 from "../../../../../assets/home/slide3.jpg";
import slide4 from "../../../../../assets/home/slide4.jpg";
import slide5 from "../../../../../assets/home/slide5.jpg";


import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";

const slideImage = [
  {
    img: slide1,
    name: "salad",
    id: 1,
  },
  {
    img: slide2,
    name: "pizzas",
    id: 2,
  },
  {
    img: slide3,
    name: "soupe",
    id: 3,
  },
  {
    img: slide4,
    name: "salad",
    id: 4,
  },
  {
    img: slide5,
    name: "salad",
    id: 5,
  },
];

const Category = () => {
  return (
    <>
          <SectionTitle
          subHeading={'From 10.00 am to 11.00pm'}
              heading={'order online'}
          ></SectionTitle>
      <section>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slideImage.map((slieder) => (
            <SwiperSlide key={slieder.id} className="">
              <div className="flex flex-col justify-center items-center">
                <img className="rounded-md" src={slieder.img} alt="" />
              </div>
              <h4 className="text-4xl uppercase text-center -mt-16 text-white ">
                {slieder.name}
              </h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Category;
