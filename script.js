const products = {
    events: [
      { name: "Stage 1", price: 6000, image: "assets/stages/stage1.jpg" },
      { name: "Stage 2", price: 8000, image: "assets/stages/stage2.jpg" },
      { name: "Stage 3", price: 10000, image: "assets/stages/stage3.jpg" },
      { name: "Stage 4", price: 12000, image: "assets/stages/stage4.jpg" },
      { name: "Stage 5", price: 14000, image: "assets/stages/stage5.jpg" },
      { name: "Stage 6", price: 16000, image: "assets/stages/stage6.jpg" },
      { name: "Stage 7", price: 18000, image: "assets/stages/stage7.jpg" },
      { name: "Stage 8", price: 20000, image: "assets/stages/stage8.jpg" },
      { name: "Stage 9", price: 22000, image: "assets/stages/stage9.jpg" },
      { name: "Stage 10", price: 24000, image: "assets/stages/stage10.jpg" },
      { name: "Stage 11", price: 26000, image: "assets/stages/stage11.jpg" },
      { name: "Stage 12", price: 28000, image: "assets/stages/stage12.jpg" },
      { name: "Stage 13", price: 30000, image: "assets/stages/stage13.jpg" },
      { name: "Stage 14", price: 32000, image: "assets/stages/stage14.jpg" }
      
    ],
    lights: [
      { name: "Sharpy", price: 2500, image: "assets/lights/light1.jpg" },
      { name: "Satan", price: 1500, image: "assets/lights/light2.jpg" },
      { name: "Laser Projector", price: 3500, image: "assets/lights/light3.jpg" },
      { name: "Spot Light", price: 300, image: "assets/lights/light4.jpg" }
    ],
    sounds: [
      { name: "Speackers", price: 18000, image: "assets/sounds/sound1.jpg" },
      { name: "Mics", price: 3000, image: "assets/sounds/sound2.jpg" }
    ],
    catering: [
      { name: "Catering 1", price: 15000, image: "assets/catering/catering1.jpg" },
      { name: "Catering 2", price: 20000, image: "assets/catering/catering2.jpg" }
    ]
  };
  
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let currentCategory = 'events';
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
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `

        <img src="${product.image}" onclick="showImage('${product.image}')">
        <h4>${product.name}</h4>
        <p>₹${product.price}</p>
        <button onclick="addToCart(this, '${product.name}', ${product.price}, '${product.image}')" ${isInCart ? 'disabled' : ''}>
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
  
    const phoneNumber = "919778202896";
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
  
