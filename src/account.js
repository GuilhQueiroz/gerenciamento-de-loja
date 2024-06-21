document.addEventListener('DOMContentLoaded', function() {
    const addProductForm = document.getElementById('add-product-form');
    const feedbackContainer = document.getElementById('feedback');

    // Verifica se o usuário é um administrador
    const isAdmin = true; // Alterar para a lógica de verificação real do admin

    if (!isAdmin) {
        document.getElementById('admin-section').style.display = 'none';
        showFeedback('Você não tem permissão para acessar esta área.', 'error');
        return;
    }

    // Função para adicionar produto
    function addProduct(product) {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }

    // Função para mostrar feedback na tela
    function showFeedback(message, type = 'success') {
        feedbackContainer.textContent = message;
        feedbackContainer.className = type;
        setTimeout(() => {
            feedbackContainer.textContent = '';
            feedbackContainer.className = '';
        }, 3000); // Limpa o feedback após 3 segundos
    }

    // Evento de submissão do formulário
    addProductForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const productName = document.getElementById('product-name').value;
        const productPrice = parseFloat(document.getElementById('product-price').value);
        const productImage = document.getElementById('product-image').value;
        const productDescription = document.getElementById('product-description').value;
        const productStock = parseInt(document.getElementById('product-stock').value);
        
        const newProduct = {
            id: Date.now(),
            name: productName,
            price: productPrice,
            image: productImage,
            description: productDescription,
            stock: productStock
        };

        addProduct(newProduct);
        showFeedback('Produto adicionado com sucesso!');
        addProductForm.reset();
    });
});
