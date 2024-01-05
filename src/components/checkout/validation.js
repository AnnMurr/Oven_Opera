import { checkPromoCode } from "./promoCode.js";

function checkTotalPrice() {
  const checkoutTotalSum = document.querySelector(".checkout__total-sum");
  const checkoutSubscription = document.querySelector(
    ".checkout__subscription-minOrder");
    const price = checkoutTotalSum.textContent.slice(
        1, checkoutTotalSum.textContent.length);
  let isValid = true;

  if(price < 12)  {
    checkoutSubscription.style.color = "red";
    isValid = false;
  } else {
    checkoutSubscription.style.color = "black";
  }

  return isValid;
}

function getValidation(input) {
  const label = input.previousElementSibling.textContent;

  switch (label) {
    case "Street":
    case "House":
    case "Phone":
      validateEmpty(input);
      break;
  }
}

function validateEmpty(input) {
  input.value.length === 0 ?
    input.classList.add("checkout__input_error"):
    input.classList.remove("checkout__input_error");
}

function getcheckPromoCode() {
  const inputs = document.querySelectorAll(".checkout__input");

  inputs.forEach(
    (input) =>
      input.previousElementSibling.textContent === "Promo code" &&
      input.addEventListener("input", checkPromoCode));
}

getcheckPromoCode();

export { checkTotalPrice, getValidation, getcheckPromoCode }