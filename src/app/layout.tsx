import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "BuxLegal - Бухгалтерские и юридические услуги",
  description: "Профессиональные бухгалтерские и юридические услуги для вашего бизнеса",
};

function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-[#1a100c]`}>
        <div className="relative min-h-screen bg-[#1a100c]">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
