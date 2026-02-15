import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        // Toggle body scroll
        document.body.style.overflow = !menuOpen ? "hidden" : "auto";
    };

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
        <nav className={`navbar-v5 ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-active" : ""}`}>
            <div className="nav-pill">
                <div className="nav-logo">AJ.</div>

                <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                </button>

                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#projects" onClick={closeMenu}>Works</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </div>
            </div>

            {/* Mobile Overlay Menu */}
            <div className={`mobile-nav-overlay ${menuOpen ? "active" : ""}`}>
                <div className="mobile-links">
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#projects" onClick={closeMenu}>Works</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
