import { Outlet, Link, useLocation } from "react-router";
import { Phone, Mail, MapPin, ShoppingCart, Heart } from "lucide-react";
import { useApp } from "../context/AppContext";

export function Layout() {
  const location = useLocation();
  const { getCartCount, favorites } = useApp();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50">
        {/* Top bar */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex justify-between items-center text-sm">
              <div className="flex gap-6">
                <a href="tel:+375291234567" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  <Phone size={14} />
                  <span>+375 (29) 123-45-67</span>
                </a>
                <a href="mailto:info@bmw.by" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  <Mail size={14} />
                  <span>info@bmw.by</span>
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={14} />
                <span>Минск, пр-т Независимости, 120</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="text-3xl font-bold">BMW</div>
            </Link>

            <nav className="flex gap-8 items-center">
              <Link 
                to="/" 
                className={`px-4 py-2 transition-colors ${isActive('/') ? 'text-blue-500' : 'hover:text-blue-500'}`}
              >
                Главная
              </Link>
              <Link 
                to="/catalog" 
                className={`px-4 py-2 transition-colors ${isActive('/catalog') ? 'text-blue-500' : 'hover:text-blue-500'}`}
              >
                Каталог
              </Link>
              <Link 
                to="/configurator" 
                className={`px-4 py-2 transition-colors ${isActive('/configurator') ? 'text-blue-500' : 'hover:text-blue-500'}`}
              >
                Конфигуратор
              </Link>
              <Link 
                to="/test-drive" 
                className={`px-4 py-2 transition-colors ${isActive('/test-drive') ? 'text-blue-500' : 'hover:text-blue-500'}`}
              >
                Тест-драйв
              </Link>
              <Link 
                to="/contacts" 
                className={`px-4 py-2 transition-colors ${isActive('/contacts') ? 'text-blue-500' : 'hover:text-blue-500'}`}
              >
                Контакты
              </Link>
              
              {/* Favorites */}
              <Link 
                to="/favorites" 
                className={`px-3 py-2 transition-colors relative ${isActive('/favorites') ? 'text-blue-500' : 'hover:text-blue-500'}`}
              >
                <Heart size={24} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </Link>
              
              {/* Cart */}
              <Link 
                to="/cart" 
                className={`px-3 py-2 transition-colors relative ${isActive('/cart') ? 'text-blue-500' : 'hover:text-blue-500'}`}
              >
                <ShoppingCart size={24} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BMW</h3>
              <p className="text-gray-400 text-sm">
                Официальный дилер BMW в Республике Беларусь
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Модели</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Седаны</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Кроссоверы</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Спортивные</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Электромобили</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Сервис</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Обслуживание</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Запчасти</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Trade-In</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Гарантия</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+375 (29) 123-45-67</li>
                <li>info@bmw.by</li>
                <li>Минск, пр-т Независимости, 120</li>
                <li>Пн-Пт: 9:00 - 20:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 BMW. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}