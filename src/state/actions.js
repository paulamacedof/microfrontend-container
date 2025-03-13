import { useCallback } from "react";
import { useGlobalContext } from "./GlobalContext";
import { ADD_TITLE, ADD_TRANSACTION } from "./GlobalContext.types";

export const useGlobalContextActions = () => {
  const { state, dispatch } = useGlobalContext();

  const setMicrofrontendTitle = useCallback(
    (title) => {
      dispatch({
        type: ADD_TITLE,
        payload: { title },
      });
    },
    [dispatch]
  );

  const setTransaction = useCallback(
    (transactions) => {
      dispatch({
        type: ADD_TRANSACTION,
        payload: { transactions },
      });
    },
    [dispatch]
  );

  const actions = {
    setMicrofrontendTitle,
    setTransaction,
  };

  return {
    state,
    actions,
  };
};
