import React from "react";
import { useExpense } from "../context/GlobalState";
import { useFormik } from "formik";
import * as Yup from 'yup';
function AddTransaction() {
  const { addTransaction } = useExpense();

  const initialValues = {
    text: "",
    amount: 0
  };


  const validationSchema = Yup.object({
    text: Yup.string().max(10, 'Maksimal 10 Karakter').required('Required'),
    amount: Yup.string().required('Required')
  })

  const onSubmit = (values, onSubmitProps) => {
    const { text, amount } = values;

    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount
    };
    addTransaction(newTransaction);
    onSubmitProps.resetForm();
  };

  const transactionForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={transactionForm.handleSubmit}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          name="text"
          {...transactionForm.getFieldProps("text")}
        />
        {transactionForm.touched.text && transactionForm.errors.text ? (
          <p className="error">{transactionForm.errors.text}</p>
        ) : null}
        <label htmlFor="number">Amount <br />(negative - expense, positive - income)</label>
        <input
          type="number"
          id="number"
          name="number"
          {...transactionForm.getFieldProps("amount")}
        />
        {transactionForm.touched.amount && transactionForm.errors.amount ? (
          <p className="error">{transactionForm.errors.amount}</p>
        ) : null}
        <button className="btn" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction
