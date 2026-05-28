"use client";

import { motion } from "framer-motion";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  navItems: NavItem[];
  activeSection: string;
  onNavigate: (id: string) => void;
  onClose: () => void;
}

export default function MobileMenu({
  navItems,
  activeSection,
  onNavigate,
  onClose,
}: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center glass-heavy md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-foreground"
        aria-label="关闭菜单"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <ul className="flex flex-col items-center gap-8">
        {navItems.map((item, i) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.4 }}
          >
            <button
              onClick={() => onNavigate(item.id)}
              className={`text-2xl font-medium tracking-wide transition-colors ${
                activeSection === item.id ? "text-accent-light" : "text-muted"
              }`}
            >
              {item.label}
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
