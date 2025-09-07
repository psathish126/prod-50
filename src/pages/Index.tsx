import React, { useEffect, useState, useRef } from "react";
import { ArrowUp } from "lucide-react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // rAF helpers
  const ticking = useRef(false);

  // Loader (fake) — keep your existing timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll / progress handling
  useEffect(() => {
    // updateProgress reads the current scroll and updates state
    const updateProgress = () => {
      // Use window/document by default (most common). If you have a scrollable container,
      // change this logic to use that element's scrollTop & scrollHeight.
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      const total = docHeight - window.innerHeight;
      const progress = total > 0 ? (scrollTop / total) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // toggle scroll-to-top button
      setShowScroll(scrollTop > 300);
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateProgress);
      }
    };

    // ensure we have an initial value
    updateProgress();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-300 z-50">
        <div className="w-16 h-16 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin mb-6" />
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-800 text-center">
          We Celebrate 50th Year Golden Jubilee
        </h1>
        <p className="text-sm md:text-lg text-yellow-700 text-center mt-2">
          Department of Production Engineering, PSG College of Technology
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Scroll Progress Bar (top) */}
{/* Scroll Progress Bar (top) */}
<div className="fixed top-0 left-1/2 w-full max-w-[100vw] h-2 z-[9999] pointer-events-none transform -translate-x-1/2">
  <div
    className="h-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 transition-transform duration-150"
    style={{
      transform: `scaleX(${scrollProgress / 100})`,
      transformOrigin: "center",
    }}
  />
</div>



      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Sponsors />
        <Team />
        <Contact />
      </main>
      <Footer />

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Index;
