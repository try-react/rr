import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration as WebpackConfiguration, RuleSetRule } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import Dotenv from "dotenv-webpack";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const entry = path.resolve(__dirname, "lib");
const template = path.resolve(__dirname, "index.html");
const dist = path.resolve(__dirname, "../../dist");

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
    publicPath: "/",
    path: dist,
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [new HtmlWebpackPlugin({ template }), new Dotenv()],
  module: { rules },
  devServer: {
    historyApiFallback: true
  }
};

export default configuration;
