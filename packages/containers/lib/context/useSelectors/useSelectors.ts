import { useContext } from "react";
import { Context } from "@app/containers/lib/context";

const useSelectors = () => useContext(Context).state;

export const useCnt = () => useSelectors().cnt;
