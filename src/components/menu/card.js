import { getMenuData } from "../../api/getMenuData.js";
import { createCard } from "./createCard.js";
import { getFormatCurrency } from "../../core/utils/formatCurrency.js";

const container = document.querySelector(".menu__cards");

async function getCardsData() {
  const data = await getMenuData();
  localStorage.setItem("cards", JSON.stringify(data[0].pizzas));
  data[0].pizzas.forEach((obj) => container.append(createCard(obj)));
}

export function handleCurrencyChange(e, currencySelect) {
  const selectedCurrency = currencySelect.value;
  const id = e.target.parentNode.parentNode.parentNode.id;
  const cardsFromStore = JSON.parse(localStorage.getItem("cards"));

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
