import { useContext } from "react";
import { Context, actions } from "~/containers/context";

export const useOperations = (dispatch = useContext(Context).dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  set5: () => dispatch(actions.setX(5))
});
