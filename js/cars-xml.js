
let carsCache = null;

function xmlText(parent, tag) {
  const el = parent.getElementsByTagName(tag)[0];
  return el ? el.textContent.trim() : '';
}

function parseCarsFromDocument(doc) {
  const parseError = doc.getElementsByTagName('parsererror')[0];
  if (parseError) {
    throw new Error(parseError.textContent || 'Ошибка разбора cars.xml');
  }

  const result = {};
  const carNodes = doc.getElementsByTagName('car');

  for (let i = 0; i < carNodes.length; i++) {
    const carEl = carNodes[i];
    const id = parseInt(carEl.getAttribute('id'), 10);
    if (!id) continue;

    const specs = {};
    const specNodes = carEl.getElementsByTagName('spec');
    for (let j = 0; j < specNodes.length; j++) {
      const specEl = specNodes[j];
      const key = specEl.getAttribute('name');
      if (key) specs[key] = specEl.textContent.trim();
    }

    result[id] = {
      name: xmlText(carEl, 'name'),
      model: xmlText(carEl, 'model'),
      series: xmlText(carEl, 'seriesLabel'),
      body: xmlText(carEl, 'body'),
      year: parseInt(xmlText(carEl, 'year'), 10) || 2025,
      badge: xmlText(carEl, 'badge'),
      badgeColor: xmlText(carEl, 'badgeColor'),
      price: parseInt(xmlText(carEl, 'price'), 10) || 0,
      desc: xmlText(carEl, 'description'),
      exterior: xmlText(carEl, 'exterior'),
      interior: xmlText(carEl, 'interior'),
      specs: specs
    };
  }

  if (!Object.keys(result).length) {
    throw new Error('В cars.xml нет автомобилей');
  }

  return result;
}

function getCarsXmlUrls() {
  const urls = [];
  const seen = {};

  function add(url) {
    if (!url || seen[url]) return;
    seen[url] = true;
    urls.push(url);
  }

  add(new URL('cars.xml', window.location.href).href);
  add(new URL('./cars.xml', window.location.href).href);

  const script = document.querySelector('script[src*="cars-xml.js"]');
  if (script) {
    add(new URL('../cars.xml', script.src).href);
  }

  const root = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');
  add(root + 'cars.xml');

  return urls;
}

function fetchText(url) {
  return fetch(url, { cache: 'no-store' }).then(function (response) {
    if (!response.ok) throw new Error('HTTP ' + response.status + ' для ' + url);
    return response.text();
  });
}

function xhrText(url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
      if ((xhr.status === 200 || xhr.status === 0) && xhr.responseText) {
        resolve(xhr.responseText);
      } else {
        reject(new Error('XHR ' + xhr.status + ' для ' + url));
      }
    };
    xhr.onerror = function () { reject(new Error('XHR error для ' + url)); };
    xhr.send();
  });
}

function tryLoadXmlText() {
  const urls = getCarsXmlUrls();
  let chain = Promise.reject(new Error('нет URL'));

  urls.forEach(function (url) {
    chain = chain.catch(function () {
      return fetchText(url);
    }).catch(function () {
      return xhrText(url);
    });
  });

  return chain;
}

function loadFromObjectElement() {
  return new Promise(function (resolve, reject) {
    const obj = document.getElementById('cars-xml-object');
    if (!obj) {
      reject(new Error('object не найден'));
      return;
    }

    function tryRead() {
      const doc = obj.contentDocument;
      if (doc && doc.documentElement && doc.getElementsByTagName('car').length) {
        resolve(doc);
        return true;
      }
      return false;
    }

    if (tryRead()) return;

    obj.addEventListener('load', function () {
      if (!tryRead()) reject(new Error('object пустой'));
    });
    obj.addEventListener('error', function () {
      reject(new Error('object error'));
    });

    setTimeout(function () {
      if (!tryRead()) reject(new Error('object timeout'));
    }, 2000);
  });
}

function loadCarsFromXml() {
  function saveCache(doc) {
    carsCache = parseCarsFromDocument(doc);
    return carsCache;
  }

  function textToDoc(xmlText) {
    if (!xmlText || !xmlText.trim()) throw new Error('cars.xml пустой');
    const doc = new DOMParser().parseFromString(xmlText, 'text/xml');
    return saveCache(doc);
  }

  return loadFromObjectElement()
    .then(saveCache)
    .catch(function () {
      return tryLoadXmlText().then(textToDoc);
    });
}

function getCarById(id) {
  if (!carsCache) return null;
  return carsCache[id] || carsCache[1] || null;
}

function getAllCarIds() {
  if (!carsCache) return [];
  return Object.keys(carsCache).map(Number).sort(function (a, b) { return a - b; });
}
