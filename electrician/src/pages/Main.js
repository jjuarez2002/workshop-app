import React from "react";
import { Container } from "react-bootstrap";
import { Dashboard, Profile } from "../views";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
export default Main;
