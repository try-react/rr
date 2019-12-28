import React from "react";
import { Count as IC } from "@app/components/lib/presentational/other/Count";
import { useCount3 } from "./useCount3";

export const Count3 = () => {
  return (
    <>
      useContext 使ってるよ
      <IC {...useCount3()} />
    </>
  );
};
