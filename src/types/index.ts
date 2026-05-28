export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: "bilibili" | "youtube" | "wechat" | "email" | "github" | "twitter";
}

export interface Skill {
  id: string;
  name: string;
  category: "software" | "creative" | "other";
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  email: string;
  location: string;
  aboutParagraphs: string[];
  navItems: NavItem[];
  socialLinks: SocialLink[];
  skills: Skill[];
  portfolioItems: PortfolioItem[];
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

export interface VideoCardProps {
  item: PortfolioItem;
  onPlay: (item: PortfolioItem) => void;
}

export interface VideoModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}
