import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div className="">
      <div className="hero container mx-auto sm:my-52">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className=" sm:w-3/6 rounded-lg shadow-2xl" />
          <div className=" sm:px-10 ">
            <h1 className="text-5xl text-accent font-semibold">
              Your New Smile Starts Here
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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

export default Banner;
