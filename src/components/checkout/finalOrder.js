const orderContainer = document.querySelector(".checkout__order");

export function getFinalOrder() {
  const ordersFromStorage = JSON.parse(sessionStorage.getItem("cart"));

  ordersFromStorage &&
    ordersFromStorage.forEach((data) =>
      orderContainer.append(createOrderWrapper(data))
    );
}

function createOrderWrapper(data) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("checkout__order-wrapper");

  wrapper.append(createOrderCard(data));
  return wrapper;
}

function createOrderCard(data) {
  const card = document.createElement("div");
  card.classList.add("checkout__order-card");

  card.append(
    createOrderName(data),
    createOrderCounter(data),
    createOrderPrice(data)
  );
  return card;
}

function createOrderName(data) {
  const container = document.createElement("div");
  container.classList.add("checkout__order-name");
  const text = document.createElement("h5");
  text.textContent = data.title;

  container.append(text);
  return container;
}

function createOrderCounter(data) {
  const container = document.createElement("div");
  container.classList.add("checkout__order-counter");
  const text = document.createElement("span");
  text.textContent = data.pieces || 1;

  container.append(text);
  return container;
}

function createOrderPrice(data) {
  const container = document.createElement("div");
  container.classList.add("checkout__order-price");
  const text = document.createElement("span");

  const size = data.size;
  const pieces = data.pieces || 1;
  const price = size ? data.price[size] * pieces : data.price * pieces;

  text.textContent = price;

  container.append(text);
  return container;
}
