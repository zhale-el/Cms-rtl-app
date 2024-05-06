import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import LastCourse from "../../components/LastCourse/LastCourse";
import AboutUs from "../../components/AboutUs/AboutUs";
import PopularCourses from "../../components/PopularCourses/PopularCourses";
import PresellCourses from "../../components/PresellCourses/PresellCourses";
import LastArticls from "../../components/LastArticls/LastArticls";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <LastCourse />
      <AboutUs />
      <PopularCourses />
      <PresellCourses />
      <LastArticls />
      <Footer />
    </>
  );
};

export default Home;
