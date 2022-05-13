// import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const Calander = ({ date, setDate }) => {
  return (
    <div
      style={{
        background: `url(${bg})`,
      }}
      className="lg:py-24 py-10"
    >
      <div class="hero ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="sm:w-3/6 rounded-lg shadow-2xl" />
          <div className=" mr-20">
            <h1 class="text-2xl text-center font-bold">Pick Your Day</h1>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
            <p className="ml-5 text-lg font-medium text-primary">
              You picked {format(date, "PP")}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calander;
