import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Reset } from "../views";

const Landing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/reset" element={<Reset />} />
    </Routes>
  );
};

export default Landing;
