import { removeFromCart, updateCartItemQuantity, checkout } from './modules/cart.js';

document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');
    const feedbackContainer = document.getElementById('feedback');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;

            const li = document.createElement('li');
            li.classList.add('cart-item');
            li.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Preço: R$ ${item.price.toFixed(2)}</p>
                    <p>Quantidade: ${item.quantity}</p>
                    <button class="remove-item" onclick="removeCartItem(${item.id})">Remover</button>
                    <button class="increase-quantity" onclick="increaseQuantity(${item.id})">+</button>
                    <button class="decrease-quantity" onclick="decreaseQuantity(${item.id})">-</button>
                </div>
            `;
            cartItemsContainer.appendChild(li);
        });

        cartTotalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    }

    window.removeCartItem = function(productId) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        }
    };

    window.increaseQuantity = function(productId) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex !== -1) {
            cart[itemIndex].quantity++;
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        }
    };

    window.decreaseQuantity = function(productId) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex !== -1 && cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity--;
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        }
    };

    checkoutButton.addEventListener('click', function() {
        if (checkout(cart)) {
            localStorage.setItem('cart', JSON.stringify(cart));
            showFeedback('Compra finalizada com sucesso!', 'success');
            renderCart();
        } else {
            showFeedback('Seu carrinho está vazio!', 'error');
        }
    });

    function showFeedback(message, type) {
        feedbackContainer.textContent = message;
        feedbackContainer.className = type;
        setTimeout(() => {
            feedbackContainer.textContent = '';
            feedbackContainer.className = '';
        }, 3000); // Limpa o feedback após 3 segundos
    }

    renderCart();
});
