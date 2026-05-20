
function renderCarDetail() {
  const id = parseInt(new URLSearchParams(location.search).get('id'), 10) || 1;
  const car = getCarById(id);
  if (!car) return;

  document.title = car.name + ' — BMW Drive';
  document.getElementById('bc-car').textContent = car.name;

  const badge = document.getElementById('car-badge');
  badge.textContent = car.badge;
  badge.style.background = car.badgeColor;

  document.getElementById('car-name').textContent = car.name + ' ' + car.model;
  document.getElementById('car-series-sub').textContent = car.series + ' · ' + car.body + ' · ' + car.year;
  document.getElementById('car-desc').textContent = car.desc;
  document.getElementById('car-price').textContent = '$' + car.price.toLocaleString();

  document.getElementById('btn-buy').onclick = function () {
    addToCart(String(id), car.name, car.price);
  };

  const mainPhoto = document.getElementById('mainPhoto');
  mainPhoto.alt = car.name;
  mainPhoto.src = car.exterior;

  const thumb1 = document.getElementById('thumb1');
  const thumb2 = document.getElementById('thumb2');
  thumb1.src = car.exterior;
  thumb1.onclick = function () { setPhoto(this, car.exterior); };
  thumb2.src = car.interior;
  thumb2.onclick = function () { setPhoto(this, car.interior); };

  const tbody = document.getElementById('specs-tbody');
  let specsHtml = '';
  for (const key in car.specs) {
    specsHtml += '<tr><td>' + key + '</td><td>' + car.specs[key] + '</td></tr>';
  }
  tbody.innerHTML = specsHtml;

  const relatedGrid = document.getElementById('related-grid');
  let relHtml = '';
  let count = 0;
  const allIds = getAllCarIds();

  for (let i = 0; i < allIds.length && count < 3; i++) {
    const carId = allIds[i];
    if (carId === id) continue;
    const c = getCarById(carId);
    if (!c) continue;

    relHtml += '<article class="car-card">' +
      '<a href="car-detail.html?id=' + carId + '" class="car-card-img">' +
      '<img src="' + c.exterior + '" alt="' + c.name + '" loading="lazy">' +
      '<span class="car-badge" style="background:' + c.badgeColor + '">' + c.badge + '</span>' +
      '</a>' +
      '<div class="car-card-body">' +
      '<p class="car-series">' + c.series + '</p>' +
      '<h3 class="car-name">' + c.name + '</h3>' +
      '<p class="car-spec-line">' + c.body + '</p>' +
      '<div class="car-card-footer">' +
      '<div class="car-price"><span>от </span>$' + c.price.toLocaleString() + '</div>' +
      '<a href="car-detail.html?id=' + carId + '" class="car-link">Подробнее →</a>' +
      '</div></div></article>';
    count++;
  }
  relatedGrid.innerHTML = relHtml;
}

function initCarDetailPage() {
  loadCarsFromXml()
    .then(renderCarDetail)
    .catch(function (err) {
      console.error('cars.xml:', err);
      const tbody = document.getElementById('specs-tbody');
      if (tbody) {
        tbody.innerHTML =
          '<tr><td colspan="2" style="color:#ef4444;padding:1rem 0">' +
          'Не удалось загрузить cars.xml.<br>' +
          '1) Запустите Live Server из папки проекта (где лежит cars.xml).<br>' +
          '2) Откройте index.html → перейдите в каталог → выберите авто.<br>' +
          '<small>' + (err.message || '') + '</small></td></tr>';
      }
    });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCarDetailPage);
} else {
  initCarDetailPage();
}
