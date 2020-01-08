import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Routers,
  TopPage,
  Count1Page,
  Count2Page,
  Count3Page,
  Count4Page
} from "./pages/RoutersByRRD";

import { mount, route, lazy } from "navi";
import { Router as ReactNaviRouter, View } from "react-navi";
import { NotFoundError } from "navi";
const fetchSome = () => new Promise(resolve => setTimeout(resolve, 5000));

const routes = mount({
  "/count3": route({
    title: "Home",
    getData: () => fetchSome(),
    getView: () =>
      import("./pages").then(r => {
        return (
          <>
            <r.Count3 />
            <r.Count3Clone />
            <r.Count3W />
          </>
        );
      })
  })
});

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routers />
        <TopPage />
        <Count1Page />
        <Count2Page />
        <Count3Page />
        <Count4Page />
      </BrowserRouter>

      {/* <BrowserRouter>
        <Routers />
        <Count2Page />
        <Count3Page />
      </BrowserRouter>
      <ReactNaviRouter routes={routes}>
        <Suspense
          fallback={<div> 💦💦💦💦💦💦💦💦💦💦💦💦💦💦💦💦💦💦💦 </div>}
        >
          <View />
        </Suspense>
      </ReactNaviRouter> */}
    </>
  );
};
