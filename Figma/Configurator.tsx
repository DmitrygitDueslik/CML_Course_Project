import { useState } from "react";
import { ChevronRight, Check, ShoppingCart } from "lucide-react";
import { useApp } from "../context/AppContext";
import { cars } from "../data/cars";

const colors = [
  { name: "Альпийский белый", hex: "#F5F5F5", price: 0 },
  { name: "Черный сапфир", hex: "#1A1A1A", price: 800 },
  { name: "Минеральный серый", hex: "#6B7280", price: 600 },
  { name: "Портимао синий", hex: "#1E40AF", price: 1200 },
  { name: "Бруклинский серый", hex: "#4B5563", price: 600 },
  { name: "Танзанит синий II", hex: "#1E3A8A", price: 1200 },
];

const interiors = [
  { name: "Кожа Vernasca черная", price: 0 },
  { name: "Кожа Vernasca коричневая", price: 1500 },
  { name: "Кожа Dakota черная", price: 2000 },
  { name: "Кожа Merino серая", price: 3500 },
  { name: "Кожа Merino каштановая", price: 3500 },
];

const wheels = [
  { name: "18\" легкосплавные диски (стандарт)", price: 0 },
  { name: "19\" M Sport диски", price: 1800 },
  { name: "20\" M Performance диски", price: 2500 },
  { name: "21\" Individual диски", price: 3200 },
];

const packages = [
  { name: "Базовая комплектация", features: ["LED фары", "Круиз-контроль", "Климат-контроль"], price: 0 },
  { name: "M Sport пакет", features: ["M Sport подвеска", "M аэродинамический обвес", "M рулевое колесо"], price: 4500 },
  { name: "Premium пакет", features: ["Панорамная крыша", "Harman Kardon аудио", "Ambient освещение"], price: 6000 },
  { name: "Technology пакет", features: ["BMW Live Cockpit Pro", "Head-Up Display", "Парковочный ассистент Plus"], price: 5500 },
];

export function Configurator() {
  const [selectedCar, setSelectedCar] = useState(cars[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedInterior, setSelectedInterior] = useState(interiors[0]);
  const [selectedWheels, setSelectedWheels] = useState(wheels[0]);
  const [selectedPackages, setSelectedPackages] = useState<typeof packages>([]);
  const { addToCart } = useApp();

  const totalPrice = 
    selectedCar.price + 
    selectedColor.price + 
    selectedInterior.price + 
    selectedWheels.price + 
    selectedPackages.reduce((sum, pkg) => sum + pkg.price, 0);

  const togglePackage = (pkg: typeof packages[0]) => {
    setSelectedPackages((prev) =>
      prev.includes(pkg) ? prev.filter((p) => p !== pkg) : [...prev, pkg]
    );
  };

  const handleAddToCart = () => {
    addToCart(selectedCar);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Конфигуратор BMW</h1>
          <p className="text-xl text-gray-300">
            Создайте автомобиль своей мечты
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Car Selection */}
            <div className="bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Выберите модель</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {cars.slice(0, 6).map((car) => (
                  <button
                    key={car.id}
                    onClick={() => setSelectedCar(car)}
                    className={`text-left p-4 border-2 transition-all ${
                      selectedCar.id === car.id
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-32 object-cover mb-3"
                    />
                    <h3 className="font-bold">{car.name}</h3>
                    <p className="text-sm text-gray-600">{car.bodyType}</p>
                    <p className="font-semibold mt-2">от ${car.price.toLocaleString()}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Цвет кузова</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`p-4 border-2 transition-all ${
                      selectedColor.name === color.name
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div
                      className="w-full h-16 mb-3 rounded"
                      style={{ backgroundColor: color.hex }}
                    />
                    <p className="font-semibold text-sm">{color.name}</p>
                    <p className="text-sm text-gray-600">
                      {color.price > 0 ? `+$${color.price.toLocaleString()}` : "Включено"}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Interior Selection */}
            <div className="bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Интерьер</h2>
              <div className="space-y-3">
                {interiors.map((interior) => (
                  <button
                    key={interior.name}
                    onClick={() => setSelectedInterior(interior)}
                    className={`w-full text-left p-4 border-2 transition-all flex justify-between items-center ${
                      selectedInterior.name === interior.name
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div>
                      <p className="font-semibold">{interior.name}</p>
                      <p className="text-sm text-gray-600">
                        {interior.price > 0 ? `+$${interior.price.toLocaleString()}` : "Включено"}
                      </p>
                    </div>
                    {selectedInterior.name === interior.name && (
                      <Check className="text-blue-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Wheels Selection */}
            <div className="bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Диски</h2>
              <div className="space-y-3">
                {wheels.map((wheel) => (
                  <button
                    key={wheel.name}
                    onClick={() => setSelectedWheels(wheel)}
                    className={`w-full text-left p-4 border-2 transition-all flex justify-between items-center ${
                      selectedWheels.name === wheel.name
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div>
                      <p className="font-semibold">{wheel.name}</p>
                      <p className="text-sm text-gray-600">
                        {wheel.price > 0 ? `+$${wheel.price.toLocaleString()}` : "Включено"}
                      </p>
                    </div>
                    {selectedWheels.name === wheel.name && (
                      <Check className="text-blue-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Packages Selection */}
            <div className="bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Пакеты опций</h2>
              <div className="space-y-4">
                {packages.map((pkg) => (
                  <button
                    key={pkg.name}
                    onClick={() => togglePackage(pkg)}
                    className={`w-full text-left p-4 border-2 transition-all ${
                      selectedPackages.includes(pkg)
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold">{pkg.name}</p>
                        <p className="text-sm text-gray-600">
                          {pkg.price > 0 ? `+$${pkg.price.toLocaleString()}` : "Включено"}
                        </p>
                      </div>
                      {selectedPackages.includes(pkg) && (
                        <Check className="text-blue-600" />
                      )}
                    </div>
                    <ul className="space-y-1">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <ChevronRight size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 shadow-lg sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Ваша конфигурация</h2>

              <div className="space-y-4 mb-6">
                <div className="pb-4 border-b">
                  <p className="text-sm text-gray-500">Модель</p>
                  <p className="font-semibold">{selectedCar.name}</p>
                  <p className="text-sm">${selectedCar.price.toLocaleString()}</p>
                </div>

                <div className="pb-4 border-b">
                  <p className="text-sm text-gray-500">Цвет</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div
                      className="w-6 h-6 rounded border"
                      style={{ backgroundColor: selectedColor.hex }}
                    />
                    <p className="font-semibold text-sm">{selectedColor.name}</p>
                  </div>
                  {selectedColor.price > 0 && (
                    <p className="text-sm">+${selectedColor.price.toLocaleString()}</p>
                  )}
                </div>

                <div className="pb-4 border-b">
                  <p className="text-sm text-gray-500">Интерьер</p>
                  <p className="font-semibold text-sm">{selectedInterior.name}</p>
                  {selectedInterior.price > 0 && (
                    <p className="text-sm">+${selectedInterior.price.toLocaleString()}</p>
                  )}
                </div>

                <div className="pb-4 border-b">
                  <p className="text-sm text-gray-500">Диски</p>
                  <p className="font-semibold text-sm">{selectedWheels.name}</p>
                  {selectedWheels.price > 0 && (
                    <p className="text-sm">+${selectedWheels.price.toLocaleString()}</p>
                  )}
                </div>

                {selectedPackages.length > 0 && (
                  <div className="pb-4 border-b">
                    <p className="text-sm text-gray-500 mb-2">Пакеты опций</p>
                    {selectedPackages.map((pkg) => (
                      <div key={pkg.name} className="mb-2">
                        <p className="font-semibold text-sm">{pkg.name}</p>
                        <p className="text-sm">+${pkg.price.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-6 border-t mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">Итого:</span>
                  <span className="text-3xl font-bold">${totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-semibold mb-3 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Добавить в корзину
              </button>

              <button className="w-full border-2 border-gray-300 hover:border-gray-400 py-4 font-semibold transition-colors">
                Сохранить конфигурацию
              </button>

              <div className="mt-6 pt-6 border-t space-y-3 text-sm text-gray-600">
                <p>✓ Персональный менеджер</p>
                <p>✓ Помощь в подборе</p>
                <p>✓ Trade-In оценка</p>
                <p>✓ Тест-драйв доступен</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
