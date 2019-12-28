import React from "react";
import { Count as IC } from "@app/components/src/Count";
import { useCnt, useOperations } from "~/containers/hooks";

export const Count = () => {
  const props = {
    ...useCnt(),
    ...useOperations()
  };
  return (
    <>
      Reudx 使ってるよ
      <IC {...props} />
    </>
  );
};
