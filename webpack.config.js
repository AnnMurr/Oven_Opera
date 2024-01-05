const path = require("path");
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/contacts", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "contacts.html"));
});

app.get("/coupons", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "coupons.html"));
});

app.get("/menu", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "menu.html"));
});

app.get("/order", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "order.html"));
});

app.get("/checkout", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "checkout.html"));
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
    new MiniCssExtractPlugin({ filename: "styles.css" }),
  ],
};