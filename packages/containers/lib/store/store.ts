import { configureStore, createSlice } from "@reduxjs/toolkit";

export const { reducer, actions } = createSlice({
  name: "count",
  initialState: { cnt: 0, gomi: "stateがあっさりしすぎるので追加" },
  reducers: {
    increment: state => ({ ...state, cnt: state.cnt + 1 }),
    decrement: state => ({ ...state, cnt: state.cnt - 1 }),
    setX: (state, action) => ({ ...state, cnt: action.payload })
  }
});

export const store = configureStore({ reducer });
