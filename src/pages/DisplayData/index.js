import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import banner from "../../images/ze.png";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../../transition";
import { Link } from "react-router-dom";

const DisplayData = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state.data;
  const today = location.state.today;

  const arrayDate = () => {
    const array = data.date.split("-");
    return array;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className={style.container}
    >
      <div className={style.top}>
        <div className={style.title}>{data.title}</div>
        <div className={style.date_switch}>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={{
              pathname: "/",
            }}
          >
            Try again
          </Link>
        </div>
      </div>
      <div className={style.middle}>
        <div className={style.text}>
          <h3>Story:</h3>
          <p>{data.explanation}</p>
        </div>
        <div className={style.image}>
          <img src={data.url} />
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.copyright}>{data.copyright}</div>
        <div className={style.date}>{data.date}</div>
      </div>
    </motion.div>
  );
};

export default DisplayData;
