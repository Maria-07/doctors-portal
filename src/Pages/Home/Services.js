import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="text-center">
        <h3 className="text-secondary my-4 text-2xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className=" uppercase text-4xl font-semibold">
          Services we provide
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-28 ">
        <Service img={fluoride} cardTitle="Fluoride Treatment"></Service>
        <Service img={cavity} cardTitle="Fluoride Treatment"></Service>
        <Service img={whitening} cardTitle="Fluoride Treatment"></Service>
      </div>
    </div>
  );
};

export default Services;
