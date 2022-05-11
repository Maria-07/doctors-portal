import React from "react";

const Service = ({ img, cardTitle }) => {
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl mx-auto ">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{cardTitle}</h2>
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
