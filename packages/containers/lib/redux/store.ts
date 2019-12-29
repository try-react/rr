import { configureStore } from "@reduxjs/toolkit";
import { reducer, actions as _actions } from "@app/containers/lib/_ctx-redux";

export const actions = _actions;
export const store = configureStore({ reducer });
