// Funções com Arrays
export function addItem(cart, item) {
    cart.push(item);
}

export function removeItem(cart, item) {
    let index = cart.findIndex(i => i.id === item.id);
    if (index !== -1) {
        cart.splice(index, 1);
    }
}

// Funções com Strings (embora não sejam usadas diretamente com strings aqui)
export function formatItem(item) {
    return `${item.name} - R$ ${item.price.toFixed(2)}`;
}
