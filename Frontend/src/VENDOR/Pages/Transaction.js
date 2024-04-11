import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import axios from 'axios';
import '../Pages/Transaction.css';

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const response = await axios.get('YOUR_BACKEND_API_ENDPOINT/username');
                setUsername(response.data.username);
            } catch (error) {
                console.error('Error fetching username:', error);
            }
        };

        fetchUsername();
    }, []);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
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
        <div className="Transactions-page-text">
            <h1 className="Transactions-heading">Transactions</h1>
            <p className="Transactions-heading-1">Hi {username}! Your transactions are here:</p>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <TransactionList transactions={transactions} />
            )}
        </div>
    );
};

export default TransactionsPage;
