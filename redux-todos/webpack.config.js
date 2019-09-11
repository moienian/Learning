const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public", "dist"),
    filename: "bundle.js"
  },
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devtool: "cheap-eval-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    watchContentBase: true,
    publicPath: "/dist/",
    open: true
  }
};
