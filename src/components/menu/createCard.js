import { getFormatCurrency } from "../../core/utils/formatCurrency.js";
import { handleCurrencyChange } from "./card.js";

export function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = data.uid;

  card.append(createCardContainer(data));
  return card;
}

function createCardContainer(data) {
  const container = document.createElement("div");
  container.classList.add("card__container");

  container.append(createCardWrapper(data));
  return container;
}

function createCardWrapper(data) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("card__wrapper");

  wrapper.append(createCardImage(data.image), createCardTitle(data.title));
  data.ingredients && wrapper.append(createCardIngredients(data.ingredients));
  data.price.medium && wrapper.append(createCardSize());
  wrapper.append(createCardPrice(data), createCardButton());
  return wrapper;
}

function createCardImage(url) {
  const container = document.createElement("div");
  container.classList.add("card__image");
  const image = document.createElement("img");
  image.loading = "eager";
  image.src = url;
  image.alt = url;

  container.append(image);
  return container;
}

function createCardTitle(text) {
  const container = document.createElement("div");
  container.classList.add("card__title");
  const title = document.createElement("h3");
  title.textContent = text;

  container.append(title);
  return container;
}

function createCardIngredients(array) {
  const container = document.createElement("div");
  container.classList.add("card__ingredients");
  const text = document.createElement("p");
  text.textContent = array.join(", ") + ".";

  container.append(text);
  return container;
}

function createCardSize() {
  const options = ["small", "medium", "large"];
  const container = document.createElement("select");
  container.classList.add("card__size");
  container.setAttribute("type", "text");
  container.addEventListener("change", (event) =>
    handleCurrencyChange(event, container)
  );

  options.forEach((el) => {
    const option = document.createElement("option");
    option.textContent = el;
    container.append(option);
  });

  container.value = "medium";

  return container;
}

function createCardPrice(data) {
  const container = document.createElement("div");
  container.classList.add("card__price");
  const text = document.createElement("span");
  text.textContent = data.price.medium
    ? getFormatCurrency(data.price.medium)
    : getFormatCurrency(data.price);
  text.classList.add("card__price-value");

  container.append(text);
  return container;
}

function createCardButton() {
  const container = document.createElement("div");
  container.classList.add("card__button");
  const btn = document.createElement("button");
  btn.classList.add("btn", "btn_big");
  btn.type = "button";
  btn.textContent = "add to cart";

  container.append(btn);
  return container;
}
