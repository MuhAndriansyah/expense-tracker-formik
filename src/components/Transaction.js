import React from 'react';
import { useExpense } from "../context/GlobalState";
import { currency } from '../utils/Formatter';

function Transaction({ transaction }) {
  const { dispatch } = useExpense();

  const sign = transaction.amount > 0 ? "+" : "-";

  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      <p>{transaction.text}</p>
      <p>
        {sign}
        {currency(Math.abs(transaction.amount))}
      </p>
      <button
        onClick={() => dispatch({ type: 'DELETE_TRANSACTION', id: transaction.id })}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}

export default Transaction;