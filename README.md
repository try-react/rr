# rr

コンポーネントを、モノレポ化した React

<div><img src="https://user-images.githubusercontent.com/16768208/71545483-d1517600-29ce-11ea-878a-1932b8e427b3.jpg" width=300></div>
<div><img src="https://user-images.githubusercontent.com/16768208/71545491-f219cb80-29ce-11ea-989a-9b2959913152.png" width=300></div>
<div><img src="https://user-images.githubusercontent.com/16768208/71545449-73bd2980-29ce-11ea-8499-ec2a77c64851.jpg" width=300></div>

## packages/components
`Presentational component` 置き場

TODO  
後々は コンポーネントカタログ入れてもいいね

## packages/containers

`Container component` 置き場

### 全体像
![overview](https://user-images.githubusercontent.com/16768208/71544846-28ebe380-29c7-11ea-8c9a-78ca3a0274db.png "overview")

### 詳細

`redux-toolkit` の `configureStore` 使用している  
つまり `Reducer` は 1つ
