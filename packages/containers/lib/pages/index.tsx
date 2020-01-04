// 手抜き

import React from "react";
import {
  useCount,
  useCount2,
  useCount3,
  useCount4
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
