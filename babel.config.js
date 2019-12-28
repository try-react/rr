// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const presets = [
  // ES2015以降の文法を使えるようにする定番プリセット
  "@babel/preset-env",

  // React用プリセット
  "@babel/preset-react",

  // 型アノテーションの部分などを取り除く変換を行う。
  "@babel/preset-typescript"
];

const plugins = [
  [
    "module-resolver",
    {
      root: ["./packages"],
      alias: {
        "~/containers": path.resolve(__dirname, "packages/containers/src"),
        "~/components": path.resolve(__dirname, "packages/components/src")
      }
    }
  ]
];

module.exports = { presets, plugins };
