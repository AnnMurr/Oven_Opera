import { getFormatCurrency } from "../../core/utils/formatCurrency.js";
import { getCartCost } from "../../core/utils/totalPrice.js";

const originalTotalSum = getCartCost();
const discountPrice = document.querySelector(".checkout__discount-price");

export function checkPromoCode(event) {
  const value = event.target.value;
  
  if (value && value === "MONDAY") {
    checkMondayPromo();
  } else {
    getCartCost();
    discountPrice.textContent = null;
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
  const totalSum = document.querySelector(".checkout__total-sum");
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

    if (discount + smallestPrice === +originalTotalSum) {
      totalSum.textContent = getFormatCurrency(discount);
      discountPrice.textContent = getFormatCurrency(originalTotalSum)
    }
  }
}
