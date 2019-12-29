import React from "react";
import { Provider } from "react-redux";
import { store } from "~/containers/redux";
import { Provider as CTXProvider } from "~/containers/context";

export const wrapper: React.FC = ({ children }) => (
  <CTXProvider>{children}</CTXProvider>
);

export const reduxWrapper: () => React.FC = () => ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
