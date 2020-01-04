import React from "react";
import { Provider } from "react-redux";
import { store } from "@app/containers/lib/redux";

type ProviderByReduxType = (Component: React.ComponentType) => React.FC;
export const ProviderByRedux: ProviderByReduxType = Component => props => (
  <Provider store={store}>
    <Component {...props} />
  </Provider>
);
