const modal = document.querySelector(".readyOrder");
const closeButton = document.querySelector(".readyOrder .cross");
const body = document.querySelector(".body-checkout");

closeButton.addEventListener("click", closeModal)

function closeModal() {
    modal.classList.remove("readyOrder_active");
    body.classList.remove("body-checkout_background");
    document.removeEventListener("click", closeByClickOutSide);
    resetForm()
  }
  
export function closeByClickOutSide(event) {
    if (modal.classList.contains("readyOrder_active") &&
        event.target.classList.contains("body-checkout_background")) {
        closeModal();
    }
}

function resetForm() {
    sessionStorage.removeItem("cart");
    document.location.reload();
}
