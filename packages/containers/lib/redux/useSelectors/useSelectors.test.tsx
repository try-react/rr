import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import { store } from "~/containers/redux";
import { useCnt } from ".";
import { useOperations } from "~/containers/hooks/redux";

describe("useCnt", () => {
  it("初期値", () => {
    const wrapper: React.FC = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result } = renderHook(useCnt, { wrapper });
    expect(result.current.value).toBe(0);
  });

  it("aaa", () => {
    const wrapper: React.FC = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    const { result } = renderHook(
      () => {
        return useOperations();
      },
      { wrapper }
    );
    result.current.onIncrement();
    result.current.onIncrement();
    result.current.onIncrement();
    result.current.onIncrement();
    const r = renderHook(useCnt, { wrapper });
    console.log(r.result.current.value);
  });
});
