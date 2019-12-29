import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: DeepReadonly<RootState> = {
  cnt: 0,
  gomi: "stateがあっさりしすぎるので追加",
  foo: {
    bar: 123
  }
};

export const { actions, reducer } = createSlice({
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
