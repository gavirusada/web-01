// VITHANAGE STORES - UI/UX PROTOTYPE INTERACTIVE LOGIC
(function () {
  'use strict';

  // State
  const state = {
    lang: 'si', // Default Sinhala
    selectedCategory: 'all',
    searchQuery: '',
    cartCount: 0
  };

  // DOM Elements
  const elements = {
    desktopCategoryList: document.getElementById('desktop-category-list'),
    mobileCategoryChips: document.getElementById('mobile-category-chips'),
    drawerCategoryList: document.getElementById('drawer-category-list'),
    productsGrid: document.getElementById('products-grid'),
    productCountBadge: document.getElementById('product-count-badge'),
    searchInput: document.getElementById('header-search-input'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    mobileSearchInput: document.getElementById('mobile-search-input'),
    langSwitchBtn: document.getElementById('lang-switch-btn'),
    cartBadge: document.getElementById('cart-badge'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileDrawer: document.getElementById('mobile-drawer'),
    drawerBackdrop: document.getElementById('drawer-backdrop'),
    drawerCloseBtn: document.getElementById('drawer-close-btn'),
    sectionTitleText: document.getElementById('section-title-text')
  };

  // Initialize
  function init() {
    setupEventListeners();
    updateTranslations();
    renderCategories();
    renderProducts();
  }

  // Language & Translation Helper
  function t(key) {
    if (I18N[state.lang] && I18N[state.lang][key]) {
      return I18N[state.lang][key];
    }
    return key;
  }

  // Update All DOM Translations
  function updateTranslations() {
    document.documentElement.lang = state.lang;

    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = t(key);
      if (translation) {
        if (el.tagName === 'INPUT') {
          el.placeholder = translation;
        } else {
          el.textContent = translation;
        }
      }
    });

    // Update Language switch button label
    if (elements.langSwitchBtn) {
      elements.langSwitchBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        <span>${state.lang === 'si' ? 'English' : 'සිංහල'}</span>
      `;
    }

    // Re-render categories & products with active language
    renderCategories();
    renderProducts();
  }

  // Render Categories (Desktop Sidebar, Mobile Chips, Drawer)
  function renderCategories() {
    const isSi = state.lang === 'si';

    // 1. Desktop Sidebar
    if (elements.desktopCategoryList) {
      elements.desktopCategoryList.innerHTML = CATEGORIES.map(cat => {
        const catName = isSi ? cat.name.si : cat.name.en;
        const isActive = state.selectedCategory === cat.id;
        return `
          <li class="category-item">
            <button type="button" class="category-link ${isActive ? 'active' : ''}" data-category="${cat.id}">
              <div class="category-link-left">
                <svg><use href="#${cat.icon}"></use></svg>
                <span>${catName}</span>
              </div>
              <span class="category-count">${cat.count}</span>
            </button>
          </li>
        `;
      }).join('');
    }

    // 2. Mobile Chips
    if (elements.mobileCategoryChips) {
      elements.mobileCategoryChips.innerHTML = CATEGORIES.map(cat => {
        const catName = isSi ? cat.name.si : cat.name.en;
        const isActive = state.selectedCategory === cat.id;
        return `
          <button type="button" class="chip-btn ${isActive ? 'active' : ''}" data-category="${cat.id}">
            <svg><use href="#${cat.icon}"></use></svg>
            <span>${catName}</span>
          </button>
        `;
      }).join('');
    }

    // 3. Drawer Categories
    if (elements.drawerCategoryList) {
      elements.drawerCategoryList.innerHTML = CATEGORIES.map(cat => {
        const catName = isSi ? cat.name.si : cat.name.en;
        const isActive = state.selectedCategory === cat.id;
        return `
          <li class="category-item">
            <button type="button" class="category-link ${isActive ? 'active' : ''}" data-category="${cat.id}">
              <div class="category-link-left">
                <svg><use href="#${cat.icon}"></use></svg>
                <span>${catName}</span>
              </div>
              <span class="category-count">${cat.count}</span>
            </button>
          </li>
        `;
      }).join('');
    }
  }

  // Filter Products
  function getFilteredProducts() {
    return PRODUCTS.filter(product => {
      // Category Match
      const matchesCategory = state.selectedCategory === 'all' || product.category === state.selectedCategory;

      // Search Query Match (matches both Sinhala and English names)
      let matchesSearch = true;
      if (state.searchQuery.trim() !== '') {
        const query = state.searchQuery.toLowerCase().trim();
        const nameSi = (product.name.si || '').toLowerCase();
        const nameEn = (product.name.en || '').toLowerCase();
        matchesSearch = nameSi.includes(query) || nameEn.includes(query);
      }

      return matchesCategory && matchesSearch;
    });
  }

  // Render Products Grid
  function renderProducts() {
    const isSi = state.lang === 'si';
    const filtered = getFilteredProducts();

    // Update count badge
    if (elements.productCountBadge) {
      elements.productCountBadge.textContent = `${filtered.length} ${isSi ? 'භාණ්ඩ' : 'Items'}`;
    }

    // Section title
    if (elements.sectionTitleText) {
      if (state.searchQuery.trim() !== '') {
        elements.sectionTitleText.textContent = `${t('showingResults')} "${state.searchQuery}"`;
      } else if (state.selectedCategory !== 'all') {
        const activeCat = CATEGORIES.find(c => c.id === state.selectedCategory);
        elements.sectionTitleText.textContent = activeCat ? (isSi ? activeCat.name.si : activeCat.name.en) : t('allProductsHeading');
      } else {
        elements.sectionTitleText.textContent = t('featuredHeading');
      }
    }

    // Empty state
    if (filtered.length === 0) {
      elements.productsGrid.innerHTML = `
        <div class="no-results-box">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <h3>${t('noProductsFound')}</h3>
          <button type="button" class="btn-cta-gold" id="clear-search-btn">${t('clearSearch')}</button>
        </div>
      `;
      const clearBtn = document.getElementById('clear-search-btn');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          state.searchQuery = '';
          state.selectedCategory = 'all';
          if (elements.searchInput) elements.searchInput.value = '';
          if (elements.mobileSearchInput) elements.mobileSearchInput.value = '';
          if (elements.searchClearBtn) elements.searchClearBtn.classList.remove('active');
          renderCategories();
          renderProducts();
        });
      }
      return;
    }

    // Render cards with staggered animation delay
    elements.productsGrid.innerHTML = filtered.map((product, idx) => {
      const title = isSi ? product.name.si : product.name.en;
      const unit = isSi ? product.unit.si : product.unit.en;
      const badgeText = product.badge ? (isSi ? product.badge.si : product.badge.en) : null;
      const priceFormatted = product.price.toLocaleString('en-US');
      const staggerDelay = Math.min(idx * 0.04, 0.45); // smooth progressive stagger

      return `
        <article class="product-card" data-product-id="${product.id}" style="animation-delay: ${staggerDelay}s;">
          <div class="product-image-box">
            ${badgeText ? `<span class="badge badge-gold product-badge-float">${badgeText}</span>` : ''}
            <img 
              src="${product.image}" 
              alt="${title}" 
              class="product-image" 
              loading="lazy" 
              onerror="this.onerror=null; this.src='public/assets/logos/favicon.svg'; this.style.padding='20px';"
            />
          </div>
          <div class="product-details">
            <span class="product-category-tag">${product.category.replace('-', ' & ')}</span>
            <h4 class="product-name" title="${title}">${title}</h4>
            <span class="product-unit">${unit}</span>
            <div class="product-footer">
              <div class="product-price-box">
                <span class="price-currency">${t('currency')}</span>
                <span class="price-amount">${priceFormatted}</span>
              </div>
              <button 
                type="button" 
                class="btn-order-wa js-order-whatsapp" 
                data-id="${product.id}"
                data-name="${title}"
                data-price="${priceFormatted}"
                data-unit="${unit}"
                title="Order via WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>${t('orderViaWhatsApp')}</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach WhatsApp Click Handlers with Toast & Micro-interactions
    document.querySelectorAll('.js-order-whatsapp').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.getAttribute('data-id');
        const name = btn.getAttribute('data-name');
        const price = btn.getAttribute('data-price');
        const unit = btn.getAttribute('data-unit');
        
        sendWhatsAppOrder(name, price, unit);
        showOrderToast(name);

        // Update cart badge visually with bouncy pop animation
        state.cartCount++;
        if (elements.cartBadge) {
          elements.cartBadge.textContent = state.cartCount;
          elements.cartBadge.classList.remove('badge-pop');
          void elements.cartBadge.offsetWidth; // Reflow to restart animation
          elements.cartBadge.classList.add('badge-pop');
        }
      });
    });
  }

  // Toast Notification
  let toastTimeout = null;
  function showOrderToast(productName) {
    let toast = document.getElementById('order-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'order-toast';
      toast.className = 'order-toast';
      document.body.appendChild(toast);
    }

    const isSi = state.lang === 'si';
    const message = isSi 
      ? `WhatsApp වෙත යොමු කෙරේ: <strong>${productName}</strong>`
      : `Opening WhatsApp for: <strong>${productName}</strong>`;

    toast.innerHTML = `
      <span class="toast-icon">✓</span>
      <span>${message}</span>
    `;

    toast.classList.remove('hide');
    toast.style.display = 'flex';

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => {
        toast.style.display = 'none';
      }, 300);
    }, 2800);
  }

  // WhatsApp Order Generator
  function sendWhatsAppOrder(productName, price, unit) {
    const isSi = state.lang === 'si';
    let text = '';

    if (isSi) {
      text = `හෙලෝ Vithanage Stores,\nමට පහත භාණ්ඩය ඇණවුම් කිරීමට අවශ්‍යයි:\n\n• භාණ්ඩය: ${productName} (${unit})\n• මිල: රු. ${price}\n\nකරුණාකර තහවුරු කරන්න. ස්තූතියි!`;
    } else {
      text = `Hello Vithanage Stores,\nI would like to order the following item:\n\n• Product: ${productName} (${unit})\n• Price: LKR ${price}\n\nPlease confirm my order. Thank you!`;
    }

    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/${STORE_INFO.whatsapp.number}?text=${encoded}`;
    window.open(waUrl, '_blank');
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // 1. Language Toggle
    if (elements.langSwitchBtn) {
      elements.langSwitchBtn.addEventListener('click', () => {
        state.lang = state.lang === 'si' ? 'en' : 'si';
        updateTranslations();
      });
    }

    // 2. Search Handlers
    function handleSearch(val) {
      state.searchQuery = val;
      if (elements.searchClearBtn) {
        if (val.trim() !== '') {
          elements.searchClearBtn.classList.add('active');
        } else {
          elements.searchClearBtn.classList.remove('active');
        }
      }
      renderProducts();
    }

    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    }

    if (elements.mobileSearchInput) {
      elements.mobileSearchInput.addEventListener('input', (e) => {
        if (elements.searchInput) elements.searchInput.value = e.target.value;
        handleSearch(e.target.value);
      });
    }

    if (elements.searchClearBtn) {
      elements.searchClearBtn.addEventListener('click', () => {
        if (elements.searchInput) elements.searchInput.value = '';
        if (elements.mobileSearchInput) elements.mobileSearchInput.value = '';
        handleSearch('');
      });
    }

    // 3. Category Click Handlers (Delegated)
    document.addEventListener('click', (e) => {
      const catBtn = e.target.closest('[data-category]');
      if (catBtn) {
        const catId = catBtn.getAttribute('data-category');
        state.selectedCategory = catId;
        renderCategories();
        renderProducts();

        // Close mobile drawer if open
        closeMobileDrawer();

        // Smooth scroll to products section
        const showcase = document.getElementById('products-section');
        if (showcase) {
          showcase.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });

    // 4. Mobile Drawer Toggles
    if (elements.mobileMenuBtn) {
      elements.mobileMenuBtn.addEventListener('click', openMobileDrawer);
    }

    if (elements.drawerCloseBtn) {
      elements.drawerCloseBtn.addEventListener('click', closeMobileDrawer);
    }

    if (elements.drawerBackdrop) {
      elements.drawerBackdrop.addEventListener('click', closeMobileDrawer);
    }

    function openMobileDrawer() {
      if (elements.mobileDrawer) elements.mobileDrawer.classList.add('active');
      if (elements.drawerBackdrop) elements.drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileDrawer() {
      if (elements.mobileDrawer) elements.mobileDrawer.classList.remove('active');
      if (elements.drawerBackdrop) elements.drawerBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }

    // 5. Hero Banner Order Button
    const heroOrderBtn = document.getElementById('hero-order-btn');
    if (heroOrderBtn) {
      heroOrderBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const defaultMsg = state.lang === 'si' ? STORE_INFO.whatsapp.defaultMessage.si : STORE_INFO.whatsapp.defaultMessage.en;
        window.open(`https://wa.me/${STORE_INFO.whatsapp.number}?text=${encodeURIComponent(defaultMsg)}`, '_blank');
      });
    }

    // 6. Floating WhatsApp Button
    const waFloatBtn = document.getElementById('whatsapp-floating-btn');
    if (waFloatBtn) {
      waFloatBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const defaultMsg = state.lang === 'si' ? STORE_INFO.whatsapp.defaultMessage.si : STORE_INFO.whatsapp.defaultMessage.en;
        window.open(`https://wa.me/${STORE_INFO.whatsapp.number}?text=${encodeURIComponent(defaultMsg)}`, '_blank');
      });
    }
  }

  // Boot on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
