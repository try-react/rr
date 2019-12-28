import React from "react";
import { Provider } from "react-redux";
import { Count } from "~/containers/containers/Count";
import { store } from "~/containers/store";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Count />
      </Provider>
    </>
  );
};
