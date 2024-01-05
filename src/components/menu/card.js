import { getMenuData } from "../../api/getMenuData.js";
import { createCard } from "./createCard.js";
import { getFormatCurrency } from "../../core/utils/formatCurrency.js";
import { setItemToLocalStorage, getItemFromLocalStorage } from "../../core/storage/localStorage.js";

const container = document.querySelector(".menu__cards");
const categoriesBtns = document.querySelectorAll(".menu__item-btn");
categoriesBtns.forEach((btn) => btn.addEventListener("click", getCategory));

function getCategory(event) {
  getCardsData(event.target.innerText);
}

async function getCardsData(categoryName) {
  const dataFromApi = await getMenuData();
  const firstObject = dataFromApi[0];
  const category = firstObject && categoryName ? categoryName : "pizzas";
  const data = dataFromApi[0][category];
  container.innerHTML = null;
  getNavLink(category);
  setItemToLocalStorage("cards", data);
  data.forEach((obj) => container.append(createCard(obj)));
}

function getNavLink(category) {
  categoriesBtns.forEach((btn) =>
    btn.innerText === category
      ? btn.classList.add("menu__item-btn_active")
      : btn.classList.remove("menu__item-btn_active")
  );
}

export function handleCurrencyChange(e, currencySelect) {
  const selectedCurrency = currencySelect.value;
  const id = e.target.parentNode.parentNode.parentNode.id;
  const cardsFromStore = getItemFromLocalStorage("cards");

  cardsFromStore.forEach((elem) => {
    if (+elem.uid === +id) {
      const price = document
        .getElementById(id)
        .querySelector(".card__price-value");
      price.textContent = getFormatCurrency(elem.price[selectedCurrency]);
    }
  });
}

document.addEventListener("DOMContentLoaded", getCardsData());
