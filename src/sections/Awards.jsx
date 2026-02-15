import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const awards = [
    { title: "National Level Web Designing", organization: "Inter-College Symposium", year: "2024" },
    { title: "Paper Presentation Winner", organization: "Kshitij National Symposium", year: "2024" },
    { title: "Project Exhibition Winner", organization: "WisoTech National Symposium", year: "2024" }
];

const Awards = () => {
    const container = useRef();

    useGSAP(() => {
        if (!container.current) return;
        const items = gsap.utils.toArray(".item-entry", container.current);
        items.forEach((item) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 95%",
                },
                opacity: 0,
                x: -40,
                duration: 1.2,
                ease: "power3.out"
            });
        });
    }, { scope: container });

    return (
        <section id="awards" className="awards" ref={container}>
            <div className="container">
                <h2 className="section-title">RECOGNITION.</h2>
                <div className="awards-list">
                    {awards.map((award, index) => (
                        <div className="item-entry" key={index}>
                            <div className="item-entry-content">
                                <h3>{award.title}</h3>
                                <p>{award.organization}</p>
                            </div>
                            <span className="item-year">({award.year})</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
