// 手抜き

import React from "react";
import {
  useCount,
  useCount2,
  useCount3,
  useCount4,
  useCount5
} from "@app/containers/lib/hooks";
import { HandleCount } from "@app/components/lib/presentational/ecosystems";
import { ContextProvider } from "@app/containers/lib/HOC";
import { ProviderByRedux } from "@app/containers/lib/HOC";

export const Top = () => <>😇なにもないよ😇</>;
const _Count1 = () => (
  <>
    Count1
    <p>useDispatch, useSelector</p>
    <HandleCount {...useCount()} />
  </>
);

export const Count1 = ProviderByRedux(_Count1);
export const Count1Clone = ProviderByRedux(_Count1);

export const Count2 = () => (
  <>
    Count2
    <p>useState</p>
    <HandleCount {...useCount2()} />
  </>
);

const _Count3 = () => (
  <>
    Count3
    <p>useContext</p>
    <HandleCount {...useCount3()} />
  </>
);
export const Count3 = ContextProvider(_Count3);
export const Count3Clone = ContextProvider(_Count3);
export const Count3W = ContextProvider(() => (
  <>
    <div>
      <_Count3 />
    </div>
    <div>
      <_Count3 />
    </div>
  </>
));

export const Count4 = () => (
  <>
    Count4
    <p>useReducer</p>
    <HandleCount {...useCount4()} />
  </>
);

export const Count5 = () => {
  const { current, send } = useCount5();
  return (
    <>
      <ul>
        <li>0の時は、ふやす set5のみ へらすや 初期化は押せない</li>
        <li>初期化のあとは、set5のみ その後は普通</li>
        <li>ふやすは 7までおせる つまり 数字は8まで</li>
      </ul>

      <p>xState</p>
      <button onClick={() => send("SET5", { p: "foo" })}>せっと5</button>
      <button onClick={() => send("INCREMENT")}>ふやす</button>
      <button onClick={() => send("DECREMENT")}>へらす</button>
      <button onClick={() => send("SET0")}>初期化</button>
      <button onClick={() => send("GOGO")}>終わり</button>
      <button onClick={() => send("GOGO2")}>終わり2</button>
      <div>{current.context.cnt}</div>
    </>
  );
};
