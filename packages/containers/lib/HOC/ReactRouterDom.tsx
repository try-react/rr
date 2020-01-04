import React from "react";
import { Route } from "react-router-dom";

type ReactRouterDomType = (
  Component: React.ComponentType,
  path: string
) => React.FC;

export const ReactRouterDom: ReactRouterDomType = (
  Component,
  path
) => props => (
  <Route path={path} exact component={() => <Component {...props} />} />
);
