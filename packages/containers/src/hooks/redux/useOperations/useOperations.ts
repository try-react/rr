import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { actions } from "~/containers/store";

const useCallbackDispatch = (dispatch = useDispatch()) => (f: Function) =>
  useCallback(() => dispatch(f()), []);

export const useOperations = (w = useCallbackDispatch()) => ({
  onIncrement: w(actions.increment),
  onDecrement: w(actions.decrement),
  set5: w(() => actions.setX(5))
});
