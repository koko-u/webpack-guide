const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
  createHtmlWebpackPluginOptions,
  htmlWebpackPluginOptions
} = require('./html-webpack-plugin-config');

const miniCssExtractPluginOptions = {
  filename: "css/styles.css"
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

const imageAssetsRule = {
  test: /\.(png|jpg|jpeg|gif)$/,
  type: "asset/resource"
}

const pugLoaderRule = {
  test: /\.pug$/,
  use: [
    {
      loader: "pug-loader",
    },
  ],
}

const WebpackConfig = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/index.js",
    assetModuleFilename: "img/[name][ext]",
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
      imageAssetsRule,
      pugLoaderRule,
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(miniCssExtractPluginOptions),
    ...createHtmlWebpackPluginOptions(htmlWebpackPluginOptions)
  ],
};

module.exports = WebpackConfig;
