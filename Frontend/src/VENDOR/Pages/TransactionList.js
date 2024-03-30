import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Pages/TransactionList.css'

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Fetch transaction data from the backend API
        const response = await axios.get('YOUR_BACKEND_API_ENDPOINT');
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transaction-list">
      <h2>Transaction List</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.description}</td>
              {/* Render additional transaction data as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
