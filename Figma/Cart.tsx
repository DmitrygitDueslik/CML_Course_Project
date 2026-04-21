import { Link } from "react-router";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useApp } from "../context/AppContext";

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useApp();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <ShoppingBag size={80} className="mx-auto text-gray-300 mb-6" />
          <h1 className="text-3xl font-bold mb-4">Ваша корзина пуста</h1>
          <p className="text-gray-600 mb-8">
            Добавьте автомобили из каталога в корзину
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
          <h1 className="text-5xl font-bold mb-4">Корзина</h1>
          <p className="text-xl text-gray-300">
            {cart.reduce((total, item) => total + item.quantity, 0)} автомобилей
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.car.id} className="bg-white p-6 shadow-lg">
                <div className="flex gap-6">
                  <Link to={`/car/${item.car.id}`} className="flex-shrink-0">
                    <img
                      src={item.car.image}
                      alt={item.car.name}
                      className="w-48 h-32 object-cover rounded"
                    />
                  </Link>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <Link
                          to={`/car/${item.car.id}`}
                          className="text-2xl font-bold hover:text-blue-600 transition-colors"
                        >
                          {item.car.name}
                        </Link>
                        <p className="text-gray-600 mt-1">
                          {item.car.bodyType} • {item.car.year}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.car.id)}
                        className="text-red-600 hover:text-red-700 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 my-4 text-sm">
                      <div>
                        <p className="text-gray-500">Двигатель</p>
                        <p className="font-semibold">{item.car.engine}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Мощность</p>
                        <p className="font-semibold">{item.car.power}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.car.id, item.quantity - 1)
                          }
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:border-gray-400 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.car.id, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:border-gray-400 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-500">Цена</p>
                        <p className="text-2xl font-bold">
                          ${(item.car.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 shadow-lg sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Итого</h2>

              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.car.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.car.name} × {item.quantity}
                    </span>
                    <span className="font-semibold">
                      ${(item.car.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">Всего:</span>
                  <span className="text-3xl font-bold">
                    ${getCartTotal().toLocaleString()}
                  </span>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-semibold mb-3 transition-colors">
                Оформить заказ
              </button>

              <Link
                to="/catalog"
                className="block w-full text-center border-2 border-gray-300 hover:border-gray-400 py-4 font-semibold transition-colors"
              >
                Продолжить покупки
              </Link>

              <div className="mt-6 pt-6 border-t space-y-3 text-sm text-gray-600">
                <p>✓ Бесплатная доставка</p>
                <p>✓ Гарантия производителя</p>
                <p>✓ Сервисное обслуживание</p>
                <p>✓ Trade-In программа</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
