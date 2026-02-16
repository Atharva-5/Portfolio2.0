import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".hero-top-meta > *", {
            opacity: 0,
            y: -20,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
        })
            .from(".hero-line span", {
                y: "100%",
                duration: 1.5,
                stagger: 0.1,
                ease: "power4.out"
            }, "-=0.5")
            .from(".hero-footer", {
                opacity: 0,
                y: 40,
                duration: 1.2,
                ease: "power3.out"
            }, "-=1")
            .from(".cta-link", {
                scaleX: 0,
                transformOrigin: "left",
                duration: 1,
                ease: "expo.out"
            }, "-=0.6");

    }, { scope: container });

    return (
        <section id="home" className="hero-v5" ref={container}>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-top-meta">
                        <span>BASED IN INDIA</span>
                        <div className="status-dot-wrapper">
                            <span className="status-dot"></span>
                            <span>AVAILABLE FOR WORK</span>
                        </div>
                    </div>

                    <h1 className="hero-title">
                        <div className="hero-line"><span>ATHARVA</span></div>
                        <div className="hero-line"><span className="outline-text">JOSHI</span></div>
                    </h1>

                    <div className="hero-footer">
                        <div className="hero-sub">
                            <p>SOFTWARE ENGINEER /</p>
                            <p>FULL STACK DEVELOPER</p>
                        </div>
                        <div className="hero-cta">
                            <a href="#projects" className="cta-link">VIEW WORKS</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-hint">
                <div className="hint-line"></div>
                <span>SCROLL</span>
            </div>
        </section>
    );
};

export default Hero;
