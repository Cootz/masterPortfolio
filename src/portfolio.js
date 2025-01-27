/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Портфолио Матвеева Артёма",
  description:
    "Ищу проекты с современным стеком (.NET 6+). Пишу свои проекты, изучаю математику, информатику",
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
    "Я ищу проекты с современным стеком (.NET 6+). Пишу свои проекты, изучаю математику, информатику",
  resumeLink: "https://disk.yandex.ru/i/mcd9Li8_CDS13w",
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
    link: "https://github.com/ashutosh1919",
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
        "⚡ Обеспечиваю адаптивность и расширяемость системы",
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
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
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
    "За 2 года я работал с различными задачами от разработки игр до разработки ПО для общественного транспорта",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Работа",
      work: true,
      experiences: [
        {
          title: "Backend разработчик C# (ASP.NET)",
          company: "ЕМ Групп",
          company_url: "https://www.euromobile.ru/",
          logo_path: "em_logo.png",
          duration: "Июнь 2023 - Февраль 2024",
          location: "Санкт-Петербург, Россия",
          description:
            "Занимался разработкой новых и поддержкой существующих микросервисов для сбором, обработкой и хранением телеметрии общественного транспорта Санкт-Петербурга. Из этих данных строились отчёты, визуализации и в режиме реального времени определялись местоположения транпортных средств.",
          color: "#000000",
        },
        {
          title: "Разработчик C#",
          company: "ppy Pty Ltd",
          company_url: "https://osu.ppy.sh/",
          logo_path: "lazer.png",
          duration: "Декабрь 2022 - Май 2023",
          location: "Уэмбли, Австралия",
          description:
            "Я занимался разработкой нового функционала для кроссплатформенного приложения на C#. Реализовал свою идею, от этапа предложения и обсуждения до конечной реализации. Устранил критическую ошибку в работе базы данных, которая приводила к потере данных.",
          color: "#0879bf",
        },
        {
          title: "Разработчик C#",
          company: "Проектная деятельность",
          company_url: "",
          logo_path: "person.png",
          duration: "Февраль 2022 - Декабрь 2022",
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
