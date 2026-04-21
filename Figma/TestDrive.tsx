import { useState } from "react";
import { Calendar, Clock, MapPin, Phone, Mail, User, Car } from "lucide-react";
import { cars } from "../data/cars";

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];

const dealerships = [
  { name: "BMW Минск Центр", address: "пр-т Независимости, 120", phone: "+375 (29) 123-45-67" },
  { name: "BMW Минск Восток", address: "ул. Уручская, 23", phone: "+375 (29) 234-56-78" },
  { name: "BMW Минск Запад", address: "пр-т Дзержинского, 104", phone: "+375 (29) 345-67-89" },
];

export function TestDrive() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    car: "",
    dealership: "",
    date: "",
    time: "",
    comment: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        car: "",
        dealership: "",
        date: "",
        time: "",
        comment: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative h-[400px] bg-black">
        <img
          src="https://images.unsplash.com/photo-1619284111051-525af716ad1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXN0JTIwZHJpdmUlMjBCTVclMjBzaG93cm9vbXxlbnwxfHx8fDE3NzM1MDIwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Test Drive"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-6xl font-bold mb-4">Тест-драйв BMW</h1>
            <p className="text-2xl text-gray-200">
              Почувствуйте удовольствие от вождения
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {submitted ? (
          <div className="max-w-2xl mx-auto bg-green-50 border-2 border-green-500 p-12 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Car size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Заявка отправлена!</h2>
            <p className="text-lg text-gray-700">
              Наш менеджер свяжется с вами в ближайшее время для подтверждения тест-драйва.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Записаться на тест-драйв</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Имя *
                      </label>
                      <div className="relative">
                        <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 focus:border-blue-600 outline-none transition-colors"
                          placeholder="Иван Иванов"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Телефон *
                      </label>
                      <div className="relative">
                        <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 focus:border-blue-600 outline-none transition-colors"
                          placeholder="+375 (29) 123-45-67"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 focus:border-blue-600 outline-none transition-colors"
                        placeholder="ivan@example.com"
                      />
                    </div>
                  </div>

                  {/* Car Selection */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Модель автомобиля *
                    </label>
                    <div className="relative">
                      <Car size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="car"
                        value={formData.car}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 focus:border-blue-600 outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Выберите модель</option>
                        {cars.map((car) => (
                          <option key={car.id} value={car.name}>
                            {car.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Dealership */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Дилерский центр *
                    </label>
                    <div className="relative">
                      <MapPin size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="dealership"
                        value={formData.dealership}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 focus:border-blue-600 outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Выберите дилерский центр</option>
                        {dealerships.map((dealer, idx) => (
                          <option key={idx} value={dealer.name}>
                            {dealer.name} - {dealer.address}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Дата *
                      </label>
                      <div className="relative">
                        <Calendar size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 focus:border-blue-600 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Время *
                      </label>
                      <div className="relative">
                        <Clock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 focus:border-blue-600 outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Выберите время</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Комментарий
                    </label>
                    <textarea
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 outline-none transition-colors resize-none"
                      placeholder="Дополнительная информация или пожелания..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-semibold transition-colors"
                  >
                    Отправить заявку
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    * Поля обязательные для заполнения
                  </p>
                </form>
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Dealerships */}
              <div className="bg-white p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Наши дилерские центры</h3>
                <div className="space-y-4">
                  {dealerships.map((dealer, idx) => (
                    <div key={idx} className="pb-4 border-b last:border-b-0">
                      <h4 className="font-semibold mb-2">{dealer.name}</h4>
                      <p className="text-sm text-gray-600 flex items-start gap-2 mb-2">
                        <MapPin size={16} className="mt-1 flex-shrink-0" />
                        {dealer.address}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <Phone size={16} />
                        {dealer.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-black text-white p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Почему тест-драйв?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Оцените динамические характеристики автомобиля</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Познакомьтесь с инновационными технологиями BMW</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Получите консультацию от эксперта</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Оцените комфорт салона и эргономику</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">Сравните несколько моделей за один визит</p>
                  </li>
                </ul>
              </div>

              {/* Working Hours */}
              <div className="bg-white p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Время работы</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Пн - Пт:</span>
                    <span className="font-semibold">09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Суббота:</span>
                    <span className="font-semibold">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Воскресенье:</span>
                    <span className="font-semibold">10:00 - 16:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
