import React from "react";
import Home from "../pages/Home";
import DisplayData from "../pages/DisplayData";
import PickDate from "../pages/PickDate";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/DisplayData" element={<DisplayData />} />
        <Route path="/PickDate" element={<PickDate />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
