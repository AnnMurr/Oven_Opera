export function setItemToLocalStorage(name,data) {
    localStorage.setItem(name, JSON.stringify(data));
 }

export function getItemFromLocalStorage(name) {
   return JSON.parse(localStorage.getItem(name));
}