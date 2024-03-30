import React from "react";
import { BrowserRouter as Router,
  Routes,
  Route, } from "react-router-dom";
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
const vendor=()=>{

  return(
   
    <div className="container-vendor">
      
     <Router>
     <Sidebar_vendor/>
    
     <Routes>
          <Route path="" element={<VendorDashboard />}/>
          <Route path="/Product" element={<ProductsPageVendor />}/>
          <Route path="/Order"  element={<OrderPage />}/>
          <Route path="/Transaction" element={<TransactionsPage/>}/>
          <Route path="/Profile" element={<VendorProfilePage/>}/>
          <Route path="/Report" element={<Reports/>}/>
          <Route path="/Logout" element={<Logout />}/>
          <Route path="/ProductRegistration" element={<ProductRegistration />} /> 
         </Routes>
    
   
     </Router>
     
   
 
    </div>
  
    
    
  )
}

export default vendor