import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";

import Grain from "@/components/Grain";
import Nav from "@/components/Nav";
import MusicToggle from "@/components/MusicToggle";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Details from "@/components/Details";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import Travel from "@/components/Travel";
import RSVP from "@/components/RSVP";
import WellWishes from "@/components/WellWishes";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App bg-ivory">
      <Grain />
      <Nav />
      <MusicToggle />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Details />
        <Schedule />
        <Gallery />
        <Travel />
        <RSVP />
        <WellWishes />
      </main>
      <Footer />
      <Toaster position="bottom-center" theme="light" />
    </div>
  );
}

export default App;
