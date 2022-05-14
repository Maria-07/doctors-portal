import React from "react";
import appointmentForm from "../../assets/images/appointmentForm.png";

const ContactForm = () => {
  return (
    <div
      style={{
        background: `url(${appointmentForm})`,
      }}
      className="py-16"
    >
      <form className="container mx-auto">
        <div className="  text-center">
          <h4 className="text-secondary my-4 text-2xl font-bold uppercase">
            Contact Us
          </h4>
          <h1 className="mb-8 uppercase text-3xl font-semibold text-white">
            Stay connected with us
          </h1>

          <input
            type="email"
            name="email"
            className="my-4 p-4 text-lg bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-secondary lg:w-1/4 w-4/5 rounded-md  focus:ring-1"
            placeholder="you@example.com"
          />
          <br />
          <input
            type="text"
            name="text"
            className="my-4 p-4 text-lg bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-secondary lg:w-1/4 w-4/5 rounded-md  focus:ring-1"
            placeholder="Subject"
          />
          <br />
          <textarea
            type="text"
            name="text"
            className="my-4 p-4 text-lg bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-secondary lg:w-1/4 w-4/5 rounded-md  focus:ring-1"
            placeholder="Your message"
          />
          <br />
          <button className="mt-5 btn btn-primary bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary uppercase text-white text-xl font-bold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
