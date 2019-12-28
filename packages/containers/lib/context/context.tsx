import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionType } from "typesafe-actions";
import React, { Dispatch, createContext, useReducer } from "react";

const initialState: DeepReadonly<RootState> = {
  cnt: 0,
  gomi: "stateがあっさりしすぎるので追加",
  foo: {
    bar: 123
  }
};

const slice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: state => ({ ...state, cnt: state.cnt + 1 }),
    decrement: state => ({ ...state, cnt: state.cnt - 1 }),
    setX: (state, { payload }: PayloadAction<RootState["cnt"]>) => ({
      ...state,
      cnt: payload
    })
  }
});

type CreateContext = {
  state: typeof initialState;
  dispatch: Dispatch<ActionType<typeof slice.actions>>;
};

export const { actions } = slice;

export const Context = createContext<CreateContext>({
  state: initialState,
  dispatch: () => undefined
});

export const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(slice.reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
