import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const papers = [
    { title: "TechTrek: Web Portal for Empowering Engineering Aspirants", journal: "International Journal of Scientific Research and Technology", year: "2024" },
    { title: "AI-Powered Chatbot: Enhancing User Interaction and Efficiency", journal: "", year: "2024" }
];

const Research = () => {
    const container = useRef();

    useGSAP(() => {
        if (!container.current) return;
        const items = gsap.utils.toArray(".research-entry", container.current);
        items.forEach((item) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 95%",
                },
                opacity: 0,
                x: 40,
                duration: 1.2,
                ease: "power3.out"
            });
        });
    }, { scope: container });

    return (
        <section id="research" className="research" ref={container}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: "right" }}>INQUIRY.</h2>
                <div className="research-list">
                    {papers.map((paper, index) => (
                        <div className="research-entry" key={index}>
                            <div className="research-entry-content">
                                <h3>{paper.title}</h3>
                                <p>{paper.journal}</p>
                            </div>
                            <span className="research-year">({paper.year})</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
