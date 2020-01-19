import produce, { Draft } from "immer";
import { createAction, createReducer, ActionType } from "typesafe-actions";

/**
 * App全体で使用する型
 */
type RootState = {
  cnt: number;
  gomi: string;
  foo: { bar: number };
};

type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export const initialState: DeepReadonly<RootState> = {
  cnt: 0,
  gomi: "stateがあっさりしすぎるので追加",
  foo: {
    bar: 123
  }
};

type State = typeof initialState;

type P = {
  foo: number;
};

export const actions = {
  increment: createAction("increment")(),
  decrement: createAction("decrement")(),
  setX: createAction("setX")<P>()
};

export type Actions = ActionType<typeof actions>;

// immer 使うとこんな感じ
const reducers = {
  increment: produce((state: Draft<State>) => {
    state.cnt++;
    // ネスト深くても良い
    state.foo.bar = 999;
  }),
  setX: produce(
    (state: Draft<State>, action: ReturnType<typeof actions.setX>) => {
      state.cnt = action.payload.foo;
    }
  )
};

export const reducer = createReducer<State, Actions>(initialState)
  .handleAction(actions.increment, reducers.increment)
  .handleAction(actions.decrement, s => ({ ...s, cnt: s.cnt - 1 }))
  .handleAction(actions.setX, reducers.setX);

// ------------------------------------------------------------------------
import { createReducer as createReducer2 } from "react-use";
import logger from "redux-logger";

// https://github.com/streamich/react-use/issues/856
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export const useReducer2 = createReducer2<State, Actions>(logger);
