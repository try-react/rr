import { useCnt } from ".";
import { renderHook } from "@testing-library/react-hooks";
import { wrapper } from "~/test/wrapper";

describe("useCnt", () => {
  it("初期値", () => {
    const { result } = renderHook(useCnt, { wrapper: wrapper });
    expect(result.current).toBe(0);
  });
});
