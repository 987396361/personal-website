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

/** 首屏按钮：点击后平滑滚动到对应 section */
export interface HeroCta {
  id: string;
  label: string;
  target: string;
  variant: "primary" | "secondary";
}

/** 首屏（Hero）配置 */
export interface HeroConfig {
  headingLines: string[];
  /** 圆形区域视频，留空则显示光晕占位，补充视频后填入路径即可 */
  videoSrc: string;
  ctas: HeroCta[];
}

/** 脚本介绍的小节（标题 + 要点行） */
export interface ScriptIntroBlock {
  heading: string;
  lines: string[];
}

/** 脚本演示的二级标签（脚本介绍为图文，其余为视频） */
export interface ScriptTab {
  id: string;
  label: string;
  /** 视频路径，脚本介绍等图文条目留空 */
  videoSrc?: string;
  /** 脚本介绍的配图 */
  imageSrc?: string;
  /** 脚本介绍布局：left = 图左文右（默认，滚动时图片吸顶），top = 图上文下 */
  introLayout?: "left" | "top";
  /** 脚本介绍的图文小节（后续添加内容时填入） */
  intro?: ScriptIntroBlock[];
}

/** 脚本演示的一级分类（合成 / 传奇） */
export interface ScriptCategory {
  id: string;
  label: string;
  tabs: ScriptTab[];
}

/** 脚本创作区配置 */
export interface ScriptsConfig {
  subtitle: string;
  categories: ScriptCategory[];
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
  /** 作品分类中保持横版大卡布局的分类名（其余分类为竖版无文字两列网格） */
  portfolioLandscapeCategories: string[];
  hero: HeroConfig;
  scripts: ScriptsConfig;
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
  /** portrait = 竖版无文字卡片（默认 landscape 横版带文字） */
  variant?: "landscape" | "portrait";
}

export interface VideoModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}
