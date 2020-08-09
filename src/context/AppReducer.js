import uuid from 'uuid/v4';

export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return state.filter(transaction => transaction.id !== action.id);

    case "ADD_TRANSACTION":
      return [...state, {
        text: action.transaction.text,
        amount: action.transaction.amount,
        id: uuid()
      }]

    default:
      return state;
  }
};
