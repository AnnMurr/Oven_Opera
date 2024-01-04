export function checkPromoCode() {
    const ordersFromStorage = JSON.parse(sessionStorage.getItem("cart"))

    const date = new Date()
    const today = date.toLocaleDateString('en-US', { weekday: 'long' })
    
    if(today === "Monday") {
        ordersFromStorage.forEach(el => {

        })
    }
}