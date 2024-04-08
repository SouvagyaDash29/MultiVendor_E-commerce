import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Sales card/salescard.css'
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
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
          <h3 className='card-text'> <HiOutlineCurrencyRupee />Total Earnings</h3>
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
