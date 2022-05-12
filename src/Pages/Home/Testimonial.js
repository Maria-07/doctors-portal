import React from "react";

const Testimonial = ({ review }) => {
  const { name, img, comment } = review;
  console.log(comment);
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl sm:mx-10 lg:mx-auto">
      <div class="card-body">
        <p className=" font-medium text-lg">{comment}</p>
        <div class="card-actions justify-start mt-10">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <div className="ml-5">
            <h2 class="card-title">{name}</h2>
            <h6>California</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
