import React from "react";
import { Provider } from "react-redux";
import { Count } from "~/containers/containers/Count";
import { Count2 } from "~/containers/containers/Count2";
import { store } from "~/containers/store";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Count />
      </Provider>
      <Count2 />
    </>
  );
};
