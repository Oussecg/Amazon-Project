export function checkItemPresence(cart, productId){
    let item = cart.find(product => product.id === productId);
    if (item){
        item.quantity += getQuantityFromSelect(productId);
    }
    return item;
}

export function getQuantityFromSelect(productId){
    let quantity = 1;
    document.querySelectorAll(".product-size").forEach(select => {
        if (productId === select.dataset.productId) {
            quantity = Number(select.value);
        }
    })
    return quantity;
}

export function updateLabelQuantity(cart){
    let quantity = 0;
    cart.forEach(item => {
        quantity += item.quantity;
    })
    document.querySelector(".cart-quantity").innerHTML = quantity;
}

export function showElement(cla, time, productId){
    document.querySelectorAll(cla).forEach(element => {
        if (element.dataset.productId === productId ) {
            element.style.opacity = "1";
            setTimeout(() => {
                element.style.opacity = "0";
            }, time)
        }
    })
}

export function searchName(value){
    document.querySelectorAll(".product-container").forEach(element => {
        if (element.dataset.productName.toLowerCase().includes(value.toLowerCase())){
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    })
}