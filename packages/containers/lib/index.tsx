import React from "react";
import { render } from "react-dom";
import { App } from "~/containers/App";
import { Provider as CTXProvider } from "~/containers/context";
import { Provider } from "react-redux";
import { store } from "~/containers/redux";

const target = document.getElementById("root");
render(
  <Provider store={store}>
    <CTXProvider>
      <App />
    </CTXProvider>
  </Provider>,
  target
);
