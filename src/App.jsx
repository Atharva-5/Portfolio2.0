import React, { useState, useEffect } from "react";
import SmoothScroll from "./components/layout/SmoothScroll";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Awards from "./sections/Awards";
import Research from "./sections/Research";
import Contact from "./sections/Contact";
import CustomCursor from "./components/ui/CustomCursor";
import ThemeToggle from "./components/ui/ThemeToggle";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.className = theme === "light" ? "light-theme" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`app-wrapper ${theme === "light" ? "light-theme" : ""}`}>
      <CustomCursor />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Navbar />
      <SmoothScroll>
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Awards />
          <Research />
          <Contact />
        </main>
        <footer style={{ padding: "4rem 6vw", borderTop: "1px solid var(--nav-border)", opacity: 0.3, fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>
          &copy; {new Date().getFullYear()} ATHARVA JOSHI. ALL RIGHTS RESERVED.
        </footer>
      </SmoothScroll>
    </div>
  );
}

export default App;
