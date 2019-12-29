import { useCnt, useOperations } from "@app/containers/lib/redux";

export const useCount = () => ({
  ...useCnt(),
  ...useOperations()
});
