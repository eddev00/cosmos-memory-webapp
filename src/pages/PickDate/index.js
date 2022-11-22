import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import travel from "../../images/travel.gif";
import style from "./index.module.scss";
import axios from "axios";
import { motion } from "framer-motion";
import { transition1 } from "../../transition";

const PickDate = () => {
  const navigate = useNavigate();
  const current = new Date();
  const today = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;
  const [date, setDate] = useState(today);
  const datearray = date.split("-");
  const year = datearray[0];
  const day = datearray[2];
  const Month = datearray[1];

  const myRef = useRef();
  const [data, setData] = useState();
  const fetchData = () => {
    return axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=4ZPRVlnC0rnhHkIkNaZjAgQQg9V9j8htGwJljW7o&date=${date}`
      )
      .then((response) => setData(response.data));
  };
  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className={style.container}
      >
        Where to ?
        <div
          className={style.display_date}
          onClick={() => {
            myRef.current.showPicker();
          }}
        >
          <div className={style.data}>{year}</div>
          <div>/</div>
          <div className={style.data}>{day}</div>
          <div>/</div>
          <div className={style.data}>
            {Month}
            <input
              ref={myRef}
              type="date"
              id="start"
              name="trip-start"
              min="2018-01-01"
              max={today}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>{" "}
        </div>
        <div
          className={style.proceed}
          onClick={() => {
            navigate("/DisplayData", { state: { data, today } });
          }}
        >
          Go !
        </div>
        <img src={travel} />
      </motion.div>
    </>
  );
};

export default PickDate;
