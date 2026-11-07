import type { Metadata, Viewport } from "next";
import { Anton, Caveat, Manrope } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const caveat = Caveat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHAHZAIB NAWAZ | Shopify, WooCommerce & Custom Ecommerce Specialist",
  description:
    "Shahzaib Nawaz — Ecommerce specialist, Shopify & WooCommerce developer, and custom UI/UX store engineer. 150+ stores built and delivered.",
  metadataBase: new URL("https://www.shahzaibnawaz.dev/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.shahzaibnawaz.dev/",
    siteName: "Shahzaib Nawaz",
    title: "SHAHZAIB NAWAZ | Shopify, WooCommerce & Custom Ecommerce Specialist",
    description: "Every pixel has a purpose. 150+ custom ecommerce, Shopify and WooCommerce stores built and delivered by Shahzaib Nawaz.",
    images: [
      {
        url: "/Asset/img/og-image.jpg?v=3",
        width: 1200,
        height: 630,
        alt: "Shahzaib Nawaz — Ecommerce Specialist & Custom Store Developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHAHZAIB NAWAZ | Shopify, WooCommerce & Custom Ecommerce Specialist",
    description: "Every pixel has a purpose. 150+ custom ecommerce, Shopify and WooCommerce stores built and delivered by Shahzaib Nawaz.",
    images: ["/Asset/img/og-image.jpg?v=3"],
  },
  icons: {
    icon: "/Asset/img/favicon.svg",
    apple: "/Asset/img/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#090909",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${manrope.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/Asset/img/shahzaib-portrait.webp"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
