import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Particles from "@/components/effects/Particles";
import CursorGlow from "@/components/effects/CursorGlow";
import WheelSnap from "@/components/effects/WheelSnap";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* 背景：3D 粒子（ogl），固定全屏、不拦截鼠标事件 */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Particles
          particleColors={["#818cf8", "#6366f1", "#22d3ee"]}
          particleCount={400}
          particleSpread={10}
          speed={0.15}
          moveParticlesOnHover
          alphaParticles
          disableRotation
        />
      </div>
      <CursorGlow />
      <WheelSnap />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
