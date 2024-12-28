// cart.js
let cartCount = 0;

function addToCart(productId) {
    // Increment cart count
    cartCount++;
    
    // Update cart counter display
    const cartCounter = document.getElementById('addedproduct');
    if (cartCounter) {
        cartCounter.textContent = cartCount;
    }
    
    // Add animation effect
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        // Add pulse animation class
        cartIcon.classList.add('cart-pulse');
        
        // Remove animation class after it completes
        setTimeout(() => {
            cartIcon.classList.remove('cart-pulse');
        }, 500);
    }
}