/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Портфолио Матвеева Артёма",
  description:
    "Backend-разработчик на C#/.NET: высоконагруженные сервисы и микросервисы на .NET 8–10, Kafka, PostgreSQL, Redis, OpenTelemetry. Открыт к удалённой работе.",
  og: {
    title: "Портфолио Матвеева Артёма",
    type: "website",
    url: "https://cootz.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Матвеев Артём",
  logo_name: "Cootz",
  nickname: "Cootz",
  subTitle:
    "Backend-разработчик на C#/.NET, 3+ года опыта. Делаю высоконагруженные сервисы и микросервисные платформы: потоковые данные с транспорта и вендинговых автоматов, управление доступом, интеграции. Снизил нагрузку на сервер, обрабатывающий данные 2000+ транспортных средств, в 10 раз. Ищу полностью удалённую работу над высоконагруженными системами.",
  resumeLink: "https://disk.yandex.com/i/O7uaGGCQabHrHw",
  portfolio_repository: "",
  githubProfile: "https://github.com/Cootz",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Cootz",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Telegram",
    link: "https://t.me/CootzM",
    fontAwesomeIcon: "fa-telegram", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#3BA2D6", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Yandex",
    link: "mailto:artiom.matveeff2014@yandex.ru",
    fontAwesomeIcon: "fa-yandex", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#FC3F1D", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Backend разработчик",
      fileName: "FullStackImg",
      skills: [
        "⚡ Разрабатываю высокопроизводительные микросервисы",
        "⚡ Планирую, создаю и оптимизирую базы данных",
        "⚡ Оптимизирую производительность под ограничения по памяти и процессору",
        "⚡ Внедряю общие решения в команде: шаблоны сервисов, библиотеки контрактов",
        "⚡ Строю асинхронное взаимодействие через Kafka и наблюдаемость: OpenTelemetry, Serilog, Grafana",
        "⚡ Покрываю код unit- и интеграционными тестами (xUnit, NUnit, Testcontainers)",
      ],
      softwareSkills: [
        {
          skillName: "C#",
          fontAwesomeClassname: "skill-icons:cs",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Фреймворк .NET",
          fontAwesomeClassname: "skill-icons:dotnet",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "skill-icons:postgresql-light",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "skill-icons:redis-light",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "skill-icons:kafka",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "skill-icons:grafana-light",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "skill-icons:prometheus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "skill-icons:postman",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker&Docker-Compose",
          fontAwesomeClassname: "skill-icons:docker",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GitLab",
          fontAwesomeClassname: "skill-icons:gitlab-light",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scripting",
          fontAwesomeClassname: "skill-icons:bash-light",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "",
      iconifyClassname: "",
      style: {
        color: "#F79F1B",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "",
      subtitle: "",
      logo_path: "",
      alt_name: "",
      duration: "",
      descriptions: [],
      website_link: "",
    },
    {
      title: "",
      subtitle: "",
      logo_path: "iu_logo.png",
      alt_name: "",
      duration: "",
      descriptions: [],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "",
      subtitle: "",
      logo_path: "",
      certificate_link: "",
      alt_name: "",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Опыт",
  subtitle: "Работа, Стажировки и Олимпиады",
  description:
    "3+ года в backend-разработке на C#/.NET: от мониторинга 2000+ единиц общественного транспорта Санкт-Петербурга до платформы управления вендинговыми автоматами и маркетплейса для Аэрофлота",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Работа",
      work: true,
      experiences: [
        {
          title: ".NET-разработчик",
          company: "Uvenco (Ювенко)",
          company_url: "",
          logo_path: "person.png",
          duration: "Март 2025 - Октябрь 2026",
          location: "Удалённо",
          description:
            "Крупнейший вендинговый оператор России. Новая платформа управления сетью вендинговых автоматов на замену прежней системе телеметрии: 15 микросервисов на .NET 8–10 (PostgreSQL, Apache Kafka, Keycloak), команда из 3 backend-разработчиков. Полностью отвечал за подсистему доступа: вход, авторизация, роли, управление пользователями, восстановление доступа, интеграция с Keycloak и доработка open-source расширения на Java. Разработал сервисы, через которые пользователи получают данные с автоматов и отправляют им команды. Предложил и внедрил общие библиотеки контрактов по бизнес-доменам и шаблон микросервиса с готовыми логированием и мониторингом. Настроил полный мониторинг платформы: логи, трейсы, метрики, дашборды. Проводил ревью и онбординг нового разработчика. С июня 2026 разрабатывал маркетплейс программы лояльности Аэрофлота на замену МилиМаркету: модуль каталога и интеграцию с корзиной.",
          color: "#000000",
        },
        {
          title: "Backend разработчик C#",
          company: "Проектная деятельность",
          company_url: "",
          logo_path: "person.png",
          duration: "Декабрь 2024 - Март 2025",
          location: "Санкт-Петербург, Россия",
          description:
            "Осваивал на практике технологии, которые затем применил в коммерческой разработке. Собрал полный стек мониторинга для .NET-сервиса: метрики, трейсы и логи через OpenTelemetry, Prometheus, Tempo, Loki и Grafana (GitHub: OpenTelemetryPlayground). Сделал веб-приложение для учёта заказов на .NET 9, PostgreSQL и React (GitHub: OrderManager). Реализовал кэширование в Redis с инвалидацией и валидацию данных (GitHub: PostsCaching).",
          color: "#000000",
        },
        {
          title: "Backend разработчик C# (ASP.NET)",
          company: "ЕМ Групп",
          company_url: "https://www.euromobile.ru/",
          logo_path: "em_logo.png",
          duration: "Июнь 2023 - Февраль 2024",
          location: "Санкт-Петербург, Россия",
          description:
            "Система мониторинга общественного транспорта Санкт-Петербурга: 2000+ транспортных средств, местоположение онлайн, история перемещений, отчёты, видео с камер, связь водителей с диспетчерами. Разрабатывал микросервисы сбора, обработки и хранения телеметрии и генерации отчётов (ASP.NET, PostgreSQL, ClickHouse, Redis, gRPC). Снизил нагрузку на процессор продакшн-сервера с 90% до 9%: переработал приём и разбор данных от 2000+ транспортных средств (async-сеть, Span, ValueTask, профилирование через BenchmarkDotNet). Свёл публичный API в единую точку входа, чтобы внутренние изменения не затрагивали внешних клиентов.",
          color: "#000000",
        },
        {
          title: "Разработчик C# (open source)",
          company: "ppy Pty Ltd",
          company_url: "https://osu.ppy.sh/",
          logo_path: "lazer.png",
          duration: "Декабрь 2022 - Май 2023",
          location: "Удалённо, open source",
          description:
            "Open-source разработка osu!, кроссплатформенной игры на C#/.NET. Довёл свою фичу от предложения и обсуждения до мержа в основной репозиторий. Исправил критическую ошибку в работе с базой данных, которая приводила к потере данных. Код проходил ревью core-команды.",
          color: "#0879bf",
        },
        {
          title: "Разработчик C#",
          company: "Проектная деятельность",
          company_url: "",
          logo_path: "person.png",
          duration: "Февраль 2022 - Ноябрь 2022",
          location: "",
          description:
            "Занимался разработкой утилит для командной строки и десктоп приложений на C#. Разработал многопоточный парсер для больших данных, что позволило значительно ускорить обработку информации. Разработал десктоп приложение на C# для хранения паролей с шифрованием данных.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Стажировки",
      experiences: [
        {
          title: "Продвинутая разработка на C# и .NET Core",
          company: "Digital Design",
          company_url: "https://digdes.ru/",
          logo_path: "logo-dd.svg",
          duration: "Октябрь 2021 - Декабрь 2021",
          location: "Санкт-Петербург, Россия",
          description:
            "Изучал принципы работы многопоточности, параллельных и асинхронных вычислений",
          color: "#000000",
        },
        {
          title: "Вводный курс в C# и ООП",
          company: "Политех",
          company_url: "https://www.spbstu.ru/",
          logo_path: "politech.png",
          duration: "2019 год",
          location: "Санкт-Петербург, Россия",
          description:
            "Изучал основы программирования на C# и базовые принципы ООП.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Олимпиады",
      experiences: [
        {
          title: "Победитель олимпиады WorldSkills Russia по Санкт-Петербургу",
          company: "WorldSkills",
          company_url: "https://worldskills.org/",
          logo_path: "ws-logo.svg",
          duration: "Декабрь 2021 - Апрель 2022",
          location: "Санкт-Петербург, Россия",
          description:
            "На олимпиаде WorldSkills Russia по сетевому и системному администрированию я выполнял комплексные задания, включающие установку, настройку и поддержку сетевых и серверных систем, устранение неполадок, обеспечение безопасности сетей, а также планировал и проводил резервные копирования, работал с оборудованием Cisco, операционными системами Windows и Linux.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Проекты",
  description:
    "Мои проекты используют различные современные фреймворки. Я люблю создавать и помогать разрабатывать инструменты для создания быстрого, качественного и понятного кода.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Мои контакты",
    profile_image_path: "animated_ashutosh.png",
    description:
      "Меня можно найти на всех нижеуказанных платформах. Вы можете написать мне и я отвечу в течении 24 часов.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "",
    subtitle: "",
    locality: "",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
