import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const [user] = useAuthState(auth);
  console.log(user);

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot, name);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal-6" className="modal-toggle " />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal-6"
            className="btn btn-sm btn-circle absolute right-4 top-4"
          >
            ✕
          </label>
          <h3 className="font-semibold text-2xl text-secondary mb-5">{name}</h3>
          <p className="py-4">
            <form onSubmit={handleBooking}>
              <input
                name="date"
                readOnly
                type="text"
                value={format(date, "PP")}
                className="input text-lg input-bordered w-full my-4"
              />
              <br />

              <select
                name="slot"
                className="select text-lg select-bordered w-full my-4"
              >
                {slots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <br />
              <input
                name="name"
                type="text"
                // placeholder="Your Name"
                value={user?.displayName}
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
                // placeholder="Your Email"
                value={user?.email}
                className="input input-bordered w-full mt-4"
              />
              <br />
              <input
                type="submit"
                value="Submit"
                className="btn btn-secondary w-full mt-5"
              />
            </form>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
