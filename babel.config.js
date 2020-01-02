const presets = [
  // ES2015以降の文法を使えるようにする定番プリセット
  "@babel/preset-env",

  // React用プリセット
  "@babel/preset-react",

  // 型アノテーションの部分などを取り除く変換を行う。
  "@babel/preset-typescript"
];

const env = {
  production: {
    // data-test="hoge"が消える つまり神
    plugins: ["react-remove-properties"]
  }
};
module.exports = {
  presets,
  env
};
