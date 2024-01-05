function setItemToSessionStorage(name, data) {
    sessionStorage.setItem(name, JSON.stringify(data));
}

function getItemFromSessionStorage(name) {
   return JSON.parse(sessionStorage.getItem(name));
}

function removeItemFromSessionStorage(name) {
   return sessionStorage.removeItem(name);
}

export { setItemToSessionStorage, getItemFromSessionStorage, removeItemFromSessionStorage }