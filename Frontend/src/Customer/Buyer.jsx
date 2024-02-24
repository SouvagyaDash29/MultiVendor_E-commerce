import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // NavLink,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Fashion from "./pages/Fashion/Fashion";
import Electronics from "./pages/Electronics/Electronics";
import Watch from './pages/Watch/Watch'; 
import Applience from "./pages/Applience/Applience";
import Shoes from "./pages/Shoes/Shoes";


const Buyer = () => {
  return (
    <>
      <Router>
        <Header />
         <Navbar />
         <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path="/Fashion" element={<Fashion />}/>
          <Route path="/Electronics"  element={<Electronics />}/>
          <Route path="/Watch" element={<Watch />}/>
          <Route path="/Shoes" element={<Shoes />}/>
          <Route path="/Home Applience" element={<Applience />}/>
         </Routes>
      </Router>
    </>
  );
};

export default Buyer;
