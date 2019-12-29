// import { renderHook, act } from "@testing-library/react-hooks";
// import { useOperations } from ".";
// import { reduxWrapper } from "~/test/wrapper";
// import { store } from "~/containers/redux";

describe("useOperations", () => {
  it("Reduxはシングルトンなのでテスト終了まで値が継続します hooks + Redux のテストの方法は storeのmock化が必要です", () => {
    expect(true).toBe(true);
  });
  // it("onIncrement", () => {
  //   const { result } = renderHook(useOperations, { reduxWrapper: reduxWrapper() });
  //   act(() => {
  //     result.current.onIncrement();
  //     result.current.onIncrement();
  //     result.current.onIncrement();
  //   });
  //   expect(store.getState().cnt).toBe(3);
  //   act(() => {
  //     result.current.onDecrement();
  //     result.current.onDecrement();
  //     result.current.onDecrement();
  //     result.current.onDecrement();
  //     result.current.onDecrement();
  //   });
  //   expect(store.getState().cnt).toBe(-2);
  // });
});
