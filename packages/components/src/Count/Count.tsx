import React from "react";

type Props = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  set5: () => void;
};

export const Count: React.FC<Props> = ({
  value,
  onIncrement,
  onDecrement,
  set5
}) => (
  <div>
    <div>カウント値：{value}</div>
    <div>
      <button type="button" onClick={set5}>
        set5
      </button>

      <button type="button" onClick={onIncrement}>
        onIncrement
      </button>
      <button type="button" onClick={onDecrement}>
        onDecrement
      </button>
    </div>
  </div>
);
