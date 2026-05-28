import type { SiteConfig } from "@/types";

const siteConfig: SiteConfig = {
  name: "ZHC",
  title: "游戏广告设计师 / AI创意设计师",
  tagline: "以AI驱动的视觉创意，定义游戏广告新可能",
  email: "987396361@qq.com",
  location: "中国",

  aboutParagraphs: [
    "您好，我是一名游戏广告设计师 / AI创意设计师。具备扎实的数字媒体设计功底与丰富的游戏广告实战经验，熟练掌握从传统设计工具到前沿 AI 创意工具的全链路使用，可高效完成高转化游戏广告的创意与制作。",
    "擅长从概念构思到最终成片的完整创作流程，涵盖故事脚本、AI分镜、特效合成、后期剪辑等各个环节。作品涵盖传奇、机甲科幻、国风武侠、女性种花等多种风格题材。",
    "始终保持着对视觉呈现的热爱，不断探索AI辅助创作等前沿技术，期待与更多优秀的团队合作，共同打造令人惊叹的视觉作品。",
  ],

  navItems: [
    { id: "hero", label: "首页" }, 
    { id: "about", label: "关于" },
    { id: "skills", label: "技能" },
    { id: "portfolio", label: "作品" },
    { id: "contact", label: "联系" },
  ],

  socialLinks: [
    { id: "bilibili", label: "Bilibili", url: "https://space.bilibili.com/", icon: "bilibili" },
    { id: "youtube", label: "YouTube", url: "https://youtube.com/", icon: "youtube" },
    { id: "email", label: "Email", url: "mailto:zhc@example.com", icon: "email" },
  ],

  skills: [
    // Software
    { id: "ae", name: "After Effects", category: "software" },
    { id: "pr", name: "Premiere Pro", category: "software" },
    { id: "ps", name: "Photoshop", category: "software" },
    { id: "davinci", name: "DaVinci Resolve", category: "software" },
    // Creative
    { id: "rendering", name: "影视渲染", category: "creative" },
    { id: "compositing", name: "后期合成", category: "creative" },
    { id: "vfx", name: "视觉特效", category: "creative" },
    { id: "ai-art", name: "AI辅助创作", category: "creative" },
    { id: "claude-code", name: "Claude Code", category: "creative" },
    { id: "storyboard", name: "分镜设计", category: "creative" },
  ],

  portfolioItems: [
    {
      id: "legend-rune",
      title: "铭文切割",
      category: "传奇",
      description: "传奇游戏原创广告，炫酷铭文切割特效与技能展示",
      videoSrc: "/videos/传奇/ZHC-0704-传奇原创-铭文切割-B.mp4",
      posterSrc: "",
    },
    {
      id: "legend-dragon",
      title: "海底龙宫",
      category: "传奇",
      description: "原创创意广告，横版海底龙宫场景与视觉奇观",
      videoSrc: "/videos/传奇/ZHC-0830-原创创意-海底龙宫（横）-A+.mp4",
      posterSrc: "",
    },
    {
      id: "legend-appraisal",
      title: "鉴宝·隐藏属性",
      category: "传奇",
      description: "传奇原创广告，鉴宝主题与隐藏属性玩法展示",
      videoSrc: "/videos/传奇/ZHC-0902-传奇原创-鉴宝-隐藏属性（横）-A+.mp4",
      posterSrc: "",
    },
    {
      id: "legend-zhongkui",
      title: "钟馗抓鬼",
      category: "传奇",
      description: "传奇原创广告，钟馗抓鬼创意换图与视觉呈现",
      videoSrc: "/videos/传奇/ZHC-0915-传奇原创-钟馗抓鬼（换图）-A+.mp4",
      posterSrc: "",
    },
    {
      id: "mecha-choose",
      title: "选择你的机甲",
      category: "机甲",
      description: "机甲原创AI短片，硬核机甲设计与动态光影表现",
      videoSrc: "/videos/机甲/ZHC-0519-机甲原创-AI-首发-选择你的机甲.mp4",
      posterSrc: "",
    },
    {
      id: "mecha-flashlight",
      title: "手电筒换装",
      category: "机甲",
      description: "机甲AI剧情攻略，创意转场与手电筒灯光设计",
      videoSrc: "/videos/机甲/ZHC-0521-机甲原创-AI剧情-攻略-首发-手电筒换装-CZY-巨量.mp4",
      posterSrc: "",
    },
    {
      id: "mecha-reveal",
      title: "人前显圣",
      category: "机甲",
      description: "机甲AI剧情短片，电影级镜头语言与叙事节奏",
      videoSrc: "/videos/机甲/ZHC-0522-机甲原创-AI剧情-攻略-首发-人前显圣-CZY-巨量.mp4",
      posterSrc: "",
    },
  ],
};

export default siteConfig;
