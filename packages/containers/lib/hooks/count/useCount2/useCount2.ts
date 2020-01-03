import { useState, useCallback } from "react";

const initState = {
  value: 0
};

export const useCount2 = (state = initState) => {
  const [value, setValue] = useState(state.value);
  const set5 = useCallback(() => setValue(5), []);
  const onIncrement = useCallback(() => setValue(value + 1), [value]);
  const onDecrement = useCallback(() => setValue(value - 1), [value]);

  return { value, set5, onIncrement, onDecrement };
};
