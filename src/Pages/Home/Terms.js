import React from "react";
import treatment from "../../assets/images/treatment.png";

const Terms = () => {
  return (
    <div className="container mx-auto">
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row">
          <img src={treatment} className="  shadow-lg rounded-2xl" />
          <div className="m-10">
            <h1 class="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p class="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary uppercase text-white text-xl font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
