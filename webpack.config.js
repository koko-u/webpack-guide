const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const cleanWebpackPluginOptions = {
  cleanOnceBeforeBuildPatterns: [
    "**/*",
    "!index.html",
  ],
}

const WebpackConfig = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  plugins: [
    new CleanWebpackPlugin(cleanWebpackPluginOptions)
  ]
}

module.exports = WebpackConfig;
