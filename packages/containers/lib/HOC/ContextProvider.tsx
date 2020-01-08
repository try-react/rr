import React, { useReducer } from "react";
import { initialState, reducer } from "@app/containers/lib/_ctx-redux";
import { Context } from "@app/containers/lib/context";

type ContextProviderType = (Component: React.ComponentType) => React.FC;

export const ContextProvider: ContextProviderType = Component => props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Component {...props} />
    </Context.Provider>
  );
};
