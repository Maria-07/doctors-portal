import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockRotateLeft,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Cards = () => {
  return (
    <div className="container mx-auto">
      <div className="flex sm:flex-row flex-col justify-center ">
        <div className="flex sm:flex-row flex-col items-center p-5 bg-gradient-to-r from-secondary to-primary text-white rounded-xl m-5">
          <div>
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              className=" p-5 text-7xl"
            />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-2xl font-semibold my-3">Opening Hours</h2>
            <p className="text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center p-5 bg-accent text-white rounded-xl m-5">
          <div>
            <FontAwesomeIcon icon={faLocationDot} className=" p-5 text-7xl" />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-2xl font-semibold my-3">Visit our location</h2>
            <p className="text-lg">Brooklyn, NY 10036, United States</p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center p-5 bg-gradient-to-r from-secondary to-primary text-white rounded-xl m-5">
          <div>
            <FontAwesomeIcon icon={faPhone} className=" p-5 text-7xl" />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-2xl font-semibold my-3">Contact us now</h2>
            <p className="text-lg">+000 123 456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
