const products = {
  stages: [
    { name: "Stage 1", price: 58000, image: "assets/stages/stage1.jpg" },
    { name: "Stage 2", price: 28000, image: "assets/stages/stage2.jpg" },
    { name: "Stage 3", price: 50000, image: "assets/stages/stage3.jpg" },
    { name: "Stage 4", price: 12000, image: "assets/stages/stage4.jpg" },
    { name: "Stage 5", price: 14000, image: "assets/stages/stage5.jpg" },
    { name: "Stage 6", price: 16000, image: "assets/stages/stage6.jpg" },
    { name: "Stage 7", price: 18000, image: "assets/stages/stage7.jpg" },
    { name: "Stage 8", price: 20000, image: "assets/stages/stage8.jpg" },
    { name: "Stage 9", price: 22000, image: "assets/stages/stage9.jpg" },
    { name: "Stage 10", price: 24000, image: "assets/stages/stage10.jpg" },
    { name: "Stage 11", price: 26000, image: "assets/stages/stage11.jpg" },
    { name: "Stage 12", price: 28000, image: "assets/stages/stage12.jpg" },
    { name: "Stage 13", price: 64000, image: "assets/stages/stage13.jpg" },
    { name: "Stage 14", price: 42000, image: "assets/stages/stage14.jpg" }
    
  ],
  entrance: [
    { name: "Entrance 1", price: 15000, image: "assets/entrance/entrance1.jpg" },
    { name: "Entrance 2", price: 15000, image: "assets/entrance/entrance2.jpg" },
    { name: "Entrance 3", price: 15000, image: "assets/entrance/entrance3.jpg" },
    { name: "Entrance 4", price: 20000, image: "assets/entrance/entrance4.jpg" },
    { name: "Entrance 5", price: 20000, image: "assets/entrance/entrance5.jpg" },
    { name: "Pathway 1", price: 15000, image: "assets/entrance/pathway1.jpg" },
    { name: "Pathway 2", price: 15000, image: "assets/entrance/pathway2.jpg" },
    { name: "Pathway 3", price: 15000, image: "assets/entrance/pathway3.jpg" },
    { name: "Pathway 4", price: 20000, image: "assets/entrance/pathway4.jpg" },
    { name: "Pathway 5", price: 20000, image: "assets/entrance/pathway5.jpg" }
    
  ],
  catering: [
    { name: "Beef biriyani", tag: "Rice", image: "assets/catering/dish/beef biriyani.jpg" },
    { name: "Beef mandi", tag: "Rice", image: "assets/catering/dish/beef mandi.jpg" },
    { name: "Chicken mandi", tag: "Rice", image: "assets/catering/dish/chicken mandi.jpg" },
    { name: "Mutton mandi", tag: "Rice", image: "assets/catering/dish/mutton mandi.jpg" },
    { name: "Veg biriyani", tag: "Rice", image: "assets/catering/dish/veg biriyani.jpg" },
    { name: "Orange", tag: "Cool Drinks", image: "assets/catering/juice/orange.jpg" },
    { name: "Watermelon", tag: "Cool Drinks", image: "assets/catering/juice/watermelon.jpg" },
    { name: "Pineapple", tag: "Cool Drinks", image: "assets/catering/juice/pineapple.jpg" },
    { name: "Grape", tag: "Cool Drinks", image: "assets/catering/juice/grape.jpg" },
    { name: "Mosambi", tag: "Cool Drinks", image: "assets/catering/juice/mosambi.jpg" },
    { name: "Mango", tag: "Cool Drinks", image: "assets/catering/juice/mango.jpg" },
    { name: "Carrot", tag: "Cool Drinks", image: "assets/catering/juice/carrot.jpg" },
    { name: "Passion fruit", tag: "Cool Drinks", image: "assets/catering/juice/passion fruit.jpg" },
    { name: "Apple", tag: "Cool Drinks", image: "assets/catering/juice/apple.jpg" },
    { name: "Guava", tag: "Cool Drinks", image: "assets/catering/juice/guava.jpg" },
    { name: "Tender Coconut", tag: "Cool Drinks", image: "assets/catering/juice/tender coconut.jpg" },
    { name: "Chikku", tag: "Cool Drinks", image: "assets/catering/juice/chikku.jpg" },
    { name: "Strawberry", tag: "Cool Drinks", image: "assets/catering/juice/strawberry.jpg" },
    { name: "Blue Lime", tag: "Cool Drinks", image: "assets/catering/juice/blue lime.jpg" },
    { name: "Mint Lime", tag: "Cool Drinks", image: "assets/catering/juice/mint lime.jpg" },
    { name: "Sarbath", tag: "Cool Drinks", image: "assets/catering/juice/sarbath.jpg" },
    { name: "Tea", tag: "Hot Drinks", image: "assets/catering/hot/tea.jpg" },
    { name: "Coffee", tag: "Hot Drinks", image: "assets/catering/hot/coffee.jpg" },
    { name: "Masala Tea", tag: "Hot Drinks", image: "assets/catering/hot/masala tea.jpg" },
    { name: "Boost", tag: "Hot Drinks", image: "assets/catering/hot/boost.jpg" },
    { name: "Horlicks", tag: "Hot Drinks", image: "assets/catering/hot/horlicks.jpg" },
    { name: "Black Tea", tag: "Hot Drinks", image: "assets/catering/hot/black tea.jpg" },
    { name: "Green Tea", tag: "Hot Drinks", image: "assets/catering/hot/green tea.jpg" },
    { name: "Tulasi Tea", tag: "Hot Drinks", image: "assets/catering/hot/tulasi tea.jpg" },
    { name: "Mint Tea", tag: "Hot Drinks", image: "assets/catering/hot/mint tea.jpg" },
    { name: "Ginger Tea", tag: "Hot Drinks", image: "assets/catering/hot/ginger tea.jpg" },
    { name: "Lemon Tea", tag: "Hot Drinks", image: "assets/catering/hot/lemon tea.jpg" },
    { name: "Blue Tea", tag: "Hot Drinks", image: "assets/catering/hot/blue tea.jpg" },
    { name: "Chocolate Tea", tag: "Hot Drinks", image: "assets/catering/hot/chocolate tea.jpg" }
  ],
  other: [
    { name: "Sounds", tag: "", image: "assets/other/sounds.jpg" },
    { name: "Lights", tag: "", image: "assets/other/lights.jpg" },
    { name: "Led Walls", tag:"", image: "assets/other/led walls.jpg" },
    { name: "Paper Blast", tag:"", image: "assets/other/paper blast.jpg" },
    { name: "Cold Pyro", tag:"", image: "assets/other/cold pyro.jpg" },
    { name: "Dry Ice", tag:"", image: "assets/other/dry ice.jpg" }
  ],
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentCategory = 'stages';
let currentFilter = 'none';

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartItems() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
    
      <img src="${item.image}" alt="${item.name}">
      ${item.name} - ₹${item.price}
      <span class="remove-btn" onclick="removeFromCart(${index})">🗑️</span>
    `;
    cartList.appendChild(li);
  });
  document.getElementById("cart-count").textContent = cart.length;
  saveCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartItems();
  showCategory(currentCategory);
}

function addToCart(btn, name, price, image) {
  if (!cart.some(item => item.name === name)) {
    cart.push({ name, price, image });
    updateCartItems();
    btn.textContent = "Added";
    btn.disabled = true;
  }
}

function showCategory(category) {
  currentCategory = category;
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  const filteredProducts = filterProducts(products[category]);

  filteredProducts.forEach(product => {
    const isInCart = cart.some(item => item.name === product.name);
    
    // Decide what to display: price if it exists, otherwise tag
    const displayText = (product.price !== undefined && product.price !== 0)
    ? `₹${product.price}`
    : (product.tag || "");
  
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" onclick="showImage('${product.image}')">
      <h4>${product.name}</h4>
      <h4>${displayText}</h4>
      <button onclick="addToCart(this, '${product.name}', ${product.price || 0}, '${product.image}')" ${isInCart ? 'disabled' : ''}>
        ${isInCart ? 'Added' : 'Add to Cart'}
      </button>
    `;
    list.appendChild(div);
  });
}


function toggleCart(show = null) {
  const cartBox = document.getElementById("cart");
  const overlay = document.getElementById("cart-overlay");
  const isVisible = cartBox.classList.contains("active");

  if (show === true || (!isVisible && show === null)) {
    cartBox.classList.add("active");
    overlay.classList.add("active");
  } else if (show === false || (isVisible && show === null)) {
    cartBox.classList.remove("active");
    overlay.classList.remove("active");
  }
}

function sendToWhatsApp() {
  const name = document.getElementById("buyer-name").value.trim();
  const place = document.getElementById("buyer-place").value.trim();
  const eventType = document.getElementById("event-type").value.trim();
  const eventDate = document.getElementById("event-date").value;
  const eventTime = document.getElementById("event-time").value;
  const phonenumber = document.getElementById("phone-number").value;
  const note = document.getElementById("order-note").value.trim();


  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let message = `👤 *Customer Info:*\n`;
  message += `Name: ${name}\n`;
  message += `Place: ${place}\n`;
  message += `Event: ${eventType}\n`;
  message += `Date: ${eventDate}\n`;
  message += `Time: ${eventTime}\n`;
  message += `Count: ${phonenumber}\n`;
  if (note) message += `Note: ${note}\n`;

  message += `\n🛒 *Order Summary:*\n`;
  let total = 0;
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - ₹${item.price}\n`;
    total += item.price;
  });
  message += `\n*Total: ₹${total}*`;

  const phoneNumber = "916238913819";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}


function showImage(src) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  modalImg.src = src;
  modal.style.display = "flex";
}

function hideImage() {
  document.getElementById("image-modal").style.display = "none";
}

function filterPrice(range) {
  currentFilter = range;
  showCategory(currentCategory);

  // ✅ Automatically close the filter dropdown
  const filterMenu = document.getElementById("filter-menu");
  filterMenu.classList.remove("active");
}

function filterProducts(products) {
  // Check if any product has no valid price
  const hasNoPrice = products.some(p => !p.price || p.price === 0);

  if (hasNoPrice) {
    return products; // Skip filtering if any product has price 0 or missing
  }

  switch (currentFilter) {
    case 'low-to-high':
      return products.sort((a, b) => a.price - b.price);
    case 'high-to-low':
      return products.sort((a, b) => b.price - a.price);
    case '6k-10k':
      return products.filter(p => p.price >= 6000 && p.price <= 10000);
    case '10k-20k':
      return products.filter(p => p.price > 10000 && p.price <= 20000);
    case '20k-40k':
      return products.filter(p => p.price > 20000 && p.price <= 40000);
    case '40k-above':
      return products.filter(p => p.price > 40000);
    default:
      return products;
  }
}


function toggleFilterMenu() {
  const filterMenu = document.getElementById("filter-menu");
  filterMenu.classList.toggle("active");
}

window.onload = () => {
  showCategory(currentCategory);
  updateCartItems();
};


function showOrderForm() {
  document.getElementById("order-form-container").classList.add("active");
}

function hideOrderForm() {
  document.getElementById("order-form-container").classList.remove("active");
}



  window.addEventListener('load', () => {
    setTimeout(() => {
      // Fade out the splash screen
      const splash = document.getElementById('splash-screen');
      splash.style.opacity = '0';
      splash.style.transition = 'opacity 0.5s ease';

      // After splash fades, hide it completely and show the main content
      setTimeout(() => {
        splash.style.display = 'none'; // Hide splash screen after transition
        document.getElementById('main-content').classList.add('visible'); // Show main content
      }, 500); // Match this time with the transition duration
    }, 1500); // 1 second delay for splash screen
  });
