// 手抜き中の 手抜き

import React from "react";
import { useHistory } from "react-router-dom";
import { ReactRouterDom } from "@app/containers/lib/HOC";
import {
  Top,
  Count1,
  Count2,
  Count3,
  Count4,
  Count1Clone,
  Count3Clone,
  Count3W,
  Count5
} from ".";

const useRedirect = (
  history = useHistory(),
  text: string,
  pathname: string
) => {
  history.push({
    pathname,
    state: { text }
  });
};

export const Routers = () => {
  const history = useHistory();

  return (
    <ul>
      <li>
        <a
          href=""
          onClick={e => {
            e.preventDefault();
            useRedirect(history, "ttt", "/");
          }}
        >
          top
        </a>
      </li>
      <li>
        <a
          href=""
          onClick={e => {
            e.preventDefault();
            useRedirect(history, "aaa", "/count1");
          }}
        >
          count1
        </a>
      </li>

      <li>
        <a
          href=""
          onClick={e => {
            e.preventDefault();
            useRedirect(history, "bb", "/count2");
          }}
        >
          count2
        </a>
      </li>

      <li>
        <a
          href=""
          onClick={e => {
            e.preventDefault();
            useRedirect(history, "cc", "/count3");
          }}
        >
          count3
        </a>
      </li>

      <li>
        <a
          href=""
          onClick={e => {
            e.preventDefault();
            useRedirect(history, "dd", "/count4");
          }}
        >
          count4
        </a>
      </li>

      <li>
        <a
          href=""
          onClick={e => {
            e.preventDefault();
            useRedirect(history, "ee", "/count5");
          }}
        >
          count5
        </a>
      </li>
    </ul>
  );
};

export const TopPage = ReactRouterDom(Top, "/");
export const Count1Page = ReactRouterDom(
  () => (
    <>
      個別に Provider にラップされているが storeが共通同じ値になる
      <div>
        <Count1 />
      </div>
      <div>
        <Count1Clone />
      </div>
    </>
  ),
  "/count1"
);
export const Count2Page = ReactRouterDom(Count2, "/count2");
export const Count3Page = ReactRouterDom(
  () => (
    <>
      <div>
        <p>個別に Context.Provider にラップされている</p>
        <Count3 />
      </div>
      <div>
        <p>個別に Context.Provider にラップされている</p>
        <Count3Clone />
      </div>
      <div>
        <p>共通のに Context.Provider にラップされている</p>
        <Count3W />
      </div>
    </>
  ),
  "/count3"
);
export const Count4Page = ReactRouterDom(Count4, "/count4");

export const Count5Page = ReactRouterDom(Count5, "/count5");
