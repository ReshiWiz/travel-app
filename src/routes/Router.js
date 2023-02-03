import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Tours from "../pages/Tours";
import ToursDetails from "../pages/ToursDetails";
import SearchResult from "../pages/SearchResult";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/tours" element={<Tours />}></Route>
      <Route path="/tour:id" element={<ToursDetails />}></Route>
      <Route path="/tour/search" element={<SearchResult />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}
