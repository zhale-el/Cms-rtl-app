import React, { useState, useEffect } from "react";

const LandingCounter = ({ count }) => {
  const [courseCounter, setCourseCounter] = useState(0);

  useEffect(() => {
    let interVal = setInterval(() => {
      setCourseCounter((prevCount) => prevCount + 1);
    }, 1);
    if (courseCounter === count) {
      clearInterval(interVal);
    }

    return () => clearInterval(interVal);
  }, [courseCounter]);

  return (
    <>
      <span className="landing-status__count">{courseCounter}</span>
    </>
  );
};

export default LandingCounter;
