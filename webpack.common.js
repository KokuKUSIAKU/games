const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [

          { loader: "style-loader" },
          { loader: "css-loader" },
        ]
      },
      {
        test: /\.(png|jpeg|jpg)$/,
        use: [
          { loader: "file-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(["docs"]),
    new HtmlWebpackPlugin({
      title: "Production",
      template: __dirname + "/index.html",
      filename: "index.html",
      inject: "body",
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs")
  }
};
