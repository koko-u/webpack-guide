const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const cleanWebpackPluginOptions = {
  cleanOnceBeforeBuildPatterns: [
    "**/*",
    "!index.html",
  ],
}

const cssLoaderRule = {
  test: /\.css$/,
  use: [
    {
      loader: "style-loader",
      options: {},
    },
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
  ],
};

module.exports = WebpackConfig;
