const path = require("path");
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

app.use(express.static(path.join(__dirname, "dist")));

app.get("https://annmurr.github.io/Oven_Opera/dist/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("https://annmurr.github.io/Oven_Opera/dist/contacts", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "contacts.html"));
});

app.get("https://annmurr.github.io/Oven_Opera/dist/coupons", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "coupons.html"));
});

app.get("https://annmurr.github.io/Oven_Opera/dist/menu", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "menu.html"));
});

app.get("https://annmurr.github.io/Oven_Opera/dist/order", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "order.html"));
});

app.get("https://annmurr.github.io/Oven_Opera/dist/checkout", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "checkout.html"));
});

app.get("https://annmurr.github.io/Oven_Opera/dist/constructor", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "constructor.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
    styles: "./src/styles/index.scss",
    coupons: "./src/components/coupons/coupons.js",
    order: "./src/components/cart/createCartOrder.js",
    totalPrice: "./src/core/utils/totalPrice.js",
    checkout: "./src/components/checkout/checkout.js",
    readyOrderModal: "./src/components/checkout/readyOrderModal.js",
    constructor: "./src/components/constructor/constructor.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundler.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      chunks: [ "styles", "totalPrice"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/contacts.html",
      filename: "contacts.html",
      chunks: ["styles", "totalPrice"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/coupons.html",
      filename: "coupons.html",
      chunks: ["styles", "coupons", "totalPrice"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/menu.html",
      filename: "menu.html",
      chunks: ["main", "styles", "totalPrice"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/order.html",
      filename: "order.html",
      chunks: ["order", "styles"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/checkout.html",
      filename: "checkout.html",
      chunks: ["styles", "checkout", "readyOrderModal"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/constructor.html",
      filename: "constructor.html",
      chunks: ["styles", "constructor", "totalPrice"],
    }),
    new MiniCssExtractPlugin({ filename: "styles.css" }),
  ],
};