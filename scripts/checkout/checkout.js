import {cart} from '../../data/cart.js';
import {products} from "../../data/products.js";
import {loadHTML, updateLabelQuantity} from "./functions.js";

export const productsContainer = document.querySelector('.checkout-products');
updateLabelQuantity()
loadHTML(productsContainer, products, cart);
