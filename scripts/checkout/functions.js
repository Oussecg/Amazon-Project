import { cart } from '../../data/cart.js'; // at the top if not already
import { products } from '../../data/products.js';
import { productsContainer } from './checkout.js';

window.deleteItem = deleteItem;
window.updateQuantity = updateQuantity;
window.loadHTML = loadHTML;
window.updateLabelQuantity = updateLabelQuantity;

export function getDeliveryDate(){
    return true;
}

export function updateQuantity(i){

}

export function deleteItem(i){
    cart.splice(i, 1);
    updateLabelQuantity();
    localStorage.setItem('cart', JSON.stringify(cart));
    loadHTML()
}

export function loadHTML(){
    productsContainer.innerHTML = "";
    cart.forEach((item, i) => {
        const product = products.find(product => product.id === item.id);
        productsContainer.innerHTML +=
        `<div class="product-container">
            <h3 class="delivery-time">Delivery date: ${getDeliveryDate()}</h3>
            <div class="product-details">
                <img src="../../${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <p class="product-price">$${(product.priceCents / 100).toFixed(2)}</p>
                    <div class="quantity-container">
                        <p>Quantity:<span class="product-quantity">${item.quantity}</span></p>
                        <button class="update-button" onclick="updateQuantity(${i})">Update</button>
                        <button class="delete-button" onclick="deleteItem(${i})">Delete</button>
                    </div>
                </div>
            </div>
        </div>`
    })
}

export function updateLabelQuantity(){
    let quantity = 0;
    cart.forEach(item => {
        quantity += item.quantity;
    })
    document.querySelector(".products-quantity").innerHTML = quantity;
}