import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Projekt & Develop - IT a Projektování",
  description: "Komplexní IT služby a projektování sdělovací a zabezpečovací techniky",
  keywords: ["Apache Kafka", "Kubernetes", "Big Data", "DevOps", "projektování", "železniční infrastruktura", "elektro", "sdělovací technika"],
  authors: [{ name: "Projekt & Develop s.r.o." }],
  openGraph: {
    title: "Projekt & Develop - IT a Projektování",
    description: "Komplexní IT služby a projektování sdělovací a zabezpečovací techniky",
    url: "https://www.projektdevelop.cz",
    siteName: "Projekt & Develop",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projekt & Develop - IT a Projektování",
    description: "Komplexní IT služby a projektování sdělovací a zabezpečovací techniky",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 flex flex-col min-h-screen relative`}
        style={{ 
          background: 'linear-gradient(135deg, #dbeafe 0%, #e0f2fe 20%, #f0f9ff 40%, #f0f9ff 60%, #bfdbfe 80%, #93c5fd 100%)',
          backgroundAttachment: 'fixed'
        }}
      >
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
