import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";   // ← Додаємо імпорт

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Рекрутинговий центр | [Назва вашого загону] ДПСУ",
  description: "Не бойові посади. Служба тільки в регіоні. Без ТЦК та СП.",
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