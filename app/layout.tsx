import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Film Keep",
  description: "インタラクションデザインIIのプロトタイプ紹介。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}