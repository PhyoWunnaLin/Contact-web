import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import RouteGuard from "../components/RouteGuard";

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RouteGuard><Dashboard/></RouteGuard>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Path;
