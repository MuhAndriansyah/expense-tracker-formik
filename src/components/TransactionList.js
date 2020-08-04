import React from 'react';
import { useExpense } from "../context/GlobalState";
import Transaction from './Transaction';

function TransactionList() {
  const { transactions } = useExpense();
  return (
    <>
      <h3>History</h3>
      <hr />
      {!transactions.length ? (
        <p style={{ textAlign: "center", marginTop: 10 }}>No History</p>
      ) : (
          ""
        )}
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList