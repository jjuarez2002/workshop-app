import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Profile } from "../views";

const Main = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Main;
