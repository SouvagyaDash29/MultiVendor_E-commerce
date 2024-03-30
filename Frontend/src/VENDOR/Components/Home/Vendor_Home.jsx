import React from "react";
import SalesComponent from "../Sales card/salescard";
import GraphComponent from "../Graph component/GraphComponent";
import CustomerReviews from "../Customer reviews/CustomerReviews";
import LastOrders from "../Last order/LastOrders";
import OrderChart from "../Order chart/orderchart";
import SearchBar from "../Searchbar/searchbar";

const VendorDashboard=()=>{

return(
    <div className="dashboard-container">
    <SearchBar />
    <div className="dashboard-content">
      <SalesComponent />
      <GraphComponent />
      <CustomerReviews />
      <LastOrders />
      <OrderChart />
    </div>
  </div>
)
}

export default VendorDashboard;

