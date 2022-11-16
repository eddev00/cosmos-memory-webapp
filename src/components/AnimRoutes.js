import React from "react";
import Home from "../pages/Home";
import DisplayData from "../pages/DisplayData";
import PickDate from "../pages/PickDate";

import { Routes, Route } from "react-router-dom";

const AnimRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/DisplayData" element={<DisplayData />} />
      <Route path="/PickDate" element={<PickDate />} />
    </Routes>
  );
};

export default AnimRoutes;
