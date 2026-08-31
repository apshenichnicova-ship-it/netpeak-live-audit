import { Bottleneck, AuditStage, ProcessStep, CaseStudy, Testimonial, Specialist } from './types';

export const BOTTLENECKS: Bottleneck[] = [
  {
    number: 1,
    title: 'Низька конверсія точок входу',
    description: 'Відвідувачі сайту відсікаються на етапі підписки через застарілі pop-up, відсутність продуманої мотивації або невдале розташування форм.',
    category: 'Lead Capture & UX',
    lossMetric: 'Втрата до 85% потенційних підписників'
  },
  {
    number: 2,
    title: 'Відсутність онбордингу',
    description: 'Покупець робить перше замовлення і зникає, оскільки у воронці немає автоматичного ланцюжка привітання та знайомства з брендом.',
    category: 'Welcome Flow',
    lossMetric: 'Зниження 2nd Order Rate на 40-60%'
  },
  {
    number: 3,
    title: 'Неефективне використання програми лояльності',
    description: 'Бонуси не працюють як тригер для повернення: клієнти відпадають з воронки через відсутність вчасних нагадувань про наявний баланс.',
    category: 'Loyalty & Retention',
    lossMetric: 'Заморожений капітал у бонусних балах'
  },
  {
    number: 4,
    title: 'Перевитрата бюджету на розсилки',
    description: 'Дорогі SMS та Viber-повідомлення надсилаються по всій базі без попередньої перевірки доставки в дешеві канали (Push / Email).',
    category: 'Cascade Routing',
    lossMetric: 'Переплата х3–х5 за кожне повідомлення'
  },
  {
    number: 5,
    title: 'Спам-фільтри та втрата охоплення',
    description: 'Листи падають у папку «Спам» через відсутність базової гігієни бази та налаштувань DKIM/SPF/DMARC, через що воронка втрачає відкриваність (OR).',
    category: 'Deliverability & Domain Health',
    lossMetric: 'Падіння Open Rate нижче 10%'
  },
  {
    number: 6,
    title: 'Відсутність RFM-сегментації та каскадності',
    description: 'Однотипні масові промо-розсилки без урахування життєвого циклу клієнта та частоти покупок спричиняють вигорання бази та високий відтік (Churn Rate).',
    category: 'RFM & Lifecycle',
    lossMetric: 'Відтік до 30% активної клієнтської бази на рік'
  }
];

export const AUDIT_STAGES: AuditStage[] = [
  {
    step: 1,
    title: 'Залучення та збір бази',
    description: 'Оцінка UX/UI форм підписки, pop-up сценаріїв, конверсії з відвідувача в підписника та мотиваційних офферів.',
    deliverables: [
      'Аудит віджетів, статичних форм та Exit-intent pop-up',
      'Оцінка відповідності GDPR/Double Opt-In',
      'Аналіз мотиваторів першого входу (Welcome-промокод, лід-магніт)'
    ]
  },
  {
    step: 2,
    title: 'Перший досвід',
    description: 'Етап онбордингу та «дожиму», що веде до оформлення замовлення.',
    deliverables: [
      'Welcome-серія: таймінги, логіка гілок та тригери',
      'Сценарії покинутих кошиків та покинутих переглядів',
      'Контроль конверсії переходу з першої сесії в транзакцію'
    ]
  },
  {
    step: 3,
    title: 'Повторне звернення',
    description: 'Повернення клієнта після першого замовлення.',
    deliverables: [
      'Пост-продажний ланцюжок (Post-purchase care, NPS/CSAT)',
      'Cross-sell та Up-sell рекомендації на основі історії покупок',
      'Тригери реактивації "сплячих" покупців за періодичністю попиту'
    ]
  },
  {
    step: 4,
    title: 'Лояльність',
    description: 'Побудова довгострокових відносин.',
    deliverables: [
      'Інтеграція бонусної програми з тригерними каналами',
      'Нагадування про згоряння бонусів та персональні спецпропозиції',
      'RFM-сегментація для утримання VIP-клієнтів та максимізації LTV'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    duration: '2 хвилини',
    title: 'Заповнення короткої форми',
    description: 'При бронюванні вказуєте URL сайту та поточний стек інструментів (або позначаєте, що запускаєтеся з нуля). Після заповнення форми з вами зв’яжеться менеджер для призначення зустрічі.',
    tag: 'Крок 1'
  },
  {
    stepNumber: 2,
    duration: '45 хвилин',
    title: 'Live-сесія онлайн',
    description: 'У режимі шерингу екрана разом із Retention-спеціалістом аналізуємо воронку: від точок збору контактів до логіки відправки каскадних повідомлень.',
    tag: 'Крок 2'
  },
  {
    stepNumber: 3,
    duration: 'Наступний день',
    title: 'Передача висновків та точок росту',
    description: 'Отримуєте підсумковий документ із переліком знайдених вузьких місць та покроковою картою дій (для запуску з нуля або оптимізації).',
    tag: 'Крок 3'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'puma',
    client: 'PUMA Ukraine',
    logoText: 'PUMA',
    logoUrl: '/logo_puma.png',
    metric: '+5477,3%',
    metricLabel: 'ROMI у перший місяць співпраці',
    title: 'Як вийти на ROMI 5477,3% у перший місяць співпраці — кейс PUMA з email‑маркетингу',
    description: 'Комплексна перебудова Retention-комунікацій міжнародного спортивного бренду',
    badge: 'Кейс Puma',
    link: 'https://netpeak.net/uk/blog/yak-viyti-na-romi-5477-3-u-pershiy-misyats-spivpratsi-keys-puma-z-email-marketingu/',
    tags: ['E-commerce / Fashion', 'ROMI 5477.3%', 'Каскадні розсилки', 'PUMA']
  },
  {
    id: 'ukrarmor',
    client: 'Ukrarmor',
    logoText: 'UKRARMOR',
    logoUrl: '/logo_ukrarmor.png',
    metric: '+258%',
    metricLabel: 'ROMI в перший місяць роботи',
    title: 'ROMI +258% в перший місяць роботи: кейс Ukrarmor',
    description: 'Як завдяки базовим тригерам і роботі з лояльною аудиторією вдалося досягти ROMI 258% впродовж першого місяця.',
    badge: 'Кейс Ukrarmor',
    link: 'https://netpeak.net/uk/blog/vikhid-na-romi-258-za-pershiy-misyats-roboti-keys-ukrarmor/',
    tags: ['Військова амуніція / D2C', 'ROMI +258%', 'Базові тригери', 'Лояльність']
  },
  {
    id: 'owlymate',
    client: 'Owlymate',
    logoText: 'OWLYMATE',
    logoUrl: '/logo_owlymate.png',
    metric: '5 стратегій',
    metricLabel: 'Для аудиторій від 18 до 65+ років',
    title: 'Кейс Owlymate: як знайти ефективні email-сценарії для різних вікових аудиторій',
    description: 'Щоби перевірити, які підходи спрацьовують для різних вікових груп, ми запустили для Owlymate п’ять email-стратегій для користувачів від 18 до 65+ років і порівняли їхню ефективність за ключовими показниками.',
    badge: 'Кейс Owlymate',
    link: 'https://netpeak.net/uk/blog/yak-znayti-yefektivni-email-stsenarii-dlya-riznikh-vikovikh-auditoriy-keys-owlymate/',
    tags: ['EdTech / Apps', 'Вікова сегментація', 'A/B тестування', '5 сценаріїв']
  },
  {
    id: 'obstava',
    client: 'Obstava',
    logoText: 'OBSTAVA',
    logoUrl: '/logo_obstava.png',
    metric: 'База < 1400',
    metricLabel: 'Позитивний ROMI з 1-го місяця',
    title: 'Кейс Obstava: як ми вивели Obstava на позитивний ROMI в перший місяць з базою до 1400 контактів',
    description: 'Побутує думка, що email-маркетинг працює лише з великою кількістю контактів. Мовляв, якщо підписників мало, канал не окупиться. У цьому кейсі показуємо протилежне: навіть невелика база може приносити прибуток уже в перший місяць роботи.',
    badge: 'Кейс Obstava',
    link: 'https://netpeak.net/uk/blog/yak-mi-viveli-obstava-na-pozitivniy-romi-v-pershiy-misyats-z-bazoyu-do-1400-kontaktiv/',
    tags: ['Меблевий ритейл', 'Мала база контактів', 'Швидкий ROI', 'Micro-list']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'obstava-review',
    author: 'Кирило Грабар',
    position: 'директор',
    company: 'Obstava',
    verified: true,
    quote: '«Довірили проєкт Netpeak через їхнє вражаюче портфоліо і з перших зустрічей переконалися в професіоналізмі команди. Оскільки для нас цей напрямок був новим, ми дуже оцінили те, як швидко нас ввели в курс справи. Найбільше в пам’яті відклалося те, як чітко команда діє у нестандартних ситуаціях: у періоди «падіння» вони миттєво реагують на виклики та знаходять рішення. Наші очікування виправдані на всі 100% — ми навіть не сподівалися отримати такий швидкий результат!»'
  },
  {
    id: 'ukrarmor-review',
    author: 'Владислав Гавінчук',
    position: 'співзасновник та СМО',
    company: 'Ukrarmor',
    verified: true,
    quote: '«Ми працюємо з Netpeak Ukraine уже два роки. Наш партнер допомагає нам диджитал-інструментами, і дуже ефективно — підхопити клієнта і перевести в продаж. Спочатку наша стратегія була — багато говорити про нас. Тепер наша стратегія — ефективно говорити про нас. На ринку зʼявилося більше гравців, тож просто голосно про себе кричати вже не працює.»'
  },
  {
    id: 'owlymate-review',
    author: 'Іван Кутас',
    position: 'Chief Operating Officer',
    company: 'Owlymate',
    verified: true,
    quote: '“Хочемо щиро подякувати спеціалістам email-маркетингу Netpeak за професійний підхід до завдання. Команда працювала блискавично і пушила нас, щоб якнайшвидше запуститися. Це дуже допомагало. Також команда допомагала зрозуміти тактику кампаній і все якісно налаштувати. У нас був невеликий досвід в email-маркетингу, і це додавало спокою і впевненості. Коли ми знову повернемося до роботи з email-маркетингом, обов’язково звернемося саме до Netpeak. Дякуємо за співпрацю!”'
  }
];

export const SPECIALISTS: Specialist[] = [
  {
    id: 'oleksandr-korobov',
    name: 'Олександр Коробов',
    role: 'Team Lead Retention Department в Netpeak',
    experience: '8+ років досвіду',
    description: '8+ років у Retention-маркетингу, побудував 100+ тригерних карт для великого ритейлу, працював з такими гравцями ринку як Puma, AТБ, тощо.',
    clients: ['Puma', 'АТБ', 'Intertop', 'Fozzy Group'],
    avatarUrl: '/oleksandr.jpeg',
    tags: ['Team Lead', '100+ тригерних карт', 'Великий ритейл']
  },
  {
    id: 'olena-polyukhina',
    name: 'Олена Полюхіна',
    role: 'Team Lead Retention Department в Netpeak',
    experience: '6+ років досвіду',
    description: '6+ років у Retention-маркетингу. Спеціалізується на побудові складних автоматизацій. Працювала з такими проєктами як Instytutum, Ukrarmor, Pandora.',
    clients: ['Instytutum', 'Ukrarmor', 'Pandora', 'Brocard'],
    avatarUrl: '/olena.jpeg',
    tags: ['Team Lead', 'Складні автоматизації', 'CDP & Каскади']
  }
];
