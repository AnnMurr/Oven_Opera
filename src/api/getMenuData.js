import { MENU_DATA_URL } from "../consts/consts.js";

export async function getMenuData() {
  return fetch(MENU_DATA_URL)
    .then((responce) => responce.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}
