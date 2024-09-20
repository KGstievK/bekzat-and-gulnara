import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import RootLayoutClient from "./layout.client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Приглашение на Свадьбу",
  description: "Бекзат Гулнара",
  openGraph: {
    title: "Приглашение на Свадьбу",
    description: "Бекзат Гулнара",
    // url: "https://yourwebsite.com", // Замените на фактический URL
    type: "website",
    images: [
      {
        url: "/public/Logo.svg",
        width: 60,
        height: 60,
        alt: "Приглашение на Свадьбу",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Приглашение на Свадьбу",
    description: "Бекзат Гулнара",
    images: [
      {
        url: "/public/Logo.svg", // Замените на путь к вашему изображению
        alt: "Приглашение на Свадьбу",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
