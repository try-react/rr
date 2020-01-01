import React from "react";
import { Provider } from "react-redux";
import { store } from "@app/containers/lib/redux";
import { Provider as CTXProvider } from "@app/containers/lib/context";

export const wrapper: React.FC = ({ children }) => (
  <CTXProvider>{children}</CTXProvider>
);

export const reduxWrapper: () => React.FC = () => ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
