import React from "react";
import { Count as IC } from "@app/components/other/Count";
import { useCount2 } from "./useCount2";

export const Count2 = () => {
  return (
    <>
      useState 使ってるよ
      <IC {...useCount2()} />
    </>
  );
};
