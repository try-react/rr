import { useDispatch } from "react-redux";
import { actions } from "@app/containers/lib/_ctx-redux";

export const useOperations = () => {
  const d = useDispatch();

  return {
    onIncrement: () => d(actions.increment),
    onDecrement: () => d(actions.decrement),
    set5: () => d(() => actions.setX(5))
  };
};
