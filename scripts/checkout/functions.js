import { cart } from '../../data/cart.js'; // at the top if not already
import { products } from '../../data/products.js';
import { productsContainer } from './checkout.js';

window.deleteItem = deleteItem;
window.updateQuantity = updateQuantity;
window.loadHTML = loadHTML;
window.updateLabelQuantity = updateLabelQuantity;

export function getDeliveryDate(){
    return "";
}

export function updateQuantity(i){
    i += 1;
    if (i){
        i -= 1;
        const quantityLabel = document.querySelectorAll('.product-quantity')[i];
        const updateButton = document.querySelectorAll('.update-button')[i];
        if (updateButton.innerHTML === "Update"){
            quantityLabel.innerHTML = `<input type="number" value="${cart[i].quantity}" min="1">`
            const inputQuantity = quantityLabel.querySelector("input");
            inputQuantity.addEventListener("change", () => {
                cart[i].quantity = Number(inputQuantity.value);
            })
            updateButton.innerHTML = "Save";
        } else{
            quantityLabel.innerHTML = cart[i].quantity;
            updateButton.innerHTML = "Update";
            localStorage.setItem('cart', JSON.stringify(cart));
            updateLabelQuantity();
            loadHTML();
        }
    }
}

export function deleteItem(i){
    if (window.confirm("Are you sure you want to delete this item?")){
        cart.splice(i, 1);
        updateLabelQuantity();
        localStorage.setItem('cart', JSON.stringify(cart));
        loadHTML();
    }
}

export function loadHTML(){
    productsContainer.innerHTML = "";
    cart.forEach((item, i) => {
        const product = products.find(product => product.id === item.id);
        productsContainer.innerHTML +=
        `<div class="product-container">
            <h3 class="product-delivery-date">Delivery date: ${product.name}</h3>
            <div class="product-details">
                <img src="../../${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <p class="product-price">$${((product.priceCents / 100) * item.quantity).toFixed(2)}</p>
                    <div class="quantity-container">
                        <p>Quantity:<span class="product-quantity"> ${item.quantity}</span></p>
                        <button class="update-button" onclick="updateQuantity(${i})">Update</button>
                        <button class="delete-button" onclick="deleteItem(${i})">Delete</button>
                    </div>
                </div>
                <div class="product-dilevery-container">
                    <h5>Choose a delivery option:</h5>
                    <select class="product-delivery-input">
                        <option>Tuesday, June 10</option>
                        <option>Wednesday, June 4</option>
                        <option>Monday, June 2</value>
                    </select>
                    <span class="product-delivery-price">FREE Shipping</span>
                </div>
            </div>
        </div>`
    });
    document.querySelectorAll(".product-delivery-input").forEach(select => {
        select.addEventListener("change", () => {
            
        })
    })
    if (cart.length === 0) {
        productsContainer.classList.add("empty-cart-container");
        productsContainer.innerHTML = "<a href='http://localhost:63342/Amazon-Project-master/amazon.html' class='empty-cart'>Your cart is empty.</a>";
    } else {
        productsContainer.classList.remove("empty-cart-container");
    }
    const totalContainer = document.querySelector((".checkout-total"));
    const price = Number(calculateTotalPrice());
    const tax = Number((price / 10).toFixed(2));
    const totalPrice = (price + tax).toFixed(2);
    totalContainer.innerHTML =
    `
    <h3 class="summary-title">Order Summary</h3>
    <div class="summary-price">
        <p>Items(${updateLabelQuantity()}):</p>
        <p>$${price}</p>
    </div>
    <div class="summary-tax">
        <p>Estimated tax (10%):</p>
        <p>$${tax}</p>
    </div>
    <div class="summary-total">
        <p>Order total:</p>
        <p>$${totalPrice}</p>
    </div>
    `
}

export function updateLabelQuantity(){
    let quantity = 0;
    cart.forEach(item => {
        quantity += item.quantity;
    })
    document.querySelector(".products-quantity").innerHTML = quantity;
    return quantity;
}

export function calculateTotalPrice() {
    let total = 0;
    cart.forEach(item => {
        const product = products.find(product => product.id === item.id);
        total += (product.priceCents / 100) * item.quantity;
    });
    return total.toFixed(2);
}