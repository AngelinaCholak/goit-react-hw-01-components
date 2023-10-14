import React from 'react';
import transaction from './transaction.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={transaction.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ type, amount, currency }, index) => (
          <tr key={index}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
