# Shahzaib Nawaz — Ecommerce Specialist & Custom Store Architect

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.4.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-blueviolet?style=for-the-badge&logo=vercel)](https://turbo.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

<br />

**High-performance ecommerce portfolio showcasing 150+ stores delivered across Shopify, WooCommerce, and Custom Headless Architectures.**

[Live Demo](https://www.shahzaibnawaz.dev/) · [Contact](mailto:shahzaibnawazoffical@gmail.com) · [Fiverr Profile](https://www.fiverr.com/shahzaib_nawaz_)

</div>

---

## ⚡ Overview

This repository houses the personal portfolio and digital showcase of **Shahzaib Nawaz**, an Ecommerce Specialist and UI/UX Store Designer with **4+ years of craft** and **150+ stores built and delivered**.

Engineered for lightning-fast performance, conversion-focused typography, and smooth editorial motion, the application runs on **Next.js 16.4.5 (App Router) with Turbopack**, utilizing cutting-edge server-side rendering, zero hydration mismatches, and optimized Core Web Vitals.

---

## 🌟 Key Features

- **🛍️ Triple-Track E-Commerce Showcase**:
  - **Custom E-commerce**: Headless 3D runways, kinetic lookbooks, and high-fashion cart drawer replicas (Try The Look, Nike 3D, Maison Vell, Rare Luxury Jewelry).
  - **Shopify**: High-impact editorial storefronts with instant mini-carts, lookbooks, and mobile-first conversions (Attitude, Metropolitan, Release Store, Be Yours Beauty, etc.).
  - **WooCommerce**: Large catalog electronics, bespoke menswear swatches, and wellness boutiques (Benchmark Electronics, Pollheim Suits, Shine Serene).
- **🎚️ Interactive "From Wireframe to Live" Slider**:
  - Smooth dual-layer split screen comparing grey-box wireframes with live production storefronts.
  - Supports mouse drag, range scrubbing, and automatic scroll-linked reveal.
- **🔄 "Tools I Trust" Infinite Marquee & Grid**:
  - Hardware-accelerated marquee ticker with pause/play toggle and directional buttons.
  - Expands instantly to a full 10-tool grid showcasing: *Shopify, WooCommerce, Next.js, React, Google Antigravity, Claude, Neon, Figma, Google Ads, and Meta*.
- **🎭 Editorial Motion System**:
  - Parallax typography and portrait depth transforms driven by Framer Motion `useScroll`.
  - Global animation toggle (*Motion On / Off*) with persistent `localStorage` support.
  - Micro-interactions, magnetic hover buttons, and spring-eased dialogues.
- **♿ Production-Grade Accessibility & SEO**:
  - Automated `robots.ts` and dynamic `sitemap.ts` generation.
  - Rich OpenGraph and Twitter card metadata.
  - ColorZilla / Chrome Extension resilient hydration via `suppressHydrationWarning`.
  - Accessible dialog focus trapping (`Escape` and `Tab` management).

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Next.js 16.4.5](https://nextjs.org/)** | App Router, Server Components & Turbopack build engine |
| **[React 19](https://react.dev/)** | Core UI component model and client state |
| **[TypeScript](https://www.typescriptlang.org/)** | Type-safe data structures and strict interface verification |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first responsive styling and layout system |
| **[Framer Motion](https://www.framer.com/motion/)** | Smooth physics-based spring animations and viewport triggers |
| **[Lucide React](https://lucide.dev/)** | Clean, accessible iconography |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v20.x` or higher
- **npm** or **pnpm** or **yarn**

### 1. Clone the repository
```bash
git clone https://github.com/shah-zaib-nawaz/shahzaibnawaz-portfolio.git
cd shahzaibnawaz-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server (Turbopack)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 📁 Project Architecture

```
├── public/
│   ├── Asset/
│   │   ├── img/            # Portraits, work screenshots, favicon & OG assets
│   │   ├── svg/            # Tech icons and Brand tools (Shopify, Neon, Claude, etc.)
│   │   └── video/          # Showcase studio reel & poster fallback
├── src/
│   ├── app/
│   │   ├── globals.css     # Design tokens, typography & CSS animations
│   │   ├── layout.tsx      # Root layout, fonts, and OpenGraph metadata
│   │   ├── page.tsx        # Single-page application root
│   │   ├── robots.ts       # Dynamic robots.txt
│   │   └── sitemap.ts      # Automated sitemap generator
│   ├── components/
│   │   ├── About.tsx       # Bio, learning journey, and tech stack
│   │   ├── BrandSection.tsx# "Tools I Trust" infinite marquee & grid
│   │   ├── Contact.tsx     # Project inquiry form & direct social links
│   │   ├── Header.tsx      # Sticky navigation & motion toggle
│   │   ├── Hero.tsx        # Hero banner, stats (4+ Years, 150+ Stores)
│   │   ├── Journey.tsx     # Career milestones accordion
│   │   ├── Portfolio.tsx   # Filterable grid (All, Custom, Shopify, WooCommerce)
│   │   ├── ProjectCard.tsx # Individual project card with hover states
│   │   ├── ProjectModal.tsx# Accessible pop-up details modal with live links
│   │   └── WireframeComparison.tsx # Before/After interactive slider
│   └── data/
│       └── portfolioData.ts# Centralized configuration for all copy, stats & works
└── package.json
```

---

## ⚙️ Centralized Configuration

All personal information, metrics, case studies, and categories are managed from a single typed file:

👉 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

To update store statistics, biography, brand logos, or project demo links, simply edit this configuration file.

---

## 👤 Author

**Shahzaib Nawaz**
- **Website**: [www.shahzaibnawaz.dev](https://www.shahzaibnawaz.dev/)
- **Fiverr**: [@shahzaib_nawaz_](https://www.fiverr.com/shahzaib_nawaz_)
- **Email**: [shahzaibnawazoffical@gmail.com](mailto:shahzaibnawazoffical@gmail.com)
- **GitHub**: [@shah-zaib-nawaz](https://github.com/shah-zaib-nawaz)
- **Instagram**: [@shahzaibnawaz_](https://www.instagram.com/shahzaibnawaz_/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
