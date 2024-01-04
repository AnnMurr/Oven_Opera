import { checkPromoCode } from "./promoCode.js";

export function submitForm() {
    const inputs = document.querySelectorAll(".checkout__input");
  
    inputs.forEach((input) => getValidation(input));
  }
  
  function getValidation(input) {
    const label = input.previousElementSibling.textContent;
  
    switch (label) {
      case "Street":
      case "House":
      case "Phone":
        validateEmpty(input);
        break;
      case "Promo code":
          checkPromoCode();
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