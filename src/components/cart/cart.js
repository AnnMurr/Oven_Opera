import { getFormatCurrency } from "../../core/utils/formatCurrency.js";
import { getCartCost } from "../basket/basket.js";
import { toggleOrderCheckoutBlock } from "./order.js";

function addToCart(event) {
  const e = event.target;
  const id = e.parentNode.parentNode.parentNode.parentNode.id;
  const size = e.parentNode.previousElementSibling.previousElementSibling.value;
  const array = JSON.parse(localStorage.getItem("cards"));
  const card = array.filter((el) => el.uid === +id);
  card[0].size = size;

  addToStorage(card);
  getCartCost()
}

function addToStorage(card) {
  let cartFromStorage = JSON.parse(sessionStorage.getItem("cart")) || [];
  let found = false;

  const existingElement = cartFromStorage.find((el) => {
    if (el.uid === +card[0].uid) {
      if (card[0].size && el.size === card[0].size) {
        return true;
      } else if (!card[0].size) {
        return true;
      }
    }
    return false;
  });

  if (existingElement) {
    cartFromStorage = cartFromStorage.map((element) => {
      if (element.uid === card[0].uid && !card[0].size) {
        !element.pieces && (element.pieces = 1);
        element.pieces += 1;
      } else if (element.uid === card[0].uid && card[0].size && element.size === card[0].size) {
        !element.pieces && (element.pieces = 1);
        element.pieces += 1;
      }
      return element;
    });
  } else {
    found = true;
  }

  if (found) {
    cartFromStorage.push(card[0]);
  }

  sessionStorage.setItem("cart", JSON.stringify(cartFromStorage));
}

function changeCounter(e) {
  const event = e.target;
  const cartOrderProduct =
    event.parentNode.parentNode.parentNode.parentNode.parentNode;
  const cartOrderProductId = cartOrderProduct.id;
  const cartOrderProductSize =
    cartOrderProduct.children[0].childNodes[1].childNodes[1].children[0];

  const counterValue =
    event.textContent === "-"
      ? event.parentNode.nextElementSibling.children
      : event.parentNode.previousElementSibling.children;
  const dataFromStorrage = JSON.parse(sessionStorage.getItem("cart"));

  dataFromStorrage.map((element, index) => {
    if (
      element.uid === +cartOrderProductId &&
      ((cartOrderProductSize.textContent &&
        cartOrderProductSize.textContent === element.size) ||
        (element.uid === +cartOrderProductId &&
          !cartOrderProductSize.textContent))
    ) {
      if (event.textContent === "-") {
        if (element.pieces === 1 || !element.pieces) {
          removeCart(dataFromStorrage, cartOrderProduct, index);
          toggleOrderCheckoutBlock();
        } else {
          counterValue[0].textContent = +counterValue[0].textContent - 1;
          element.pieces -= 1;
          countSum(cartOrderProduct, element, index);
        }
      } else {
        !element.pieces && (element.pieces = 1);
        counterValue[0].textContent = +counterValue[0].textContent + 1;
        element.pieces += 1;
        countSum(cartOrderProduct, element, index);
      }
    }
    return element;
  });

  sessionStorage.setItem("cart", JSON.stringify(dataFromStorrage));
  getCartCost()
}

function removeCart(dataFromStorrage, item, index) {
  item.remove();
  dataFromStorrage.splice(index, 1);
  sessionStorage.setItem("cart", JSON.stringify(dataFromStorrage));
}

function countSum(cartOrderProduct, element) {
  const cartOrderProductPrice =
    cartOrderProduct.children[0].childNodes[2].childNodes[0].children[0];

  const size = element.size;
  const pieces = element.pieces;

  const price = element.size
    ? pieces
      ? element.price[size] * pieces
      : element.price[size]
    : pieces
    ? element.price * pieces
    : element.price;

  cartOrderProductPrice.textContent = getFormatCurrency(price);
}

export { changeCounter, addToCart };
