import React, { useState } from "react";
import AvailableAppointments from "./AvailableAppointments";
import Calander from "./Calander";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Calander date={date} setDate={setDate}></Calander>
      <AvailableAppointments date={date}></AvailableAppointments>
    </div>
  );
};

export default Appointment;
