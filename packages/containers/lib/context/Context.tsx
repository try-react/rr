import { ActionType } from "typesafe-actions";
import { initialState, Actions } from "@app/containers/lib/_ctx-redux";
import { Dispatch, createContext } from "react";

type CreateContext = {
  state: typeof initialState;
  dispatch: Dispatch<ActionType<Actions>>;
};

export const Context = createContext<CreateContext>({
  state: initialState,
  dispatch: () => undefined
});
