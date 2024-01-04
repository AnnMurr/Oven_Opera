import { getFormatCurrency } from "./formatCurrency.js";

const cartCost = document.querySelector(".cart__cost-sum");
const orderListTotalSum = document.querySelector(".order__list-total-sum");
const checkoutTotalSum = document.querySelector(".checkout__total-sum");

export function getCartCost() {
  let cartFromStorage = JSON.parse(sessionStorage.getItem("cart")) || [];
  const cost = cartFromStorage.reduce((acc, el) => {
    const price = el.size ? el.price[el.size] : el.price;
    const pieces = el.pieces || 1;
    return (acc += price * pieces);
  }, 0);

  cartCost
    ? (cartCost.textContent = getFormatCurrency(cost))
    : checkoutTotalSum
    ? (checkoutTotalSum.textContent = getFormatCurrency(cost))
    : (orderListTotalSum.textContent = getFormatCurrency(cost));

    return cost
}

getCartCost();
