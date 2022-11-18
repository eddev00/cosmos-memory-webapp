import React from "react";
import NavBar from "../../components/NavBar";
import hero from "../../images/Hero.gif";
import style from "../Home/index.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.text}>
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
          <div className={style.hero_button}>Explore </div>
        </Link>
      </div>
      <div className={style.right}>
        <img src={hero} />
      </div>
    </div>
  );
};

export default Home;
