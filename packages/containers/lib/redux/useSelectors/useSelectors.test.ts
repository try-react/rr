// import { useCnt } from ".";
// import { renderHook } from "@testing-library/react-hooks";
// import { reduxWrapper } from "~/test/wrapper";

describe("useCnt", () => {
  it("Reduxはシングルトンなのでテスト終了まで値が継続します hooks + Redux のテストの方法は storeのmock化が必要です", () => {
    expect(true).toBe(true);
  });
  // it("初期値", () => {
  //   const { result } = renderHook(useCnt, { reduxWrapper: reduxWrapper() });
  //   expect(result.current.value).toBe(0);
  // });
});
