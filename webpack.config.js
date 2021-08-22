const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cleanWebpackPluginOptions = {
  cleanOnceBeforeBuildPatterns: [
    "**/*",
    "!index.html",
  ],
};

const miniCssExtractPluginOptions = {
  filename: "styles.css"
};

const htmlWebpackPluginOptions = {
  title: "動作テスト",
  filename: "index.html",
  template: "src/index.html",
  inject: true,
  scriptLoading: "defer",
};

const cssLoaderRule = {
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {},
    },
  ]
}

const WebpackConfig = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      cssLoaderRule,
    ],
  },
  plugins: [
    new CleanWebpackPlugin(cleanWebpackPluginOptions),
    new MiniCssExtractPlugin(miniCssExtractPluginOptions),
    new HtmlWebpackPlugin(htmlWebpackPluginOptions),
  ],
};

module.exports = WebpackConfig;
