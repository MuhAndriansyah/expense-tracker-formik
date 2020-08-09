import { v4 as uuidv4 } from 'uuid';

export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return state.filter(transaction => transaction.id !== action.id);

    case "ADD_TRANSACTION":
      return [...state, {
        text: action.transaction.text,
        amount: action.transaction.amount,
        id: uuidv4()
      }]

    default:
      return state;
  }
};
