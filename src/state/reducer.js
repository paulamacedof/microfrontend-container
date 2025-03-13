import { ADD_TITLE, ADD_TRANSACTION } from "./GlobalContext.types";

export const GlobalContextReducer = (state, action) => {
  switch (action.type) {
    case ADD_TITLE:
      return {
        ...state,
        microfrontendTitle: action.payload.title,
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: action.payload.transactions,
      };
    default:
      throw new Error("Invalid action type in context");
  }
};
