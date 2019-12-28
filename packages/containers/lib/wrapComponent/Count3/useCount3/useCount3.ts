import { useCallback } from "react";
import { useCnt2, useOperations2 } from "~/containers/hooks";

export const useCount3 = () => {
  const { onIncrement, onDecrement, set5 } = useOperations2();
  const value = useCnt2();

  return {
    value,
    set5: useCallback(set5, []),
    onIncrement: useCallback(onIncrement, [value]),
    onDecrement: useCallback(onDecrement, [value])
  };
};
