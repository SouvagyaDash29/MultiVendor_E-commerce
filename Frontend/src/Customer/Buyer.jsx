import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Fashion from "./pages/Fashion/Fashion";
import Electronics from "./pages/Electronics/Electronics";
import Watch from './pages/Watch/Watch'; 
import Applience from "./pages/Applience/Applience";
import Shoes from "./pages/Shoes/Shoes";
import ProductDetails from './components/ProductDetails/ProductDetails';
import SearchItem from "./components/SearchItem/SearchItem";
import item from "./DB/data";

const Buyer = () => {
  return (
    <body> 
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fashion" element={<Fashion />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Watch" element={<Watch />} />
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/Home Applience" element={<Applience />} />
        <Route path="/Product/:id" element={<ProductDetails />} />
        <Route path="/Search/:term" element={<SearchItem />} />
      </Routes>
    </body>
  );
};

export default Buyer;
