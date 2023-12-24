import { getMenu } from "../../api/getApi.js";
import { getFormatCurrency } from "../../core/utils/formatCurrency.js";

const container = document.querySelector(".menu__wrapper");

async function getCardsData() {
  try {
    const data = await getMenu();
    console.log(data);
    data.forEach((obj) => container.append(createCard(obj)));
  } catch (e) {
    console.error("error", e);
    throw e;
  }
}

function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");

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

  wrapper.append(
    createCardImage(data.image),
    createCardTitle(data.title),
    createCardIngredients(data.ingredients),
    createCardSize(),
    createCardPrice(data.price.medium),
    createCardButton()
  );
  return wrapper;
}

function createCardImage(url) {
  const container = document.createElement("div");
  container.classList.add("card__image");
  const img = document.createElement("img");
  img.src = url;
  img.alt = url;

  container.append(img);
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

  options.forEach((el) => {
    const option = document.createElement("option");
    option.textContent = el;
    container.append(option);
  });

  return container;
}

function createCardPrice(price) {
  const container = document.createElement("div");
  container.classList.add("card__price");
  const text = document.createElement("span");
  text.textContent = getFormatCurrency(price);

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

document.addEventListener("DOMContentLoaded", getCardsData());
