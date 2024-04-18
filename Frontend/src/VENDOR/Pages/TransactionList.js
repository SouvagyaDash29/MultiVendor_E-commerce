import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Pages/TransactionList.css';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions from the backend when the component mounts
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Replace 'YOUR_BACKEND_API_ENDPOINT' with your actual API endpoint URL
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
      {transactions.length > 0 ? (
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
                <td>{new Date(transaction.date).toLocaleDateString()}</td>
                <td>{`$${transaction.amount.toFixed(2)}`}</td>
                <td>{transaction.description}</td>
                {/* Render additional transaction data as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions available.</p>
      )}
    </div>
  );
};

export default TransactionList;
