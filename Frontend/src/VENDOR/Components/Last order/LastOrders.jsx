import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Last order/Last order.css'
const LastOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('YOUR_BACKEND_API_ENDPOINT');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="last-orders">
      <h2 className='last-orders-text'>Last Orders</h2>
      <table>
        <thead>
          <tr className='header'>
            <th> Image </th>
            <th>Product</th>
            <th>Order-ID</th>
            <th>Date</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td><img src={order.image} alt={order.product} style={{ maxWidth: '100px' }} /></td>
              <td>{order.product}</td>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.address}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LastOrders;
