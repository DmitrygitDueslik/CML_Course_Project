// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, где мы находимся
    const testDriveForm = document.querySelector('.testdrive-form');
    const detailContainer = document.querySelector('.car-detail-container') || document.body;

    if (testDriveForm) {
        loadTestDriveModels();
    } 
    
    // Если мы на детальной странице (проверяем наличие ID в URL)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('id')) {
        loadCarDetails(urlParams.get('id'));
    }
});

async function fetchCars() {
    try {
        const response = await fetch('cars.xml');
        if (!response.ok) throw new Error('XML not found');
        const str = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(str, "text/xml");
        return xmlDoc.getElementsByTagName("car");
    } catch (e) {
        console.error("Ошибка загрузки XML:", e);
        return [];
    }
}

// 1. Заполнение списка в Тест-драйве
async function loadTestDriveModels() {
    const select = document.getElementById('td-model');
    if (!select) return;

    const cars = await fetchCars();
    if (!cars.length) return;

    // Сохраняем первый option ("Выберите модель")
    const firstOption = select.options[0];
    select.innerHTML = '';
    select.appendChild(firstOption);

    for (let i = 0; i < cars.length; i++) {
        const name = cars[i].getElementsByTagName("name")[0].textContent;
        const model = cars[i].getElementsByTagName("model")[0].textContent;
        const id = cars[i].getAttribute("id");

        const option = document.createElement('option');
        option.value = id;
        option.textContent = `${name} ${model}`;
        select.appendChild(option);
    }
}

// 2. Заполнение Детальной страницы
async function loadCarDetails(id) {
    const cars = await fetchCars();
    let car = null;

    for (let i = 0; i < cars.length; i++) {
        if (cars[i].getAttribute("id") === id) {
            car = cars[i];
            break;
        }
    }

    if (!car) return;

    // Извлекаем данные
    const name = car.getElementsByTagName("name")[0].textContent;
    const model = car.getElementsByTagName("model")[0].textContent;
    const price = car.getElementsByTagName("price")[0