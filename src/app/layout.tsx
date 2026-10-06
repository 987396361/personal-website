import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-noto-sans-sc",
});

export const metadata: Metadata = {
  title: "ZHC - 游戏广告设计师 / AI创意设计师",
  description: "ZHC个人作品集 — 游戏广告设计、AI创意制作、视觉特效",
  keywords: ["游戏广告", "AI创意", "视觉特效", "视频设计", "游戏买量", "个人作品集"],
  openGraph: {
    title: "ZHC - 游戏广告设计师 / AI创意设计师",
    description: "持续探索AI新技术，以AI驱动视觉创意",
    type: "website",
    locale: "zh_CN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`scroll-smooth ${notoSansSC.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
