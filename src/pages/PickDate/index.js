import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";

import style from "./index.module.scss";
const PickDate = () => {
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

  return (
    <div className={style.container}>
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
            onChange={(e) => setDate(e.target.value)}
          />
        </div>{" "}
      </div>
      <div className={style.proceed} onClick={() => console.log("proceed")}>
        Go!
      </div>
    </div>
  );
};

export default PickDate;
