# rr

## packages/components

`Presentational component` 置き場  
TODO 後々は コンポーネントカタログ入れてもいいね

## packages/containers

`Container component` 置き場

[👀 よりくわしく](https://github.com/try-react/rr/tree/master/packages/containers/lib/_ctx-redux)

## packages/shared

共通処理などの 置き場

---

## todo 管理

https://github.com/JasonEtco/todo

```ts
/**
 * TODO Take over the world
 * BODY Humans are weak; Robots are strong. We must cleanse the world of the virus that is humanity.
 */
function ruleOverPunyHumans(p: string) {
  // We must strategize beep boop
}
```

## test

まぁまぁ書いてる

<div><img src="https://user-images.githubusercontent.com/16768208/71557147-82b2e300-2a85-11ea-8cc6-0085cde7bbed.png" width=700></div>

### `yarn test`, `yarn jest` の違い

#### try-react/で `yarn test` した場合

try-react/jest.config.js  
↓  
try-react/packages/XXX/jest.config.js

try-react/packages/XXX/jest.config.js が読まれる事が大事

#### try-react/で `yarn jest` した場合

try-react/jest.config.js

try-react/packages/XXX/jest.config.js が読まれない事がつらい

TODO ディレクトリ構成変更 https://weblike-curtaincall.ssl-lolipop.jp/blog/?p=2056
