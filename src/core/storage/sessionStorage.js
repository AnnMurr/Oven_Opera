export function setItemToSessionStorage(name, data) {
    sessionStorage.setItem(name, JSON.stringify(data));
}

export function getItemFromSessionStorage(name) {
   return JSON.parse(sessionStorage.getItem(name));
}

export function removeItemFromSessionStorage(name) {
   return sessionStorage.removeItem(name);
}