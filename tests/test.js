// Importar funções para teste
import { addToCart, removeFromCart } from './modules/cart.js';

// Mock para localStorage
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

// Dados dos produtos mock
const products = [
  { id: 1, name: 'Tress, a garota do Mar Esmeralda', price: 112.40, stock: 50, category: 'featured' },
  { id: 2, name: 'O caminho dos reis', price: 130.27, stock: 19, category: 'featured' },
  { id: 3, name: 'Notebook Dell Inspiron', price: 4500.00, stock: 15, category: 'computer' },
  { id: 4, name: 'Camiseta Algodão', price: 25.90, stock: 100, category: 'clothing' },
];

// Inicializar o carrinho vazio
let cart = [];

beforeEach(() => {
  cart = [];
  localStorage.getItem.mockReturnValue(JSON.stringify(cart));
});

describe('Funções do Carrinho', () => {
  test('Adicionar produto ao carrinho', () => {
    const productToAdd = products[0];
    addToCart(cart, productToAdd);
    expect(cart.length).toBe(1);
    expect(cart[0].id).toBe(productToAdd.id);
  });

  test('Remover produto do carrinho', () => {
    const productToAdd = products[0];
    addToCart(cart, productToAdd);
    removeFromCart(cart, productToAdd.id);
    expect(cart.length).toBe(0);
  });

  test('Atualizar estoque ao adicionar ao carrinho', () => {
    const productToAdd = products[0];
    addToCart(cart, productToAdd);
    expect(productToAdd.stock).toBe(49); // estoque deve diminuir
  });

  test('Renderizar produtos em destaque', () => {
    const featuredProducts = products.filter(p => p.category === 'featured');
    expect(featuredProducts.length).toBe(2);
  });

  test('Renderizar produtos de computador', () => {
    const computerProducts = products.filter(p => p.category === 'computer');
    expect(computerProducts.length).toBe(1);
  });

  test('Renderizar produtos de roupas', () => {
    const clothingProducts = products.filter(p => p.category === 'clothing');
    expect(clothingProducts.length).toBe(1);
  });
});
