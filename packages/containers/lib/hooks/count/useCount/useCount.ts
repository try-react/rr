import { useCnt, useOperations } from "~/containers/redux";

export const useCount = () => ({
  ...useCnt(),
  ...useOperations()
});
