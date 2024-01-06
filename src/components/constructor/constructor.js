import { getFormatCurrency } from "../../core/utils/formatCurrency.js";
import { setItemToSessionStorage, getItemFromSessionStorage } from "../../core/storage/sessionStorage.js";
import { SIZE_PRICE, INITIAL_PIZZA } from "../../consts/consts.js";
import { createCard } from "./createCard.js";
import { getCartCost } from "../../core/utils/totalPrice.js";

const constructorAddBtn = document.querySelectorAll(".constructor__add-btn");
const constructorDeleteBtn = document.querySelectorAll(".constructor__delete-btn");
const constructorCards = document.querySelector(".constructor__cards");
const constructorSize = document.querySelector(".constructor__size");
const btnAddToCard = document.querySelector(".constructor__button .btn");

constructorAddBtn.forEach((btn) =>
  btn.addEventListener("click", addIngredients));

constructorDeleteBtn.forEach((btn) =>
  btn.addEventListener("click", removeIngredients));

btnAddToCard.addEventListener("click", addToCart);

constructorSize.addEventListener("change", changeSize);

function addToCart() {
  let cart = getItemFromSessionStorage("cart");
  const ingredients = document.querySelectorAll(".card__name");
  const totalPriceItem = document.querySelector(".constructor__total-price");
  const totalPrice = totalPriceItem.textContent.slice(
    1, totalPriceItem.textContent.length);

  !cart && (cart = []);

  const pizza = INITIAL_PIZZA;
  pizza.price =  {
    large: totalPrice.toString(),
    medium: totalPrice.toString(),
    small: totalPrice.toString(),
  }
  pizza.size = ingredients[0].children[0].textContent;

  for (let i = 1; i < ingredients.length; i++) {
    if (ingredients[i] !== undefined && ingredients[i] !== null) {
      pizza.ingredients.push(ingredients[i].children[0].textContent);
    }
  }

  cart.push(pizza);
  setItemToSessionStorage("cart", cart);
  getCartCost();
}

function getPrice() {
  const prices = document.querySelectorAll(".card__price-text");
  const price = document.querySelector(".constructor__total-price");
  let sum = 0;

  prices.forEach((price) => {
    const num = +price.textContent.slice(1, price.textContent.length);
    sum += num;
  });

  price.textContent = getFormatCurrency(sum);
}

function addSize() {
  const size = constructorSize.value;

  constructorCards.append(createCard(size, SIZE_PRICE[size]));
}

function changeSize(event) {
  const cardSize = document.querySelector(".card");
  const cardSizeName = cardSize.children[0].children[0].children[0];
  const cardSizePrice = cardSize.children[0].children[1].children[0];
  const size = event.target.value;

  cardSizeName.textContent = size;
  cardSizePrice.textContent = SIZE_PRICE[size];
  getPrice();
}

function addIngredients(event) {
  const btn = event.target;
  const deleteBtn = event.target.parentNode.nextElementSibling;
  const title = btn.parentNode.parentNode.children[0].children[0].textContent;
  const price = btn.parentNode.parentNode.children[1].children[0].textContent;

  btn.parentNode.classList.remove("constructor__add_active");
  deleteBtn.classList.add("constructor__delete_active");
  constructorCards.append(createCard(title, price));
  getPrice();
}

function removeIngredients(event) {
  const btn = event.target;
  const addBtn = event.target.parentNode.previousElementSibling;
  const cardName = document.querySelectorAll(".card__name");
  const itemName = btn.parentNode.parentNode.children[0].children[0];

  const card = Array.from(cardName).filter(
    (name) => name.children[0].textContent === itemName.textContent
  )[0];

  card.parentNode.parentNode.remove();
  btn.parentNode.classList.remove("constructor__delete_active");
  addBtn.classList.add("constructor__add_active");
  getPrice();
}

addSize();
getPrice();
