import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import CreateContact from "../components/CreateContact";
import RouteGuard from "../components/RouteGuard";
import UserInfo from "../components/UserInfo";
import EditInfo from "../components/EditInfo";
const Path = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RouteGuard>
              <Dashboard />
            </RouteGuard>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createContact" element={<CreateContact />} />
        <Route path="/info/:id" element={<UserInfo />} />
        <Route path="/editInfo/:id" element={<EditInfo />} />
      </Routes>
    </div>
  );
};

export default Path;
