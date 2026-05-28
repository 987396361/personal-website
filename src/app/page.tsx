import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LightOrbs from "@/components/effects/LightOrbs";
import CursorGlow from "@/components/effects/CursorGlow";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <LightOrbs />
      <CursorGlow />
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
