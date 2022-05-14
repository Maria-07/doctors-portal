import React from "react";

const AvailableAppointment = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="lg:mx-2 sm:mx-auto">
      <div className="card lg:max-w-lg bg-base-100 text-center shadow-xl">
        <div className="card-body p-10">
          <h2 className="font-semibold text-2xl text-secondary text-center">
            {name}
          </h2>
          <p className=" font-medium">
            {slots.length ? (
              <span>{slots[0]}</span>
            ) : (
              <span className=" text-red-500">
                No slots Available on this day
              </span>
            )}
          </p>
          <p className=" font-medium">
            {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
          </p>
          <div className="card-actions justify-center">
            <label
              onClick={() => setTreatment(service)}
              disabled={slots.length === 0}
              for="booking-modal-6"
              className="btn btn-primary bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary uppercase text-white text-lg font-regular my-5"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointment;
