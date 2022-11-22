import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import banner from "../../images/ze.png";
import { useLocation, useNavigate } from "react-router-dom";
const DisplayData = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state.data;

  const arrayDate = () => {
    const array = data.date.split("-");
    return array;
  };

  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.title}>{data.title}</div>
        <div className={style.date_switch}>
          <div className={style.date_cont}>{arrayDate()[0]}</div>
          <div className={style.date_cont}>{arrayDate()[1]}</div>
          <div className={style.date_cont}>{arrayDate()[2]} </div>
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
    </div>
  );
};

export default DisplayData;
