// JavaScript for "Add to Cart" button interaction
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
