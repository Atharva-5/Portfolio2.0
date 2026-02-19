import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
    {
        title: "BACKEND INFRA",
        skills: ["Java", "Spring Boot", "PostgreSQL", "MySQL", "Node.js", ".NET", "C#", "AWS"]
    },
    {
        title: "INTERFACE CORE",
        skills: ["Angular", "React", "HTML5", "CSS3", "JavaScript", "TypeScript", "SCSS"]
    },
    {
        title: "TOOLING & ENV",
        skills: ["Git", "Docker", "Linux", "GitHub", "Bootstrap", "GSAP", "Lenis"]
    }
];

const Skills = () => {
    const container = useRef();

    useGSAP(() => {
        if (!container.current) return;

        const cards = gsap.utils.toArray(".skill-group-v4", container.current);
        cards.forEach((card, i) => {
            const listItems = card.querySelectorAll("li");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                }
            });

            tl.from(card, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power4.out"
            })
                .from(listItems, {
                    x: -20,
                    opacity: 0,
                    stagger: 0.05,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.5");

            // Hover interaction for items
            listItems.forEach(item => {
                item.addEventListener("mouseenter", () => {
                    gsap.to(item, { x: 20, color: "var(--text-main)", duration: 0.3 });
                });
                item.addEventListener("mouseleave", () => {
                    gsap.to(item, { x: 0, color: "var(--text-dim)", duration: 0.3 });
                });
            });
        });

    }, { scope: container });

    return (
        <section id="skills" className="skills-section" ref={container}>
            <div className="container">
                <div className="skills-header">
                    <h2 className="section-title">STACK.</h2>
                    <p className="skills-header-sub">
                        ENGINEERING MODERN PRIMITIVES WITH PRECISION.
                    </p>
                </div>

                <div className="skills-grid-v4">
                    {skillGroups.map((group, index) => (
                        <div className="skill-group-v4" key={index}>
                            <h3>{group.title}</h3>
                            <ul className="skill-list">
                                {group.skills.map((skill, i) => (
                                    <li key={i} className="skill-item">
                                        {skill}
                                        <span className="skill-sep">/</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
