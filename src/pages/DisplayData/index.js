import React from "react";
import style from "./index.module.scss";
import banner from "../../images/ze.png";
import { useLocation } from "react-router-dom";
const DisplayData = () => {
  const location = useLocation();
  const data = location.state.data;
  console.log(data.explanation);

  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.title}>{data.title}</div>
        <div className={style.date_switch}>DEC /12 /2012</div>
      </div>
      <div className={style.middle}>
        <div className={style.text}>
          <h3>Story:</h3>
          <p>{data.explanation}</p>
        </div>
        <div className={style.image}>
          <img src={banner} />
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.copyright}>copyright: Ryan Han</div>
        <div className={style.date}>2022/08/11</div>
      </div>
    </div>
  );
};

export default DisplayData;
