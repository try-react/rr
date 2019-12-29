import { ActionType } from "typesafe-actions";
import React, { Dispatch, createContext, useReducer } from "react";
import {
  initialState,
  reducer,
  actions as _actions
} from "~/containers/_ctx-redux";

export const actions = _actions;

type CreateContext = {
  state: typeof initialState;
  dispatch: Dispatch<ActionType<typeof actions>>;
};

export const Context = createContext<CreateContext>({
  state: initialState,
  dispatch: () => undefined
});

export const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
