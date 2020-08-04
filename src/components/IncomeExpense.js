import React from 'react'
import { useExpense } from "./../context/GlobalState";
import { currency } from '../utils/Formatter';
function IncomeExpense() {
  const { transactions } = useExpense();
  const amount = transactions.map(transaction => transaction.amount);

  const income = amount
    .filter(value => value > 0)
    .reduce((accumulator, value) => accumulator + value, 0)


  const spending = amount
    .filter(value => value < 0)
    .reduce((accumulator, value) => accumulator + value, 0)


  return (
    <div className="income-wrapper">
      <div>
        <h4>Income</h4>
        <h3 style={{ color: "green" }}>{currency(income)}</h3>
      </div>
      <div>
        <h4>Expense</h4>
        <h3 style={{ color: "red" }}>{currency(Math.abs(spending))}</h3>
      </div>
    </div>
  );
};

export default IncomeExpense;
