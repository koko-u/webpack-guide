const path = require('path');

const WebpackConfig = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist")
  }
}

module.exports = WebpackConfig;
