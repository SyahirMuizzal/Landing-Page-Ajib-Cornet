import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// =======================
// FULL SEO METADATA
// =======================

export const metadata: Metadata = {
  title: "Ajib Kornet Sapi Original 340gr | MenaraFood - Premium Beef Corned",
  description:
    "Ajib Kornet Sapi Original 340gr – kornet sapi premium, kaya protein, praktis, higienis, dan cocok untuk berbagai hidangan. Rasa gurih khas Nusantara. Pemesanan grosir & ecer tersedia.",
  keywords: [
    "kornet sapi",
    "kornet sapi original",
    "ajib kornet",
    "kornet sapi premium",
    "menarafood",
    "kornet kaleng",
    "jual kornet sapi",
    "kornet sapi murah",
    "kornet sapi 340gr",
  ],
  authors: [{ name: "MenaraFood" }],
  creator: "MenaraFood",
  publisher: "MenaraFood",
  openGraph: {
    title: "Ajib Kornet Sapi Original 340gr • Premium Beef Corned – MenaraFood",
    description:
      "Kornet Sapi Ajib — daging sapi pilihan, kaya rempah, higienis, dan ideal untuk sarapan, snack, atau bisnis kuliner. Tersedia grosir & eceran.",
    url: "https://menarafood.com",
    siteName: "MenaraFood",
    images: [
      {
        url: "https://menarafood.com/ajib-kornet-preview.jpg", // ganti dengan URL gambar real
        width: 1200,
        height: 630,
        alt: "Ajib Kornet Sapi Original 340gr - MenaraFood",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajib Kornet Sapi – Premium Beef Corned dari MenaraFood",
    description:
      "Kornet sapi premium dengan rempah Nusantara. Lezat, praktis, bergizi.",
    images: ["https://menarafood.com/ajib-kornet-preview.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://menarafood.com"),
  alternates: {
    canonical: "https://menarafood.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* SCHEMA ORG JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Ajib Kornet Daging Sapi Original 340gr",
              image: "https://menarafood.com/ajib-kornet-preview.jpg",
              description:
                "Kornet Sapi Ajib premium dengan daging sapi pilihan, kaya protein dan rempah Nusantara.",
              brand: { "@type": "Brand", name: "MenaraFood" },
              offers: {
                "@type": "Offer",
                price: "25000",
                priceCurrency: "IDR",
                availability: "https://schema.org/InStock",
                url: "https://shopee.co.id/product/123456789/987654321/",
              },
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
