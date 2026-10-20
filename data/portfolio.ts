export interface PersonalInfo {
  name: string;
  role: string;
  roles: string[];
  bio: string;
  shortIntro: string;
  location: string;
  email: string;
  telegram: string;
  github: string;
  avatar: string;
  status: string;
  resumeUrl?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
  level: number; // 0 - 100
  levelLabel: string;
  icon: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  isDemo: boolean;
  features: string[];
  challenges?: string;
  role?: string;
  year?: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  type: "education" | "course" | "self-learning" | "project";
  description: string;
  highlights: string[];
  isPlaceholder: boolean;
}

export const portfolioData = {
  personalInfo: {
    name: "Yusufxon",
    role: "Backend Developer",
    roles: [
      "Backend Developer",
      "Backend Dasturchi",
      "Node.js & NestJS Dasturchisi",
      "PostgreSQL & Database Arxitekturasi",
      "RESTful API & Microservices",
    ],
    shortIntro:
      "Zamonaviy, xavfsiz va yuqori yuklamalarga chidamli Backend tizimlar, ma'lumotlar bazasi va API-lar ishlab chiquvchi dasturchi.",
    bio: "Men backend dasturlash sohasiga chuqur qiziqqan dasturchiman. Server tomoni arxitekturasi, ma'lumotlar bazalarini loyihalash va optimallashtirish, Node.js, NestJS, PostgreSQL va xavfsiz RESTful API tizimlarini ishlab chiqish bilan shug'ullanaman.",
    location: "Farg'ona, O'zbekiston",
    email: "mavjudadarisheva@gmail.com",
    telegram: "https://t.me/VELKOMEN2012",
    github: "https://github.com/yusufxondasturchi",
    avatar: "/avatar-placeholder.svg",
    status: "Yangi loyihalar va takliflarga ochiq",
  } satisfies PersonalInfo,

  about: {
    badge: "Men haqimda",
    title: "Veb dasturlashga ishtiyoqmand talaba va izlanuvchi",
    paragraphs: [
      "Assalomu alaykum! Men zamonaviy veb-texnologiyalar olamiga qiziqib, ushbu yo'nalishda izchil bilim olayotgan talabaman. Maqsadim — nafaqat ishlaydigan kod yozish, balki foydalanuvchilar uchun vizual jihatdan chiroyli, qulay va xavfsiz raqamli mahsulotlar yaratishdir.",
      "O'rganish jarayonida nazariyani doimo amaliyot bilan birlashtirib boraman. Kichik qismlardan boshlab murakkab tizimlargacha bo'lgan loyihalarni yaratish, toza kod yozish (Clean Code) va zamonaviy arxitektura tamoyillarini o'zlashtirishga katta e'tibor qaratmoqdaman.",
      "Jamoada ishlash, tajribali dasturchilardan o'rganish va o'z bilimlarimni real loyihalarda sinab ko'rishga doimo tayyorman. Bo'sh vaqtimda yangi kutubxonalarni o'rganaman, dasturlashga oid maqolalarni mutolaa qilaman va shaxsiy loyihalarim ustida ishlayman.",
    ],
    stats: [
      {
        value: "4+",
        label: "Amaliy loyihalar",
        hint: "Full-stack va Backend tizimlar",
      },
      {
        value: "1+",
        label: "Yillik izlanish",
        hint: "Faol kod yozish tajribasi",
      },
      {
        value: "9",
        label: "Texnologiyalar",
        hint: "Frontend, Backend & Asboblar",
      },
      {
        value: "100%",
        label: "Mas'uliyat",
        hint: "O'rganishga bo'lgan intilish",
      },
    ],
    principles: [
      {
        title: "Toza va tushunarli kod",
        desc: "O'qilishi oson, qayta ishlatiladigan va standartlarga mos TypeScript kod yozish.",
        icon: "Code2",
      },
      {
        title: "Moslashuvchan (Responsive) dizayn",
        desc: "Barcha qurilmalarda — telefon, planshet va kompyuterda mukammal ko'rinish.",
        icon: "Smartphone",
      },
      {
        title: "Tezkorlik va unumdorlik",
        desc: "Next.js va zamonaviy optimizatsiyalar yordamida yuqori yuklanish tezligini ta'minlash.",
        icon: "Zap",
      },
      {
        title: "Doimiy rivojlanish",
        desc: "Har kuni yangi bilim olish va xatolardan to'g'ri xulosa chiqarib o'sish.",
        icon: "TrendingUp",
      },
    ],
  },

  skills: [
    // Frontend
    {
      name: "HTML",
      category: "frontend",
      level: 95,
      levelLabel: "Mukammal",
      icon: "FileCode2",
      description: "Semantik teglar, veb-standartlar, zamonaviy DOM tuzilishi va SEO optimizatsiyasi.",
    },
    {
      name: "CSS",
      category: "frontend",
      level: 90,
      levelLabel: "Yuqori daraja",
      icon: "Palette",
      description: "Flexbox, Grid, CSS o'zgaruvchilar, zamonaviy animatsiyalar va to'liq moslashuvchan dizayn.",
    },
    {
      name: "JavaScript",
      category: "frontend",
      level: 88,
      levelLabel: "Yuqori daraja",
      icon: "Braces",
      description: "ES6+, asinxron dasturlash (Promises, async/await), funksional logika va amaliy algoritmlar.",
    },
    {
      name: "TypeScript",
      category: "frontend",
      level: 85,
      levelLabel: "Yaxshi daraja",
      icon: "FileJson",
      description: "Statik tiplar, interfeyslar, generiklar va yirik loyihalarda xavfsiz kod yozish.",
    },
    {
      name: "Next.js",
      category: "frontend",
      level: 85,
      levelLabel: "Amaliyotda",
      icon: "Globe",
      description: "App Router, Server va Client Components, Server Actions, marshrutlash va yuqori tezlik.",
    },

    // Backend
    {
      name: "Node.js",
      category: "backend",
      level: 82,
      levelLabel: "Amaliyotda",
      icon: "Server",
      description: "RESTful API tizimlari, asinxron hodisalar arxitekturasi, middleware va server logikasi.",
    },
    {
      name: "PostgreSQL",
      category: "backend",
      level: 80,
      levelLabel: "Amaliyotda",
      icon: "Database",
      description: "Relyatsion ma'lumotlar bazasi loyihalash, SQL so'rovlar, indekslar va tranzaksiyalar xavfsizligi.",
    },
    {
      name: "MongoDB",
      category: "backend",
      level: 78,
      levelLabel: "Yaxshi daraja",
      icon: "Leaf",
      description: "Hujjatlarga asoslangan NoSQL ma'lumotlar bazasi, BSON sxemalari va tezkor CRUD amallari.",
    },

    // Tools & Version Control
    {
      name: "Git",
      category: "tools",
      level: 85,
      levelLabel: "Yuqori daraja",
      icon: "GitBranch",
      description: "Versiyalar nazorati, branch-lar bilan ishlash, commit-lar tarixi, GitHub va hamkorlik.",
    },
  ] satisfies Skill[],

  projects: [
    {
      slug: "fitgym-crm-management",
      title: "FitGym — Sport Zal Boshqaruv Tizimi (CRM)",
      shortDesc:
        "Mijozlar, abonementlar, murabbiylar, mashg'ulotlar jadvali va 3 kun oldin ogohlantirish tizimiga ega kompleks sport zal boshqaruv tizimi.",
      fullDesc:
        "Ushbu loyiha sport zallari va fitnes klublar faoliyatini to'liq avtomatlashtirish uchun ishlab chiqilgan keng qamrovli CRM boshqaruv tizimidir. Tizimda admin va xodimlar yangi mijozlarni ro'yxatdan o'tkazishi, ularga mos murabbiylarni biriktirishi, abonement turlarini (Standard, VIP, oylik) belgilashi va to'lovlarni nazorat qilishi mumkin. Eng qulay imkoniyatlaridan biri — abonement muddati tugashiga 3 kun qolganda tizim avtomatik ogohlantirish beradi va tushumlarni kunlik hamda oylik grafiklarda taqdim etadi.",
      image: "/projects/gym.svg",
      tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Next.js"],
      githubUrl: "https://github.com/yusufxondasturchi/fitgym-crm",
      liveUrl: "https://fitgym-demo.example.com",
      isDemo: true,
      role: "Backend & Database Arxitekturasi",
      year: "2024",
      features: [
        "Mijozlar (Customers), Murabbiylar (Trainers) va Abonementlar to'liq boshqaruvi",
        "Abonement muddati tugashidan 3 kun oldin avtomatik monitoring va ogohlantirish",
        "Kunlik va oylik daromadlar (Payments) hisoboti va moliyaviy dashboard",
        "Haftalik mashg'ulotlar jadvali va murabbiylarga mijozlarni biriktirish",
        "Rollar tizimi (ADMIN, STAFF, TRAINER, CUSTOMER) va xavfsiz JWT autentifikatsiya",
        "PostgreSQL relyatsion bazasi va Prisma ORM orqali tezkor ma'lumotlar almashinuvi",
      ],
      challenges:
        "Ko'p jadvalli murakkab bog'liqliklarga ega relyatsion bazani (User -> Customer -> Membership -> Payment) xavfsiz va xatosiz loyihalash hamda real vaqtda abonement muddatlarini avtomat tekshirish tizimini optimallashtirish.",
    },
    {
      slug: "online-shop-telegram-bot",
      title: "Online Do'kon & Telegram Bot E-Commerce Tizimi",
      shortDesc:
        "Mahsulotlar katalogi, toifalar, interaktiv savatcha, buyurtma berish va har bir buyurtmani adminga Telegram Bot orqali avtomatik yuborish tizimi.",
      fullDesc:
        "Haqiqiy savdo jarayonlari asosida yaratilgan to'liq e-commerce do'kon platformasi. Foydalanuvchilar toifalar (Telefonlar, Kompyuterlar, Aksessuarlar va boshqalar) bo'yicha mahsulotlarni ko'rishlari, savatga qo'shishlari va checkout sahifasida o'z ma'lumotlarini (ism, telefon, yetkazib berish manzili) kiritib buyurtma rasmiylashtirishlari mumkin. Buyurtma berilishi bilanoq, Telegram Bot orqali administratorga xabar boradi. Admin sayt yoki bot orqali yetkazib berish narxi va vaqtini belgilab, xaridorga buyurtma qabul qilingani haqida javob yuboradi.",
      image: "/projects/ecommerce.svg",
      tags: ["NestJS", "TypeScript", "PostgreSQL", "Telegram Bot API", "React"],
      githubUrl: "https://github.com/yusufxondasturchi/online-shop-telegram",
      liveUrl: "https://shop-telegram-demo.example.com",
      isDemo: true,
      role: "Full-Stack & Telegram Bot Integratsiyasi",
      year: "2024",
      features: [
        "Mahsulotlar katalogi, toifalar bo'yicha saralash va qulay qidiruv",
        "Real vaqtda savatcha (Cart) boshqaruvi va umumiy summani hisoblash",
        "Checkout formasi (ism, telefon raqam, to'liq yetkazib berish manzili)",
        "Yangi buyurtmalarni Telegram Bot orqali zudlik bilan adminga yuborish",
        "Admin paneli orqali yetkazib berish narxi va vaqtini boshqarish",
        "Order statuslarini (Kutilmoqda, Qabul qilindi, Yetkazilmoqda, Yakunlandi) nazorat qilish",
      ],
      challenges:
        "Savatdan buyurtma yaratishgacha bo'lgan tranzaksiyalarni ma'lumotlar bazasida xavfsiz saqlash va Telegram Bot API orqali asinxron bildirishnomalar yuborishda uzilishlar bo'lmasligini ta'minlash.",
    },
    {
      slug: "tournament-ranking-system",
      title: "Tournament Ranking & Management System (Musobaqalar Tizimi)",
      shortDesc:
        "Turnirlar jadvali, jamoalar va ishtirokchilar ro'yxati, match setkasi va real-time hisoblanadigan global reyting (Leaderboard) platformasi.",
      fullDesc:
        "Kibersport va sport turnirlarini professional darajada tashkillashtirish va boshqarish uchun mo'ljallangan backend va boshqaruv tizimi. Loyiha orqali yangi turnirlar ochish, jamoalarni ro'yxatdan o'tkazish, pley-off va guruh bosqichlari setkalarini shakllantirish mumkin. Har bir match natijasi kiritilgach, tizim avtomatik tarzda g'oliblarni aniqlaydi va umumiy peshqadamlar jadvali (Leaderboard) ballarini bir zumda qayta hisoblab beradi.",
      image: "/projects/tournament.svg",
      tags: ["NestJS", "TypeScript", "PostgreSQL", "RESTful API", "Clean Architecture"],
      githubUrl: "https://github.com/yusufxondasturchi/tournament-ranking-backend",
      liveUrl: "https://tournament-demo.example.com",
      isDemo: true,
      role: "Backend & API Dasturchisi",
      year: "2024",
      features: [
        "Turnirlar yaratish, matchlar jadvali va pley-off setkasini shakllantirish",
        "Jamoalar va o'yinchilar profillarini ro'yxatga olish hamda boshqarish",
        "Matchlar natijalarini kiritish va g'oliblarni avtomatik saralash",
        "Global reyting (Leaderboard) va ballarni real vaqtda qayta hisoblash",
        "DTO validatsiyalari, xatoliklarni qayta ishlash va xavfsiz REST API arxitekturasi",
      ],
      challenges:
        "Matchlar yakunlanishi bilan turnir setkasini va jamoalarning reyting ballarini bir vaqtda bir nechta matchlar bo'lganda ham parallel va to'g'ri qayta hisoblash algoritmini ishlab chiqish.",
    },
    {
      slug: "yusufxon-developer-portfolio",
      title: "Yusufxon — Zamonaviy Dasturchi Portfoliosi (Personal Portfolio)",
      shortDesc:
        "Next.js 16 (App Router), TypeScript, Tailwind CSS va Framer Motion yordamida yaratilgan, qorong'u/yorug' rejimli yuqori samarador shaxsiy veb-sayt.",
      fullDesc:
        "Dasturchining bilim va ko'nikmalari hamda amaliy loyihalarini eng yuqori standartlarda taqdim etuvchi zamonaviy shaxsiy veb-portfolio. Loyihada zamonaviy Glassmorphism va Neon dizayn uslubi, qorong'u (Dark) va yorug' (Light) mavzular, ko'nikmalar filtri va har bir loyihaning texnik tafsilotlarini o'z ichiga olgan alohida dinamik sahifalar mavjud. Veb-sayt qidiruv tizimlari (SEO) va mobil qurilmalarga to'liq moslashtirilgan.",
      image: "/projects/portfolio.svg",
      tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/yusufxondasturchi/portfolio",
      liveUrl: "https://yusufxon-dev.example.com",
      isDemo: true,
      role: "Full-Stack Dasturchi",
      year: "2024",
      features: [
        "Next.js 16 App Router va Turbopack asosidagi yuqori yuklanish tezligi",
        "Ko'nikmalar (Frontend, Backend, Tools) bo'yicha dinamik filtr tizimi",
        "Har bir loyiha uchun alohida dinamik sahifalar (/projects/[slug])",
        "Dark / Light rejimlar va silliq mikromatsiyalar (Framer Motion)",
        "Bog'lanish shakli, ijtimoiy tarmoqlar integratsiyasi va 100% responsive dizayn",
      ],
      challenges:
        "Murakkab neon animatsiyalar va interaktiv komponentlarni sayt unumdorligi va tezligiga salbiy ta'sir ko'rsatmagan holda optimallashtirish.",
    },
  ] satisfies Project[],

  timeline: [
    {
      id: "edu-1",
      title: "Axborot Texnologiyalari yo'nalishi bo'yicha talaba",
      institution: "[UNIVERSITET NOMI: Masalan TATU / Amity / INHA / O'zbekiston Milliy Universiteti]",
      period: "[YIL: 2022 - Hozirgacha]",
      type: "education",
      description:
        "Dasturiy ta'minot injiniringi, algoritmlar va ma'lumotlar tuzilmalari, diskret matematika hamda kompyuter tarmoqlari asoslarini o'rganmoqdaman.",
      highlights: [
        "Algoritmik fikrlash va masalalarni tahlil qilish",
        "Dasturlash asoslari va OOD/OOP tamoyillari",
        "O'quv loyihalarida jamoaviy ishlash ko'nikmasi",
      ],
      isPlaceholder: true,
    },
    {
      id: "course-1",
      title: "Zamonaviy Veb Dasturlash (Full-Stack Bootcamp / Kurs)",
      institution: "[O'QUV MARKAZI: Masalan Najot Ta'lim / Mohirdev / Astrum / IT Park]",
      period: "[YIL: 2023 - 2024]",
      type: "course",
      description:
        "Veb texnologiyalarining zamonaviy steki: HTML/CSS, JavaScript ES6+, React, Node.js va PostgreSQL bo'yicha intensiv amaliy o'quv dasturi.",
      highlights: [
        "10 dan ortiq amaliy o'quv loyihalarini yakunlash",
        "REST API yaratish va ma'lumotlar bazasi bilan ishlash",
        "Git va GitHub yordamida loyiha boshqaruvi",
      ],
      isPlaceholder: true,
    },
    {
      id: "self-1",
      title: "Mustaqil O'rganish & Open-Source Loyihalar",
      institution: "[MUSTAQIL TA'LIM: Next.js Documentation, MDN, YouTube, Frontend Masters]",
      period: "[YIL: 2023 - Hozirgacha]",
      type: "self-learning",
      description:
        "Next.js App Router, TypeScript, Tailwind CSS, Prisma ORM va zamonaviy arxitektura tamoyillarini mustaqil ravishda chuqur o'rganish va amaliyotda qo'llash.",
      highlights: [
        "Next.js 14/15/16 App Router imkoniyatlarini sinab ko'rish",
        "TypeScript yordamida to'liq xavfsiz kod yozish",
        "UI/UX dizayn tizimlari va qulay komponentlar yaratish",
      ],
      isPlaceholder: true,
    },
    {
      id: "proj-1",
      title: "Shaxsiy va Amaliy Demo Loyihalar Tayyorlash",
      institution: "Shaxsiy Portfolio & GitHub",
      period: "[YIL: 2024 - Hozirgacha]",
      type: "project",
      description:
        "E-commerce, moliya nazorati, biznes saytlari va xizmat ko'rsatish sohalari uchun 4 ta to'liq demo veb-saytni noldan ishlab chiqish va taqdim etish.",
      highlights: [
        "Murakkab interfeyslar va animatsiyalar bilan ishlash",
        "State boshqaruvi va ma'lumotlarni sinxronlash",
        "Vercel orqali avtomatik joylashtirish (deploy) jarayoni",
      ],
      isPlaceholder: true,
    },
  ] satisfies TimelineItem[],

  contact: {
    badge: "Bog'lanish",
    title: "Keling, birgalikda ajoyib loyiha yaratamiz!",
    subtitle:
      "Savollaringiz, takliflaringiz yoki yangi imkoniyatlar bo'lsa, quyidagi forma yoki ijtimoiy tarmoqlar orqali bemalol xabar qoldiring.",
    email: "mavjudadarisheva@gmail.com",
    telegram: "https://t.me/VELKOMEN2012",
    telegramUsername: "@VELKOMEN2012",
    github: "https://github.com/yusufxondasturchi",
    location: "Farg'ona, O'zbekiston",
    workStatus: "Frilans yoki kichik loyihalarga ochiqman",
  },
};
