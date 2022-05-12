import React from "react";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Terms from "./Terms";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <Cards></Cards> */}
      <Info></Info>
      <Services></Services>
      <Terms></Terms>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
