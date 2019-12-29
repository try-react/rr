import { useState, useCallback } from "react";

export const useCount2 = () => {
  const [value, setValue] = useState(0);
  const set5 = useCallback(() => setValue(5), []);
  const onIncrement = useCallback(() => setValue(value + 1), [value]);
  const onDecrement = useCallback(() => setValue(value - 1), [value]);

  return { value, set5, onIncrement, onDecrement };
};
