import { useCallback } from "react";
import { useCnt, useOperations } from "~/containers/context";

export const useCount3 = () => {
  const { onIncrement, onDecrement, set5 } = useOperations();
  const value = useCnt();

  return {
    value,
    set5: useCallback(set5, []),
    onIncrement: useCallback(onIncrement, [value]),
    onDecrement: useCallback(onDecrement, [value])
  };
};
