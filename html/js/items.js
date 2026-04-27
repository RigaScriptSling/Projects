const products = [
  {
    id: "PROD-001",
    category: "phones",
    name: "Samsung Galaxy A26 5G",
    price: 199.99,
    description: "High-quality smartphone with 5G connectivity",
    image:
      "/assets/images/xlarge_20250321104230_samsung_galaxy_a26_5g_dual_sim_6gb_128gb_black.jpeg",
    rating: 5.0,
  },
  {
    id: "PROD-002",
    category: "phones",
    name: "Apple iPhone 17 Pro",
    price: 899.99,
    description: "Latest iPhone with advanced camera system",
    image:
      "/assets/images/xlarge_20250910130505_apple_iphone_17_pro_12gb_256gb_silver.jpeg",
    rating: 4.8,
  },
  {
    id: "PROD-003",
    category: "phones",
    name: "Samsung Galaxy S26 5G",
    price: 799.99,
    description: "Premium flagship phone with stunning display",
    image:
      "/assets/images/xlarge_20260219144109_samsung_galaxy_s26_5g_12gb_512gb_black_proparagelia.jpeg",
    rating: 4.7,
  },
  {
    id: "PROD-004",
    category: "phones",
    name: "Xiaomi 17 5G",
    price: 549.99,
    description: "Powerful smartphone with great battery life",
    image:
      "/assets/images/xlarge_20260302200840_xiaomi_17_5g_dual_sim_12gb_512gb_black.jpg",
    rating: 4.5,
  },

  {
    id: "PROD-005",
    category: "furniture",
    name: "Relax Chair",
    price: 299.99,
    description: "Comfortable relaxation chair for your home",
    image:
      "/assets/images/fixedratio_20200918112424_polythrona_relax_289663.jpeg",
    rating: 4.6,
  },
  {
    id: "PROD-006",
    category: "furniture",
    name: "Modern Sofa",
    price: 899.99,
    description: "3-seater blue sofa perfect for any living room",
    image:
      "/assets/images/fixedratio_20251017115624_trithesios_kanapes_mpez_240x100x70ek_ste_001524_p1524.jpeg",
    rating: 4.9,
  },
  {
    id: "PROD-007",
    category: "furniture",
    name: "Computer Desk with LED",
    price: 449.99,
    description: "Wooden desk with LED lighting for gaming/work",
    image:
      "/assets/images/fixedratio_20250714114028_grafeio_ypologisti_xylino_mayri_drys_me_metallika_podia_led_182x101x87_5ek_3376136.jpeg",
    rating: 4.4,
  },
  {
    id: "PROD-008",
    category: "furniture",
    name: "Wooden Dining Table",
    price: 549.99,
    description: "Premium solid wood dining table",
    image:
      "/assets/images/fixedratio_20250422134937_trapezi_trapezarias_apo_masif_xylo_mayro_drys_140by74_5x76ek_862053.jpeg",
    rating: 4.8,
  },

  {
    id: "PROD-101",
    category: "shoes",
    name: "Nike Air Max SC",
    price: 129.99,
    description: "Premium leather sneakers with advanced comfort",
    image:
      "/assets/images/fixedratio_20250918152249_nike_air_max_sc_lea_andrika_sneakers_leyka_dh9636_101.jpeg",
    rating: 4.8,
  },
  {
    id: "PROD-102",
    category: "shoes",
    name: "Adidas Gazelle",
    price: 99.99,
    description: "Classic green sneakers for everyday wear",
    image:
      "/assets/images/fixedratio_20250918175115_adidas_gazelle_andrika_sneakers_prasina_if9655.jpeg",
    rating: 4.6,
  },
  {
    id: "PROD-103",
    category: "shoes",
    name: "Timberland Premium Boots",
    price: 179.99,
    description: "Premium leather boots perfect for any occasion",
    image:
      "/assets/images/fixedratio_20250915044030_timberland_premium_dermatina_kafe_arvylakia_tb0a2p6wexu.jpeg",
    rating: 4.8,
  },
  {
    id: "PROD-104",
    category: "shoes",
    name: "New Balance 530",
    price: 119.99,
    description: "Retro-inspired sneakers with modern comfort",
    image:
      "/assets/images/fixedratio_20251223093038_new_balance_530_sneakers_white_blue_mr530sg.jpeg",
    rating: 4.5,
  },

  {
    id: "PROD-201",
    category: "electronics",
    name: "Spigen Tempered Glass",
    price: 29.99,
    description: "Premium screen protector for Galaxy S24",
    image:
      "/assets/images/xlarge_20240119145226_spigen_2_5d_tempered_glass_2tmch_galaxy_s24_agl07440.jpeg",
    rating: 4.6,
  },
  {
    id: "PROD-202",
    category: "electronics",
    name: "UGREEN Fast Charger",
    price: 49.99,
    description: "65W USB-C charger with multiple ports",
    image:
      "/assets/images/xlarge_20260219152207_ugreen_fortistis_choris_kalodio_gan_me_thyra_usb_a_kai_3_thyres_usb_c_65w_power_delivery_quick_charge_2_0_quick_charge_3_0_quick_charge_4_quick_charge.jpeg",
    rating: 4.7,
  },
  {
    id: "PROD-203",
    category: "electronics",
    name: "iPhone Back Cover",
    price: 24.99,
    description: "Protective black case for iPhone 16 Pro Max",
    image:
      "/assets/images/xlarge_20240903100237_back_cover_mayro_iphone_16_pro_max.jpeg",
    rating: 4.4,
  },
  {
    id: "PROD-204",
    category: "electronics",
    name: "Xiaomi Redmi Watch",
    price: 99.99,
    description: "Smart watch with health tracking features",
    image:
      "/assets/images/xlarge_20240930121118_xiaomi_redmi_watch_5_active_me_palmografo_matte_silver.jpeg",
    rating: 4.5,
  },
];
const container = document.querySelector(".img-grid");

window.addEventListener("load", () => {
  const currentPage = window.location.pathname;
  let productsToShow;

  if (currentPage.includes("shoes.html")) {
    productsToShow = products.filter((p) => p.category === "shoes");
  } else if (currentPage.includes("furniture.html")) {
    productsToShow = products.filter((p) => p.category === "furniture");
  } else if (currentPage.includes("electronics.html")) {
    productsToShow = products.filter((p) => p.category === "electronics");
  } else {
    productsToShow = products;
  }
  renderProducts(productsToShow);
});

function renderProducts(productsToRender) {
  if (container) {
    container.innerHTML = "";
    productsToRender.forEach((element) => {
      const productContainer = document.createElement("div");
      productContainer.classList.add("grid-product");

      const img = document.createElement("img");
      img.src = element.image;
      img.alt = element.name;
      productContainer.appendChild(img);

      const rating = document.createElement("div");
      rating.classList.add("star-rating");
      rating.textContent = `${"★".repeat(Math.floor(element.rating))}${"☆".repeat(5 - Math.floor(element.rating))} ${element.rating}`;
      productContainer.appendChild(rating);

      const descriptions = document.createElement("div");
      descriptions.classList.add("descriptions");

      const price = document.createElement("p");
      price.classList.add("price");
      price.textContent = `$${element.price}`;
      descriptions.appendChild(price);

      const smallText = document.createElement("p");
      smallText.classList.add("small-text");
      smallText.textContent = element.description;
      descriptions.appendChild(smallText);

      productContainer.appendChild(descriptions);

      const shopBtn = document.createElement("div");
      shopBtn.classList.add("shop-btn");
      const button = document.createElement("button");
      button.setAttribute("data-product-id", element.id);
      button.textContent = "SHOP";
      shopBtn.appendChild(button);
      productContainer.appendChild(shopBtn);

      container.appendChild(productContainer);

      button.addEventListener("click", () => {
        window.location.href = `/html/shop-html/product.html?id=${element.id}`;
      });
    });
  }
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingproduct = cart.find((item) => item.id === product.id);
  if (existingproduct) {
    existingproduct.quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showNotification(product.name);
    return;
  }
  cart.push({ ...product, quantity: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showNotification(product.name);
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.querySelector("#cart-count");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

function showNotification(productName) {
  const notification = document.querySelector("#cart-notification");
  const notificationItem = document.querySelector("#notif-item");

  if (notification && notificationItem) {
    notificationItem.textContent = productName;
    notification.classList.add("show");

    setTimeout(() => {
      notification.classList.remove("show");
    }, 2500);
  }
}
function searchbar() {
  let input = document.getElementById("search-input").value.toLowerCase();
  const selecctedCategory = document.getElementById("category-filter").value;
  const filtered = products.filter(
    (product) =>
      product.name.toLowerCase().includes(input) &&
      (selecctedCategory === "" || product.category === selecctedCategory),
  );
  renderProducts(filtered);
}
function togglebtn() {
  const searchbar = document.querySelector(".search-bar");
  const togglebtn = document.querySelector(".togglebtn");

  searchbar.classList.toggle("visible");
  togglebtn.classList.toggle("hidden");
  if (searchbar.classList.contains("visible")) {
    document.getElementById("search-input").focus();
  }
}
