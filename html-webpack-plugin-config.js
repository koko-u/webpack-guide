const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPluginOptions = {
  index: {
    title: "動作テスト",
    filename: "index.html",
    template: "src/template/index.pug",
  },
  access: {
    title: "ACCESS",
    filename: "access.html",
    template: "src/template/access.pug",
  },
};

function createHtmlWebpackPluginOptions(options) {
  return Object.keys(options).map(key => new HtmlWebpackPlugin(options[key]))
}

module.exports = {
  htmlWebpackPluginOptions,
  createHtmlWebpackPluginOptions,
};
