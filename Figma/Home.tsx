import { Link } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight, Zap, Shield, Award } from "lucide-react";
import { cars } from "../data/cars";

export function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
  };

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1630164828886-b1983f2b2c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBzcG9ydHMlMjBjYXIlMjBkcml2aW5nfGVufDF8fHx8MTc3MzUwMTM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "THE 7",
      subtitle: "УДОВОЛЬСТВИЕ ОТ ВОЖДЕНИЯ",
      description: "Новый BMW 7 Series — воплощение роскоши и технологий",
      cta: "Узнать больше",
    },
    {
      image: "https://images.unsplash.com/photo-1696955655268-41181d2d3e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBlbGVjdHJpYyUyMHZlaGljbGV8ZW58MXx8fHwxNzczNTAxMzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "BMW iX",
      subtitle: "ЭЛЕКТРИЧЕСКОЕ БУДУЩЕЕ",
      description: "Полностью электрический SAV нового поколения",
      cta: "Тест-драйв",
    },
    {
      image: "https://images.unsplash.com/photo-1708063785701-f67004f739a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBNJTIwc2VyaWVzJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzczNDE5Mzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "BMW M",
      subtitle: "ЧИСТАЯ ПРОИЗВОДИТЕЛЬНОСТЬ",
      description: "M Performance — квинтэссенция спортивного духа BMW",
      cta: "Каталог M",
    },
  ];

  const featuredCars = cars.slice(0, 3);

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative">
        <Slider {...sliderSettings} className="bmw-hero-slider">
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative">
              <div className="relative h-[600px] md:h-[700px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-4 w-full">
                    <div className="max-w-2xl text-white">
                      <p className="text-sm tracking-widest mb-4">{slide.subtitle}</p>
                      <h1 className="text-6xl font-bold mb-6">{slide.title}</h1>
                      <p className="text-xl mb-8 text-gray-200">{slide.description}</p>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold transition-colors flex items-center gap-2">
                        {slide.cta}
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Специальные предложения</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <Link 
                key={car.id}
                to={`/car/${car.id}`}
                className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-1">Серия {car.series}</p>
                  <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-4">{car.bodyType} • {car.power}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold">от ${car.price.toLocaleString()}</p>
                    <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1 font-semibold">
                      Подробнее
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/catalog"
              className="inline-block bg-black hover:bg-gray-900 text-white px-10 py-4 font-semibold transition-colors"
            >
              Смотреть весь каталог
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Инновации</h3>
              <p className="text-gray-600">
                Передовые технологии и инновационные решения в каждой модели BMW
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Безопасность</h3>
              <p className="text-gray-600">
                Система безопасности мирового класса и помощь водителю
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Качество</h3>
              <p className="text-gray-600">
                Немецкое качество и внимание к деталям в каждом автомобиле
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Запишитесь на тест-драйв</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ощутите удовольствие от вождения BMW. Запишитесь на тест-драйв любой модели из нашего каталога
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 font-semibold transition-colors">
            Записаться на тест-драйв
          </button>
        </div>
      </section>

      <style>{`
        .bmw-hero-slider .slick-dots {
          bottom: 30px;
        }

        .bmw-hero-slider .slick-dots li button:before {
          font-size: 12px;
          color: white;
          opacity: 0.5;
        }

        .bmw-hero-slider .slick-dots li.slick-active button:before {
          color: #2563eb;
          opacity: 1;
        }

        .bmw-hero-slider .slick-prev,
        .bmw-hero-slider .slick-next {
          width: 50px;
          height: 50px;
          z-index: 10;
        }

        .bmw-hero-slider .slick-prev {
          left: 30px;
        }

        .bmw-hero-slider .slick-next {
          right: 30px;
        }

        .bmw-hero-slider .slick-prev:before,
        .bmw-hero-slider .slick-next:before {
          font-size: 50px;
          opacity: 0.7;
        }

        .bmw-hero-slider .slick-prev:hover:before,
        .bmw-hero-slider .slick-next:hover:before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
