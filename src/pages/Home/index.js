import React from "react";
import NavBar from "../../components/NavBar";
import hero from "../../images/Hero.gif";
import style from "../Home/index.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../../transition";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className={style.container}
    >
      <motion.div
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-50%" }}
        transition={transition1}
        className={style.left}
      >
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
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={transition1}
        className={style.right}
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={transition1}
          src={hero}
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
