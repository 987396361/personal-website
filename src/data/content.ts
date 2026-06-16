import type { SiteConfig } from "@/types";

const siteConfig: SiteConfig = {
  name: "ZHC",
  title: "游戏广告设计师 / AI创意设计师",
  tagline: "以AI驱动的视觉创意，定义游戏广告新可能",
  email: "987396361@qq.com",
  location: "中国",

  aboutParagraphs: [
    "您好，我是一名游戏广告设计师 / AI创意设计师。具备扎实的数字媒体设计功底与丰富的游戏广告实战经验，熟练掌握从传统设计工具到前沿 AI 创意工具的全链路使用，可高效完成高转化游戏广告的创意与制作。",
    "擅长从概念构思到最终成片的完整创作流程，涵盖故事脚本、AI分镜、特效合成、后期剪辑等各个环节。作品涵盖：海外Merge/Puzzle、机甲科幻、国风武侠、女性种花、传奇等多种风格题材。",
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
    // 1机甲
    { id: "mecha-choose", title: "选择你的机甲", category: "机甲", description: "机甲原创AI短片，硬核机甲设计与动态光影表现", videoSrc: "/videos/1机甲/1-选择你的机甲.mp4", posterSrc: "" },
    { id: "mecha-loading", title: "用游戏加载打开", category: "机甲", description: "机甲AI创意广告，游戏加载界面与沉浸式转场设计", videoSrc: "/videos/1机甲/2-用游戏加载打开.mp4", posterSrc: "" },
    { id: "mecha-reveal", title: "人前显圣", category: "机甲", description: "机甲AI剧情短片，电影级镜头语言与叙事节奏", videoSrc: "/videos/1机甲/3-人前显圣.mp4", posterSrc: "" },
    { id: "mecha-standoff", title: "巨型对峙", category: "机甲", description: "机甲AI剧情短片，巨型机甲对峙与电影级视觉张力", videoSrc: "/videos/1机甲/4-巨型对峙.mp4", posterSrc: "" },
    { id: "mecha-river", title: "AI剧情·河神", category: "机甲", description: "机甲AI剧情短片，河神主题叙事与视觉表现", videoSrc: "/videos/1机甲/5-AI剧情-河神.mp4", posterSrc: "" },
    { id: "mecha-number", title: "AI剧情·机甲编号", category: "机甲", description: "机甲AI剧情短片，机甲编号设定与角色导入", videoSrc: "/videos/1机甲/6-AI剧情-机甲编号.mp4", posterSrc: "" },
    { id: "mecha-captain", title: "AI剧情·队长", category: "机甲", description: "机甲AI剧情短片，队长角色与剧情推进", videoSrc: "/videos/1机甲/7-AI剧情-队长.mp4", posterSrc: "" },
    // 2三国SLG
    { id: "slg-server", title: "还在找服", category: "三国SLG", description: "三国SLG广告，找服玩法引导与视觉创意", videoSrc: "/videos/2三国SLG/1-还在找服.mp4", posterSrc: "" },
    { id: "slg-day1", title: "开服首日", category: "三国SLG", description: "三国SLG广告，开服首日玩法与策略引导", videoSrc: "/videos/2三国SLG/2-开服首日.mp4", posterSrc: "" },
    { id: "slg-story", title: "开启剧情线", category: "三国SLG", description: "三国SLG广告，剧情线开启与沉浸式叙事设计", videoSrc: "/videos/2三国SLG/3-开启剧情线.mp4", posterSrc: "" },
    { id: "slg-city", title: "选择主城", category: "三国SLG", description: "三国SLG广告，主城选择与策略玩法视觉呈现", videoSrc: "/videos/2三国SLG/4-选择主城.mp4", posterSrc: "" },
    // 3种花
    { id: "flower-real", title: "种花得真花", category: "种花", description: "种花题材广告，种花得真花创意玩法展示", videoSrc: "/videos/3种花/1-种花得真花.mp4", posterSrc: "" },
    { id: "flower-master", title: "花艺达人", category: "种花", description: "种花题材广告，花艺达人养成与成长体系展示", videoSrc: "/videos/3种花/2-花艺达人.mp4", posterSrc: "" },
    { id: "flower-gift", title: "经营赢礼品", category: "种花", description: "种花题材广告，经营玩法与赢礼品活动展示", videoSrc: "/videos/3种花/3-经营赢礼品.mp4", posterSrc: "" },
    { id: "flower-breakup", title: "和渣男分开后", category: "种花", description: "种花题材广告，情感叙事与剧情反转设计", videoSrc: "/videos/3种花/4-和渣男分开后.mp4", posterSrc: "" },
    { id: "flower-phone", title: "手机展示", category: "种花", description: "种花题材广告，手机展示与UI交互创意", videoSrc: "/videos/3种花/5-手机展示.mp4", posterSrc: "" },
    { id: "flower-steal", title: "偷花", category: "种花", description: "种花题材广告，偷花情节与趣味玩法展示", videoSrc: "/videos/3种花/6-偷花.mp4", posterSrc: "" },
    { id: "flower-cabinet", title: "整理柜子", category: "种花", description: "种花题材广告，整理柜子创意与收纳玩法", videoSrc: "/videos/3种花/7-整理柜子.mp4", posterSrc: "" },
    { id: "flower-price", title: "鲜花价格", category: "种花", description: "种花题材广告，鲜花价格对比与视觉呈现", videoSrc: "/videos/3种花/8-鲜花价格.mp4", posterSrc: "" },
    // 4传奇
    { id: "legend-rune", title: "铭文切割", category: "传奇", description: "传奇游戏原创广告，炫酷铭文切割特效与技能展示", videoSrc: "/videos/4传奇/1-铭文切割.mp4", posterSrc: "" },
    { id: "legend-dragon", title: "海底龙宫", category: "传奇", description: "原创创意广告，横版海底龙宫场景与视觉奇观", videoSrc: "/videos/4传奇/2-海底龙宫.mp4", posterSrc: "" },
    { id: "legend-shoot", title: "传奇射击+", category: "传奇", description: "传奇游戏广告，射击玩法与战斗特效展示", videoSrc: "/videos/4传奇/3-传奇射击+.mp4", posterSrc: "" },
    { id: "legend-master", title: "还有高手", category: "传奇", description: "传奇游戏广告，高手对决与竞技氛围渲染", videoSrc: "/videos/4传奇/4-还有高手.mp4", posterSrc: "" },
    { id: "legend-appraisal", title: "鉴宝", category: "传奇", description: "传奇原创广告，鉴宝主题与隐藏属性玩法展示", videoSrc: "/videos/4传奇/5-鉴宝.mp4", posterSrc: "" },
    { id: "legend-zhongkui", title: "钟馗抓鬼", category: "传奇", description: "传奇原创广告，钟馗抓鬼创意换图与视觉呈现", videoSrc: "/videos/4传奇/6-钟馗抓鬼.mp4", posterSrc: "" },
    { id: "legend-blood", title: "修罗吸血剑", category: "传奇", description: "传奇游戏广告，修罗吸血剑装备与战斗特效", videoSrc: "/videos/4传奇/7-修罗吸血剑.mp4", posterSrc: "" },
    { id: "legend-176", title: "176版本的魅力", category: "传奇", description: "传奇游戏广告，176经典版本怀旧情怀展示", videoSrc: "/videos/4传奇/8-176版本的魅力.mp4", posterSrc: "" },
    // 5熊猫
    { id: "panda-recommend", title: "推荐你玩", category: "熊猫", description: "熊猫题材广告，推荐玩法与游戏引导创意", videoSrc: "/videos/5熊猫/1-推荐你玩.mp4", posterSrc: "" },
    { id: "panda-login", title: "登陆展示", category: "熊猫", description: "熊猫题材广告，登陆界面与视觉展示", videoSrc: "/videos/5熊猫/2-登陆展示.mp4", posterSrc: "" },
    { id: "panda-character", title: "角色展示", category: "熊猫", description: "熊猫题材广告，角色设计与形象展示", videoSrc: "/videos/5熊猫/3-角色展示.mp4", posterSrc: "" },
    { id: "panda-threedays", title: "玩了三天", category: "熊猫", description: "熊猫题材广告，三天体验叙事与留存引导", videoSrc: "/videos/5熊猫/4-玩了三天.mp4", posterSrc: "" },
  ],
};

export default siteConfig;
