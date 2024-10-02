import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import LayoutSide from "@/components/Layout/LayoutSide";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Приглашение на Свадьбу",
  description: "Бекзат Гулнара",
  openGraph: {
    title: "Приглашение на Свадьбу",
    description: "Бекзат Гулнара",
    url: "https://bekzat-and-gulnara.vercel.app/",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <LayoutSide>{children}</LayoutSide>
      </body>
    </html>
  );
}
