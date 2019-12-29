import { useState, useCallback } from "react";

const initState = {
  value: 0,
  increment: 1,
  decrement: 1
};

export const useCount2 = (state = initState) => {
  const [value, setValue] = useState(state.value);
  const set5 = useCallback(() => setValue(5), []);
  const onIncrement = useCallback(() => setValue(value + state.increment), [
    value
  ]);
  const onDecrement = useCallback(() => setValue(value - state.decrement), [
    value
  ]);

  return { value, set5, onIncrement, onDecrement };
};
