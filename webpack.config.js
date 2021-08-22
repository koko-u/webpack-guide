const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const miniCssExtractPluginOptions = {
  filename: "css/styles.css"
};

const htmlWebpackPluginOptions = {
  title: "動作テスト",
  filename: "index.html",
  template: "src/template/index.html",
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
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/index.js",
    clean: true,
  },
  resolve: {
    alias: {
      "@": path.resolve("src")
    }
  },
  module: {
    rules: [
      cssLoaderRule,
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(miniCssExtractPluginOptions),
    new HtmlWebpackPlugin(htmlWebpackPluginOptions),
  ],
};

module.exports = WebpackConfig;
