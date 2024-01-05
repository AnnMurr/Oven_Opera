function setItemToLocalStorage(name,data) {
    localStorage.setItem(name, JSON.stringify(data));
 }

function getItemFromLocalStorage(name) {
   return JSON.parse(localStorage.getItem(name));
}

export { setItemToLocalStorage, getItemFromLocalStorage }