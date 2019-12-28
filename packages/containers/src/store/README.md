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
