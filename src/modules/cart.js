export function addToCart(cart, product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
}

export function removeFromCart(cart, productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
    }
}

export function updateCartItemQuantity(cart, productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
    }
}

export function checkout(cart) {
    if (cart.length > 0) {
        cart.length = 0;
        return true;
    }
    return false;
}
