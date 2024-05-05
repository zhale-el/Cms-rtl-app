import React from "react";
import "./PopularCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";
const PopularCourses = () => {
  return (
    <>
      <div className="popular">
        <div className="container">
          <SectionHeader title="محبوب ترین دوره ها" desc="دوره های پر امتیاز" />
        </div>
      </div>
    </>
  );
};

export default PopularCourses;
