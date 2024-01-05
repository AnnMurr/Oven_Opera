const SIZE_PRICE = {
  small: "€6.79",
  medium: "€7.89",
  large: "€8.99",
};

const MENU_DATA_URL = "https://65294da655b137ddc83e91cc.mockapi.io/pizzas";

const INITIAL_PIZZA = {
  image: "https://i.imgur.com/2GTTsIW.png",
  ingredients: [],
  price: {
    large: null,
    medium: null,
    small: null,
  },
  size: null,
  title: "PIZZA CONSTRUCTOR",
  type: "pizza",
  uid: Math.random() * 10000,
};

export { SIZE_PRICE, INITIAL_PIZZA, MENU_DATA_URL }