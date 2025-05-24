export let cart;
if (!localStorage.getItem('cart')) {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
} else{
    cart = JSON.parse(localStorage.getItem('cart'));
}