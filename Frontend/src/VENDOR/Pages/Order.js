import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Pages/Order.css';

const OrderPage = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [username, setUsername] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                // Replace 'YOUR_BACKEND_API_ENDPOINT/username' with the actual API endpoint URL for fetching the username
                const response = await axios.get('YOUR_BACKEND_API_ENDPOINT/username');
                setUsername(response.data.username);
            } catch (error) {
                console.error('Error fetching username:', error);
            }
        };

        fetchUsername();
    }, []);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                // Replace 'YOUR_BACKEND_API_ENDPOINT/orders' with the actual API endpoint URL
                const response = await axios.get('YOUR_BACKEND_API_ENDPOINT/orders');
                setOrders(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching orders:', error);
                setIsLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const renderOrders = () => {
        if (isLoading) {
            return <p>Loading...</p>;
        }

        if (orders.length === 0) {
            return (
                <p className='hello-vendorname'>
                    Hi {username}! You currently don't have any orders.
                </p>
            );
        }

        // Filter orders based on selected date
        const filteredOrders = selectedDate
            ? orders.filter((order) => new Date(order.date).toDateString() === selectedDate.toDateString())
            : orders;

        const pendingOrders = filteredOrders.filter((order) => order.status === 'pending');
        const cancelledOrders = filteredOrders.filter((order) => order.status === 'cancelled');

        return (
            <div>
                {pendingOrders.length > 0 && (
                    <div>
                        <h3>Pending Orders</h3>
                        {pendingOrders.map((order) => (
                            <div key={order.id} className={`order-item pending-order`}>
                                <h3>Order ID: {order.id}</h3>
                                <p>Date: {order.date}</p>
                                <p>Product ID: {order.productid}</p>
                                <p>Product Name: {order.productname}</p>
                                <p>Current Status: {order.status}</p>
                            </div>
                        ))}
                    </div>
                )}
                {cancelledOrders.length > 0 && (
                    <div>
                        <h3>Cancelled Orders</h3>
                        {cancelledOrders.map((order) => (
                            <div key={order.id} className={`order-item cancelled-order`}>
                                <h3>Order ID: {order.id}</h3>
                                <p>Date: {order.date}</p>
                                <p>Product ID: {order.productid}</p>
                                <p>Product Name: {order.productname}</p>
                                <p>Current Status: {order.status}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="order-page">
            <h1 className="vendor-order-heading">Your Orders</h1>
            <div className="order-date-picker">
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"
                    placeholderText="Select a date"
                />
            </div>
            <div className="order-list">
                {renderOrders()}
            </div>
        </div>
    );
};

export default OrderPage;
