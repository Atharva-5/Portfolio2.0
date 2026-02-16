import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { getLenis } from "../../hooks/useLenis";

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

    const handleNavLinkClick = (e, targetId) => {
        e.preventDefault();
        const lenis = getLenis();
        if (lenis) {
            lenis.scrollTo(targetId, {
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
        } else {
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
        closeMenu();
    };

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
                    <a href="#home" onClick={(e) => handleNavLinkClick(e, "#home")}>Home</a>
                    <a href="#about" onClick={(e) => handleNavLinkClick(e, "#about")}>About</a>
                    <a href="#experience" onClick={(e) => handleNavLinkClick(e, "#experience")}>Journey</a>
                    <a href="#projects" onClick={(e) => handleNavLinkClick(e, "#projects")}>Works</a>
                    <a href="#contact" onClick={(e) => handleNavLinkClick(e, "#contact")}>Contact</a>
                </div>
            </div>

            {/* Mobile Overlay Menu */}
            <div className={`mobile-nav-overlay ${menuOpen ? "active" : ""}`}>
                <button className="mobile-nav-close" onClick={closeMenu}>CLOSE</button>
                <div className="mobile-links">
                    <a href="#home" onClick={(e) => handleNavLinkClick(e, "#home")}>Home</a>
                    <a href="#about" onClick={(e) => handleNavLinkClick(e, "#about")}>About</a>
                    <a href="#experience" onClick={(e) => handleNavLinkClick(e, "#experience")}>Journey</a>
                    <a href="#projects" onClick={(e) => handleNavLinkClick(e, "#projects")}>Works</a>
                    <a href="#contact" onClick={(e) => handleNavLinkClick(e, "#contact")}>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
