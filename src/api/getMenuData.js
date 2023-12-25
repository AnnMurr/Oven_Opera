export async function getMenuData() {
  return fetch("https://65294da655b137ddc83e91cc.mockapi.io/pizzas")
    .then((responce) => responce.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}

