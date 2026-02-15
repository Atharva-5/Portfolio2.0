import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const container = useRef();

    useGSAP(() => {
        if (!container.current) return;

        gsap.from(".exp-header", {
            scrollTrigger: {
                trigger: ".exp-header",
                start: "top 85%",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
        });

        gsap.from(".exp-card", {
            scrollTrigger: {
                trigger: ".exp-content",
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            stagger: 0.3,
            duration: 1.5,
            ease: "expo.out"
        });

    }, { scope: container });

    return (
        <section id="experience" className="experience-section" ref={container}>
            <div className="container">
                <div className="exp-header">
                    <h2 className="section-title">JOURNEY.</h2>
                    <div className="aws-badge">
                        AWS CERTIFIED CLOUD PRACTITIONER
                    </div>
                </div>

                <div className="exp-content">
                    <div className="exp-card">
                        <div className="exp-time-dot"></div>

                        <div className="exp-card-header">
                            <div>
                                <h3>Junior Software Engineer</h3>
                                <p className="exp-company">Confidential Company</p>
                            </div>
                            <span className="exp-period">Aug 2025 — Present</span>
                        </div>

                        <div className="exp-tags">
                            {["Angular", "TypeScript", "Bootstrap", "SCSS", ".NET Fullstack", "AWS"].map(tech => (
                                <span key={tech} className="tech-tag" style={{ margin: 0 }}>{tech}</span>
                            ))}
                        </div>

                        <p className="exp-desc">
                            Currently spearheading enterprise-level web applications using the Angular framework and .NET Core.
                            Focusing on high-performance architecture, clean code principles, and seamless UI/UX implementation
                            across the full software development lifecycle.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
