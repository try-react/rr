import { initialState, Actions } from "@app/containers/lib/_ctx-redux";
import { Dispatch, createContext } from "react";

export type CreateContext = {
  state: typeof initialState;
  dispatch: Dispatch<Actions>;
};

export const Context = createContext<CreateContext>({
  state: initialState,
  dispatch: () => undefined
});
