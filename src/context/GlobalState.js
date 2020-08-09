import React, { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const ExpenseContext = createContext();

export const useExpense = () => {
  return useContext(ExpenseContext);
};

const GlobalState = ({ children }) => {
  const [transactions, dispatch] = useReducer(AppReducer, [], () => {
    const localData = localStorage.getItem('transactions');

    return localData ? JSON.parse(localData) : [];
  });


  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  return (
    <ExpenseContext.Provider
      value={{
        transactions, dispatch
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default GlobalState;
