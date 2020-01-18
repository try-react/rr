import produce, { Draft } from "immer";
import { deprecated, createReducer, ActionType } from "typesafe-actions";

const { createAction } = deprecated;

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
  increment: createAction("increment"),
  decrement: createAction("decrement"),
  setX: createAction("setX", action => (p: P) => action({ foo: p.foo }))
};

export type Actions = ActionType<typeof actions>;

// immer 使うとこんな感じ
const reducers = {
  increment: produce((state: Draft<State>) => {
    state.cnt++;
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
