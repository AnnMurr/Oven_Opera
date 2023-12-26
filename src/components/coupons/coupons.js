const btns = document.querySelectorAll(".coupon__button .btn");
const modal = document.querySelector(".promoModal");
const modalText = document.querySelector(".promoModal__code");
const closeButton = document.querySelector(".promoModal .cross");
const body = document.querySelector(".body-coupons");

btns.forEach((btn) => btn.addEventListener("click", openPromoModal));

closeButton.addEventListener("click", closeModal);

function openPromoModal(e) {
  const event = e.target;
  const promoCode = event.parentNode.parentNode.parentNode.parentNode.id;
  modal.classList.add("promoModal_show");
  body.classList.add("body-coupons_background");
  document.addEventListener("click", closeByClickOutSide);
  modalText.textContent = `Discount code: ${promoCode.toUpperCase()}`;
}

function closeModal() {
  modal.classList.remove("promoModal_show");
  body.classList.remove("body-coupons_background");
  document.removeEventListener("click", closeByClickOutSide);
}

function closeByClickOutSide(event) {
  if (modal.classList.contains("promoModal_show") &&
    event.target.classList.contains("body-coupons_background")) {
    closeModal();
  }
}
