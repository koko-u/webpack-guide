const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cleanWebpackPluginOptions = {
  cleanOnceBeforeBuildPatterns: [
    "**/*",
    "!index.html",
  ],
}

const miniCssExtractPluginOptions = {
  filename: "styles.css"
}

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
    new MiniCssExtractPlugin(miniCssExtractPluginOptions)
  ],
};

module.exports = WebpackConfig;
