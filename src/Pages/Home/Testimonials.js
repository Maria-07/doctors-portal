import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];

  return (
    <section className="container mx-auto">
      <div className="flex justify-between my-10 px-2">
        <div>
          <h4 className=" text-2xl text-primary font-bold mb-3">Testimonial</h4>
          <h2 className="uppercase text-4xl font-semibold">
            What Our Patients Says
          </h2>
        </div>
        <div>
          <img src={quote} className=" lg:h-32 h-24" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-28">
        {reviews.map((review) => (
          <Testimonial key={review._id} review={review}></Testimonial>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
