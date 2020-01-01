import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration, RuleSetRule } from "webpack";
import Dotenv from "dotenv-webpack";

const entry = path.resolve(__dirname, "packages/containers/lib");
const template = path.resolve(__dirname, "index.html");
const dist = path.resolve(__dirname, "dist");

const rules: RuleSetRule[] = [
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    loader: "babel-loader"
  }
];

const configuration: Configuration = {
  mode: "development",
  entry,
  output: {
    path: dist,
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [new HtmlWebpackPlugin({ template }), new Dotenv()],
  module: { rules }
};

export default configuration;
