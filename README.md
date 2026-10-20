# ⚡ Premium Dasturchi Portfoliosi (Personal Developer Portfolio)

Ushbu loyiha zamonaviy **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** va **Lucide React** yordamida noldan yaratilgan yuqori sifatli, kreativ va to'liq moslashuvchan (responsive) shaxsiy dasturchi portfoliosidir.

---

## 🌟 Asosiy Xususiyatlar (Key Features)

- 🎨 **Original Dizayn**: Qorong'u rejim birinchi o'rinda (dark-first), elektr zangori (Electric blue: `#00f0ff`) porlovchi aktsentlar, zamonaviy shishasimon (glassmorphism) kartalar va toza tipografiya.
- 🌓 **Qorong'u va Yorug' Rejim (Dark/Light Mode)**: Sahifa yangilanganda ham tanlangan rejim saqlanib qoladi (LocalStorage).
- ⌨️ **Animatsiyali Yozish Effekti (Typing Effect)**: Kasb va yo'nalishlar silliq almashib turadi.
- 🎯 **Moslashuvchan Custom Cursor**: Faqat sichqoncha bilan ishlovchi qurilmalarda faollashadi, sensorli (touch) ekranlarda xalaqit bermaydi.
- 📱 **100% Responsive Layout**: Mobil, planshet va katta monitorlarda to'liq moslashuvchan.
- 📊 **Texnologiyalar va Ko'nikmalar**: Progress bar ko'rsatkichlari va toifalar bo'yicha saralash.
- 💼 **Amaliy Demo Loyihalar**: 4 ta to'liq demo loyiha kartasi hamda har bir loyiha uchun alohida dinamik sahifa (`/projects/[slug]`).
- 🎓 **Ta'lim & O'rganish Xronologiyasi**: Universitet, intensiv kurslar va mustaqil ta'lim bosqichlari.
- ✉️ **Interaktiv Aloqa Formasi**: Maydonlarni to'g'ri to'ldirish tekshiruvi (validatsiya) va bitta tugma bilan elektron pochtadan nusxa olish (Copy Email).
- ⚡ **SEO & Tezkorlik**: Next.js 16 App Router va qulay metadata sozlamalari.

---

## 🚀 O'rnatish va Ishga Tushirish (Getting Started)

### 1. Talablar:
- [Node.js](https://nodejs.org/) (v18.18 yoki undan yuqori tavsiya etiladi)
- `npm` yoki `pnpm` / `yarn`

### 2. Loyihani yuklab olish va paketlarni o'rnatish:
Terminalda loyiha papkasiga kiring va quyidagi buyruqni bajaring:

```bash
npm install
```

### 3. Dasturchi serverini (dev mode) ishga tushirish:

```bash
npm run dev
```

Brauzeringizda [http://localhost:3000](http://localhost:3000) manzilini oching.

### 4. Ishchi (Production) versiyasini yig'ish:

```bash
npm run build
npm run start
```

---

## ✏️ Ma'lumotlarni O'zingizga Moslashtirish (Customization Guide)

Barcha shaxsiy ma'lumotlar, ism-sharif, rasm, loyihalar va ko'nikmalar bitta joyda — `data/portfolio.ts` faylida qulay tarzda jamlangan!

### 1. Ism, rol va aloqa ma'lumotlarini o'zgartirish:
`data/portfolio.ts` faylini oching va `personalInfo` qismini tahrirlang:
```typescript
personalInfo: {
  name: "Sizning Ism-Familiyangiz", // [YOUR FULL NAME] o'rniga
  role: "Junior Full-Stack Developer",
  roles: [
    "Junior Full-Stack Dasturchi",
    "React & Next.js Dasturchisi",
    "TypeScript Ishqibozi"
  ],
  location: "Toshkent, O'zbekiston", // [YOUR CITY] o'rniga
  email: "sizning.pochtangiz@gmail.com", // [YOUR EMAIL] o'rniga
  telegram: "https://t.me/sizning_username", // [YOUR TELEGRAM URL] o'rniga
  github: "https://github.com/sizning_username", // [YOUR GITHUB URL] o'rniga
  avatar: "/avatar-placeholder.svg", // O'zingizning rasmingiz (masalan, /my-photo.jpg)
}
```

### 2. Shaxsiy fotosuratni (profil rasmini) almashtirish:
1. O'zingizning fotosuratingizni `public/` papkasiga joylang (masalan, `public/profile.jpg`).
2. `data/portfolio.ts` faylidagi `avatar: "/avatar-placeholder.svg"` qatorini `avatar: "/profile.jpg"` ga o'zgartiring.

### 3. Ko'nikmalar va foizlarni tahrirlash:
`data/portfolio.ts` ichidagi `skills` massividan istalgan texnologiyani qo'shishingiz, o'chirishingiz yoki foiz darajasini o'zgartirishingiz mumkin:
```typescript
{
  name: "React.js",
  category: "frontend",
  level: 85, // 0 dan 100 gacha foiz
  levelLabel: "Yuqori daraja",
  icon: "Layers",
  description: "Hooks, Redux/Zustand va komponentlar arxitekturasi."
}
```

### 4. Loyihalarni o'zgartirish:
`data/portfolio.ts` ichidagi `projects` massivida 4 ta demo loyiha mavjud. Ularni o'zingizning haqiqiy loyihalaringizga almashtirishingiz mumkin:
- `title`: Loyihangiz nomi
- `slug`: Brauzer manzili (masalan: `my-awesome-project`)
- `image`: Loyihangiz skrinshotining yo'li (masalan: `/projects/my-screenshot.png`)
- `githubUrl`: Haqiqiy GitHub havolangiz
- `liveUrl`: Loyihaning jonli ishlash havolasi
- `features`: Asosiy imkoniyatlar ro'yxati

---

## 🐙 Loyihani GitHub-ga Yuklash (Uploading to GitHub)

1. [GitHub](https://github.com/) saytida yangi repozitoriy yarating (masalan, `my-developer-portfolio`).
2. Kompyuteringizdagi loyiha papkasida terminalni oching va quyidagi buyruqlarni bajaring:

```bash
# Git-ni ishga tushirish
git init

# Barcha fayllarni tayyorlash
git add .

# Ilk commit-ni amalga oshirish
git commit -m "feat: initial commit - developer portfolio"

# Asosiy branch nomini main ga o'zgartirish
git branch -M main

# GitHub repozitoriyangizni ulash (O'z havolangizni qo'ying):
git remote add origin https://github.com/SIZNING_USERNAME/my-developer-portfolio.git

# GitHub-ga yuklash:
git push -u origin main
```

---

## 🚀 Loyihani Vercel-ga Bepul Joylashtirish (Deploy to Vercel)

Vercel — Next.js loyihalarini joylashtirish uchun eng qulay va tezkor platformadir:

1. [Vercel](https://vercel.com/) saytiga kiring va GitHub profilingiz orqali tizimga kiring (Sign in with GitHub).
2. Asosiy sahifada **"Add New..."** tugmasini bosib, **"Project"** bo'limini tanlang.
3. GitHub-dagi `my-developer-portfolio` repozitoriyangiz yonidagi **"Import"** tugmasini bosing.
4. Hech qanday murakkab sozlash shart emas — Vercel avtomatik tarzda Next.js sozlamalarini aniqlaydi.
5. **"Deploy"** tugmasini bosing.
6. 1-2 daqiqa ichida saytingiz global internet tarmog'iga bepul HTTPS domeni bilan taqdim etiladi (masalan: `https://my-developer-portfolio.vercel.app`)!

---

## 🛠️ Loyiha Fayllari Tuzilishi (Project Structure)

```
promt/
├── app/
│   ├── globals.css              # Asosiy CSS tokenlar, neon glow, shisha effektlar
│   ├── layout.tsx               # SEO, ThemeProvider, CustomCursor, meta teglar
│   ├── page.tsx                 # Asosiy bir sahifali portfolio
│   ├── not-found.tsx            # Maxsus 404 xatolik sahifasi
│   └── projects/
│       └── [slug]/
│           └── page.tsx         # Dinamik loyiha batafsil sahifasi
├── components/
│   ├── Navbar.tsx               # Yopishqoq menyu, mobil menyu, bo'lim havolalari
│   ├── Hero.tsx                 # Typing animatsiyasi, ism, rol, avatar
│   ├── About.tsx                # O'rganish yo'li, maqsad, statistika
│   ├── Skills.tsx               # Ko'nikmalar, progress bar, toifalar
│   ├── Projects.tsx             # Loyihalar ro'yxati
│   ├── ProjectCard.tsx          # Qayta ishlatiladigan loyiha kartasi
│   ├── Experience.tsx           # Ta'lim va xronologiya
│   ├── Contact.tsx              # Aloqa formasi, validatsiya, copy email
│   ├── Footer.tsx               # Mualliflik huquqi, ijtimoiy havolalar
│   ├── ThemeToggle.tsx          # Qorong'u/yorug' rejim tugmasi
│   ├── ThemeProvider.tsx        # Rejim konteksti va xotira boshqaruvi
│   ├── CustomCursor.tsx         # Interaktiv kursor effekti
│   └── BackToTop.tsx            # Yuqoriga silliq qaytish tugmasi
├── data/
│   └── portfolio.ts             # Barcha tahrirlanadigan ma'lumotlar bazasi
└── public/
    ├── avatar-placeholder.svg   # Yuqori texnologiyali avatar illyustratsiyasi
    └── projects/                # Demo loyihalar uchun vektorli skrinshotlar
        ├── ecommerce.svg
        ├── finance.svg
        ├── barbershop.svg
        └── restaurant.svg
```

---

## 📄 Litsenziya

Ushbu loyiha shaxsiy va tijoriy foydalanish uchun ochiq.
O'zgartiring, rivojlantiring va o'z orzuingizdagi dasturchi ishiga erishing! 🚀
