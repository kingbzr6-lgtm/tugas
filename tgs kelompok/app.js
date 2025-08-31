document.addEventListener("DOMContentLoaded", () => {
  // === 1. LOGO PAGE → LOGIN ===
  if (document.body.classList.contains("logo-page")) {
    const logo = document.getElementById("click-logo");
    if (logo) {
      logo.addEventListener(
        "click",
        () => (window.location.href = "login.html")
      );
    }
  }

  // === 2. LOGIN PAGE (validasi login) ===
  if (document.body.classList.contains("login-page")) {
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const [number, email, password, rePassword] = [
          ...loginForm.querySelectorAll("input"),
        ].map((input) => input.value.trim());

        if (!number || !email || !password || !rePassword) {
          alert("Please fill all fields!");
          return;
        }
        if (password !== rePassword) {
          alert("Passwords do not match!");
          return;
        }
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "start.html";
      });
    }
  }

  // === 3. START PAGE → MENU ===
  if (document.body.classList.contains("start-page")) {
    const startBtn = document.getElementById("start-btn");
    if (startBtn) {
      startBtn.addEventListener(
        "click",
        () => (window.location.href = "menu.html")
      );
    }
  }

  // === 4. NAVBAR BUTTONS ===
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const link = btn.getAttribute("data-link");
      if (link) window.location.href = link;
    });
  });

  // === 5. BUY BUTTON di MENU PAGE ===
  if (document.body.classList.contains("menu-page")) {
    document.querySelectorAll(".buy-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const link = btn.getAttribute("data-link");
        if (link) window.location.href = link;
      });
    });
  }

  // === 6. BUY NOW di DETAIL PRODUK ===
  if (document.body.classList.contains("product-page")) {
    const buyNowBtn = document.querySelector(".buy-btn");
    if (buyNowBtn) {
      buyNowBtn.addEventListener("click", () => {
        const product = document.querySelector(".product-content");
        if (!product) return;
        const productData = {
          title: product.querySelector(".product-title").textContent,
          price: product.querySelector(".product-price").textContent,
          image: product.querySelector(".product-image").getAttribute("src"),
        };
        localStorage.setItem("selectedProduct", JSON.stringify(productData));
        window.location.href = "checkout.html";
      });
    }
  }

  // === 7. SEARCH PAGE FUNCTIONALITY ===
  // Dihapus, karena gambar dan nama produk sudah manual di HTML

  // === AVATAR PAGE BUTTONS ===
  document.getElementById("message-btn")?.addEventListener("click", () => {
    alert("Opening Messages");
    // window.location.href = "messages.html";
  });
  document.getElementById("notification-btn")?.addEventListener("click", () => {
    alert("Opening Notifications");
    // window.location.href = "notifications.html";
  });
  document
    .getElementById("account-details-btn")
    ?.addEventListener("click", () => {
      alert("Opening Account Details");
      // window.location.href = "account-details.html";
    });
  document.getElementById("my-purchase-btn")?.addEventListener("click", () => {
    alert("Opening Purchases");
    // window.location.href = "my-purchase.html";
  });
  document.getElementById("settings-btn")?.addEventListener("click", () => {
    alert("Opening Settings");
    // window.location.href = "settings.html";
  });

  // Klik Avatar → ke avatar.html
  document.getElementById("avatar-link")?.addEventListener("click", () => {
    window.location.href = "avatar.html";
  });

  // Klik Keranjang → ke checkout.html
  document.getElementById("cart-btn")?.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });

  // ...existing code...

  // === CHECKOUT BUTTON FUNCTIONALITY ===
  document.querySelectorAll(".checkout-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const link = btn.getAttribute("data-link");
      if (link) window.location.href = link;
    });
  });

  // ...existing code...

  // === 8. CHECKOUT PAGE AUTO-FILL ===
  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".product-card").forEach((card) => {
      let price = parseInt(card.getAttribute("data-price"));
      let qty = parseInt(card.querySelector(".qty").innerText);
      total += price * qty;
    });
    document.getElementById("total").innerText = total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  // Tambah / Kurang Quantity
  document.querySelectorAll(".plus").forEach((btn) => {
    btn.addEventListener("click", () => {
      let qtyEl = btn.parentElement.querySelector(".qty");
      qtyEl.innerText = parseInt(qtyEl.innerText) + 1;
      updateTotal();
    });
  });

  document.querySelectorAll(".minus").forEach((btn) => {
    btn.addEventListener("click", () => {
      let qtyEl = btn.parentElement.querySelector(".qty");
      let current = parseInt(qtyEl.innerText);
      if (current > 1) {
        qtyEl.innerText = current - 1;
        updateTotal();
      }
    });
  });

  // Hitung awal
  updateTotal();
});
// EXTRA SEARCH
document.addEventListener("DOMContentLoaded", () => {
  // ...existing code...

  // === SEARCH PAGE FILTER FUNCTIONALITY ===
  const searchInput = document.getElementById("search-input");
  const searchGrid = document.getElementById("search-grid");

  if (searchInput && searchGrid) {
    // Ambil semua card dan simpan data nama produk
    const cards = Array.from(searchGrid.getElementsByClassName("search-card"));
    const cardData = cards.map((card) => ({
      element: card,
      name: card.querySelector(".product-name").textContent.toLowerCase(),
    }));

    searchInput.addEventListener("input", (e) => {
      const keyword = e.target.value.trim().toLowerCase();
      cardData.forEach(({ element, name }) => {
        if (name.includes(keyword) || keyword === "") {
          element.style.display = "";
        } else {
          element.style.display = "none";
        }
      });
    });
  }

  // ...existing code...
});
s;
