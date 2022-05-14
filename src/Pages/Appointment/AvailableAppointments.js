import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AvailableAppointment from "./AvailableAppointment";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mx-auto my-24">
      <h1 className=" text-center font-semibold text-3xl text-secondary">
        Available Appointments on {format(date, "PP")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-28 ">
        {services.map((service) => (
          <AvailableAppointment
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AvailableAppointment>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          date={date}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
