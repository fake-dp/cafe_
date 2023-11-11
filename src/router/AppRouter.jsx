import React from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "../page/Detail";
import Login from "../page/Login";
import Main from "../page/Main";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Main />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}

export default AppRouter;
