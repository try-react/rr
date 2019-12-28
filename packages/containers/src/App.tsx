import React from "react";
import { Provider } from "react-redux";
import { Count } from "~/containers/containers/Count";
import { Count2 } from "~/containers/containers/Count2";
import { Count3 } from "~/containers/containers/Count3";
import { store } from "~/containers/store";
import { Provider as CTXProvider } from "~/containers/context";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Count />
      </Provider>
      <Count2 />
      <CTXProvider>
        <Count3 />
      </CTXProvider>
    </>
  );
};
