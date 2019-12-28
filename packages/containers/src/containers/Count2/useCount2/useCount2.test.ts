import { renderHook, act } from "@testing-library/react-hooks";
import { useCount2 } from "./useCount2";

describe("useCount2", () => {
  it("初期値", () => {
    const { result } = renderHook(useCount2);
    expect(result.current.value).toBe(0);
  });

  it("set5", () => {
    const { result } = renderHook(useCount2);
    act(result.current.set5);
    expect(result.current.value).toBe(5);
  });

  it("onIncrement", () => {
    const { result } = renderHook(useCount2);
    act(result.current.onIncrement);
    expect(result.current.value).toBe(1);
  });

  it("onIncrement * 3", () => {
    const { result } = renderHook(useCount2);
    act(result.current.onIncrement);
    act(result.current.onIncrement);
    act(result.current.onIncrement);
    expect(result.current.value).toBe(3);
  });

  it("onDecrement", () => {
    const { result } = renderHook(useCount2);
    act(result.current.onDecrement);
    expect(result.current.value).toBe(-1);
  });
});
