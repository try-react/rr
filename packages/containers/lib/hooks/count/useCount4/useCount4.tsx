import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useReducer } from "react";

type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};
type State = { cnt: number; debug: boolean };
export const initialState: DeepReadonly<State> = {
  cnt: 0,
  debug: true
};

export const { actions, reducer } = createSlice({
  name: "useCount4",
  initialState,
  reducers: {
    increment: state => ({ ...state, cnt: state.cnt + 1 }),
    decrement: state => ({ ...state, cnt: state.cnt - 1 }),
    setX: (state, { payload }: PayloadAction<State["cnt"]>) => {
      if (state.debug) {
        console.log({ payload });
        console.log({ state });
      }
      return { ...state, cnt: payload };
    }
  }
});

export const useCount4 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    value: state.cnt,
    set5: () => dispatch(actions.setX(5)),
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement())
  };
};
