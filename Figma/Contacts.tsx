import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const dealerships = [
  {
    name: "BMW Минск Центр",
    address: "пр-т Независимости, 120, Минск, 220050",
    phone: "+375 (29) 123-45-67",
    email: "center@bmw.by",
    hours: {
      weekdays: "09:00 - 20:00",
      saturday: "10:00 - 18:00",
      sunday: "10:00 - 16:00",
    },
    coords: { lat: 53.9045, lng: 27.5615 },
  },
  {
    name: "BMW Минск Восток",
    address: "ул. Уручская, 23, Минск, 220125",
    phone: "+375 (29) 234-56-78",
    email: "east@bmw.by",
    hours: {
      weekdays: "09:00 - 20:00",
      saturday: "10:00 - 18:00",
      sunday: "10:00 - 16:00",
    },
    coords: { lat: 53.9398, lng: 27.6843 },
  },
  {
    name: "BMW Минск Запад",
    address: "пр-т Дзержинского, 104, Минск, 220089",
    phone: "+375 (29) 345-67-89",
    email: "west@bmw.by",
    hours: {
      weekdays: "09:00 - 20:00",
      saturday: "10:00 - 18:00",
      sunday: "10:00 - 16:00",
    },
    coords: { lat: 53.8843, lng: 27.4529 },
  },
];

const departments = [
  { name: "Продажи новых автомобилей", phone: "+375 (29) 123-45-67", email: "sales@bmw.by" },
  { name: "Продажи автомобилей с пробегом", phone: "+375 (29) 123-45-68", email: "used@bmw.by" },
  { name: "Сервисный центр", phone: "+375 (29) 123-45-69", email: "service@bmw.by" },
  { name: "Запчасти и аксессуары", phone: "+375 (29) 123-45-70", email: "parts@bmw.by" },
  { name: "Финансовые услуги", phone: "+375 (29) 123-45-71", email: "finance@bmw.by" },
];

export function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
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
          src="https://images.unsplash.com/photo-1595787142948-569014817b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBkZWFsZXJzaGlwJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NzM1MDIwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Contacts"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-6xl font-bold mb-4">Контакты</h1>
            <p className="text-2xl text-gray-200">
              Мы всегда рады вам помочь
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Dealerships */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8">Наши дилерские центры</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {dealerships.map((dealer, idx) => (
              <div key={idx} className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{dealer.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{dealer.address}</p>
                  </div>
                  
                  <a href={`tel:${dealer.phone}`} className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                    <Phone size={20} className="text-blue-600" />
                    <span>{dealer.phone}</span>
                  </a>
                  
                  <a href={`mailto:${dealer.email}`} className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                    <Mail size={20} className="text-blue-600" />
                    <span>{dealer.email}</span>
                  </a>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-start gap-3 mb-3">
                    <Clock size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-semibold mb-1">Режим работы:</p>
                      <p className="text-gray-600">Пн-Пт: {dealer.hours.weekdays}</p>
                      <p className="text-gray-600">Сб: {dealer.hours.saturday}</p>
                      <p className="text-gray-600">Вс: {dealer.hours.sunday}</p>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold transition-colors">
                  Построить маршрут
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8">Отделы</h2>
          <div className="bg-white shadow-lg">
            {departments.map((dept, idx) => (
              <div key={idx} className={`p-6 ${idx !== departments.length - 1 ? 'border-b' : ''}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h3 className="text-xl font-bold">{dept.name}</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href={`tel:${dept.phone}`} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                      <Phone size={18} />
                      <span>{dept.phone}</span>
                    </a>
                    <a href={`mailto:${dept.email}`} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                      <Mail size={18} />
                      <span>{dept.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Напишите нам</h2>
              
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 p-8 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Сообщение отправлено!</h3>
                  <p className="text-gray-700">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Имя *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 outline-none transition-colors"
                        placeholder="Иван Иванов"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Телефон *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 outline-none transition-colors"
                        placeholder="+375 (29) 123-45-67"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 outline-none transition-colors"
                      placeholder="ivan@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Тема обращения *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 outline-none transition-colors cursor-pointer"
                    >
                      <option value="">Выберите тему</option>
                      <option value="sales">Покупка автомобиля</option>
                      <option value="service">Сервисное обслуживание</option>
                      <option value="parts">Запчасти и аксессуары</option>
                      <option value="finance">Финансовые вопросы</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 outline-none transition-colors resize-none"
                      placeholder="Ваше сообщение..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Отправить сообщение
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    * Поля обязательные для заполнения
                  </p>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            {/* Quick Contact */}
            <div className="bg-black text-white p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Быстрая связь</h3>
              <div className="space-y-4">
                <a href="tel:+375291234567" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                  <Phone size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Общий</p>
                    <p className="font-semibold">+375 (29) 123-45-67</p>
                  </div>
                </a>
                <a href="mailto:info@bmw.by" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                  <Mail size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold">info@bmw.by</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Адрес</p>
                    <p className="font-semibold">пр-т Независимости, 120</p>
                    <p className="font-semibold">Минск, 220050</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Мы в социальных сетях</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold transition-colors">
                  Facebook
                </button>
                <button className="bg-blue-400 hover:bg-blue-500 text-white py-3 font-semibold transition-colors">
                  Twitter
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 font-semibold transition-colors">
                  Instagram
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white py-3 font-semibold transition-colors">
                  YouTube
                </button>
              </div>
            </div>

            {/* Support Hours */}
            <div className="bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Служба поддержки</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Понедельник - Пятница:</span>
                  <span className="font-semibold">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Суббота - Воскресенье:</span>
                  <span className="font-semibold">24/7</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Круглосуточная горячая линия для экстренных случаев
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
