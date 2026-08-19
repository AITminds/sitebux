import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Баланс и право - Бухгалтерские и юридические услуги",
  description: "Профессиональные бухгалтерские и юридические услуги для вашего бизнеса",
};

function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-[#120907]`}>
        <div className="relative min-h-screen overflow-x-clip">
          <div className="bg-scene pointer-events-none fixed inset-0 z-0" />
          <div className="relative z-10">
            <Navigation />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
