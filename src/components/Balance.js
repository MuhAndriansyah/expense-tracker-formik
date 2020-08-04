import React from 'react';
import { useExpense } from "./../context/GlobalState";
import { currency } from '../utils/Formatter';

function Balance() {
  const { transactions } = useExpense();

  const amount = transactions.map(transaction => transaction.amount);
  const totalBalance = amount
    .reduce((accumulator, value) => accumulator + value, 0)


  console.log(amount);
  return (
    <div className="balance">
      <h4>YOUR BALANCE</h4>
      <h2>{currency(totalBalance)}</h2>
    </div>
  );
}

export default Balance;