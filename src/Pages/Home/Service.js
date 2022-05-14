import React from "react";

const Service = ({ img, cardTitle }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto ">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{cardTitle}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            facilis, aspernatur praesentium hic .{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
