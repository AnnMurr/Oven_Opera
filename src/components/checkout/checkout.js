import { getFinalOrder } from "./finalOrder.js";
import { checkTotalPrice, getValidation } from "./validation.js";
import { closeByClickOutSide } from "./readyOrderModal.js";

const submitBtn = document.querySelector(".checkout__button .btn");
const body = document.querySelector(".body-checkout");
submitBtn.addEventListener("click", submitForm);

function submitForm() {
    const inputs = document.querySelectorAll(".checkout__input");
    const readyOrderModal = document.querySelector(".readyOrder");
    const readyOrderTotalSum = document.querySelector(".readyOrder__total-sum");
    const checkoutTotalSum = document.querySelector(".checkout__total-sum");
    let isValid = false;
    let isValidPrice = false;
    
    inputs.forEach((input) => getValidation(input));
  
    const errorInput = Array.from(inputs).find((input) =>
      input.classList.contains("checkout__input_error"));
  
    errorInput === undefined ? (isValid = true) : (isValid = false);
    isValidPrice = checkTotalPrice();
    
    if(isValid && isValidPrice) {
        readyOrderModal.classList.add('readyOrder_active');
        readyOrderTotalSum.textContent = checkoutTotalSum.textContent;
        document.addEventListener("click", closeByClickOutSide);
        body.classList.add('body-checkout_background');

    }
  }

getFinalOrder()