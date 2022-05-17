import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import AvailableAppointment from "./AvailableAppointment";
import BookingModal from "./BookingModal";
import Loading from "../Shared/Loading";

const AvailableAppointments = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formateDate = format(date, "PP");
  console.log(formateDate);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formateDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formateDate]);

  const {
    data: services,
    isLoading,
    refetch,
    error,
  } = useQuery(["available", formateDate], () =>
    fetch(`http://localhost:5000/available?date=${formateDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  // if (error) return "An error has occurred: " + error.message;

  console.log(services);

  return (
    <div className="container mx-auto my-24">
      <h1 className=" text-center font-semibold text-3xl text-secondary">
        Available Appointments on {format(date, "PP")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-28 ">
        {services?.map((service) => (
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
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
