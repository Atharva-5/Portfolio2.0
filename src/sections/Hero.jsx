import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();

        // Reveal name from bottom
        tl.from(".hero-line span", {
            y: "100%",
            duration: 1.5,
            stagger: 0.1,
            ease: "power4.out"
        })
            .from(".hero-sub", {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: "power3.out"
            }, "-=1");

    }, { scope: container });

    return (
        <section id="home" className="hero-v5" ref={container}>
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <div className="hero-line"><span>ATHARVA</span></div>
                        <div className="hero-line"><span>JOSHI</span></div>
                    </h1>
                    <div className="hero-sub">
                        <p>- SOFTWARE ENGINEER</p>
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
