import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date }) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal-6" className="modal-toggle " />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal-6"
            className="btn btn-sm btn-circle absolute right-4 top-4"
          >
            ✕
          </label>
          <h3 className="font-semibold text-2xl text-secondary mb-5">{name}</h3>
          <p className="py-4">
            <form>
              <input
                name="date"
                readOnly
                type="text"
                value={format(date, "PP")}
                className="input text-lg input-bordered w-full my-4"
              />
              <br />

              <select
                name="slots"
                class="select text-lg select-bordered w-full my-4"
              >
                {slots.map((slot) => (
                  <option value={slot}>{slot}</option>
                ))}
              </select>
              <br />
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full my-4"
              />
              <br />
              <input
                name="number"
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full my-4"
              />
              <br />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full mt-4"
              />
              <br />
            </form>
          </p>
          <div className="modal-action">
            <label for="booking-modal-6" className="btn btn-primary w-full">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
