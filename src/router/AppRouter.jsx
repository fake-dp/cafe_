import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../page/Login";
import MainHome from "../page/MainHome";
function AppRouter(props) {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="main" element={<MainHome />} />
    </Routes>
  );
}

export default AppRouter;
