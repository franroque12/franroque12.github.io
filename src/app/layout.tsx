import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { I18nProvider } from "@/i18n/context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francisco Roque | Senior Quality Engineer",
  description:
    "Portfolio of Francisco Roque — Senior Quality Engineer with 5+ years of experience in test automation, performance engineering, and quality practices across banking and insurance platforms. ISTQB Certified (6x).",
  keywords: [
    "Francisco Roque",
    "quality engineer",
    "QA engineer",
    "test automation",
    "performance testing",
    "JMeter",
    "LoadRunner",
    "Selenium",
    "Playwright",
    "ISTQB",
    "Deloitte",
    "software testing Portugal",
  ],
  authors: [{ name: "Francisco Roque" }],
  creator: "Francisco Roque",
  metadataBase: new URL("https://francisco-roque.com"),
  openGraph: {
    title: "Francisco Roque | Senior Quality Engineer",
    description:
      "Senior Quality Engineer with 5+ years of experience in test automation, performance engineering, and quality practices. ISTQB Certified (6x).",
    url: "https://francisco-roque.com",
    siteName: "Francisco Roque",
    type: "website",
    locale: "en_US",
    alternateLocale: "pt_PT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisco Roque | Senior Quality Engineer",
    description:
      "Senior Quality Engineer specialising in test automation and performance engineering. ISTQB Certified (6x).",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://francisco-roque.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Francisco Roque",
      url: "https://francisco-roque.com",
      inLanguage: ["en", "pt"],
    },
    {
      "@type": "Person",
      name: "Francisco José Dias Roque",
      url: "https://francisco-roque.com",
      jobTitle: "Senior Quality Engineer",
      knowsAbout: [
        "Test Automation",
        "Performance Testing",
        "Selenium",
        "Playwright",
        "JMeter",
        "LoadRunner",
        "Quality Engineering",
      ],
      sameAs: ["https://linkedin.com/in/francisco-roque"],
      worksFor: {
        "@type": "Organization",
        name: "InnoTech",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
