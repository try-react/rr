import React from "react";

import {
  NormalButton,
  SimpleLabel,
  NormalButtonProps,
  SimpleLabelProps,
  Decoration
} from "@app/components/lib/presentational/atoms";

const HandleCountC = {
  CurrentValue: SimpleLabel,
  Decoration,
  Button: {
    Set5: NormalButton,
    Increment: NormalButton,
    Decrement: NormalButton
  }
};

type HandleCountProps = {
  value: SimpleLabelProps["value"];
  set5: NormalButtonProps["onClick"];
  onDecrement: NormalButtonProps["onClick"];
  onIncrement: NormalButtonProps["onClick"];
};

export const HandleCount: React.FC<HandleCountProps> = ({
  value,
  set5,
  onDecrement,
  onIncrement
}) => (
  <>
    <HandleCountC.Decoration>
      <HandleCountC.CurrentValue value={value} />
    </HandleCountC.Decoration>

    <HandleCountC.Button.Set5 onClick={set5}>
      5をセット
    </HandleCountC.Button.Set5>

    <HandleCountC.Button.Increment onClick={onIncrement}>
      カウントアップ 👍
    </HandleCountC.Button.Increment>

    <HandleCountC.Button.Decrement onClick={onDecrement}>
      カウントダウン 👇
    </HandleCountC.Button.Decrement>
  </>
);
