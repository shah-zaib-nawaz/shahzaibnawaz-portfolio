export interface Project {
  type: "website" | "image";
  title: string;
  category: "Custom" | "Shopify" | "WooCommerce" | string;
  role: string;
  year: string;
  description: string;
  image: string;
  media: string;
  github?: string;
}

export interface BrandTool {
  file: string;
  name: string;
}

export interface ExperienceItem {
  date: string;
  title: string;
  place: string;
  text: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export interface PortfolioConfig {
  personal: {
    name: string;
    wordmark: string;
    wordmarkSymbol: string;
    rolePrimary: string;
    roleSecondary: string;
    roleHeroTop: string;
    roleHeroSub: string;
    availabilityText: string;
    availabilitySub: string;
    greeting: string;
    heroDescription: string;
    location: string;
    portraitImage: string;
    portraitImage640: string;
    portraitAlt: string;
    manifestoTitle: string;
    manifestoSub: string;
    yearsExperience: string;
    yearsLabel: string;
    reviewsCount: string;
    reviewsLabel: string;
    servicesCount: string;
    servicesLabel: string;
    aboutEyebrow: string;
    aboutTitle: string;
    aboutTitleHighlight: string;
    aboutBio: string;
    quoteMark: string;
    quoteText: string;
    quoteAuthor: string;
    quoteBottom: string;
    copyrightText: string;
  };
  contact: {
    email: string;
    instagramHandle: string;
    instagramUrl: string;
    studioName: string;
    studioUrl: string;
    fiverrUser: string;
    fiverrUrl: string;
    githubUser: string;
    githubUrl: string;
    location: string;
  };
  processSteps: ProcessStep[];
  experienceList: ExperienceItem[];
  brandTools: BrandTool[];
  techIcons: [string, string][];
  skillTags: string[];
  categories: string[];
  projects: Project[];
  wireframeComparison: {
    wireframe: string;
    final: string;
    creditProject: string;
    creditRole: string;
  };
}

export const portfolioData: PortfolioConfig = {
  personal: {
    name: "Shahzaib Nawaz",
    wordmark: "SHAHZAIB",
    wordmarkSymbol: "®",
    rolePrimary: "CUSTOM",
    roleSecondary: "ECOMMERCE",
    roleHeroTop: "ECOMMERCE SPECIALIST",
    roleHeroSub: "SHOPIFY · WOOCOMMERCE · CUSTOM",
    availabilityText: "AVAILABLE",
    availabilitySub: " FOR NEW PROJECTS",
    greeting: "Hello, I’m",
    heroDescription:
      "High-converting Shopify, WooCommerce, and custom ecommerce stores engineered for peak speed and sales.",
    location: "KAHROR PAKKA, PAKISTAN",
    portraitImage: "/Asset/img/shahzaib-portrait.webp",
    portraitImage640: "/Asset/img/shahzaib-portrait-640.webp",
    portraitAlt: "Shahzaib Nawaz in a dark suit with red studio rim light",
    manifestoTitle: "Every pixel.",
    manifestoSub: "A purpose.",
    yearsExperience: "4+",
    yearsLabel: "YEARS BUILDING ECOMMERCE",
    reviewsCount: "150+",
    reviewsLabel: "STORES BUILT & DELIVERED",
    servicesCount: "6",
    servicesLabel: "ECOMMERCE CAPABILITIES",
    aboutEyebrow: "02 / BEHIND THE CRAFT",
    aboutTitle: "MORE THAN CODE.",
    aboutTitleHighlight: "STOREFRONTS.",
    aboutBio:
      "I’m Shahzaib Nawaz, an ecommerce developer and UI/UX store designer based in Kahror Pakka, Pakistan. With 4+ years of craft and 150+ stores delivered across Shopify, WooCommerce, and custom headless stacks (Next.js, React, Tailwind CSS), I build fast, conversion-driven storefronts that scale online brands.",
    quoteMark: "“",
    quoteText: "From product discovery and seamless checkout, to high-converting ecommerce experiences.",
    quoteAuthor: "Shahzaib Nawaz",
    quoteBottom: "LET’S SCALE YOUR ONLINE STORE.",
    copyrightText: "SHAHZAIB NAWAZ. EVERY PIXEL HAS A PURPOSE.",
  },
  contact: {
    email: "shahzaibnawazoffical@gmail.com",
    instagramHandle: "@shahzaibnawaz_",
    instagramUrl: "https://www.instagram.com/shahzaibnawaz_/",
    studioName: "shahzaibnawaz.dev",
    studioUrl: "https://shahzaibnawaz.dev",
    fiverrUser: "shahzaib_nawaz_",
    fiverrUrl: "https://www.fiverr.com/shahzaib_nawaz_",
    githubUser: "shah-zaib-nawaz",
    githubUrl: "https://github.com/shah-zaib-nawaz",
    location: "Kahror Pakka, Pakistan",
  },
  processSteps: [
    {
      num: "01",
      title: "DISCOVER",
      description: "Understanding your goals, users and the problem the website needs to solve.",
    },
    {
      num: "02",
      title: "WIREFRAME",
      description: "Mapping structure and user flows before a single pixel is polished.",
    },
    {
      num: "03",
      title: "DESIGN",
      description: "Turning the wireframe into a clean, on-brand interface for every screen size.",
    },
    {
      num: "04",
      title: "BUILD",
      description: "Developing it fast, responsive, accessible and easy for you to manage.",
    },
    {
      num: "05",
      title: "LAUNCH",
      description: "Testing, going live and supporting what happens after launch.",
    },
  ],
  experienceList: [
    {
      date: "2023 · NOW",
      title: "Lead Ecommerce Architect",
      place: "shahzaibnawaz.dev",
      text: "Directing an independent ecommerce development practice, engineering custom storefronts, high-converting Shopify and WooCommerce stores, and bespoke ecommerce platforms for global brands.",
    },
    {
      date: "2021 · NOW",
      title: "Shopify & WooCommerce Specialist",
      place: "Fiverr · shahzaib_nawaz_",
      text: "Designing and developing high-converting Shopify, WooCommerce, and custom ecommerce stores for clients worldwide, with 150+ stores successfully delivered.",
    },
    {
      date: "2024 · NOW",
      title: "Custom Ecommerce Engineer",
      place: "Commerce Solutions",
      text: "Engineering scalable headless and custom ecommerce platforms with Next.js, React, Tailwind CSS, custom checkout flows, and lightning-fast architectures.",
    },
    {
      date: "2026 · NOW",
      title: "Ecommerce Creator",
      place: "@shahzaibnawaz_",
      text: "Sharing ecommerce store builds, conversion-rate optimization strategies, and modern UI/UX design techniques for online retailers.",
    },
  ],
  brandTools: [
    { file: "shopify.svg", name: "Shopify" },
    { file: "woocommerce.svg", name: "WooCommerce" },
    { file: "nextjs.svg", name: "Next.js" },
    { file: "react.svg", name: "React" },
    { file: "antigravity.svg", name: "Antigravity" },
    { file: "claude.svg", name: "Claude" },
    { file: "neon.svg", name: "Neon" },
    { file: "figma.svg", name: "Figma" },
    { file: "googleads.svg", name: "Google Ads" },
    { file: "meta.svg", name: "Meta" },
  ],
  techIcons: [
    ["shopify", "Shopify"],
    ["woocommerce", "WooCommerce"],
    ["nextjs", "Next.js"],
    ["react", "React"],
    ["antigravity", "Antigravity"],
    ["claude", "Claude"],
    ["neon", "Neon"],
    ["figma", "Figma"],
    ["vscode", "VS Code"],
  ],
  skillTags: [
    "Shopify Development",
    "WooCommerce",
    "Custom E-commerce",
    "Next.js & React",
    "Conversion Optimization",
    "UI/UX Store Design",
    "Tailwind CSS",
    "Store Speed & SEO",
  ],
  categories: ["All", "Custom", "Shopify", "WooCommerce"],
  wireframeComparison: {
    wireframe: "/Asset/img/work/wireframe-preview.webp",
    final: "/Asset/img/work/final-preview.webp",
    creditProject: "TRY THE LOOK — ECOMMERCE STOREFRONT / 2025",
    creditRole: "UI/UX · STORE DESIGN · ENGINEERING",
  },
  projects: [
    {
      type: "website",
      title: "Try The Look",
      category: "Custom",
      role: "Interactive 3D Runway · Outfit Carousel",
      year: "2025",
      description:
        "Interactive 3D streetwear outfit runway carousel with product pins, bundle builder & styling bag. Built for seamless high-fashion shopping experience.",
      image: "/Asset/img/work/try-the-look.webp",
      media: "https://try-the-look-theshopifer.vercel.app/",
      github: "https://github.com/theshopifer/try-the-look",
    },
    {
      type: "website",
      title: "Nike Design",
      category: "Custom",
      role: "3D Rail Conveyor · 360 Shoe Orbit",
      year: "2025",
      description:
        "High-performance Nike e-commerce concept featuring a 3D clothes rail conveyor, shoe orbit 360, interactive runway lookbook, and mobile video stories.",
      image: "/Asset/img/work/nike-design.webp",
      media: "https://nike-design-theshopifer.vercel.app/",
      github: "https://github.com/theshopifer/nike-design",
    },
    {
      type: "website",
      title: "Maison Vell",
      category: "Custom",
      role: "Haute Couture · Kinetic Lookbook",
      year: "2025",
      description:
        "An interactive haute couture runway lookbook with physics-driven depth progression, kinetic drag, and a synchronized product rail.",
      image: "/Asset/img/work/maison-vell.webp",
      media: "https://maison-vell-theshopifer.vercel.app/",
      github: "https://github.com/theshopifer/maison-vell",
    },
    {
      type: "website",
      title: "Rare Luxury Jewelry",
      category: "Custom",
      role: "Luxury Storefront · Drawer Cart",
      year: "2025",
      description:
        "Pixel-perfect, high-performance replica of the luxury jewelry storefront with interactive cart drawer, quick view modal, and predictive live search.",
      image: "/Asset/img/work/rare.webp",
      media: "https://rare-theshopifer.vercel.app/",
      github: "https://github.com/theshopifer/rare",
    },
    {
      type: "website",
      title: "Attitude",
      category: "Shopify",
      role: "Shopify · Fashion & Apparel",
      year: "2025",
      description:
        "High-impact contemporary fashion e-commerce storefront with bold editorial lookbook layouts, smooth hover previews, and an optimized mobile shopping experience.",
      image: "/Asset/img/work/attitude.webp",
      media: "https://attitude-main.myshopify.com/",
    },
    {
      type: "website",
      title: "Metropolitan",
      category: "Shopify",
      role: "Shopify · Minimalist Apparel",
      year: "2025",
      description:
        "Modern wardrobe essentials for women and men — new arrivals, seasonal edits and timeless basics with fluid grid collections and instant cart drawers.",
      image: "/Asset/img/work/metropolitan.webp",
      media: "https://metropolitan-main.myshopify.com/",
    },
    {
      type: "website",
      title: "Be Yours Beauty",
      category: "Shopify",
      role: "Shopify · Beauty & Skincare",
      year: "2025",
      description:
        "Clean cosmetics, skincare routines and organic beauty products with interactive ingredient highlights, dual-scroll aesthetics, and shade pickers.",
      image: "/Asset/img/work/beyours-beauty.webp",
      media: "https://beyours-theme-beauty.myshopify.com/",
    },
    {
      type: "website",
      title: "Benchmark Electronics",
      category: "WooCommerce",
      role: "WooCommerce · Tech & Electronics",
      year: "2025",
      description:
        "High-conversion WooCommerce store for consumer electronics, smartphones and tech gadgets with structured multi-category mega menus, technical spec comparison tables, and instant cart flow.",
      image: "/Asset/img/work/benchmark-electronics.webp",
      media: "https://benchmark-electronics-demo.myshopify.com/",
    },
    {
      type: "website",
      title: "Release Store",
      category: "Shopify",
      role: "Shopify · Streetwear & Lifestyle",
      year: "2025",
      description:
        "Editorial streetwear and modern lifestyle collections with dynamic editorial layouts, countdown drops, and conversion-tuned product presentation.",
      image: "/Asset/img/work/release-store.webp",
      media: "https://release-main.myshopify.com/",
    },
    {
      type: "website",
      title: "Pollheim Suits",
      category: "WooCommerce",
      role: "WooCommerce · Bespoke Menswear & Suits",
      year: "2025",
      description:
        "Bespoke tailoring, luxury formalwear and tailored menswear built on WooCommerce with fabric swatches, custom fit guides, and concierge consultation appointments.",
      image: "/Asset/img/work/pollheim-suits.webp",
      media: "https://demo-store-mini-pollheim-suits.myshopify.com/",
    },
    {
      type: "website",
      title: "Maximize Evolutions",
      category: "Shopify",
      role: "Shopify · Multi-Category Retail",
      year: "2025",
      description:
        "Shopify store built for large electronics and multi-category retail catalogs — structured layouts, comprehensive search filtering, and lightning-fast checkout.",
      image: "/Asset/img/work/maximize-evolutions.webp",
      media: "https://maximize-evolutions.myshopify.com/",
    },
    {
      type: "website",
      title: "Veloza Footwear",
      category: "Shopify",
      role: "Shopify · Sneakers & Activewear",
      year: "2025",
      description:
        "High-performance sneaker and activewear storefront with 3D product interactions, advanced size/color filtering, and mobile-first speed architecture.",
      image: "/Asset/img/work/veloza-footwear.webp",
      media: "https://veloza-theme-demo.myshopify.com/",
    },
    {
      type: "website",
      title: "Xclusive Couture",
      category: "Shopify",
      role: "Shopify · Haute Couture & Luxury",
      year: "2025",
      description:
        "Smart luxury fashion store with shop-the-look hotspots, dynamic runway sections, and high-conversion couture catalogs.",
      image: "/Asset/img/work/xclusive-couture.webp",
      media: "https://theme-xclusive-couture.myshopify.com/",
    },
    {
      type: "website",
      title: "Shine Serene",
      category: "WooCommerce",
      role: "WooCommerce · Luxury Jewelry & Wellness",
      year: "2025",
      description:
        "Luxury wellness, serene jewelry and lifestyle essentials designed for WooCommerce with soothing aesthetic tones, high-res gallery zoom, and friction-free checkout.",
      image: "/Asset/img/work/shine-serene.webp",
      media: "https://shine-serene.myshopify.com/",
    },
  ],
};
