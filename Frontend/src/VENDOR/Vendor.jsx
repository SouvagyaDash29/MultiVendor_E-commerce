import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductRegistration from "./Pages/ProductRegistrationpage";
import Sidebar_vendor from './Components/Sidebar/Sidebar_vendor';
import Reports from "./Pages/Reports";
import '../VENDOR/vendor.css'
import ProductsPageVendor from "./Pages/Product";
import OrderPage from "./Pages/Order";
import TransactionsPage from "./Pages/Transaction";
import VendorProfilePage from "./Pages/VendorProfile";
import Logout from "./Pages/Logout";
import VendorDashboard from "./Components/Home/Vendor_Home";
import ProductUpdate from "./Pages/UpdateProduct";
import AddCategory from "./Pages/Addcategory_and_brand";

const Vendor = () => {
  return (
    <div className="container-vendor">
      <Sidebar_vendor/>
      <Routes>
        <Route path="" element={<VendorDashboard />} />
        <Route path="/Product" element={<ProductsPageVendor />} />
        <Route path="/Order" element={<OrderPage />} />
        <Route path="/Transaction" element={<TransactionsPage />} />
        <Route path="/Profile" element={<VendorProfilePage />} />
        <Route path="/Report" element={<Reports />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/ProductRegistration" element={<ProductRegistration />} /> 
        <Route path="/UpdateProduct/:productid" element={<ProductUpdate />} />
        <Route path="/addcategory" element={<AddCategory/>}/>
      </Routes>
    </div>
  );
};

export default Vendor;
