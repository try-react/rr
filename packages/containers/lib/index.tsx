import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import { Provider as CTXProvider } from "./context";
import { App } from "./App";

const target = document.getElementById("root");
render(
  // Redux と Context試すために こんな感じ 😭
  <Provider store={store}>
    <CTXProvider>
      <App />
    </CTXProvider>
  </Provider>,
  target
);
