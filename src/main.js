import { addToCart } from './modules/cart.js';

// Dados dos produtos
let products = [
    {
        id: 1,
        name: 'Tress, a garota do Mar Esmeralda',
        price: 112.40,
        image: 'https://m.media-amazon.com/images/I/61+q7vJep0L._AC_UF1000,1000_QL80_.jpg', 
        description: 'Descrição do Produto 1',
        stock: 50,
        
      },
      {
        id: 2,
        name: 'O caminho dos reis',
        price: 130.27,
        image: 'https://m.media-amazon.com/images/I/512WiQoGYXL.jpg', 
        description: 'Descrição do Produto 2',
        stock: 19
      },
      {
        id: 3,
        name: 'Palavras de Radiância',
        price: 153.09,
        image: 'https://m.media-amazon.com/images/I/91yCf2XXZjL._AC_UF1000,1000_QL80_.jpg', 
        description: 'Descrição do Produto 3',
        stock: 29
      },
      { id: 4, name: 'Jurassic Park', 
        price: 89.90, 
        stock: 35, 
        image: 'https://m.media-amazon.com/images/I/8142L+TQEyL._AC_UF894,1000_QL80_.jpg', 
        description: 'Jurassic Park é um romance de ficção científica e suspense de 1990, escrito por Michael Crichton, sobre a tentativa de criar um parque temático de dinossauros clonado.' 
      },
      { id: 5, name: 'Harry Potter e a Pedra Filosofal', 
        price: 45.00, 
        stock: 100, 
        image: 'https://m.media-amazon.com/images/I/61jgm6ooXzL._AC_UF1000,1000_QL80_.jpg', 
        description: 'O primeiro livro da série mundialmente famosa de J.K. Rowling, introduzindo o jovem bruxo Harry Potter e suas aventuras em Hogwarts.' 
      },
      { id: 6, name: '1984', 
        price: 39.90, 
        stock: 42, 
        image: 'https://m.media-amazon.com/images/I/61t0bwt1s3L._AC_UF1000,1000_QL80_.jpg', 
        description: 'Escrito por George Orwell, 1984 é um romance distópico que apresenta uma sociedade totalitária e vigilância extrema, refletindo sobre liberdade e opressão.' 
      },
      { id: 7, name: 'O Senhor dos Anéis: A Sociedade do Anel', 
        price: 79.90, 
        stock: 27, 
        image: 'https://m.media-amazon.com/images/I/81hCVEC0ExL._AC_UF1000,1000_QL80_.jpg', 
        description: 'O início da épica trilogia de J.R.R. Tolkien, onde Frodo Bolseiro embarca em uma jornada para destruir o Um Anel.' 
      },
      { id: 8, name: 'O Nome do Vento', 
        price: 67.80, 
        stock: 50, 
        image: 'https://m.media-amazon.com/images/I/81CGmkRG9GL._AC_UF1000,1000_QL80_.jpg', 
        description: 'Escrito por Patrick Rothfuss, este é o primeiro livro da série A Crônica do Matador do Rei, narrando a história de Kvothe.' 
      },
      { id: 9, name: 'A Guerra dos Tronos', 
        price: 58.50, 
        stock: 45, 
        image: 'https://m.media-amazon.com/images/I/91+1SUO3vUL._AC_UF1000,1000_QL80_.jpg', 
        description: 'O primeiro livro da série As Crônicas de Gelo e Fogo de George R.R. Martin, uma épica narrativa de política, guerra e magia.' 
      },
      { id: 10, name: 'Duna', 
        price: 92.00, 
        stock: 30, 
        image: 'https://m.media-amazon.com/images/I/81zN7udGRUL._AC_UF1000,1000_QL80_.jpg', 
        description: 'Escrito por Frank Herbert, Duna é um clássico da ficção científica, explorando política, religião e ecologia no desértico planeta Arrakis.' 
      },
];

// Dados do carrinho
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    const featuredProducts = document.getElementById('featured-products');

    // Renderiza os produtos em destaque
    renderFeaturedProducts();

    // Função para renderizar os produtos em destaque
    function renderFeaturedProducts() {
        featuredProducts.innerHTML = '';
        products.forEach(product => {
            const li = document.createElement('li');
            li.classList.add('product-item');
            li.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-details">
                    <h3>${product.name}</h3>
           
                    <p>Preço: R$ ${product.price.toFixed(2)}</p>
                    <p>Estoque: ${product.stock}</p>
                    <button onclick="addToCartClicked(${product.id})">Adicionar ao Carrinho</button>
                </div>
            `;
            featuredProducts.appendChild(li);
        });
    }

   
    window.addToCartClicked = function(productId) {
        const productToAdd = products.find(p => p.id === productId);
        if (productToAdd.stock > 0) {
            addToCart(cart, productToAdd);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateProductStock(productId, productToAdd.stock - 1);
        } else {
            alert(`Desculpe, o produto "${productToAdd.name}" está fora de estoque.`);
        }
    };

    // Função para atualizar o estoque do produto após adição ao carrinho
    function updateProductStock(productId, newStock) {
        const index = products.findIndex(p => p.id === productId);
        if (index !== -1) {
            products[index].stock = newStock;
            renderFeaturedProducts(); // Atualiza a exibição do estoque na lista de produtos em destaque
        }
    }
});
