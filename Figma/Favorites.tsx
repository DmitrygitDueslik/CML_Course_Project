import { Link } from "react-router";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import { useApp } from "../context/AppContext";
import { cars } from "../data/cars";

export function Favorites() {
  const { favorites, toggleFavorite, addToCart } = useApp();

  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  if (favoriteCars.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <Heart size={80} className="mx-auto text-gray-300 mb-6" />
          <h1 className="text-3xl font-bold mb-4">Нет избранных автомобилей</h1>
          <p className="text-gray-600 mb-8">
            Добавьте понравившиеся автомобили в избранное
          </p>
          <Link
            to="/catalog"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold transition-colors"
          >
            Перейти в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Избранное</h1>
          <p className="text-xl text-gray-300">
            {favoriteCars.length} автомобилей
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteCars.map((car) => (
            <div
              key={car.id}
              className="group bg-white shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="relative">
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

                <button
                  onClick={() => toggleFavorite(car.id)}
                  className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg hover:bg-red-50 transition-colors"
                >
                  <Trash2 size={20} className="text-red-600" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm text-gray-500">Серия {car.series}</p>
                    <Link
                      to={`/car/${car.id}`}
                      className="text-2xl font-bold hover:text-blue-600 transition-colors"
                    >
                      {car.name}
                    </Link>
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

                <div className="flex flex-col gap-3 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Цена от</p>
                      <p className="text-2xl font-bold">
                        ${car.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(car)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={20} />
                    В корзину
                  </button>

                  <Link
                    to={`/car/${car.id}`}
                    className="w-full text-center border-2 border-gray-300 hover:border-gray-400 py-3 font-semibold transition-colors"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
