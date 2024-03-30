import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList'; // Assuming you have a TransactionList component
import axios from 'axios';
import '../Pages/Tranaction.css'
const TransactionsPage = () => {
  // State to store transaction data
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState('');

  // Fetch vendor username from the backend when the component mounts
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

  // Fetch transaction data from the backend when the component mounts
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Replace 'YOUR_BACKEND_API_ENDPOINT/transactions' with the actual API endpoint URL for fetching transactions
        const response = await axios.get('YOUR_BACKEND_API_ENDPOINT/transactions');
        setTransactions(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className='Transactions-page-text'>
      <h1 className='Transactions-heading'>Transactions</h1>
      <p className='Transactions-heading-1'>Hi {username}! Your transactions are here:</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TransactionList transactions={transactions} />
      )}
    </div>
  );
};

export default TransactionsPage;
