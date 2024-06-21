import { addToCart } from './modules/cart.js';

// Dados dos produtos
let products = [
    {
        id: 1,
        name: 'Tress, a garota do Mar Esmeralda',
        price: 112.40,
        image: 'https://m.media-amazon.com/images/I/61+q7vJep0L._AC_UF1000,1000_QL80_.jpg', 
        description: 'Descrição do Produto 1Em Tress, a garota do Mar Esmeralda, Brandon Sanderson, autor best-seller nº 1 do New York Times, expande o universo Cosmere de O caminho dos reis com uma nova história singular, que é, também, uma excelente introdução à sua magnífica obra.',
        stock: 50,
        
      },
      {
        id: 2,
        name: 'O caminho dos reis',
        price: 130.27,
        image: 'https://m.media-amazon.com/images/I/512WiQoGYXL.jpg', 
        description: 'Do autor best-seller n.º 1 do New York Times Brandon Sanderson, O caminho dos reis, o livro mais aguardado de todos os tempos, chega ao Brasil iniciando uma incrível saga épica. Roshar é um mundo de pedras e tempestades.',
        stock: 19
      },
      {
        id: 3,
        name: 'Palavras de Radiância',
        price: 153.09,
        image: 'https://m.media-amazon.com/images/I/91yCf2XXZjL._AC_UF1000,1000_QL80_.jpg', 
        description: 'Do autor Brandon Senderson best-seller nº 1 do New York Times, chega agora a tão aguardada continuação de O caminho dos reis, dando sequência à saga épica Os Relatos da Guerra das Tempestades.',
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
      { id: 11, name: 'Neuromancer', 
        price: 50.00, 
        stock: 40, 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXfUmZ4FnQpmX_8iuhyJJ18K1rTzcKIwn1Ig&s', 
        description: 'Escrito por William Gibson, Neuromancer é um romance seminal de cyberpunk, que introduziu o termo "ciberespaço" e definiu o gênero.' 
    },
      { id: 12, name: 'Fahrenheit 451', 
        price: 35.00, 
        stock: 60, 
        image: 'https://m.media-amazon.com/images/I/51tAD6LyZ-L._AC_UF1000,1000_QL80_.jpg', 
        description: 'Escrito por Ray Bradbury, este clássico da ficção científica descreve uma sociedade futurista onde os livros são proibidos e queimados.' 
    },
      { id: 13, name: 'O Hobbit', 
        price: 55.00, 
        stock: 20, 
        image: 'https://m.media-amazon.com/images/I/91M9xPIf10L._AC_UF1000,1000_QL80_.jpg', 
        description: 'Escrito por J.R.R. Tolkien, O Hobbit é uma aventura épica que precede a trilogia O Senhor dos Anéis, acompanhando Bilbo Bolseiro em sua jornada.' 
    },
      { id: 14, name: 'Os Pilares da Terra', 
        price: 70.00, 
        stock: 15, 
        image: 'https://m.media-amazon.com/images/I/71zbjeIkVjL._AC_UF1000,1000_QL80_.jpg', 
        description: 'Ken Follett narra a construção de uma catedral na Inglaterra medieval em meio a conflitos e intrigas, em um romance histórico fascinante.' 
    },
      { id: 15, name: 'A Culpa é das Estrelas', 
        price: 32.90, 
        stock: 55, 
        image: 'https://m.media-amazon.com/images/I/51M9IbBqxCL._AC_UF1000,1000_QL80_.jpg', 
        description: 'John Green conta a tocante história de Hazel e Gus, dois adolescentes que se apaixonam em um grupo de apoio para jovens com câncer.' 
    },
      { id: 16, name: 'Percy Jackson e o Ladrão de Raios', 
        price: 45.00, 
        stock: 70, image: 'https://m.media-amazon.com/images/I/A1UjcPz4gZL._AC_UF1000,1000_QL80_.jpg', 
        description: 'Rick Riordan introduz Percy Jackson, um jovem semideus, em uma série de aventuras modernas inspiradas na mitologia grega.' 
    },
      { id: 17, name: 'O Código Da Vinci', 
        price: 49.90, 
        stock: 50, 
        image: 'https://m.media-amazon.com/images/I/91QSDmqQdaL._AC_UF1000,1000_QL80_.jpg', 
        description: 'Dan Brown apresenta Robert Langdon em um thriller intrigante que combina história, religião e mistério.' 
    },
      { id: 18, name: 'A Menina que Roubava Livros', 
        price: 38.90, 
        stock: 30, 
        image: 'https://m.media-amazon.com/images/I/61L+4OBhm-L._AC_UF1000,1000_QL80_.jpg', 
        description: 'Markus Zusak conta a história de Liesel, uma jovem que encontra consolo na leitura durante a Segunda Guerra Mundial.' 
    },
      { id: 19, name: 'A Revolução dos Bichos', 
        price: 28.90, 
        stock: 65, 
        image: 'https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UF1000,1000_QL80_.jpg', 
        description: 'George Orwell escreve uma fábula satírica sobre a corrupção do poder, usando animais de uma fazenda como protagonistas.' 
    },
      { id: 20, name: 'O Pequeno Príncipe', 
        price: 25.00, 
        stock: 80, 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLz_oq-loCvJVGMat9jxjv6Xm6QGXKn79l9Q&s', 
        description: 'Escrito por Antoine de Saint-Exupéry, este clássico conta a história de um pequeno príncipe que viaja entre planetas, explorando temas profundos e filosóficos.' 
    }
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
                <div class="product-wrapper">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-details">
                        <h3>${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <p><strong>Preço:</strong> R$ ${product.price.toFixed(2)}</p>
                        <p><strong>Estoque:</strong> ${product.stock}</p>
                        <button class="add-to-cart-button" onclick="addToCartClicked(${product.id})">Adicionar ao Carrinho</button>
                    </div>
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
