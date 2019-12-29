import { useSelector, TypedUseSelectorHook } from "react-redux";
import { reducer } from "~/containers/_ctx-redux";

type RootState = ReturnType<typeof reducer>;
const useSelectors: TypedUseSelectorHook<RootState> = useSelector;

export const useCnt = () => useSelectors(state => ({ value: state.cnt }));
