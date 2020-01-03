import React from "react";
import { HandleCount } from "@app/components/lib/presentational/ecosystems";

import {
  useCount,
  useCount2,
  useCount3,
  useCount4
} from "@app/containers/lib/hooks";

// TODO Xstate
// TODO router
export const App = () => (
  <>
    <p>useDispatch, useSelector</p>
    <HandleCount {...useCount()} />

    <p>useState</p>
    <HandleCount {...useCount2()} />

    <p>useContext</p>
    <HandleCount {...useCount3()} />

    <p>useReducer</p>
    <HandleCount {...useCount4()} />
  </>
);
