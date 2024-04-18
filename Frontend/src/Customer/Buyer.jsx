import React, { useState, useEffect } from "react";
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
import item from "./DB/data"
import Cart from "./components/cart/Cart";
import LoginPage from "../auth/pages/Login/LoginPage";
import axios from "axios";
import { getResults } from "./Api/apiService.jsx";




const Buyer = () => {
  const [cart, setCart] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        // const filterResults = await getResults();
        // const fashionResults = await getResults(4); // Fetch fashion products
        const electronicsResults = await getResults(5); // Fetch electronics products
        const watchResults = await getResults(6); // Fetch watch products
        // console.log(watchResults);
        setResults({
          // fashion: fashionResults,
          electronics: electronicsResults,
          watch: watchResults
        });
      };
      fetchData();
    }, []);


  return (
     

     <body >
        <Header cart={cart}/>
         <Navbar />
         <Routes >
          <Route path="/" index element={<Home />}/>
          <Route path="/Fashion" element={<Fashion cart={cart} setCart={setCart} />}/>
          <Route path="/Electronics"  element={<Electronics results={results.electronics} /> }/>
          <Route path="/Watch" element={<Watch results={results.watch} />}/>
          <Route path="/Shoes" element={<Shoes />}/>
          <Route path="/Home Applience" element={<Applience />}/>
          <Route path="/Product/:id" element={<ProductDetails />} />
          <Route path="/Search/:term" element={<SearchItem />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
          {/* <Route path="/login" element={<LoginPage/>}/> */}
         </Routes>
     </body>
     
   

  );
};

export default Buyer;
