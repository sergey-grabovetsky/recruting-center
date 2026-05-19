import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Рекрутинговий центр ДПСУ | Одеська область",
  description: "Консультація, підбір посади та супровід кандидатів на службу в підрозділах ДПСУ.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
