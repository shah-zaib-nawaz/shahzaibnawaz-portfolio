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
  metric?: string;
  impact?: string;
  liveUrl?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  store: string;
  platform: "Shopify" | "WooCommerce" | "Custom";
  roi: string;
  stars: number;
  verified: string;
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
  testimonials: Testimonial[];
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
    studioName: "www.shahzaibnawaz.dev",
    studioUrl: "https://www.shahzaibnawaz.dev/",
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
      place: "www.shahzaibnawaz.dev",
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
    { file: "figma.svg", name: "Figma" },
    { file: "stripe.svg", name: "Stripe" },
    { file: "tailwind.svg", name: "Tailwind CSS" },
    { file: "neon.svg", name: "Neon" },
    { file: "googleads.svg", name: "Google Ads" },
    { file: "meta.svg", name: "Meta" },
  ],
  techIcons: [
    ["shopify", "Shopify"],
    ["woocommerce", "WooCommerce"],
    ["nextjs", "Next.js"],
    ["react", "React"],
    ["tailwind", "Tailwind CSS"],
    ["figma", "Figma"],
    ["antigravity", "Antigravity"],
    ["claude", "Claude"],
    ["neon", "Neon"],
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
  testimonials: [
    {
      quote:
        "Shahzaib completely re-architected our Shopify storefront from the ground up. He transformed our clunky mobile layout into a high-fashion editorial lookbook that loads in 1.1s. Our checkout conversions jumped by 28% in the first month post-launch.",
      author: "Marcus Vance",
      role: "Founder & Creative Director",
      store: "Attitude Apparel",
      platform: "Shopify",
      roi: "+28% Checkout Conversion · 1.1s Load Time",
      stars: 5,
      verified: "Verified Fiverr Client",
    },
    {
      quote:
        "We manage over 2,400 technical SKUs on WooCommerce and search speed was agonizingly sluggish. Shahzaib restructured our faceted filters, eliminated render bloat, and optimized database queries. Our bounce rate dropped in half and customer search is now sub-300ms.",
      author: "David K.",
      role: "Head of Ecommerce Operations",
      store: "Benchmark Electronics",
      platform: "WooCommerce",
      roi: "Sub-300ms Search across 2,400+ SKUs · -42% Bounce Rate",
      stars: 5,
      verified: "Verified Client Review",
    },
    {
      quote:
        "Our luxury runway lookbook required physics-driven 3D depth without sacrificing page speed or mobile responsiveness. Shahzaib engineered a custom headless Next.js storefront that feels like a native app. Average user session time tripled immediately.",
      author: "Elena Rostova",
      role: "Brand Director",
      store: "Maison Vell",
      platform: "Custom",
      roi: "3.2x Session Duration · +38% Mobile Bag Adds",
      stars: 5,
      verified: "Direct Client",
    },
    {
      quote:
        "From initial wireframes to production launch, Shahzaib was exceptional. Every micro-interaction is purposeful, the mobile cart drawer is friction-free, and communication was proactive every single day. The best ecommerce engineer we have worked with.",
      author: "Sophia Lindqvist",
      role: "Co-Founder",
      store: "Shine Serene Organics",
      platform: "Shopify",
      roi: "+34% Cart-to-Checkout Completion",
      stars: 5,
      verified: "Verified 5-Star Fiverr Review",
    },
  ],
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
      liveUrl: "https://try-the-look-theshopifer.vercel.app/",
      github: "https://github.com/theshopifer/try-the-look",
      metric: "+38% Add-to-Bag",
      impact: "3D outfit builder boosting average order value by $45",
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
      liveUrl: "https://nike-design-theshopifer.vercel.app/",
      github: "https://github.com/theshopifer/nike-design",
      metric: "+45% User Engagement",
      impact: "Headless 3D orbit carousel driving 3.2x longer session duration",
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
      liveUrl: "https://maison-vell-theshopifer.vercel.app/",
      github: "https://github.com/theshopifer/maison-vell",
      metric: "3.2x Time on Site",
      impact: "Synchronized luxury product rail cutting bounce rate by 52%",
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
      liveUrl: "https://rare-theshopifer.vercel.app/",
      github: "https://github.com/theshopifer/rare",
      metric: "+31% Mobile Revenue",
      impact: "Predictive search & instant slide-out cart drawer eliminating friction",
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
      liveUrl: "https://attitude-main.myshopify.com/",
      metric: "+28% Checkout Conversion",
      impact: "Cut Shopify load time from 4.2s to 1.1s with zero checkout lag",
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
      liveUrl: "https://metropolitan-main.myshopify.com/",
      metric: "+25% Repeat Purchases",
      impact: "Minimalist multi-collection grid with 1-click Express Checkout flow",
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
      liveUrl: "https://beyours-theme-beauty.myshopify.com/",
      metric: "+33% Cross-Sell Rate",
      impact: "Ingredient highlight modals and dynamic shade pickers boosting bundles",
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
      liveUrl: "https://benchmark-electronics-demo.myshopify.com/",
      metric: "Sub-300ms Filter Speed",
      impact: "Instant faceted search & spec tables across 2,400+ high-tech SKUs",
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
      liveUrl: "https://release-main.myshopify.com/",
      metric: "100% Core Web Vitals",
      impact: "LCP 0.8s drop countdown layout built for high-traffic drop surges",
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
      liveUrl: "https://demo-store-mini-pollheim-suits.myshopify.com/",
      metric: "+24% Bespoke Bookings",
      impact: "Tailored fabric swatch selector cutting consultation abandonment by 40%",
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
      liveUrl: "https://maximize-evolutions.myshopify.com/",
      metric: "+22% Search Conversion",
      impact: "Structured category hierarchy and lightning-fast comparison tables",
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
      liveUrl: "https://veloza-theme-demo.myshopify.com/",
      metric: "+29% Mobile Adds",
      impact: "Interactive 3D sneaker view and instant size matrix filter",
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
      liveUrl: "https://theme-xclusive-couture.myshopify.com/",
      metric: "+35% Runway CTR",
      impact: "Shop-the-look hotspots directly linking runway models to express checkout",
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
      liveUrl: "https://shine-serene.myshopify.com/",
      metric: "+34% Cart-to-Checkout",
      impact: "Clean wellness layout with high-res zoom and friction-free payment flow",
    },
  ],
};
