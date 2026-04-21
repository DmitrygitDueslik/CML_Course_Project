export interface Car {
  id: number;
  name: string;
  series: string;
  price: number;
  image: string;
  bodyType: string;
  drive: string;
  engine: string;
  power: string;
  acceleration: string;
  year: number;
  description: string;
  features: string[];
}

export const cars: Car[] = [
  {
    id: 1,
    name: "BMW 3 Series",
    series: "3",
    price: 45000,
    image: "https://images.unsplash.com/photo-1758855307960-3a6339cb2c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBzZWRhbiUyMHNpbHZlcnxlbnwxfHx8fDE3NzM1MDEzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Седан",
    drive: "Задний",
    engine: "2.0L TwinPower Turbo",
    power: "255 л.с.",
    acceleration: "5.6 сек",
    year: 2024,
    description: "Идеальное сочетание спортивности и элегантности. BMW 3 Series предлагает динамичные характеристики и роскошный интерьер.",
    features: [
      "Адаптивная подвеска M Sport",
      "iDrive 8.5 с сенсорным дисплеем",
      "Панорамная крыша",
      "Система помощи водителю"
    ]
  },
  {
    id: 2,
    name: "BMW iX xDrive50",
    series: "i",
    price: 85000,
    image: "https://images.unsplash.com/photo-1696955655268-41181d2d3e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBlbGVjdHJpYyUyMHZlaGljbGV8ZW58MXx8fHwxNzczNTAxMzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Кроссовер",
    drive: "Полный",
    engine: "Электрический",
    power: "523 л.с.",
    acceleration: "4.6 сек",
    year: 2024,
    description: "Полностью электрический SAV с инновационными технологиями и запасом хода более 600 км.",
    features: [
      "Запас хода до 630 км",
      "Быстрая зарядка DC до 200 кВт",
      "Curved Display с технологией BMW",
      "Интерьер из экологичных материалов"
    ]
  },
  {
    id: 3,
    name: "BMW X5 M Competition",
    series: "X",
    price: 120000,
    image: "https://images.unsplash.com/photo-1656861593673-a3a525a524c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBTVVYlMjBibGFja3xlbnwxfHx8fDE3NzM1MDEzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Внедорожник",
    drive: "Полный",
    engine: "4.4L V8 TwinTurbo",
    power: "625 л.с.",
    acceleration: "3.8 сек",
    year: 2024,
    description: "Высокопроизводительный SAV с впечатляющей динамикой и роскошным оснащением.",
    features: [
      "M xDrive полный привод",
      "Активная подвеска M",
      "M Sport выхлопная система",
      "Сиденья M Multifunction с подогревом"
    ]
  },
  {
    id: 4,
    name: "BMW M4 Competition",
    series: "M",
    price: 95000,
    image: "https://images.unsplash.com/photo-1708063785701-f67004f739a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBNJTIwc2VyaWVzJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzczNDE5Mzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Купе",
    drive: "Задний",
    engine: "3.0L Twin-Turbo I6",
    power: "510 л.с.",
    acceleration: "3.9 сек",
    year: 2024,
    description: "Чистокровное спортивное купе с впечатляющими характеристиками M Performance.",
    features: [
      "M Sport дифференциал",
      "Карбоновая крыша",
      "Адаптивная подвеска M",
      "M Sport тормоза"
    ]
  },
  {
    id: 5,
    name: "BMW 7 Series",
    series: "7",
    price: 105000,
    image: "https://images.unsplash.com/photo-1764739686083-cd119b7c7db1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBsdXh1cnklMjBjYXIlMjBmcm9udCUyMHZpZXd8ZW58MXx8fHwxNzczNTAxMzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Седан",
    drive: "Полный",
    engine: "3.0L TwinPower Turbo I6",
    power: "375 л.с.",
    acceleration: "5.3 сек",
    year: 2024,
    description: "Флагманский седан с непревзойденным комфортом и инновационными технологиями.",
    features: [
      "Executive Lounge задние сиденья",
      "Bowers & Wilkins Diamond система",
      "Массаж и вентиляция сидений",
      "BMW Theatre Screen"
    ]
  },
  {
    id: 6,
    name: "BMW 8 Series Coupe",
    series: "8",
    price: 110000,
    image: "https://images.unsplash.com/photo-1753899762863-af6e21e86438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBjb3VwZSUyMGJsdWV8ZW58MXx8fHwxNzczNTAxMzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Купе",
    drive: "Полный",
    engine: "4.4L V8 TwinTurbo",
    power: "530 л.с.",
    acceleration: "3.7 сек",
    year: 2024,
    description: "Элегантное гран-туризмо купе с мощным двигателем и роскошным интерьером.",
    features: [
      "Интегральное активное рулевое управление",
      "Адаптивная подвеска M",
      "Harman Kardon аудиосистема",
      "Активная стабилизация крена"
    ]
  },
  {
    id: 7,
    name: "BMW X3 xDrive30i",
    series: "X",
    price: 52000,
    image: "https://images.unsplash.com/photo-1760553120763-db550ae7b165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBYMyUyMHdoaXRlJTIwU1VWfGVufDF8fHx8MTc3MzUwMTk0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Кроссовер",
    drive: "Полный",
    engine: "2.0L TwinPower Turbo",
    power: "248 л.с.",
    acceleration: "6.0 сек",
    year: 2024,
    description: "Универсальный премиум SAV, сочетающий спортивный характер и практичность.",
    features: [
      "BMW Live Cockpit Professional",
      "Парковочный ассистент Plus",
      "Трехзонный климат-контроль",
      "Светодиодные фары"
    ]
  },
  {
    id: 8,
    name: "BMW 5 Series 530i",
    series: "5",
    price: 62000,
    image: "https://images.unsplash.com/photo-1563969105292-818af62ac5e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjA1JTIwc2VyaWVzJTIwc2lsdmVyJTIwc2VkYW58ZW58MXx8fHwxNzczNTAxOTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Седан",
    drive: "Задний",
    engine: "2.0L TwinPower Turbo",
    power: "248 л.с.",
    acceleration: "6.2 сек",
    year: 2024,
    description: "Бизнес-седан с инновационными технологиями и превосходным комфортом.",
    features: [
      "Gesture Control управление",
      "Адаптивные LED фары",
      "Комфортные сиденья с памятью",
      "Harman Kardon звук"
    ]
  },
  {
    id: 9,
    name: "BMW i4 eDrive40",
    series: "i",
    price: 68000,
    image: "https://images.unsplash.com/photo-1665950798347-80179ffce459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBpNCUyMGVsZWN0cmljJTIwYmx1ZXxlbnwxfHx8fDE3NzM1MDE5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Седан",
    drive: "Задний",
    engine: "Электрический",
    power: "340 л.с.",
    acceleration: "5.7 сек",
    year: 2024,
    description: "Электрический гран купе с динамикой BMW и запасом хода до 590 км.",
    features: [
      "Запас хода до 590 км",
      "BMW Curved Display",
      "Автопилот Pro",
      "Быстрая зарядка 200 кВт"
    ]
  },
  {
    id: 10,
    name: "BMW X7 xDrive40i",
    series: "X",
    price: 98000,
    image: "https://images.unsplash.com/photo-1731988666906-7798d635638a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBYNyUyMGx1eHVyeSUyMFNVVnxlbnwxfHx8fDE3NzM1MDE5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Внедорожник",
    drive: "Полный",
    engine: "3.0L TwinPower Turbo I6",
    power: "375 л.с.",
    acceleration: "5.8 сек",
    year: 2024,
    description: "Флагманский 7-местный SAV с непревзойденным уровнем роскоши и пространства.",
    features: [
      "7 мест с индивидуальной конфигурацией",
      "Bowers & Wilkins Diamond система",
      "Sky Lounge панорамная крыша",
      "Активное управление на задней оси"
    ]
  },
  {
    id: 11,
    name: "BMW Z4 M40i",
    series: "Z",
    price: 75000,
    image: "https://images.unsplash.com/photo-1651078977658-d5f963442f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBaNCUyMGNvbnZlcnRpYmxlJTIwcm9hZHN0ZXJ8ZW58MXx8fHwxNzczNTAxOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Родстер",
    drive: "Задний",
    engine: "3.0L TwinPower Turbo I6",
    power: "382 л.с.",
    acceleration: "4.4 сек",
    year: 2024,
    description: "Чистокровный родстер с идеальным балансом мощности и удовольствия от вождения.",
    features: [
      "Складная тканевая крыша",
      "M Sport подвеска",
      "Адаптивная M подвеска",
      "Harman Kardon аудио"
    ]
  },
  {
    id: 12,
    name: "BMW X1 sDrive18i",
    series: "X",
    price: 42000,
    image: "https://images.unsplash.com/photo-1653163048173-4305f65cf3f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBYMSUyMGNvbXBhY3QlMjBjcm9zc292ZXJ8ZW58MXx8fHwxNzczNTAxOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Кроссовер",
    drive: "Передний",
    engine: "1.5L TwinPower Turbo",
    power: "140 л.с.",
    acceleration: "9.7 сек",
    year: 2024,
    description: "Компактный премиальный SAV для городской жизни и путешествий.",
    features: [
      "BMW Operating System 8",
      "Парковочный ассистент",
      "LED фары",
      "Apple CarPlay и Android Auto"
    ]
  },
  {
    id: 13,
    name: "BMW M2 Competition",
    series: "M",
    price: 72000,
    image: "https://images.unsplash.com/photo-1772759869784-473406d2d0e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBNMiUyMHNwb3J0cyUyMGNvdXBlfGVufDF8fHx8MTc3MzUwMTk0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Купе",
    drive: "Задний",
    engine: "3.0L Twin-Turbo I6",
    power: "405 л.с.",
    acceleration: "4.2 сек",
    year: 2024,
    description: "Компактное спортивное купе с настоящим характером M Performance.",
    features: [
      "M Sport тормоза",
      "Активный M дифференциал",
      "Спортивные сиденья M",
      "Carbon-керамические тормоза (опция)"
    ]
  },
  {
    id: 14,
    name: "BMW X6 M50i",
    series: "X",
    price: 92000,
    image: "https://images.unsplash.com/photo-1664046119958-7065d4633e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBYNiUyMGNvdXBlJTIwU1VWfGVufDF8fHx8MTc3MzUwMTk0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Внедорожник",
    drive: "Полный",
    engine: "4.4L V8 TwinTurbo",
    power: "530 л.с.",
    acceleration: "4.1 сек",
    year: 2024,
    description: "Спортивный SAV купе с агрессивным дизайном и впечатляющей динамикой.",
    features: [
      "M Sport подвеска Pro",
      "Адаптивная подвеска M",
      "Интегральное активное рулевое управление",
      "M Sport выхлоп"
    ]
  },
  {
    id: 15,
    name: "BMW i3s",
    series: "i",
    price: 48000,
    image: "https://images.unsplash.com/photo-1653163048173-4305f65cf3f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBpMyUyMGVsZWN0cmljJTIwY29tcGFjdHxlbnwxfHx8fDE3NzM1MDE5NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Хэтчбек",
    drive: "Задний",
    engine: "Электрический",
    power: "184 л.с.",
    acceleration: "6.9 сек",
    year: 2024,
    description: "Инновационный городской электромобиль с уникальным дизайном.",
    features: [
      "Запас хода до 310 км",
      "Быстрая зарядка DC",
      "Экологичные материалы интерьера",
      "BMW i ConnectedDrive"
    ]
  },
  {
    id: 16,
    name: "BMW M5 Competition",
    series: "M",
    price: 115000,
    image: "https://images.unsplash.com/photo-1749618989621-9a0038167d6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBNNSUyMHBlcmZvcm1hbmNlJTIwc2VkYW58ZW58MXx8fHwxNzczNTAxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Седан",
    drive: "Полный",
    engine: "4.4L V8 TwinTurbo",
    power: "625 л.с.",
    acceleration: "3.3 сек",
    year: 2024,
    description: "Высокопроизводительный седан с технологией M xDrive и невероятной мощностью.",
    features: [
      "M xDrive полный привод",
      "M Sport выхлоп Titanium",
      "Carbon-керамические тормоза M",
      "M Multifunction сиденья"
    ]
  },
  {
    id: 17,
    name: "BMW 4 Series Convertible",
    series: "4",
    price: 58000,
    image: "https://images.unsplash.com/photo-1655287290532-afcbe826ac2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjA0JTIwc2VyaWVzJTIwY29udmVydGlibGV8ZW58MXx8fHwxNzczNTAxOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Кабриолет",
    drive: "Задний",
    engine: "2.0L TwinPower Turbo",
    power: "255 л.с.",
    acceleration: "6.1 сек",
    year: 2024,
    description: "Элегантный кабриолет с мягким верхом и спортивным характером.",
    features: [
      "Складная тканевая крыша",
      "Автоматический климат-контроль",
      "Подогрев шеи",
      "BMW Live Cockpit Plus"
    ]
  },
  {
    id: 18,
    name: "BMW X4 xDrive30i",
    series: "X",
    price: 59000,
    image: "https://images.unsplash.com/photo-1664046119958-7065d4633e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBYNCUyMGNyb3Nzb3ZlciUyMGNvdXBlfGVufDF8fHx8MTc3MzUwMTk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bodyType: "Кроссовер",
    drive: "Полный",
    engine: "2.0L TwinPower Turbo",
    power: "248 л.с.",
    acceleration: "6.0 сек",
    year: 2024,
    description: "Спортивный SAV купе, сочетающий стиль и функциональность.",
    features: [
      "Спортивная подвеска M",
      "Адаптивные LED фары",
      "BMW Live Cockpit Professional",
      "Панорамная стеклянная крыша"
    ]
  }
];