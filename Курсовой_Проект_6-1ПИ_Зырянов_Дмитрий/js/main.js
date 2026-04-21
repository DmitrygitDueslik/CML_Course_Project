/**
 
 * Бургер-меню, корзина, JS-слайдер, фильтр каталога, формы
 */

/* ── Корзина  ── */
let cart = JSON.parse(localStorage.getItem('bmw_cart') || '[]');

function saveCart() {
  localStorage.setItem('bmw_cart', JSON.stringify(cart));
  updateBadges();
}

function updateBadges() {
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = cart.length);
}

/* Добавить в корзину */
function addToCart(id, name, price) {
  if (cart.find(i => i.id === id)) { alert('Уже в корзине'); return; }
  cart.push({ id, name, price });
  saveCart();
}

/* Удалить из корзины */
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCart();
}

/* Отрисовать корзину */
function renderCart() {
  const box = document.getElementById('cart-items');
  if (!box) return;
  if (!cart.length) {
    box.innerHTML = '<p style="color:#6b7280;padding:.75rem 0">Корзина пуста</p>';
    const tb = document.getElementById('cart-total-block');
    if (tb) tb.style.display = 'none';
    return;
  }
  let sum = 0;
  box.innerHTML = cart.map(i => {
    sum += i.price;
    return `<div class="cart-row">
      <div><div class="name">${i.name}</div><div class="price">$${i.price.toLocaleString()}</div></div>
      <button class="remove-btn" onclick="removeFromCart('${i.id}')" aria-label="Удалить">&#x2715;</button>
    </div>`;
  }).join('');
  const tb = document.getElementById('cart-total-block');
  if (tb) {
    tb.style.display = 'block';
    document.getElementById('cart-sum').textContent = sum.toLocaleString();
  }
}

/* ── Модальные окна ── */
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('open');
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('open');
}
function toggleCartModal() {
  const m = document.getElementById('cart-modal');
  if (!m) return;
  if (m.classList.contains('open')) { m.classList.remove('open'); }
  else { renderCart(); m.classList.add('open'); }
}

/*
   DOMContentLoaded
*/
document.addEventListener('DOMContentLoaded', function () {

  updateBadges();

  /* Бургер-меню */
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileNav.classList.remove('open');
      })
    );
  }

  /* ── Закрытие модалок по клику на фон ── */
  document.querySelectorAll('.modal-overlay').forEach(overlay =>
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.remove('open');
    })
  );

  /*JS-слайдер */
  const slides = Array.from(document.querySelectorAll('.js-slide'));
  const dots = Array.from(document.querySelectorAll('.hero-dot'));
  const btnPrev = document.getElementById('slider-prev');
  const btnNext = document.getElementById('slider-next');

  if (slides.length) {
    let cur = 0, timer = null;
    const DELAY = 6000;

    function goTo(idx) {
      slides[cur].classList.remove('active-slide');
      if (dots[cur]) dots[cur].classList.remove('active-dot');
      cur = (idx + slides.length) % slides.length;
      slides[cur].classList.add('active-slide');
      if (dots[cur]) dots[cur].classList.add('active-dot');
    }

    function startAuto() {
      clearInterval(timer);
      timer = setInterval(() => goTo(cur + 1), DELAY);
    }

    if (btnPrev) btnPrev.addEventListener('click', () => { goTo(cur - 1); startAuto(); });
    if (btnNext) btnNext.addEventListener('click', () => { goTo(cur + 1); startAuto(); });
    dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.index); startAuto(); }));

    startAuto();
  }
  /*Фильтр каталога — серия + цена*/
  const filterBtns = document.querySelectorAll('.filter-btn');
  const catalogCards = document.querySelectorAll('.catalog-card');
  const priceSelect = document.querySelector('.filters select'); // селект цены

  let currentSeries = 'all';
  let currentSegment = 'all';

  function applyFilters() {
    catalogCards.forEach(card => {
      const seriesMatch = (currentSeries === 'all' || card.dataset.series === currentSeries);
      const segmentMatch = (currentSegment === 'all' || card.dataset.segment === currentSegment);
      card.style.display = (seriesMatch && segmentMatch) ? '' : 'none';
    });
  }

  // Кнопки серии
  filterBtns.forEach(btn =>
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSeries = btn.dataset.filter;
      applyFilters();
    })
  );

  // Селект цены сегмента
  if (priceSelect) {
    priceSelect.addEventListener('change', function () {
      currentSegment = this.value;
      if (currentSegment !== 'all' && currentSeries !== 'all') {
        filterBtns.forEach(b => b.classList.remove('active'));
        const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
        if (allBtn) allBtn.classList.add('active');
        currentSeries = 'all';
      }
      applyFilters();
    });
  }

  // Глобальная функция для совместимости
  window.filterBySegment = function (seg) {
    if (priceSelect) priceSelect.value = seg;
    currentSegment = seg;
    applyFilters();
  };

  /* Автофильтр по URL: catalog.html?s=M */
  const urlSeries = new URLSearchParams(location.search).get('s');
  if (urlSeries) {
    const btn = document.querySelector(`.filter-btn[data-filter="${urlSeries}"]`);
    if (btn) btn.click();
  }

  /* Мини-галерея на странице авто */
  window.setPhoto = function (thumb, src) {
    const main = document.getElementById('mainPhoto');
    if (main) main.src = src;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  };

  /* Форма тест-драйва и обратной связи */
  document.querySelectorAll('.testdrive-form').forEach(form =>
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const success = document.querySelector('.form-success');
      form.style.display = 'none';
      if (success) success.classList.add('show');
    })
  );


  /* Тень шапки при скролле*/
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = scrollY > 8 ? '0 2px 20px rgba(0,0,0,.7)' : '';
    }, { passive: true });
  }

});
