import { useCnt } from "..";
import { useOperations } from ".";
import { renderHook, act } from "@testing-library/react-hooks";
import { wrapper } from "@app/shared/lib/wrapper";

describe("useCnt", () => {
  const hooks = () => ({
    operations: useOperations(),
    cnt: useCnt()
  });

  it("onIncrement", () => {
    const { result } = renderHook(hooks, { wrapper });

    act(() => {
      result.current.operations.onIncrement();
      result.current.operations.onIncrement();
      result.current.operations.onIncrement();
    });

    expect(result.current.cnt).toBe(3);
  });

  it("onDecrement", () => {
    const { result } = renderHook(hooks, { wrapper });

    act(() => {
      result.current.operations.onDecrement();
      result.current.operations.onDecrement();
      result.current.operations.onDecrement();
      result.current.operations.onDecrement();
      result.current.operations.onDecrement();
    });

    expect(result.current.cnt).toBe(-5);
  });

  it("set5", () => {
    const { result } = renderHook(hooks, { wrapper });

    act(() => {
      result.current.operations.set5();
      result.current.operations.set5();
    });

    expect(result.current.cnt).toBe(5);
  });
});
