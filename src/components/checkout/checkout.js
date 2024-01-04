import { getFinalOrder } from "./finalOrder.js";
import { submitForm } from "./validation.js";
import { getCartCost } from "../../core/utils/totalPrice.js";

const submitBtn = document.querySelector(".checkout__button .btn");

submitBtn.addEventListener("click", submitForm);


getFinalOrder()
getCartCost() 