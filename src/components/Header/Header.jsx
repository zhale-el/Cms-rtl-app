import React from "react";
import "./Header.css";
import Tobbar from "../Topbar/Tobbar";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";

const Header = () => {
  return (
    <header className="header">
      <Tobbar />
      <Navbar />
      <Landing />
    </header>
  );
};

export default Header;
