import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "home/Header";
import Footer from "home/Footer";
import HomeContent from "./HomeContent";
import PDPContent from "pdp/PDPContent";
import CartContent from "cart/CartContent";


import "remixicon/fonts/remixicon.css";
import "./index.scss";

export default function MainLayout() {
  return (
    <Router>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/product/:id" element={<PDPContent />} />
            <Route path="/cart" element={<CartContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
