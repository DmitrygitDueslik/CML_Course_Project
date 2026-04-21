import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, Zap, Gauge, Fuel, Settings, Check, Phone, Mail, Heart, ShoppingCart } from "lucide-react";
import { cars } from "../data/cars";
import { useApp } from "../context/AppContext";

export function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite, addToCart } = useApp();
  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Автомобиль не найден</h1>
          <Link to="/catalog" className="text-blue-600 hover:text-blue-700">
            Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft size={20} />
            Вернуться назад
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[500px] bg-black">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-white/80 mb-2">Серия {car.series}</p>
            <h1 className="text-5xl font-bold text-white mb-4">{car.name}</h1>
            <p className="text-3xl font-bold text-white">от ${car.price.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">О модели</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{car.description}</p>
            </div>

            {/* Technical Specs */}
            <div className="bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Технические характеристики</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Gauge className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Разгон 0-100 км/ч</p>
                    <p className="text-xl font-bold">{car.acceleration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Zap className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Мощность</p>
                    <p className="text-xl font-bold">{car.power}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Fuel className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Двигатель</p>
                    <p className="text-xl font-bold">{car.engine}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Settings className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Привод</p>
                    <p className="text-xl font-bold">{car.drive}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Год выпуска</span>
                    <span className="font-semibold">{car.year}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Тип кузова</span>
                    <span className="font-semibold">{car.bodyType}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Серия</span>
                    <span className="font-semibold">{car.series}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Привод</span>
                    <span className="font-semibold">{car.drive}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Основные особенности</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <Check className="text-green-600" size={16} />
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interior Image */}
            <div className="bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Интерьер</h2>
              <div className="relative h-96 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1767867215698-a46e7816ce07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBpbnRlcmlvciUyMGx1eHVyeXxlbnwxfHx8fDE3NzM1MDEzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="BMW Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 mt-4">
                Интерьер премиум-класса с использованием материалов высочайшего качества
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 shadow-lg sticky top-24 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                <p className="text-gray-600">{car.bodyType} • {car.year}</p>
              </div>

              <div className="py-6 border-y">
                <p className="text-sm text-gray-500 mb-1">Цена от</p>
                <p className="text-4xl font-bold">${car.price.toLocaleString()}</p>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => addToCart(car)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Добавить в корзину
                </button>
                <button 
                  onClick={() => toggleFavorite(car.id)}
                  className={`w-full py-4 font-semibold transition-colors flex items-center justify-center gap-2 ${
                    isFavorite(car.id) 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-black hover:bg-gray-900 text-white'
                  }`}
                >
                  <Heart size={20} fill={isFavorite(car.id) ? 'currentColor' : 'none'} />
                  {isFavorite(car.id) ? 'В избранном' : 'В избранное'}
                </button>
                <button className="w-full border-2 border-gray-300 hover:border-gray-400 py-4 font-semibold transition-colors">
                  Тест-драйв
                </button>
              </div>

              <div className="pt-6 border-t space-y-4">
                <h4 className="font-semibold">Нужна помощь?</h4>
                <a
                  href="tel:+375291234567"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Phone size={20} />
                  <span>+375 (29) 123-45-67</span>
                </a>
                <a
                  href="mailto:info@bmw.by"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Mail size={20} />
                  <span>info@bmw.by</span>
                </a>
              </div>

              <div className="pt-6 border-t">
                <h4 className="font-semibold mb-3">Поделиться</h4>
                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 py-2 text-sm font-semibold transition-colors">
                    Facebook
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 py-2 text-sm font-semibold transition-colors">
                    Twitter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Cars */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Похожие модели</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cars
              .filter((c) => c.id !== car.id && c.series === car.series)
              .slice(0, 3)
              .map((relatedCar) => (
                <Link
                  key={relatedCar.id}
                  to={`/car/${relatedCar.id}`}
                  className="group bg-white shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedCar.image}
                      alt={relatedCar.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedCar.name}</h3>
                    <p className="text-gray-600 mb-4">{relatedCar.bodyType}</p>
                    <p className="text-2xl font-bold">от ${relatedCar.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}