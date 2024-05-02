import React from "react";
import "./Header.css";
import Tobbar from "../Topbar/Tobbar";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <Tobbar />
      <Navbar />
    </header>
  );
};

export default Header;
