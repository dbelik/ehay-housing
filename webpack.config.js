const path = require("path");

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Config
const mode = "development";
const target = "web";
const dist = "dist";

module.exports = {
  mode: mode,
  target: target,

  entry: {
    home: "./src/home.js",
  },
  output: {
    path: path.join(__dirname, dist),
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "resolve-url-loader", "sass-loader",],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, dist),
    compress: true,
    host: '0.0.0.0',
    port: 3000,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './pages/home.html' }),
    new MiniCssExtractPlugin({})
  ],
};
