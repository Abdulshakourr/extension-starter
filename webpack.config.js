const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//

module.exports = {
  entry: {
    popup: "./src/Popup.jsx",
    background: "./src/background.jsx",
    content: "./src/content.jsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/popup.html",
      filename: "popup.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
};
