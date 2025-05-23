import {products} from "../../data/products.js"

products.forEach(product => {
    document.querySelector(".main").innerHTML +=
    `<div class="product-container">
        <div class="product-image-container">
            <img src="../../${product.image}" alt="${product.name}" class="product-image">
        </div>
        <p class="product-name">${product.name}</p>
        <div class="product-rating-container">
            <img class="product-rating-image" alt="${product.rating.stars} stars" src="../../images/ratings/rating-${product.rating.stars * 10}.png">
            <p class="product-rating-count">${product.rating.count}</p>
        </div>
        <p class="product-price">$${(product.priceCents / 100).toFixed(2)}</p>
        <select class="product-size">
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
        <div class="added-container">
            <img src="../../images/icons/checkmark.png" alt="chekmark">
            <p>Added</p>
        </div>
        <button class="add-button">Add to Cart</button>
    </div>`
})