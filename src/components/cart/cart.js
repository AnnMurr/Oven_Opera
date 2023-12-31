import { getFormatCurrency } from "../../core/utils/formatCurrency.js";
import { getCartCost } from "../../core/utils/totalPrice.js";
import { toggleOrderCheckoutBlock } from "./order.js";
import { setItemToSessionStorage, getItemFromSessionStorage } from "../../core/storage/sessionStorage.js";
import { getItemFromLocalStorage } from "../../core/storage/localStorage.js";

function addToCart(e) {
  const event = e.target;
  const id = event.parentNode.parentNode.parentNode.parentNode.id;
  const size = event.parentNode.previousElementSibling.previousElementSibling.value;
  const array = getItemFromLocalStorage("cards");
  const card = array.filter((el) => el.uid === +id);
  card[0].size = size;

  addToStorage(card);
  getCartCost();
}

function addToStorage(card) {
  let cartFromStorage = getItemFromSessionStorage("cart") || [];
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
      } else if (
        element.uid === card[0].uid &&
        card[0].size &&
        element.size === card[0].size
      ) {
        !element.pieces && (element.pieces = 1);
        element.pieces += 1;
      }
      return element;
    });
  } else {
    found = true;
  }

  found && cartFromStorage.push(card[0]);
  
  setItemToSessionStorage("cart", cartFromStorage);
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
  const dataFromStorrage = getItemFromSessionStorage("cart");

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

  setItemToSessionStorage("cart", dataFromStorrage);
  getCartCost();
}

function removeCart(dataFromStorrage, item, index) {
  item.remove();
  dataFromStorrage.splice(index, 1);
  setItemToSessionStorage("cart", dataFromStorrage);
}

function countSum(cartOrderProduct, element) {
  const cartOrderProductPrice =
    cartOrderProduct.children[0].childNodes[2].childNodes[0].children[0];

  const size = element.size;
  const pieces = element.pieces || 1;
  const price = size ? element.price[size] * pieces : element.price * pieces;

  cartOrderProductPrice.textContent = getFormatCurrency(price);
}

export { changeCounter, addToCart };
