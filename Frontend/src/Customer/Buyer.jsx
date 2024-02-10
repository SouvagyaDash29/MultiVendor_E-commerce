import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // NavLink,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Fashion from "./pages/Fashion/Fashion";
import Men from "./pages/Fashion/Categories/Men";
import Mobiles from "./pages/Mobiles/Mobiles";
import Electronics from "./pages/Electronics/Electronics";
import Furniture from "./pages/Furniture/Furniture";
import Applience from "./pages/Appliance/Appliance";
import Grocery from "./pages/Grocery/Grocery";

const Buyer = () => {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fashion">
            <Route index element={<Fashion />} />
            <Route path="Men" element={<Men />} />
          </Route>
          <Route path="/Mobiles" element={<Mobiles />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Furniture" element={<Furniture />} />
          <Route path="/Applience" element={<Applience />} />
          <Route path="/Grocery" element={<Grocery />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
};

export default Buyer;
