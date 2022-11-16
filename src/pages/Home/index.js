import React from "react";
import NavBar from "../../components/NavBar";
import hero from "../../images/Hero.gif";
import "./index.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="text">
          <h1>Discover The Cosmos</h1>
          <p>
            #Each day a different image or #photograph of our fascinating
            universe is featured,<br></br> along with a brief explanation
            written by a professional astronomer.
          </p>
        </div>

        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={{
            pathname: "/PickDate",
          }}
        >
          <div className="hero_button">Explore </div>
        </Link>
      </div>
      <div className="right">
        <img src={hero} />
      </div>
    </div>
  );
};

export default Home;
