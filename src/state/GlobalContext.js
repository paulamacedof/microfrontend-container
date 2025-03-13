import React, { createContext, useContext, useMemo, useReducer } from "react";
import { GlobalContextReducer } from "./reducer";

export const GlobalContext = createContext();

const initialState = {
  microfrontendTitle: "Teste",
};

export const GlobalContextProvider = ({ children }) => {
  // Defina o estado global que será compartilhado
  const [state, dispatch] = useReducer(GlobalContextReducer, initialState);

  const memoizedContext = useMemo(
    () => ({ state, dispatch }),
    [state, dispatch]
  );

  return (
    <GlobalContext.Provider value={memoizedContext}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
