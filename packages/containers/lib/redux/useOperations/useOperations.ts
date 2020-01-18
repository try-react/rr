import { useDispatch } from "react-redux";
import { actions } from "@app/containers/lib/_ctx-redux";

const useCallbackDispatch = (dispatch = useDispatch()) => (f: Function) => () =>
  dispatch(f());

export const useOperations = (w = useCallbackDispatch()) => ({
  onIncrement: w(actions.increment),
  onDecrement: w(actions.decrement),
  set5: w(() => actions.setX({ foo: 5 }))
});
