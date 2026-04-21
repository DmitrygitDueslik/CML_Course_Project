import { useState } from "react";
import { Link } from "react-router";
import { Filter, X, Heart, ShoppingCart } from "lucide-react";
import { cars, type Car } from "../data/cars";
import { useApp } from "../context/AppContext";

export function Catalog() {
  const [selectedSeries, setSelectedSeries] = useState<string>("all");
  const [selectedBodyType, setSelectedBodyType] = useState<string>("all");
  const [selectedDrive, setSelectedDrive] = useState<string>("all");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(150000);
  const [showFilters, setShowFilters] = useState(true);

  const { isFavorite, toggleFavorite, addToCart } = useApp();

  // Get unique values for filters
  const seriesList = Array.from(new Set(cars.map((car) => car.series)));
  const bodyTypes = Array.from(new Set(cars.map((car) => car.bodyType)));
  const driveTypes = Array.from(new Set(cars.map((car) => car.drive)));

  // Get min and max prices from all cars
  const allPrices = cars.map((car) => car.price);
  const absoluteMinPrice = Math.min(...allPrices);
  const absoluteMaxPrice = Math.max(...allPrices);

  // Filter cars
  const filteredCars = cars.filter((car) => {
    if (selectedSeries !== "all" && car.series !== selectedSeries) return false;
    if (selectedBodyType !== "all" && car.bodyType !== selectedBodyType) return false;
    if (selectedDrive !== "all" && car.drive !== selectedDrive) return false;
    if (car.price < minPrice || car.price > maxPrice) return false;
    
    return true;
  });

  const resetFilters = () => {
    setSelectedSeries("all");
    setSelectedBodyType("all");
    setSelectedDrive("all");
    setMinPrice(absoluteMinPrice);
    setMaxPrice(absoluteMaxPrice);
  };

  const hasActiveFilters = 
    selectedSeries !== "all" || 
    selectedBodyType !== "all" || 
    selectedDrive !== "all" || 
    minPrice !== absoluteMinPrice || 
    maxPrice !== absoluteMaxPrice;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Каталог автомобилей BMW</h1>
          <p className="text-xl text-gray-300">Найдите автомобиль своей мечты</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className={`${showFilters ? 'w-80' : 'w-0 overflow-hidden'} transition-all duration-300 flex-shrink-0`}>
            <div className="bg-white p-6 shadow-lg sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Filter size={20} />
                  Фильтры
                </h2>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <X size={16} />
                    Сбросить
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {/* Series Filter */}
                <div>
                  <label className="block font-semibold mb-3">Серия</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="series"
                        value="all"
                        checked={selectedSeries === "all"}
                        onChange={(e) => setSelectedSeries(e.target.value)}
                        className="w-4 h-4 accent-blue-600"
                      />
                      <span>Все серии</span>
                    </label>
                    {seriesList.map((series) => (
                      <label key={series} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="series"
                          value={series}
                          checked={selectedSeries === series}
                          onChange={(e) => setSelectedSeries(e.target.value)}
                          className="w-4 h-4 accent-blue-600"
                        />
                        <span>Серия {series}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Body Type Filter */}
                <div className="pt-6 border-t">
                  <label className="block font-semibold mb-3">Тип кузова</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="bodyType"
                        value="all"
                        checked={selectedBodyType === "all"}
                        onChange={(e) => setSelectedBodyType(e.target.value)}
                        className="w-4 h-4 accent-blue-600"
                      />
                      <span>Все типы</span>
                    </label>
                    {bodyTypes.map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="bodyType"
                          value={type}
                          checked={selectedBodyType === type}
                          onChange={(e) => setSelectedBodyType(e.target.value)}
                          className="w-4 h-4 accent-blue-600"
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Drive Type Filter */}
                <div className="pt-6 border-t">
                  <label className="block font-semibold mb-3">Привод</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="drive"
                        value="all"
                        checked={selectedDrive === "all"}
                        onChange={(e) => setSelectedDrive(e.target.value)}
                        className="w-4 h-4 accent-blue-600"
                      />
                      <span>Любой</span>
                    </label>
                    {driveTypes.map((drive) => (
                      <label key={drive} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="drive"
                          value={drive}
                          checked={selectedDrive === drive}
                          onChange={(e) => setSelectedDrive(e.target.value)}
                          className="w-4 h-4 accent-blue-600"
                        />
                        <span>{drive}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="pt-6 border-t">
                  <label className="block font-semibold mb-3">Ценовой диапазон</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value="all"
                        checked={minPrice === absoluteMinPrice && maxPrice === absoluteMaxPrice}
                        onChange={() => {
                          setMinPrice(absoluteMinPrice);
                          setMaxPrice(absoluteMaxPrice);
                        }}
                        className="w-4 h-4 accent-blue-600"
                      />
                      <span>Любая цена</span>
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        name="minPrice"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        className="w-20 h-8 px-2 border border-gray-300 rounded"
                      />
                      <span>-</span>
                      <input
                        type="number"
                        name="maxPrice"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-20 h-8 px-2 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Cars Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden bg-white px-4 py-2 shadow flex items-center gap-2"
                >
                  <Filter size={18} />
                  {showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
                </button>
              </div>
              <p className="text-gray-600">
                Найдено автомобилей: <span className="font-semibold">{filteredCars.length}</span>
              </p>
            </div>

            {filteredCars.length === 0 ? (
              <div className="bg-white p-12 text-center shadow-lg">
                <p className="text-xl text-gray-600 mb-4">Автомобили не найдены</p>
                <button
                  onClick={resetFilters}
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Сбросить фильтры
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredCars.map((car) => (
                  <div
                    key={car.id}
                    className="group bg-white shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                  >
                    <Link to={`/car/${car.id}`}>
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-sm font-semibold">
                          {car.year}
                        </div>
                      </div>
                    </Link>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-sm text-gray-500">Серия {car.series}</p>
                          <Link to={`/car/${car.id}`}>
                            <h3 className="text-2xl font-bold hover:text-blue-600 transition-colors">{car.name}</h3>
                          </Link>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleFavorite(car.id);
                            }}
                            className={`transition-colors ${isFavorite(car.id) ? 'text-red-500 fill-red-500' : 'text-gray-400 hover:text-red-500'}`}
                          >
                            <Heart size={20} fill={isFavorite(car.id) ? 'currentColor' : 'none'} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              addToCart(car);
                            }}
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            <ShoppingCart size={20} />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 my-4 text-sm">
                        <div>
                          <p className="text-gray-500">Кузов</p>
                          <p className="font-semibold">{car.bodyType}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Привод</p>
                          <p className="font-semibold">{car.drive}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Двигатель</p>
                          <p className="font-semibold">{car.engine}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Мощность</p>
                          <p className="font-semibold">{car.power}</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t">
                        <div>
                          <p className="text-sm text-gray-500">Цена от</p>
                          <p className="text-2xl font-bold">${car.price.toLocaleString()}</p>
                        </div>
                        <Link
                          to={`/car/${car.id}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold transition-colors"
                        >
                          Подробнее
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}