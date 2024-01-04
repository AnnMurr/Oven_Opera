import { getFormatCurrency } from "../../core/utils/formatCurrency.js";
import { changeCounter } from "./cart.js";

const orderContainer = document.querySelector(".order__inner");

function getOrder() {
  const products = JSON.parse(sessionStorage.getItem("cart"));

  products.forEach((data) => {
    orderContainer.append(createCartOrderProduct(data));
  });
}

function createCartOrderProduct(data) {
  const cartOrderProduct = document.createElement("div");
  cartOrderProduct.id = data.uid;
  cartOrderProduct.classList.add("cartOrderProduct");

  cartOrderProduct.append(createCartOrderProductContainer(data));
  return cartOrderProduct;
}

function createCartOrderProductContainer(data) {
  const container = document.createElement("div");
  container.classList.add("cartOrderProduct__container");

  container.append(
    createCartOrderProductImage(data.image),
    createCartOrderProductInfo(data),
    createCartOrderProductCart(data)
  );

  return container;
}

function createCartOrderProductImage(url) {
  const container = document.createElement("div");
  container.classList.add("cartOrderProduct__image");
  const image = document.createElement("img");
  image.src = url;

  container.append(image);
  return container;
}

function createCartOrderProductInfo(data) {
  const container = document.createElement("div");
  container.classList.add("cartOrderProduct__info");

  container.append(
    createCartOrderProductInfoName(data.title),
    createCartOrderProductInfoSize(data.size)
  );
  return container;
}

function createCartOrderProductInfoName(text) {
  const container = document.createElement("div");
  container.classList.add("cartOrderProduct-info__name");
  const title = document.createElement("h5");
  title.textContent = text;

  container.append(title);
  return container;
}

function createCartOrderProductInfoSize(size) {
  const container = document.createElement("div");
  container.classList.add("cartOrderProduct-info__size");
  const text = document.createElement("p");
  text.textContent = size;

  container.append(text);
  return container;
}

function createCartOrderProductCart(data) {
  const container = document.createElement("div");
  container.classList.add("cartOrderProduct__cart");

  container.append(
    createCartOrderProductPrice(data),
    createCartOrderProductCounter(data)
  );
  return container;
}

function createCartOrderProductPrice(data) {
  const container = document.createElement("div");
  container.classList.add("cartOrderProduct__price");
  const text = document.createElement("span");
  
  const size = data.size;
  const pieces = data.pieces || 1;
  const price = size ? data.price[size] * pieces : data.price * pieces;

  text.textContent = getFormatCurrency(price);

  container.append(text);
  return container;
}

function createCartOrderProductCounter(data) {
  const container = document.createElement("div");
  container.classList.add("cartOrderProduct__counter");

  container.append(
    createCartOrderProductMinusBtn(),
    createCartOrderProductCounterValue(data),
    createCartOrderProductPlusBtn()
  );
  return container;
}

function createCartOrderProductPlusBtn() {
  const container = document.createElement("div");
  container.classList.add("cartOrderProduct__counter-plus");
  const btn = document.createElement("button");
  btn.textContent = "+";
  btn.addEventListener("click", changeCounter);

  container.append(btn);
  return container;
}

function createCartOrderProductMinusBtn() {
  const container = document.createElement("div");
  container.classList.add("cartOrderProduct__counter-minus");
  const btn = document.createElement("button");
  btn.addEventListener("click", changeCounter);
  btn.textContent = "-";

  container.append(btn);
  return container;
}

function createCartOrderProductCounterValue(data) {
  const container = document.createElement("div");
  container.classList.add("cartOrderProduct__counter-value");
  const counterValue = document.createElement("span");
  counterValue.textContent = data.pieces ? data.pieces : 1;

  container.append(counterValue);
  return container;
}

getOrder();
