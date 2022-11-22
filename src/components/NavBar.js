import React from "react";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import arrow from "../images/arrow.png";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h1>Cosmos Memory</h1>
        </Link>
      </div>
      <div className="socials">
        <h3>Connect with me</h3>

        <img src={arrow} alt="" />
        <a href="https://github.com/eddev00">
          <img src={github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/mohamed-baarar-794a53253/">
          {" "}
          <img src={linkedin} alt="" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
