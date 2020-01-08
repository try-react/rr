import { useContext } from "react";
import { Context } from "@app/containers/lib/context";
import { actions } from "@app/containers/lib/_ctx-redux";

export const useOperations = (dispatch = useContext(Context).dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  set5: () => dispatch(actions.setX(5))
});
