import React, { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialValue = {
  transactions: [
    { id: 1, text: "Gaji", amount: 6500000 },
    { id: 2, text: "Iphone SE", amount: -8500000 },
  ]
};

const ExpenseContext = createContext();

export const useExpense = () => {
  return useContext(ExpenseContext);
};

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialValue);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default GlobalState;
