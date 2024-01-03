export function toggleOrderCheckoutBlock() {
  const orderCheckout = document.querySelector(".order__checkout");
  const cartFromStorage = JSON.parse(sessionStorage.getItem("cart")) || [];

  if (orderCheckout && cartFromStorage.length === 0) {
    orderCheckout.classList.add("order__checkout_hide");
    createOrderSubscription();
  }
}

function createOrderSubscription() {
  const orderInner = document.querySelector(".order__inner");
  const subscription = document.createElement("span");
  subscription.classList.add("order__subscription");
  subscription.textContent = "No products added";

  orderInner.append(subscription);
}

toggleOrderCheckoutBlock();
