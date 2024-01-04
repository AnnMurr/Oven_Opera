import { checkPromoCode } from "./promoCode.js";
import { getCartCost } from "../../core/utils/totalPrice.js";


export function submitForm() {
  const inputs = document.querySelectorAll(".checkout__input");

  inputs.forEach((input) => getValidation(input));
  checkTotalPrice()
}

function checkTotalPrice() {
    const totalPrice = getCartCost()
    const checkoutSubscription = document.querySelector(".checkout__subscription-minOrder");

    totalPrice < 12 && (checkoutSubscription.style.color = "red");
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
  if (input.value.length === 0) {
    input.classList.add("checkout__input_error");
  } else {
    input.classList.remove("checkout__input_error");
  }
}

export function getcheckPromoCode() {
  const inputs = document.querySelectorAll(".checkout__input");

  inputs.forEach(
    (input) =>
      input.previousElementSibling.textContent === "Promo code" &&
      input.addEventListener("input", checkPromoCode)
  );
}

getcheckPromoCode();
