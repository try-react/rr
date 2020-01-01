import React from "react";
import { Count } from "@app/components/lib/presentational/other/Count";
import { useCount } from "./hooks";
import { useCount2 } from "./hooks";
import { useCount3 } from "./hooks";

export const App = () => (
  <>
    <>
      useDispatch, useSelector
      <Count {...useCount()} />
      useState
      <Count {...useCount2()} />
      useContext
      <Count {...useCount3()} />
    </>
    <>
      useDispatch, useSelector
      <Count {...useCount()} />
      useState
      <Count {...useCount2()} />
      useContext
      <Count {...useCount3()} />
    </>
    <>.env - {process.env.FOO}</>
  </>
);
