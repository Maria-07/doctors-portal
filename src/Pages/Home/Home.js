import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import Info from "./Info";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <Cards></Cards> */}
      <Info></Info>
      <Services></Services>
    </div>
  );
};

export default Home;
