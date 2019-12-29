import { useCnt, useOperations } from "~/containers/hooks/redux";

export const useCount = () => ({
  ...useCnt(),
  ...useOperations()
});
