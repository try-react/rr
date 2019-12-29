import React from "react";
import { Count } from "@app/components/lib/presentational/other/Count";
import { useCount } from "~/containers/hooks";
import { useCount2 } from "~/containers/hooks";
import { useCount3 } from "~/containers/hooks";

export const App = () => (
  <>
    useDispatch, useSelector
    <Count {...useCount()} />
    useState
    <Count {...useCount2()} />
    useContext
    <Count {...useCount3()} />
  </>
);
