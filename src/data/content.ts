import type { SiteConfig } from "@/types";

const siteConfig: SiteConfig = {
  name: "ZHC",
  title: "游戏广告设计师 / AI创意设计师",
  tagline: "以AI驱动的视觉创意，定义游戏广告新可能",
  email: "987396361@qq.com",
  location: "中国",

  aboutParagraphs: [
    "您好，我是一名游戏广告设计师 / AI创意设计师。具备扎实的数字媒体设计功底与丰富的游戏广告实战经验，熟练掌握从传统设计工具到前沿 AI 创意工具的全链路使用，可高效完成高转化游戏广告的创意与制作。",
    "擅长从概念构思到最终成片的完整创作流程，涵盖故事脚本、AI分镜、特效合成、后期剪辑等各个环节。作品涵盖：海外Puzzle/Merge、机甲科幻、女性种花、三国SLG、熊猫、传奇等多种风格题材。",
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
    // 1Puzzle
    { id: "puzzle-mirror", title: "对镜化妆", category: "Puzzle", description: "Puzzle题材广告，对镜化妆创意玩法展示", videoSrc: "/videos/1Puzzle/1-对镜化妆.mp4", posterSrc: "" },
    { id: "puzzle-affair", title: "出轨", category: "Puzzle", description: "Puzzle题材广告，出轨剧情与反转设计", videoSrc: "/videos/1Puzzle/2-出轨.mp4", posterSrc: "" },
    { id: "puzzle-balloon", title: "坠机热气球", category: "Puzzle", description: "Puzzle题材广告，坠机热气球创意场景展示", videoSrc: "/videos/1Puzzle/3-坠机热气球.mp4", posterSrc: "" },
    // 2Merge
    { id: "merge-scurve", title: "S弯建造", category: "Merge", description: "Merge题材广告，S弯建造创意展示", videoSrc: "/videos/2Merge/1-S弯建造.mp4", posterSrc: "" },
    { id: "merge-chess", title: "棋子掉落", category: "Merge", description: "Merge题材广告，棋子掉落与合成玩法展示", videoSrc: "/videos/2Merge/2-棋子掉落.mp4", posterSrc: "" },
    { id: "merge-build", title: "二合建造", category: "Merge", description: "Merge题材广告，二合建造玩法创意展示", videoSrc: "/videos/2Merge/3-二合建造.mp4", posterSrc: "" },
    // 3机甲
    { id: "mecha-choose", title: "选择你的机甲", category: "机甲", description: "机甲原创AI短片，硬核机甲设计与动态光影表现", videoSrc: "/videos/3机甲/1-选择你的机甲.mp4", posterSrc: "" },
    { id: "mecha-reveal", title: "人前显圣", category: "机甲", description: "机甲AI剧情短片，电影级镜头语言与叙事节奏", videoSrc: "/videos/3机甲/2-人前显圣.mp4", posterSrc: "" },
    { id: "mecha-standoff", title: "巨型对峙", category: "机甲", description: "机甲AI剧情短片，巨型机甲对峙与电影级视觉张力", videoSrc: "/videos/3机甲/3-巨型对峙.mp4", posterSrc: "" },
    // 4种花
    { id: "flower-real", title: "种花得真花", category: "种花", description: "种花题材广告，种花得真花创意玩法展示", videoSrc: "/videos/4种花/1-种花得真花.mp4", posterSrc: "" },
    { id: "flower-master", title: "花艺达人", category: "种花", description: "种花题材广告，花艺达人养成与成长体系展示", videoSrc: "/videos/4种花/2-花艺达人.mp4", posterSrc: "" },
    { id: "flower-breakup", title: "和渣男分开后", category: "种花", description: "种花题材广告，情感叙事与剧情反转设计", videoSrc: "/videos/4种花/3-和渣男分开后.mp4", posterSrc: "" },
    // 5三国SLG
    { id: "slg-server", title: "还在找服", category: "三国SLG", description: "三国SLG广告，找服玩法引导与视觉创意", videoSrc: "/videos/5三国SLG/1-还在找服.mp4", posterSrc: "" },
    { id: "slg-day1", title: "开服首日", category: "三国SLG", description: "三国SLG广告，开服首日玩法与策略引导", videoSrc: "/videos/5三国SLG/2-开服首日.mp4", posterSrc: "" },
    { id: "slg-story", title: "开启剧情线", category: "三国SLG", description: "三国SLG广告，剧情线开启与沉浸式叙事设计", videoSrc: "/videos/5三国SLG/3-开启剧情线.mp4", posterSrc: "" },
    // 6熊猫
    { id: "panda-recommend", title: "推荐你玩", category: "熊猫", description: "熊猫题材广告，推荐玩法与游戏引导创意", videoSrc: "/videos/6熊猫/1-推荐你玩.mp4", posterSrc: "" },
    { id: "panda-login", title: "登陆展示", category: "熊猫", description: "熊猫题材广告，登陆界面与视觉展示", videoSrc: "/videos/6熊猫/2-登陆展示.mp4", posterSrc: "" },
    { id: "panda-character", title: "角色展示", category: "熊猫", description: "熊猫题材广告，角色设计与形象展示", videoSrc: "/videos/6熊猫/3-角色展示.mp4", posterSrc: "" },
    // 7传奇
    { id: "legend-rune", title: "铭文切割", category: "传奇", description: "传奇游戏原创广告，炫酷铭文切割特效与技能展示", videoSrc: "/videos/7传奇/1-铭文切割.mp4", posterSrc: "" },
    { id: "legend-dragon", title: "海底龙宫", category: "传奇", description: "原创创意广告，横版海底龙宫场景与视觉奇观", videoSrc: "/videos/7传奇/2-海底龙宫.mp4", posterSrc: "" },
    { id: "legend-master", title: "还有高手", category: "传奇", description: "传奇游戏广告，高手对决与竞技氛围渲染", videoSrc: "/videos/7传奇/3-还有高手.mp4", posterSrc: "" },
  ],
};

export default siteConfig;
