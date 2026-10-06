"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import siteConfig from "@/data/content";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionIds = siteConfig.navItems.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={cn(
          // 左右边距与首屏文字保持一致（lg 下 300px）
          "fixed top-0 left-0 right-0 z-40 px-6 md:px-16 lg:px-[300px] py-4",
          "transition-all duration-300",
          isScrolled
            ? "bg-black/40 backdrop-blur-2xl border-b border-white/[0.06]"
            : "bg-transparent border-b border-transparent"
        )}
        style={{ WebkitBackdropFilter: isScrolled ? "blur(24px)" : "blur(0px)" }}
      >
        {/* 不限制宽度：logo 靠最左，导航链接靠最右 */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick("hero")}
            className="text-lg font-semibold tracking-tight text-foreground hover:text-accent-light transition-colors"
          >
            {siteConfig.name}
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {siteConfig.navItems.slice(1).map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm tracking-wide transition-colors hover:text-foreground ${
                    activeSection === item.id
                      ? "text-accent-light"
                      : "text-muted"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="打开菜单"
          >
            <span className="block w-5 h-px bg-foreground" />
            <span className="block w-5 h-px bg-foreground" />
            <span className="block w-3.5 h-px bg-foreground" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            navItems={siteConfig.navItems}
            activeSection={activeSection}
            onNavigate={handleNavClick}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
