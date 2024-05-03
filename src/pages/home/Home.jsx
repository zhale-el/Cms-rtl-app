import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import LastCourse from "../../components/LastCourse/LastCourse";
import AboutUs from "../../components/AboutUs/AboutUs";
const Home = () => {
  return (
    <>
      <Header />
      <LastCourse />
      <AboutUs />
    </>
  );
};

export default Home;
