import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Router from "../../routes/Router";
export default function Layout() {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}
