import type { SiteConfig } from "@/types";

const siteConfig: SiteConfig = {
  name: "ZHC",
  title: "游戏广告设计师 / AI创意设计师",
  tagline: "持续探索AI新技术，以AI驱动视觉创意",
  email: "987396361@qq.com",
  location: "中国",

  aboutParagraphs: [
    "您好，我是一名游戏广告设计师 / AI创意设计师。具备扎实的数字媒体设计功底与丰富的游戏广告实战经验，熟练掌握从传统设计工具到前沿 AI 创意工具的全链路使用，可高效完成高转化游戏广告的创意与制作。",
    "擅长从概念构思到最终成片的完整创作流程，涵盖故事脚本、AI分镜、特效合成、后期剪辑等各个环节。作品涵盖：海外Puzzle/Merge/数独/模拟经营、SLG、休闲多种风格题材。",
    "始终保持着对视觉呈现的热爱，不断探索AI辅助创作等前沿技术，期待与更多优秀的团队合作，共同打造更进一步的视觉作品。",
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

  hero: {
    headingLines: ["ZHANG", "HAI", "CHUAN"],
    // 头图圆形区域视频，留空则显示光晕占位
    videoSrc: "/videos/头图视频/头图.mp4",
    ctas: [
      { id: "scripts", label: "自制脚本", target: "scripts", variant: "primary" },
      { id: "portfolio", label: "查看精选作品", target: "portfolio", variant: "primary" },
      { id: "contact", label: "联系我", target: "contact", variant: "secondary" },
    ],
  },

  skills: [
    // Software
    { id: "ae", name: "After Effects", category: "software" },
    { id: "pr", name: "Claude Code", category: "software" },
    { id: "ps", name: "Photoshop", category: "software" },
    { id: "davinci", name: "剪映", category: "software" },
    { id: "cocos", name: "Cocos", category: "software" },
    // Creative
    { id: "rendering", name: "影视渲染", category: "creative" },
    { id: "compositing", name: "后期制作", category: "creative" },
    { id: "vfx", name: "视觉特效", category: "creative" },
    { id: "ai-art", name: "AI辅助创作", category: "creative" },
    { id: "claude-code", name: "Vibe Coding", category: "creative" },
      ],

  scripts: {
    subtitle: "脚本创作",
    categories: [
      {
        id: "merge",
        label: "合成",
        tabs: [
          {
            id: "intro",
            label: "脚本介绍",
            imageSrc: "/images/合成脚本介绍1.png",
            intro: [
              { heading: "1️⃣ 准备：创建和替换素材", lines: [
                "创建图标组：可以生成任意组，任意等级的图标组",
                "替换图片：选新素材 + 目标图标组 → 替换图标",
              ]},
              { heading: "2️⃣ 棋盘：创建和修改棋盘", lines: [
                "自定义格位：打开 10×10 选择器，逐格开关，支持矩形 / 十字 / 阶梯 / 交错 / 清空；点应用形状保存",
                "半格错位：奇偶行 / 列偏移，只改视觉，不影响自动下落归属列",
                "内容分布：控制每格棋子；同列 / 同行相同固定素材 + 等级",
                "生成 / 重建棋盘、入场动画、更新参数、新增棋盘组相互独立；追加棋盘前必须已有主棋盘",
                "四向追加：上下左右沿主棋盘扩展；越界会询问扩画布；向左 / 向上追加需要平移现有棋子，存在动作时自动停止",
                "逐枚入场流程：先生静态棋盘 → 单独【生成入场动画】；生成重建不会自动带上动画。动画类型：直接出现、入口飞出、中心弹出、四边飞入、顶部瀑布、螺旋展开、内部浮现、四角汇入、左右交错",
                "入场参数：时长 = 单枚动画，间隔 = 棋子出现时差；出场顺序可选中心向外、从下到上、稳定随机",
              ]},
              { heading: "3️⃣ 合成：普通玩法动作（二合、批量合成）", lines: [
                "操作规则：先选来源 / 主动棋子，再选目标棋子",
                "自动切割：执行动作自动切开时间轴图层并置顶，防止遮挡；新动作图层自动放在手指 / 特效组下方",
                "目标 A 三步法：选中棋子设目标 A → Ctrl 加选其他棋子 → 选择动作；误取消可用加入选区恢复",
              ]},
              { heading: "合成类型", lines: [
                "普通合成：2 个 = 单次二合；≥3 个合并成 1 个，只升 1 级",
                "批量二合：按家族 + 等级分组，两两配对，先选飞向后者",
                "连续二合：同家族，所选等级能收敛到更高一级，上一轮结果自动参与下一轮合成",
              ]},
              { heading: "4️⃣ 手指：棋子跟随动画", lines: [
                "1、创建手指",
                "2、脚本生成动作 → 跟随动作",
                "3、可选更换手指外观；图层操作只处理特效辅助层，不改动棋子动画",
              ]},
              { heading: "5️⃣ 微调：替换素材、等级、修复播放", lines: [
                "替换范围：仅选中棋子 / 当前合成内全部同源棋子",
                "直接升降级：只切换素材，不生成动画、音特效",
                "播放报错流程：优先【检查播放问题】→ 修复选中棋子 / 全部棋子",
              ]},
            ],
          },
          { id: "load-chess", label: "载入棋子", videoSrc: "/videos/二合脚本演示视频/1.mp4" },
          { id: "gen-board", label: "生成棋盘", videoSrc: "/videos/二合脚本演示视频/2.mp4" },
          { id: "appear", label: "出现方式", videoSrc: "/videos/二合脚本演示视频/3.mp4" },
          { id: "action", label: "执行动作", videoSrc: "/videos/二合脚本演示视频/4.mp4" },
          { id: "finger", label: "手指跟踪", videoSrc: "/videos/二合脚本演示视频/5.mp4" },
          { id: "adjust", label: "后期调整", videoSrc: "/videos/二合脚本演示视频/6.mp4" },
        ],
      },
      {
        id: "legend",
        label: "传奇",
        tabs: [
          {
            id: "intro",
            label: "脚本介绍",
            imageSrc: "/images/传奇脚本介绍1.png",
            introLayout: "top",
            intro: [
              { heading: "1️⃣ 读取素材", lines: [
                "在合成中添加动作素材，互不重叠即可",
                "自动：自动读取合成中的素材写入",
                "写入表达式：写入后即可识别",
              ]},
              { heading: "2️⃣ K帧", lines: [
                "1、调节好速度值（切换走跑时要换速度值）",
                "2、选中要K帧的图层，在需要的时间点点击左侧八方向按钮",
                "3、中间圆点点击是在当前位置K帧；Ctrl+左键将上一个关键帧复制到当前位置",
              ]},
              { heading: "3️⃣ 素材替换", lines: [
                "1、选中合成，点击右侧未选择按钮，弹出合成内素材选择列表，选择素材",
                "2、选择完毕后点击写入表达式",
                "3、选中合成，在想要的位置点击按钮来替换素材",
              ]},
            ],
          },
          { id: "load-action", label: "载入动作", videoSrc: "/videos/传奇脚本演示视频/1.mp4" },
          { id: "read-btn", label: "读取按钮", videoSrc: "/videos/传奇脚本演示视频/2.mp4" },
          { id: "expr", label: "建表达式", videoSrc: "/videos/传奇脚本演示视频/3.mp4" },
          { id: "eight-way", label: "八方向键", videoSrc: "/videos/传奇脚本演示视频/4.mp4" },
          { id: "select-act", label: "选择动作", videoSrc: "/videos/传奇脚本演示视频/5.mp4" },
        ],
      },
    ],
  },

  portfolioItems: [
    // 1Puzzle（竖版）
    { id: "puzzle-chef", title: "对镜化妆", category: "Puzzle", description: "Puzzle题材广告，对镜化妆剧情创意展示", videoSrc: "/videos/1Puzzle/1-对镜化妆.mp4", posterSrc: "" },
    { id: "puzzle-wedding", title: "婚礼·厨神竟成我爱人", category: "Puzzle", description: "Puzzle题材广告，婚礼剧情与片头创意设计", videoSrc: "/videos/1Puzzle/0820AS-puzzle-婚礼-厨神竟成我爱人片头-张海川.mp4", posterSrc: "" },
    { id: "puzzle-affair", title: "出轨", category: "Puzzle", description: "Puzzle题材广告，出轨剧情与反转设计", videoSrc: "/videos/1Puzzle/2-出轨.mp4", posterSrc: "" },
    // 2Merge（竖版）
    { id: "merge-pig", title: "金猪第一名", category: "Merge", description: "Merge题材广告，金猪第一名玩法与迭代换棋子展示", videoSrc: "/videos/2Merge/0831CM-merge-金猪第一名-迭代换棋子-EN-张海川.mp4", posterSrc: "" },
    { id: "merge-halloween", title: "万圣节垂直首发", category: "Merge", description: "Merge题材广告，万圣节主题竖版首发展示", videoSrc: "/videos/2Merge/1002CM-mergehome-万圣节垂直-首发-EN-张海川-竖.mp4", posterSrc: "" },
    { id: "merge-play", title: "合并玩法演示", category: "Merge", description: "Merge题材广告，合成玩法演示", videoSrc: "/videos/2Merge/1.mp4", posterSrc: "" },
    // 3数独（竖版）
    { id: "sudoku-item", title: "用道具成功", category: "数独", description: "数独题材广告，道具使用与指引设计展示", videoSrc: "/videos/3数独/0920WD-doku-用道具成功-加指引-小鸭待机-鸭掌-EN-张海川-竖.mp4", posterSrc: "" },
    { id: "sudoku-cat", title: "猫猫数独", category: "数独", description: "数独题材广告，猫猫主题失败全显创意", videoSrc: "/videos/3数独/0721-猫猫数独-多鸭-失败全显-张海川.mp4", posterSrc: "" },
    { id: "sudoku-3d", title: "3D版放鸭子", category: "数独", description: "数独题材广告，3D版放鸭子玩法展示", videoSrc: "/videos/3数独/0818WD-doku-3D版放鸭子-张海川.mp4", posterSrc: "" },
    // 4割草（竖版）
    { id: "mecha-choose", title: "选择你的机甲", category: "割草", description: "割草题材广告，机甲原创AI短片，硬核机甲设计与动态光影表现", videoSrc: "/videos/4割草/1-选择你的机甲.mp4", posterSrc: "" },
    { id: "mecha-reveal", title: "人前显圣", category: "割草", description: "割草题材广告，机甲AI剧情短片，电影级镜头语言与叙事节奏", videoSrc: "/videos/4割草/2-人前显圣.mp4", posterSrc: "" },
    { id: "mecha-standoff", title: "巨型对峙", category: "割草", description: "割草题材广告，巨型机甲对峙与电影级视觉张力", videoSrc: "/videos/4割草/3-巨型对峙.mp4", posterSrc: "" },
    // 5模拟经营（竖版）
    { id: "sim-flower", title: "种花得真花", category: "模拟经营", description: "模拟经营题材广告，种花得真花创意玩法展示", videoSrc: "/videos/5模拟经营/1-种花得真花.mp4", posterSrc: "" },
    { id: "sim-master", title: "花艺达人", category: "模拟经营", description: "模拟经营题材广告，花艺达人养成与成长体系展示", videoSrc: "/videos/5模拟经营/2-花艺达人.mp4", posterSrc: "" },
    { id: "sim-breakup", title: "和渣男分开后", category: "模拟经营", description: "模拟经营题材广告，情感叙事与剧情反转设计", videoSrc: "/videos/5模拟经营/3-和渣男分开后.mp4", posterSrc: "" },
    // 6三国SLG（横版，布局保持原样）
    { id: "slg-server", title: "还在找服", category: "三国SLG", description: "三国SLG广告，找服玩法引导与视觉创意", videoSrc: "/videos/6三国SLG/1-还在找服.mp4", posterSrc: "" },
    { id: "slg-day1", title: "开服首日", category: "三国SLG", description: "三国SLG广告，开服首日玩法与策略引导", videoSrc: "/videos/6三国SLG/2-开服首日.mp4", posterSrc: "" },
    { id: "slg-story", title: "开启剧情线", category: "三国SLG", description: "三国SLG广告，剧情线开启与沉浸式叙事设计", videoSrc: "/videos/6三国SLG/3-开启剧情线.mp4", posterSrc: "" },
  ],

  // 三国SLG 视频为横版，保持原有横版大卡布局；其余分类为竖版无文字布局
  portfolioLandscapeCategories: ["三国SLG"],
};

export default siteConfig;
