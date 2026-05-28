"use client";

import siteConfig from "@/data/content";

export default function Footer() {
  const handleBackToTop = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-8 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <button
          onClick={handleBackToTop}
          className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          回到顶部
        </button>
      </div>
    </footer>
  );
}
