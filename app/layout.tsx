import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "지니야 빌더",
  description: "당신의 AI 운명 공동체를 만듭니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
