import { getFormatCurrency } from "../../core/utils/formatCurrency.js";

const totalSum = document.querySelector(".checkout__total-sum");
const originalTotalSum = +totalSum.textContent.slice(1,
  +totalSum.textContent.length - 1);

export function checkPromoCode(event) {
  const totalSum = document.querySelector(".checkout__total-sum");
  const value = event.target.value
  if (value && value === "MONDAY") {
    checkMondayPromo();
  } else {
    totalSum.textContent = getFormatCurrency(originalTotalSum);
  }
}

function checkMondayPromo() {
  const ordersFromStorage = JSON.parse(sessionStorage.getItem("cart"));
  const date = new Date();
  const today = date.toLocaleDateString("en-US", { weekday: "long" });
  const countPizzas = [];

  if (today === "Thursday") {
    ordersFromStorage.forEach((data) => {
      const pizza = {
        title: data.title,
        price: data.price[data.size],
      };

      if (data.type === "pizza") {
        countPizzas.push(pizza);

        if (data.pieces) {
          for (let i = 1; i < data.pieces; i++) {
            countPizzas.push(pizza);
          }
        }
      }
    });
    countMondayPromo(countPizzas);
  }
}

function countMondayPromo(countPizzas) {
  let smallestPrice = null;

  if (countPizzas.length >= 2) {
    for (let index = 0; index < countPizzas.length - 1; index++) {
      const currentPrice = countPizzas[index].price;
      const nextPrice = countPizzas[index + 1].price;

      if (currentPrice !== undefined && nextPrice !== undefined) {
        if (currentPrice < nextPrice) {
          smallestPrice = currentPrice;
        }
      }
    }
  }

  if (smallestPrice) {
    const discount = originalTotalSum - smallestPrice;

    if(discount + smallestPrice === +originalTotalSum) {
        totalSum.textContent =  getFormatCurrency(discount);
    }
  }
}
