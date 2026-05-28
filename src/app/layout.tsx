import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-sc",
});

export const metadata: Metadata = {
  title: "ZHC - CG艺术家 / 动画导演",
  description: "ZHC个人作品集 — CG动画、视觉特效、数字艺术创作",
  keywords: ["CG", "动画", "视觉特效", "3D", "Blender", "Maya", "个人作品集"],
  openGraph: {
    title: "ZHC - CG艺术家 / 动画导演",
    description: "用镜头语言打造沉浸式视觉体验",
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
