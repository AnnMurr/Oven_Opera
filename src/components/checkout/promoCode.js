import { getFormatCurrency } from "../../core/utils/formatCurrency.js";
import { getCartCost } from "../../core/utils/totalPrice.js";
import { getItemFromSessionStorage } from "../../core/storage/sessionStorage.js";
import { formatSum } from "../../core/utils/formatSum.js";

const originalTotalSum = getCartCost();
const discountPrice = document.querySelector(".checkout__discount-price");

export function checkPromoCode(event) {
  const value = event.target.value;

  if (value && value === "MONDAY") {
    checkMondayPromo();
  } else if (value && value === "THIRD") {
    checkThirdPromo();
  } else if (value && value === "MOST") {
    checkMostPromo();
  } else if (value && value === "BEVERAGE") {
    checkBeveragePromo();
  } else {
    getCartCost();
    discountPrice.textContent = null;
  }
}

function getCountPizzas(ordersFromStorage) {
  const countPizzas = [];

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

  return countPizzas;
}

function getCountBeverages(ordersFromStorage) {
  const countBeverage = [];

  ordersFromStorage.forEach((data) => {
    const beverage = {
      title: data.title,
      price: data.price,
    };

    if (data.type === "drink") {
      countBeverage.push(beverage);
    }
  });

  return countBeverage;
}

function checkThirdPromo() {
  const ordersFromStorage = getItemFromSessionStorage("cart");
  const countPizzas = getCountPizzas(ordersFromStorage);

  countThirdPromo(countPizzas);
}

function countThirdPromo(countPizzas) {
  const totalSum = document.querySelector(".checkout__total-sum");

  if (countPizzas.length >= 3) {
    const discountPercentage = 10;
    const discount = originalTotalSum * (discountPercentage / 100);
    const discountSum = originalTotalSum - discount;

    if (discountSum + discount === originalTotalSum) {
      totalSum.textContent = getFormatCurrency(originalTotalSum - discount);
      discountPrice.textContent = getFormatCurrency(originalTotalSum);
    }
  }
}

function checkMostPromo() {
  const ordersFromStorage = getItemFromSessionStorage("cart");
  const countPizzas = getCountPizzas(ordersFromStorage);

  countMostPromo(countPizzas);
}

function countMostPromo(countPizzas) {
  const totalSum = document.querySelector(".checkout__total-sum");

  if (countPizzas.length >= 5) {
    const discountPercentage = 20;
    const discount = originalTotalSum * (discountPercentage / 100);
    const discountSum = originalTotalSum - discount;

    if (discountSum + discount === originalTotalSum) {
      totalSum.textContent = getFormatCurrency(originalTotalSum - discount);
      discountPrice.textContent = getFormatCurrency(originalTotalSum);
    }
  }
}

function checkMondayPromo() {
  const ordersFromStorage = getItemFromSessionStorage("cart");
  const date = new Date();
  const today = date.toLocaleDateString("en-US", { weekday: "long" });
  const countPizzas = getCountPizzas(ordersFromStorage);

  today === "Monday" && countMondayPromo(countPizzas);
}

function countMondayPromo(countPizzas) {
  const totalSum = document.querySelector(".checkout__total-sum");
  let smallestPrice = null;

  if (countPizzas.length >= 2) {
    for (let index = 0; index < countPizzas.length - 1; index++) {
      const currentPrice = countPizzas[index].price;
      const nextPrice = countPizzas[index + 1].price;

      if (currentPrice !== undefined && nextPrice !== undefined) {
        if (smallestPrice === null || currentPrice <= nextPrice) {
          smallestPrice = +currentPrice;
        } else {
          smallestPrice = +nextPrice;
        }
      }
    }
  }

  if (smallestPrice) {
    const discount = originalTotalSum - smallestPrice;
    const roundedDiscount = Number(discount.toFixed(2));

    if (roundedDiscount + smallestPrice === originalTotalSum) {
      totalSum.textContent = getFormatCurrency(roundedDiscount);
      discountPrice.textContent = getFormatCurrency(originalTotalSum);
    }
  }
}

function checkBeveragePromo() {
  const ordersFromStorage = getItemFromSessionStorage("cart");
  const countPizzas = getCountPizzas(ordersFromStorage);
  const countBeverage = getCountBeverages(ordersFromStorage);

  countBeveragePromo(countPizzas, countBeverage);
}

function countBeveragePromo(countPizzas, countBeverage) {
  const totalSum = document.querySelector(".checkout__total-sum");
  let smallestPrice = null;

  if (countPizzas.length >= 3) {
    if (countBeverage.length === 1) {
      smallestPrice = countBeverage[0].price;
    } else {
      for (let index = 0; index < countBeverage.length - 1; index++) {
        const currentPrice = countBeverage[index].price;
        const nextPrice = countBeverage[index + 1].price;

        if (currentPrice !== undefined && nextPrice !== undefined) {
          if (currentPrice < nextPrice) {
            smallestPrice = currentPrice;
          } else if (currentPrice > nextPrice) {
            smallestPrice = nextPrice;
          }
        }
      }
    }
  }

  if (smallestPrice) {
    const discount = originalTotalSum - smallestPrice;

    if (discount + smallestPrice === originalTotalSum) {
      totalSum.textContent = getFormatCurrency(discount);
      discountPrice.textContent = getFormatCurrency(originalTotalSum);
    }
  }
}
