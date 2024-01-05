export function createCard(title, price) {
    const card = document.createElement("li");
    card.classList.add("card");
  
    card.append(createCardWrapper(title, price));
    return card;
  }
  
  function createCardWrapper(title, price) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("card__wrapper");
  
    wrapper.append(createCardName(title, price), createCardPrice(title, price));
    return wrapper;
  }
  
  function createCardName(title) {
    const container = document.createElement("div");
    container.classList.add("card__name");
    const name = document.createElement("span");
    name.textContent = title;
  
    container.append(name);
    return container;
  }
  
  function createCardPrice(_, price) {
    const container = document.createElement("div");
    container.classList.add("card__price");
    const priceText = document.createElement("span");
    priceText.classList.add("card__price-text");
    priceText.textContent = price;
  
    container.append(priceText);
    return container;
  }