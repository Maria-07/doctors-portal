import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1mirGgJu6WrRXy6i6PnlHUHSDM2UXVDROmpvICytExaoJzR1tnsozr4ivdZUORHh3nf00ttjeDHsmXnsmTGezZ00c4cFlvtM"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  //   const {data:}
  return (
    <div>
      <div class="card max-w-md  bg-base-100 shadow-xl my-10">
        <div class="card-body">
          <p className="text-2xl font-semibold text-secondary">
            Hello {appointment.patientName},
          </p>
          <span class="card-title">Please Pay for {appointment.treatment}</span>{" "}
          <p>
            We will see you on{" "}
            <span className="text-red-600">{appointment.date}</span> at{" "}
            {appointment.slot}
          </p>
          <p className=" text-3xl font-semibold my-3">
            Price : {appointment.price} $
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
