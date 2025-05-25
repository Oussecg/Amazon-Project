import {products} from "../../data/products.js";
import {cart} from "../../data/cart.js";
import {checkItemPresence, getQuantityFromSelect, searchName, showElement, updateLabelQuantity} from "./functions.js";

const main = document.querySelector(".main");
updateLabelQuantity(cart);
products.forEach(product => {
    main.innerHTML +=
    `<div class="product-container" data-product-name="${product.name}">
        <div class="product-image-container">
            <img src="../../${product.image}" alt="${product.name}" class="product-image">
        </div>
        <p class="product-name">${product.name}</p>
        <div class="product-rating-container">
            <img class="product-rating-image" alt="${product.rating.stars} stars" src="../../images/ratings/rating-${product.rating.stars * 10}.png">
            <p class="product-rating-count">${product.rating.count}</p>
        </div>
        <p class="product-price">$${(product.priceCents / 100).toFixed(2)}</p>
        <select class="product-size" data-product-id="${product.id}">
            <option selected value="1">1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
        </select>
        <div class="added-container" data-product-id="${product.id}">
            <img src="../../images/icons/checkmark.png" alt="chekmark">
            <p>Added</p>
        </div>
        <button class="add-button" data-product-id="${product.id}">Add to Cart</button>
    </div>`
})

document.querySelectorAll(".add-button").forEach(button => {
    button.addEventListener("click", () => {
        let product = products.find(product => product.id === button.dataset.productId)
        if (! checkItemPresence(cart, button.dataset.productId)){
            cart.push(
                {
                    quantity: getQuantityFromSelect(button.dataset.productId),
                    id: product.id
                }
            )
        } else{
            let item = cart.find(item => item.id === product.id);
            item.quantity += getQuantityFromSelect(button.dataset.productId)
        }
    })
        showElement(".added-container", 1000, button.dataset.productId);
        updateLabelQuantity(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
});


const inputName = document.querySelector(".input-product-name");
inputName.addEventListener("keyup", () => {
    searchName(inputName.value);
})