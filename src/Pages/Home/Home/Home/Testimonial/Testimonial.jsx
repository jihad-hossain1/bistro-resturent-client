import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// react rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// react icons
import { FaBeer, FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <>
      <section>
        <SectionTitle
          subHeading="What Our Client Say"
          heading="Tesimonials"
        ></SectionTitle>
      </section>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16 space-y-3">
              <FaQuoteLeft className="text-5xl text-gray-600"></FaQuoteLeft>
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonial;
