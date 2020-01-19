import React from "react";
import { Provider } from "react-redux";
import { store } from "@app/containers/lib/redux";
import { ContextProvider } from "@app/containers/lib/HOC";

export const reduxWrapper: () => React.FC = () => ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export const wrapper = ContextProvider(({ children }) => <>{children}</>);
