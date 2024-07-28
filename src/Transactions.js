import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios('/api/transactions');
      setTransactions(result.data);
    }
    fetchData();
  }, []);

  const calculateBalance = (transactions) => {
    let balance = 0;
    return transactions.map((transaction) => {
      balance = transaction.type === 'Credit' ? balance + transaction.amount : balance - transaction.amount;
      return { ...transaction, balance };
    });
  };

  const transactionsWithBalance = calculateBalance(transactions);

  return (
    <div>
      <h1>Office Transactions</h1>
      <Link to="/add">+ Add Transaction</Link>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactionsWithBalance.map((transaction) => (
            <tr key={transaction._id}>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>{transaction.description}</td>
              <td>{transaction.type === 'Credit' ? transaction.amount : ''}</td>
              <td>{transaction.type === 'Debit' ? transaction.amount : ''}</td>
              <td>{transaction.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
