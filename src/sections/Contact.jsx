import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const container = useRef();

    useGSAP(() => {
        if (!container.current) return;

        gsap.from(".contact-primary-link", {
            scrollTrigger: {
                trigger: ".contact-primary-link",
                start: "top 90%",
            },
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out",
        });

        const footerLinks = gsap.utils.toArray(".footer-link-entry", container.current);
        gsap.from(footerLinks, {
            scrollTrigger: {
                trigger: ".footer-links-grid",
                start: "top 95%",
            },
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
        });

    }, { scope: container });

    return (
        <section id="contact" className="contact" ref={container} style={{ minHeight: "80vh", paddingBottom: "5rem" }}>
            <div className="container">
                <h2 className="section-title">COLLABORATE.</h2>
                <div className="contact-main">
                    <p className="contact-main-sub">
                        OPEN FOR INNOVATIVE PARTNERSHIPS
                    </p>
                    <a href="mailto:atharvajoshi0573@gmail.com" className="contact-primary-link">
                        ATHARVAJOSHI<span className="">0573@GMAIL.COM</span>
                    </a>
                </div>

                <div className="footer-links-grid">
                    <div className="footer-link-entry">
                        <h4>SOCIAL</h4>
                        <a href="https://linkedin.com/in/contactatharvajoshi" target="_blank" rel="noreferrer">LINKEDIN</a>
                        <a href="https://github.com/Atharva-5" target="_blank" rel="noreferrer">GITHUB</a>
                    </div>
                    <div className="footer-link-entry">
                        <h4>LOCATION</h4>
                        <p>PUNE, MAHARASHTRA</p>
                    </div>
                    <div className="footer-link-entry" style={{ textAlign: "right" }}>
                        <h4>RESUME</h4>
                        <a href="#">DOWNLOAD.PDF</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
