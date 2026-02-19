import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const container = useRef();

    useGSAP(() => {
        if (!container.current) return;

        const lines = gsap.utils.toArray(".mission-line", container.current);

        lines.forEach((line) => {
            gsap.from(line, {
                scrollTrigger: {
                    trigger: line,
                    start: "top 90%",
                },
                y: 50,
                opacity: 0,
                rotateX: -45,
                duration: 2,
                ease: "expo.out"
            });
        });

        gsap.from(".mission-stats-grid > *", {
            scrollTrigger: {
                trigger: ".mission-stats-grid",
                start: "top 90%",
            },
            scaleY: 0,
            opacity: 0,
            stagger: 0.2,
            transformOrigin: "bottom",
            duration: 1.5,
            ease: "power4.out"
        });

    }, { scope: container });

    return (
        <section id="about" className="mission-section" ref={container}>
            <div className="container">
                <div className="mission-header">
                    <h2 className="mission-line mission-title-small">THE MISSION Statement.</h2>
                    <div className="mission-content">
                        <h3 className="mission-line mission-line-h3">DESIGNING</h3>
                        <h3 className="mission-line mission-line-h3">STABILITY INTO</h3>
                        <h3 className="mission-line mission-line-h3" style={{ color: "transparent", WebkitTextStroke: "1px var(--text-main)" }}>THE CHAOS.</h3>
                    </div>
                </div>

                <div className="mission-grid">
                    <div className="mission-stats-grid">
                        <div className="stat-item">
                            <span className="stat-number">150+</span>
                            <p className="stat-label">DSA PROBLEMS</p>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <p className="stat-label">ENGAGEMENTS</p>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">02</span>
                            <p className="stat-label">NATIONAL TITLES</p>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">01</span>
                            <p className="stat-label">AWS CERTIFIED</p>
                        </div>
                    </div>

                    <div className="mission-text">
                        <p>
                            I AM ATHARVA JOSHI. A SOFTWARE ENGINEER OBSESSED WITH THE ARCHITECTURE OF PERFECTION.
                            I DON’T JUST WRITE CODE; I BUILD DIGITAL MONOLITHS THAT STAND THE TEST OF SCALE.
                        </p>
                        <p className="sub-text">
                            Based in India. Currently operating as a Junior Software Engineer.
                            Bridging the gap between robust Enterprise systems (.NET/Angular)
                            and cutting-edge interactive Web interfaces.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
