import { getFormatCurrency } from "../../core/utils/formatCurrency.js";

const constructorAddBtn = document.querySelectorAll(".constructor__add-btn");
const constructorCards = document.querySelector(".constructor__cards");
const constructorSize = document.querySelector(".constructor__size");

constructorAddBtn.forEach((btn) =>
  btn.addEventListener("click", addIngredients)
);

constructorSize.addEventListener("change", changeSize);

const sizePrice = {
  small: 6.79,
  medium: 7.89,
  large: 8.99,
};

function addSize() {
  const size = constructorSize.value;

  constructorCards.append(createCard(size, sizePrice[size]));
}

function changeSize(event) {
  const cardSize = document.querySelector(".card");
  const cardSizeName = cardSize.children[0].children[0].children[0];
  const cardSizePrice = cardSize.children[0].children[1].children[0];
  const size = event.target.value;

  cardSizeName.textContent = size;
  cardSizePrice.textContent = getFormatCurrency(sizePrice[size]);
}

function addIngredients(event) {
  const btn = event.target;
  const title = btn.parentNode.parentNode.children[0].children[0].textContent;
  const price = btn.parentNode.parentNode.children[1].children[0].textContent;

  constructorCards.append(createCard(title, price));
}

function createCard(title, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  card.append(createCardWrapper(title, price));
  return card;
}

function createCardWrapper(title, price) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("card__wrapper");

  wrapper.append(createCardName(title, price), createCardPrice(title, price));
  return wrapper;
}

function createCardName(title) {
  const container = document.createElement("div");
  container.classList.add("card__name");
  const name = document.createElement("span");
  name.textContent = title;

  container.append(name);
  return container;
}

function createCardPrice(_, price) {
  const container = document.createElement("div");
  container.classList.add("card__price");
  const priceText = document.createElement("span");
  priceText.textContent = getFormatCurrency(price);

  container.append(priceText);
  return container;
}

addSize();
