### 全体像

<div><img src="https://user-images.githubusercontent.com/16768208/71545813-e16b5480-29d2-11ea-8233-33b120dfb2a1.gif" width=500></div>

> (middlewaresは使ってない)

<div><img src="https://user-images.githubusercontent.com/16768208/71544846-28ebe380-29c7-11ea-8c9a-78ca3a0274db.png" width=500></div>

### 詳細

`redux-toolkit` の `configureStore` 使用している  
つまり `Reducer` は 1つ

## Action

Actionは起こったイベントを表す

## ActionCreator

Actionを生成する関数

## State

StateはJSON serializableなインターフェース（クラスや関数がない、オブジェクトや配列はOK）で、プログラムの状態を表す

## Reducer

Actionと前のstateから次のstateを生成する。

## Store

現在の状態を管理する


## operations

- Actionを発火するためのラッパー関数を配置する
  - Actionを複数かい同時に叩きたい場合やThunkを使う場合はここに書く
  - Actionにわたす引数の作成等もこのoperationsで行う
- Actionを発火させたい場合は、必ずこのoperations経由で行う
  - Actionをカプセル化する
  - ViewはどのActionを発火するとか知らないほうがいい

## selectors

- Viewが使いたい値はStateの値とイコールとは限らない
- Viewが使いたい形にStateを加工する関数を配置する
- ViewがState見る時は、ここを経由しとく
