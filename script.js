const products = [
  {
    id: "solax-og648-6kw", name: "Solax OG648-6KW — انفرتر خارج الشبكة", category: "inverters", categoryName: "الانفرترات",
    price: 325, warranty: "مدة الكفالة غير محددة — يرجى التواصل للتأكيد", shortWarranty: "الكفالة عند الاستفسار", tag: "أحادي الطور",
    description: "انفرتر Off-Grid سكني بقدرة 6 كيلوواط، واي فاي وضجيج منخفض.",
    details: "انفرتر Solax OG Series أحادي الطور للمنازل، يعمل من لوحين شمسيين، مع اتصال WiFi وتصنيف حماية IP20.",
    specs: [["الموديل", "OG648-6KW · OG Series"], ["القدرة", "6 كيلوواط"], ["الطور", "أحادي الطور"], ["التشغيل", "Off-Grid · يبدأ من لوحين"], ["الاتصال والحماية", "WiFi · IP20 · منخفض الضجيج"], ["الكفالة", "يرجى التواصل للتأكيد"]],
    image: "images/batre/solax%206k.jpeg"
  },
  {
    id: "solax-x1-hyb-6k", name: "Solax X1-HYB-6K — انفرتر هجين", category: "inverters", categoryName: "الانفرترات",
    price: 660, warranty: "مدة الكفالة غير محددة — يرجى التواصل للتأكيد", shortWarranty: "الكفالة عند الاستفسار", tag: "هجين",
    description: "انفرتر هجين أحادي الطور بقدرة 6 كيلوواط ومدخلي MPPT.",
    details: "انفرتر Solax هجين منخفض الجهد، أحادي الطور، مزود بمدخلي MPPT واتصال WiFi وتصنيف حماية IP65.",
    specs: [["الموديل", "X1-HYB-6K"], ["القدرة", "6 كيلوواط"], ["الطور", "أحادي الطور"], ["نوع الانفرتر", "هجين · جهد منخفض"], ["التتبع والاتصال", "Dual MPPT · WiFi"], ["الحماية", "IP65"], ["الكفالة", "يرجى التواصل للتأكيد"]],
    image: "images/invertar/solax 6k hp.jfif"
  },
  {
    id: "solax-x1-lite-8k", name: "Solax X1-Lite-8K — انفرتر هجين", category: "inverters", categoryName: "الانفرترات",
    price: 925, warranty: "مدة الكفالة غير محددة — يرجى التواصل للتأكيد", shortWarranty: "الكفالة عند الاستفسار", tag: "قدرة 8 كيلوواط",
    description: "انفرتر هجين أحادي الطور منخفض الجهد مع مدخلي MPPT.",
    details: "انفرتر Solax X1-Lite هجين بقدرة 8 كيلوواط، مزود بمدخلي MPPT واتصال WiFi وتصنيف حماية IP65.",
    specs: [["الموديل", "X1-Lite-8K"], ["القدرة", "8 كيلوواط"], ["الطور", "أحادي الطور"], ["نوع الانفرتر", "هجين · جهد منخفض"], ["التتبع والاتصال", "Dual MPPT · WiFi"], ["الحماية", "IP65"], ["الكفالة", "يرجى التواصل للتأكيد"]],
    image: "images/invertar/solax-x1-lite-8k.jfif"
  },
  {
    id: "solax-x1-lite-12k", name: "Solax X1-Lite-12K — انفرتر هجين", category: "inverters", categoryName: "الانفرترات",
    price: 1400, warranty: "مدة الكفالة غير محددة — يرجى التواصل للتأكيد", shortWarranty: "الكفالة عند الاستفسار", tag: "قدرة 12 كيلوواط",
    description: "انفرتر هجين أحادي الطور 12 كيلوواط مع Dual MPPT وWiFi.",
    details: "انفرتر Solax X1-Lite هجين منخفض الجهد، أحادي الطور، بتصنيف حماية IP65.",
    specs: [["الموديل", "X1-Lite-12K"], ["القدرة", "12 كيلوواط"], ["الطور", "أحادي الطور"], ["نوع الانفرتر", "هجين · جهد منخفض"], ["التتبع والاتصال", "Dual MPPT · WiFi"], ["الحماية", "IP65"], ["الكفالة", "يرجى التواصل للتأكيد"]],
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "solax-x3-neo-10k", name: "Solax X3-Neo-10K — انفرتر هجين ثلاثي الطور", category: "inverters", categoryName: "الانفرترات",
    price: 1325, warranty: "مدة الكفالة غير محددة — يرجى التواصل للتأكيد", shortWarranty: "الكفالة عند الاستفسار", tag: "ثلاثي الطور",
    description: "انفرتر هجين ثلاثي الطور بقدرة 10 كيلوواط وحماية IP65.",
    details: "انفرتر Solax X3-Neo هجين منخفض الجهد، ثلاثي الطور، مزود بمدخلي MPPT واتصال WiFi.",
    specs: [["الموديل", "X3-Neo-10K"], ["القدرة", "10 كيلوواط"], ["الطور", "ثلاثي الطور"], ["نوع الانفرتر", "هجين · جهد منخفض"], ["التتبع والاتصال", "Dual MPPT · WiFi"], ["الحماية", "IP65"], ["الكفالة", "يرجى التواصل للتأكيد"]],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "solax-x3-neo-12k", name: "Solax X3-Neo-12K — انفرتر هجين ثلاثي الطور", category: "inverters", categoryName: "الانفرترات",
    price: 1440, warranty: "مدة الكفالة غير محددة — يرجى التواصل للتأكيد", shortWarranty: "الكفالة عند الاستفسار", tag: "ثلاثي الطور",
    description: "انفرتر هجين ثلاثي الطور بقدرة 12 كيلوواط وDual MPPT.",
    details: "انفرتر Solax X3-Neo هجين منخفض الجهد، ثلاثي الطور، مع WiFi وتصنيف حماية IP65.",
    specs: [["الموديل", "X3-Neo-12K"], ["القدرة", "12 كيلوواط"], ["الطور", "ثلاثي الطور"], ["نوع الانفرتر", "هجين · جهد منخفض"], ["التتبع والاتصال", "Dual MPPT · WiFi"], ["الحماية", "IP65"], ["الكفالة", "يرجى التواصل للتأكيد"]],
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "solax-x3-neo-15k", name: "Solax X3-Neo-15K — انفرتر هجين ثلاثي الطور", category: "inverters", categoryName: "الانفرترات",
    price: 1750, warranty: "مدة الكفالة غير محددة — يرجى التواصل للتأكيد", shortWarranty: "الكفالة عند الاستفسار", tag: "ثلاثي الطور",
    description: "انفرتر هجين ثلاثي الطور بقدرة 15 كيلوواط وWiFi.",
    details: "انفرتر Solax X3-Neo هجين منخفض الجهد، ثلاثي الطور، مزود بمدخلي MPPT وتصنيف IP65.",
    specs: [["الموديل", "X3-Neo-15K"], ["القدرة", "15 كيلوواط"], ["الطور", "ثلاثي الطور"], ["نوع الانفرتر", "هجين · جهد منخفض"], ["التتبع والاتصال", "Dual MPPT · WiFi"], ["الحماية", "IP65"], ["الكفالة", "يرجى التواصل للتأكيد"]],
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "solax-x3-neo-20k", name: "Solax X3-Neo-20K — انفرتر هجين ثلاثي الطور", category: "inverters", categoryName: "الانفرترات",
    price: 2140, warranty: "مدة الكفالة غير محددة — يرجى التواصل للتأكيد", shortWarranty: "الكفالة عند الاستفسار", tag: "قدرة 20 كيلوواط",
    description: "انفرتر هجين ثلاثي الطور بقدرة 20 كيلوواط ودرجة حماية IP65.",
    details: "انفرتر Solax X3-Neo هجين منخفض الجهد، ثلاثي الطور، مع Dual MPPT واتصال WiFi.",
    specs: [["الموديل", "X3-Neo-20K"], ["القدرة", "20 كيلوواط"], ["الطور", "ثلاثي الطور"], ["نوع الانفرتر", "هجين · جهد منخفض"], ["التتبع والاتصال", "Dual MPPT · WiFi"], ["الحماية", "IP65"], ["الكفالة", "يرجى التواصل للتأكيد"]],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "solax-battery-5-1", name: "بطارية Solax ليثيوم 5.1 كيلوواط ساعة", category: "batteries", categoryName: "البطاريات",
    price: 670, warranty: "مدة الكفالة غير محددة — يرجى التواصل للتأكيد", shortWarranty: "الكفالة عند الاستفسار", tag: "جهد منخفض",
    description: "بطارية جهد منخفض 51.2 فولت وسعة 100 أمبير ساعة مع WiFi.",
    details: "بطارية Solax ليثيوم منخفضة الجهد، تدعم 6000 دورة عند عمق تفريغ 95٪، مع حماية IP40 واتصال WiFi.",
    specs: [["السعة", "5.1 كيلوواط ساعة"], ["الجهد والتيار", "51.2 فولت · 100 أمبير ساعة"], ["دورات الشحن", "6000 دورة عند 95٪ DOD"], ["الاتصال والحماية", "WiFi · IP40"], ["الكفالة", "يرجى التواصل للتأكيد"]],
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "solax-battery-11-7", name: "بطارية Solax ليثيوم 11.7 كيلوواط ساعة", category: "batteries", categoryName: "البطاريات",
    price: 1320, warranty: "مدة الكفالة غير محددة — يرجى التواصل للتأكيد", shortWarranty: "الكفالة عند الاستفسار", tag: "سعة عالية",
    description: "بطارية جهد منخفض 51.2 فولت وسعة 230 أمبير ساعة.",
    details: "بطارية Solax ليثيوم منخفضة الجهد، تدعم 6000 دورة عند عمق تفريغ 95٪، مع حماية IP40 واتصال WiFi.",
    specs: [["السعة", "11.7 كيلوواط ساعة"], ["الجهد والتيار", "51.2 فولت · 230 أمبير ساعة"], ["دورات الشحن", "6000 دورة عند 95٪ DOD"], ["الاتصال والحماية", "WiFi · IP40"], ["الكفالة", "يرجى التواصل للتأكيد"]],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "solax-battery-16", name: "بطارية Solax ليثيوم 16 كيلوواط ساعة", category: "batteries", categoryName: "البطاريات",
    price: 1600, warranty: "مدة الكفالة غير محددة — يرجى التواصل للتأكيد", shortWarranty: "الكفالة عند الاستفسار", tag: "سعة عالية",
    description: "بطارية جهد منخفض 51.2 فولت وسعة 314 أمبير ساعة.",
    details: "بطارية Solax ليثيوم منخفضة الجهد، تدعم 8000 دورة عند عمق تفريغ 95٪، مع حماية IP40 واتصال WiFi.",
    specs: [["السعة", "16 كيلوواط ساعة"], ["الجهد والتيار", "51.2 فولت · 314 أمبير ساعة"], ["دورات الشحن", "8000 دورة عند 95٪ DOD"], ["الاتصال والحماية", "WiFi · IP40"], ["الكفالة", "يرجى التواصل للتأكيد"]],
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80"
  }
];

const WHATSAPP_NUMBER = "963989460461";
const grid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#product-search");
const visibleCount = document.querySelector("#visible-count");
const emptyState = document.querySelector("#empty-state");
const productModal = document.querySelector("#product-modal");
const cartModal = document.querySelector("#cart-modal");
const modalContent = document.querySelector("#modal-content");
const cartCount = document.querySelector("#cart-count");
const toast = document.querySelector("#toast");
let activeCategory = "all";
let toastTimeout;
let cart = loadCart();

function loadCart() {
  try {
    const stored = JSON.parse(localStorage.getItem("alfakhr-cart") || "{}");
    if (!stored || typeof stored !== "object" || Array.isArray(stored)) return {};
    return Object.fromEntries(
      Object.entries(stored).filter(([id, quantity]) =>
        products.some((product) => product.id === id) && Number.isInteger(quantity) && quantity > 0
      )
    );
  } catch (error) {
    console.warn("تعذر استعادة السلة المحفوظة:", error);
    return {};
  }
}

function saveCart() {
  try {
    localStorage.setItem("alfakhr-cart", JSON.stringify(cart));
  } catch (error) {
    console.warn("تعذر حفظ السلة:", error);
    showToast("تعذر حفظ السلة على هذا الجهاز.");
  }
}

function formatPrice(price) {
  return new Intl.NumberFormat("ar-YE", { maximumFractionDigits: 0 }).format(price);
}

function renderProducts() {
  const query = searchInput.value.trim().toLocaleLowerCase("ar");
  const filtered = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = !query || `${product.name} ${product.categoryName}`.toLocaleLowerCase("ar").includes(query);
    return matchesCategory && matchesSearch;
  });

  visibleCount.textContent = String(filtered.length).padStart(2, "0");
  emptyState.hidden = filtered.length > 0;
  grid.innerHTML = filtered.map((product, index) => `
    <article class="product-card" style="animation-delay:${Math.min(index * 45, 270)}ms">
      <div class="product-image" data-details="${product.id}" role="button" tabindex="0" aria-label="عرض تفاصيل ${product.name}">
        <img class="${product.id === "solax-og648-6kw" ? "product-full-image" : ""}" src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="product-tag">${product.tag}</span>
      </div>
      <div class="product-body">
        <span class="product-category">${product.categoryName}</span>
        <h3 class="product-name" data-details="${product.id}">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-meta">
          <span class="product-price">${formatPrice(product.price)} <small>دولار</small></span>
          <span class="warranty-short"><span>✳</span>${product.shortWarranty}</span>
        </div>
        <div class="product-actions">
          <button class="add-cart" type="button" data-add="${product.id}">أضف إلى السلة</button>
          <button class="details-button" type="button" data-details="${product.id}" aria-label="تفاصيل ${product.name}">↗</button>
        </div>
      </div>
    </article>`).join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2300);
}

function openModal(modal) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  if (!document.querySelector(".modal-backdrop.open")) document.body.classList.remove("modal-open");
}

function showProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  modalContent.innerHTML = `
    <div class="product-modal-content">
      <div class="modal-product-image"><img class="${product.id === "solax-og648-6kw" ? "product-full-image" : ""}" src="${product.image}" alt="${product.name}"></div>
      <div class="modal-product-info">
        <span class="product-category">${product.categoryName} · ${product.tag}</span>
        <h2 id="modal-title">${product.name}</h2>
        <p>${product.details}</p>
        <div class="modal-price">${formatPrice(product.price)} <small>دولار أمريكي</small></div>
        <ul class="detail-list">${product.specs.map(([label, value]) => `<li><span>${label}</span><span>${value}</span></li>`).join("")}</ul>
        <button class="button button-primary modal-add" type="button" data-add="${product.id}">أضف إلى السلة <span>←</span></button>
      </div>
    </div>`;
  openModal(productModal);
}

function addToCart(id) {
  if (!products.some((product) => product.id === id)) return;
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  updateCartCount();
  showToast("تمت إضافة المنتج إلى سلتك.");
}

function updateCartCount() {
  const count = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  cartCount.textContent = count;
  document.querySelector("#cart-heading-count").textContent = `(${count})`;
}

function renderCart() {
  const entries = products.filter((product) => cart[product.id] > 0);
  const container = document.querySelector("#cart-items");
  const footer = document.querySelector("#cart-footer");
  if (!entries.length) {
    container.innerHTML = `<div class="cart-empty"><span>⌑</span><p>سلتك فارغة حالياً. اكتشف منتجاتنا واختر ما يناسبك.</p></div>`;
    footer.hidden = true;
    return;
  }

  const total = entries.reduce((sum, product) => sum + product.price * cart[product.id], 0);
  container.innerHTML = entries.map((product) => `
    <article class="cart-row">
      <img src="${product.image}" alt="">
      <div><h3>${product.name}</h3><p>${formatPrice(product.price)} دولار</p></div>
      <div class="quantity-control">
        <button type="button" data-quantity="${product.id}" data-change="-1" aria-label="تقليل الكمية">−</button>
        <span>${cart[product.id]}</span>
        <button type="button" data-quantity="${product.id}" data-change="1" aria-label="زيادة الكمية">+</button>
      </div>
    </article>`).join("");
  document.querySelector("#cart-total").textContent = `${formatPrice(total)} دولار`;
  const orderText = entries.map((product) => `${product.name} × ${cart[product.id]}`).join("، ");
  const orderButton = document.querySelector("#whatsapp-order");
  orderButton.href = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`مرحباً، أرغب بطلب: ${orderText}. المجموع التقديري ${formatPrice(total)} دولار.`)}`
    : "#";
  footer.hidden = false;
}

document.querySelector("#category-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll(".category-chip").forEach((chip) => chip.classList.toggle("active", chip === button));
  renderProducts();
});

searchInput.addEventListener("input", renderProducts);
grid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const detailTarget = event.target.closest("[data-details]");
  if (addButton) addToCart(addButton.dataset.add);
  else if (detailTarget) showProduct(detailTarget.dataset.details);
});
grid.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-details][role='button']")) {
    event.preventDefault();
    showProduct(event.target.dataset.details);
  }
});
modalContent.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(button.dataset.add);
});
document.querySelector("#reset-filters").addEventListener("click", () => {
  activeCategory = "all";
  searchInput.value = "";
  document.querySelectorAll(".category-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.category === "all"));
  renderProducts();
});
document.querySelector("#cart-open").addEventListener("click", () => {
  renderCart();
  openModal(cartModal);
});
document.querySelector("#cart-items").addEventListener("click", (event) => {
  const button = event.target.closest("[data-quantity]");
  if (!button) return;
  const id = button.dataset.quantity;
  cart[id] = (cart[id] || 0) + Number(button.dataset.change);
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  updateCartCount();
  renderCart();
});
document.querySelector("#whatsapp-order").addEventListener("click", (event) => {
  if (!WHATSAPP_NUMBER) {
    event.preventDefault();
    showToast("أضف رقم واتساب المؤسسة في script.js لإكمال الطلب.");
  }
});
document.querySelectorAll(".modal-backdrop").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest(".modal-close")) closeModal(modal);
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") document.querySelectorAll(".modal-backdrop.open").forEach(closeModal);
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});
document.querySelector("#menu-toggle").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("open");
});
document.querySelectorAll(".main-nav a").forEach((link) => link.addEventListener("click", () => document.querySelector(".main-nav").classList.remove("open")));

renderProducts();
updateCartCount();
