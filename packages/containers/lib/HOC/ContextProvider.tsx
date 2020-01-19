import React from "react";
import {
  initialState,
  reducer,
  useReducer2
} from "@app/containers/lib/_ctx-redux";
import { Context } from "@app/containers/lib/context";

type ContextProviderType = (Component: React.ComponentType) => React.FC;

export const ContextProvider: ContextProviderType = Component => props => {
  // const [state, dispatch] = React.useReducer(reducer, initialState);
  const [state, dispatch] = useReducer2(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Component {...props} />
    </Context.Provider>
  );
};
