import React, { useState } from "react";
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
<<<<<<< HEAD
import item from "./DB/data";
import { useState } from "react";
const Buyer = () => {
  const [cart, setCart] = useState([])
  return (
    
    <body> 
      <Header  cart={cart}/>
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
=======
import item from "./DB/data"
import Cart from "./components/cart/Cart";
import LoginPage from "../auth/pages/Login/LoginPage";




const Buyer = () => {
  const [cart, setCart] = useState([])
  return (

     <body >
        <Header cart={cart}/>
         <Navbar />
         <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path="/Fashion" element={<Fashion cart={cart} setCart={setCart}/>}/>
          <Route path="/Electronics"  element={<Electronics />}/>
          <Route path="/Watch" element={<Watch />}/>
          <Route path="/Shoes" element={<Shoes />}/>
          <Route path="/Home Applience" element={<Applience />}/>
          <Route path="/Product/:id" element={<ProductDetails />} />
          <Route path="/Search/:term" element={<SearchItem />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
          {/* <Route path="/login" element={<LoginPage/>}/> */}
         </Routes>
     </body>
     
   

>>>>>>> 5726e1758ac6e7a3a598b2dc8392eead6ec6e0ea
  );
};

export default Buyer;
