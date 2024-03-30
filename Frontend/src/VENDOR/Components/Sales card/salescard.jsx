import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Sales card/salescard.css'
const SalesComponent = () => {
  const [totalOrders, setTotalOrders] = useState(0);
  const [newOrders, setNewOrders] = useState(0);
  const [totalOrderCancel, setTotalOrderCancel] = useState(0);
  const [orderPending, setOrderPending] = useState(0);
  const [balance, setBalance] = useState(0);
  const [pageReviews, setPageReviews] = useState(0);
  const [totalOrderDeliver, setTotalOrderDeliver] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from backend API
        const response = await axios.get('YOUR_BACKEND_API_ENDPOINT');
        const data = response.data;

        // Set state with fetched data
        setTotalOrders(data.totalOrders);
        setNewOrders(data.newOrders);
        setTotalOrderCancel(data.totalOrderCancel);
        setOrderPending(data.orderPending);
        setBalance(data.balance);
        setPageReviews(data.pageReviews);
        setTotalOrderDeliver(data.totalOrderDeliver);
        setRating(data.rating);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-cards">
      <div className="card">
        <div className="card-inner">
          <h3 className='card-text'> <svg width="25" height="25" viewBox="0 0 31 31" fill="none" className='earnings-svg' xmlns="http://www.w3.org/2000/svg">
<path d="M27.833 15.4999C27.833 8.6884 22.3112 3.16659 15.4997 3.16659C8.68816 3.16659 3.16634 8.6884 3.16634 15.4999C3.16634 22.3115 8.68816 27.8333 15.4997 27.8333C22.3112 27.8333 27.833 22.3115 27.833 15.4999ZM30.9163 15.4999C30.9163 24.0142 24.014 30.9166 15.4997 30.9166C6.98528 30.9166 0.0830078 24.0142 0.0830078 15.4999C0.0830078 6.98553 6.98528 0.083252 15.4997 0.083252C24.014 0.083252 30.9163 6.98553 30.9163 15.4999ZM17.8126 9.33325C18.3175 10.0055 18.6794 10.7914 18.8528 11.6458H21.6663V13.9583H18.8528C18.3171 16.5971 15.9841 18.5833 13.1872 18.5833H12.8953L18.6297 24.3178L16.9946 25.9529L9.33301 18.2914V16.2708H13.1872C14.6975 16.2708 15.9824 15.3055 16.4586 13.9583H9.33301V11.6458H16.4586C15.9824 10.2985 14.6975 9.33325 13.1872 9.33325H9.33301V7.02075H21.6663V9.33325H17.8126Z" fill="white" />
</svg>Total Earnings</h3>
        </div>
        <h1 className='card-text'>{totalOrders}</h1>
      </div>
       <div className="card-1">
        <div className="card-inner">
          <h3>New Orders</h3>
        </div>
        <h1>{newOrders}</h1>
      </div> 
      <div className="card-2">
        <div className="card-inner">
          <h3>Total Orders Canceled</h3>
        </div>
        <h1>{totalOrderCancel}</h1>
      </div> 
      <div className="card-3">
        <div className="card-inner">
          <h3>Orders Pending</h3>
        </div>
        <h1>{orderPending}</h1>
      </div>
       <div className="card-4">
        <div className="card-inner">
          <h3>Your Balance</h3>
        </div>
        <h1>${balance}</h1>
      </div> 
      <div className="card-5">
        <div className="card-inner">
          <h3>Page Reviews</h3>
        </div>
        <h1>{pageReviews}</h1>
      </div> 
      <div className="card-6">
        <div className="card-inner">
          <h3>Total Orders Delivered</h3>
        </div>
        <h1>{totalOrderDeliver}</h1>
      </div>
      <div className="card-7">
        <div className="card-inner">
          <h3>Rating</h3>
        </div>
        <h1>{rating}</h1>
      </div> 
    </div>
  );
};

export default SalesComponent;
