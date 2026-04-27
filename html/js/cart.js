window.addEventListener("load", () => {
  updateCartCount();
  renderCartItems();
});

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = cart.length;
  }
}
function increaseQuantity(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCartItems();
  }
}
function decreaseQuantity(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity -= 1;
    if (product.quantity === 0) {
      product.quantity += 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCartItems();
  }
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  const emptyCartDiv = document.getElementById("empty-cart");
  if (!cartItemsContainer) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "";
    emptyCartDiv.style.display = "block";
    return;
  }

  emptyCartDiv.style.display = "none";
  cartItemsContainer.innerHTML = "";

  cart.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="cart-item-image" />
      <div class="cart-item-details">
        <h3 class="cart-item-name">${product.name}</h3>
        <div class="quantity-control">
          <button class="quantity-control" data-product-id="${product.id}" data-action="decrease">-</button>
          <span class="cart-item-quantity">${product.quantity}</span>
          <button class="quantity-control" data-product-id="${product.id}" data-action="increase">+</button>
        </div>
        <p class="cart-item-price">$${(product.price * product.quantity).toFixed(2)}</p>
        <button class="remove-btn" data-product-id="${product.id}">Remove</button>
      </div>
    `;
    cartItem
      .querySelector(".quantity-control")
      .addEventListener("click", (e) => {
        const action = e.target.dataset.action;
        const productId = e.target.dataset.productId;
        if (action === "decrease") {
          decreaseQuantity(productId);
        } else if (action === "increase") {
          increaseQuantity(productId);
        }
      });

    cartItem.querySelector(".remove-btn").addEventListener("click", () => {
      removeFromCart(product.id);
    });
    cartItemsContainer.appendChild(cartItem);
    totalPrice();
    updatesummary();
  });
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCartItems();
}
function totalPrice() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const tax = 0.1;
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return total + total * tax;
}

function updatesummary() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.1; // cut tax at 10%
  const total = subtotal + tax;
  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("tax").textContent = `$${tax.toFixed(2)}`;
  document.getElementById("total").textContent = `$${total.toFixed(2)}`;
}
