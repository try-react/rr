import React from "react";
import { useCount } from "./hooks";
import { useCount2 } from "./hooks";
import { useCount3 } from "./hooks";
import { useCount4 } from "./hooks";
import { Count } from "@app/components/lib/presentational/ecosystems/Count";
import { Decoration } from "@app/components/lib/presentational/atoms/Label";

export const App = () => (
  <>
    <CountX {...useCount()} />
    <CountX {...useCount2()} />
    <CountX {...useCount3()} />
    <CountX {...useCount4()} />
  </>
);

type Props = ReturnType<typeof useCount2>;
const CountX: React.FC<Props> = ({ value, set5, onDecrement, onIncrement }) => (
  <>
    <Decoration>
      <Count.SimpleLabel value={value} />
    </Decoration>

    <Count.CountButtons.Set5 onClick={set5} txt={"5をセット"} />
    <Count.CountButtons.Increment
      onClick={onIncrement}
      txt={"カウントアップ"}
    />
    <Count.CountButtons.Decrement
      onClick={onDecrement}
      txt={"カウントダウン"}
    />
  </>
);

// TODO Xstate
