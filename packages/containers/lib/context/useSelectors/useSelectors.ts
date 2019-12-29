import { useContext } from "react";
import { Context } from "~/containers/context";

const useSelectors = () => useContext(Context).state;

export const useCnt = () => useSelectors().cnt;
