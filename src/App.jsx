import React from "react";
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

function App() {
  return (
    <div className="app-wrapper">
      <CustomCursor />
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
        <footer style={{ padding: "4rem 6vw", borderTop: "1px solid rgba(255,255,255,0.05)", opacity: 0.3, fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>
          &copy; {new Date().getFullYear()} ATHARVA JOSHI. ALL RIGHTS RESERVED.
        </footer>
      </SmoothScroll>
    </div>
  );
}

export default App;
