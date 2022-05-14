import React from "react";

const Testimonial = ({ review }) => {
  const { name, img, comment } = review;
  console.log(comment);
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl sm:mx-10 lg:mx-auto">
      <div className="card-body">
        <p className=" font-medium text-lg">{comment}</p>
        <div className="card-actions justify-start mt-10">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <div className="ml-5">
            <h2 className="card-title">{name}</h2>
            <h6>California</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
