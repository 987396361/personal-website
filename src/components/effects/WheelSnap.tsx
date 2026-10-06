"use client";

// 滚轮快照滚动（仅首屏区域）：
// - 在头图内向下滚一下 → 自动平滑划到"关于我"
// - 在"关于我"区域向上滚一下 → 自动平滑划回头图
// - 关于之后的模块不拦截，保持浏览器原生滚动
// 其他规则：
// - 跳转动画期间锁定滚轮，防止连续滚动
// - 仅桌面端（带滚轮的设备）启用，移动端保留原生滚动体验
// - 弹窗（视频播放器等）打开时页面不可滚动，滚轮事件交给弹窗处理

import { useEffect } from "react";

/** 累计位移超过该值视为"滚一下"（兼容触摸板的多段小位移） */
const WHEEL_THRESHOLD = 24;
/** 跳转动画期间的滚轮锁定时间（ms） */
const LOCK_MS = 1000;

export default function WheelSnap() {
  useEffect(() => {
    // 仅在桌面端（hover + 精确指针，即有鼠标滚轮的设备）启用
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let lockUntil = 0;
    let accumulated = 0;
    let accumulatedDir = 0;

    const clampY = (y: number) =>
      Math.max(0, Math.min(y, document.documentElement.scrollHeight - window.innerHeight));

    // 锚点的页面布局位置：沿 offsetParent 链累加 offsetTop（不受入场动画 transform 影响）
    const absTop = (el: HTMLElement) => {
      let top = 0;
      let node: HTMLElement | null = el;
      while (node) {
        top += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      return top;
    };

    const handleWheel = (e: WheelEvent) => {
      // 弹窗打开时页面被锁定，不拦截滚轮
      if (document.body.style.overflow === "hidden") return;

      const now = performance.now();
      // Firefox 等浏览器的滚轮位移按行计，统一换算为像素
      const delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;

      // 锁定期间吞掉滚动事件，防止连滚
      if (now < lockUntil) {
        e.preventDefault();
        return;
      }
      // 忽略触摸板的手指微动
      if (Math.abs(delta) < 4) return;

      // 方向反转时重新累计
      if (Math.sign(delta) !== accumulatedDir) {
        accumulated = 0;
        accumulatedDir = Math.sign(delta);
      }
      accumulated += delta;
      if (Math.abs(accumulated) < WHEEL_THRESHOLD) {
        e.preventDefault();
        return;
      }
      const direction = accumulated > 0 ? 1 : -1;
      accumulated = 0;

      const hero = document.getElementById("hero");
      const about = document.getElementById("about");
      const skills = document.getElementById("skills");
      if (!hero || !about) return;

      const aboutTop = absTop(about);
      const skillsTop = skills ? absTop(skills) : Infinity;
      const y = window.scrollY;

      let target: number | null = null;
      if (direction > 0 && y < aboutTop - 4) {
        // 在头图内向下滚 → 划到"关于我"顶部
        target = aboutTop;
      } else if (direction < 0 && y >= aboutTop - 4 && y < skillsTop) {
        // 在"关于我"区域内向上滚 → 划回头图顶部
        target = 0;
      }

      // 只有命中快照才拦截滚动并跳转；其余位置保留原生滚动
      if (target !== null) {
        e.preventDefault();
        lockUntil = now + LOCK_MS;
        window.scrollTo({ top: clampY(target), behavior: "smooth" });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return null;
}
