// Product data (should match the products on products.html)
const PRODUCTS = [
  { id: 1, name: "Watch", price: 4199 },
  { id: 2, name: "Headphones", price: 7499 },
  { id: 3, name: "Wallet", price: 2499 },
  { id: 4, name: "Smartphone", price: 32999 },
  { id: 5, name: "Speaker", price: 4999 },
  { id: 6, name: "Shoes", price: 6299 },
  { id: 7, name: "Bag", price: 3299 },
  { id: 8, name: "Sunglasses", price: 1999 },
  { id: 9, name: "Fitness Tracker", price: 4999 },
  { id: 10, name: "Coffee Maker", price: 8299 },
];

function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
  let cart = getCart();
  const idx = cart.findIndex((item) => item.id === productId);
  if (idx > -1) {
    cart[idx].qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart(cart);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
}

function updateCartQty(productId, qty) {
  let cart = getCart();
  const idx = cart.findIndex((item) => item.id === productId);
  if (idx > -1) {
    cart[idx].qty = qty;
    if (cart[idx].qty < 1) cart.splice(idx, 1);
  }
  saveCart(cart);
}

function clearCart() {
  localStorage.removeItem("cart");
}

function saveOrder(order) {
  localStorage.setItem("lastOrder", JSON.stringify(order));
}

// Expose for inline event handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQty = updateCartQty;
window.getCart = getCart;
window.clearCart = clearCart;
window.PRODUCTS = PRODUCTS;
window.saveOrder = saveOrder;
