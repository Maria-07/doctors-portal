import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className=" my-32"
    >
      <section className="container lg:flex justify-center items-center">
        <div className="flex-1 hidden lg:block  ">
          <img src={doctor} className="mt-[-150px] " alt="" />
        </div>
        <div className="flex-1 p-4 text-white ">
          <h3 className="text-secondary my-4 text-2xl font-bold uppercase">
            Appointment
          </h3>
          <h2 className="mb-8 uppercase text-4xl font-semibold">
            Make an appointment Today
          </h2>
          <p className=" lg:w-3/4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="mt-5 btn btn-primary bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary uppercase text-white text-xl font-bold">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default MakeAppointment;
