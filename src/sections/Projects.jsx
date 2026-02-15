import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "ZedCars",
        category: "Enterprise Solution",
        desc: "Car buying platform delivering personalized discovery, test drive booking, and accessory customization, built with .NET 8 and a scalable MySQL backend for a seamless customer experience.",
        tech: ["ReactJs", "BootstrapCSS", ".NET8", "MySQL"],
        image: "/assets/images/projects/ZedCarsHome.png",
        number: "01",
        github: "https://github.com/Atharva-5/ZedCars"
    },
    {
        title: "VivahBandh",
        category: "Matchmaking Architecture",
        desc: "A matchmaking platform for specific communities and connection requests. Engineered for scalability and high-concurrency connections.",
        tech: ["ReactJS", "TailwindCSS", "Django"],
        image: "/assets/images/VivahBandh.png",
        number: "02",
        github: "https://github.com/Atharva-5/Major-Project"
    },
    {
        title: "TechTrek",
        category: "Engineering Portal",
        desc: "A centralized hub empowering engineering aspirants with curated resources, mentorship paths, and technological insights.",
        tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
        image: "/assets/images/TechTrek.png",
        number: "03",
        github: "https://github.com/Atharva-5/TechTrek"
    },
    {
        title: "MoviesVerse",
        category: "Entertainment Engine",
        desc: "High-performance movie discovery interface leveraging the OMDb API for real-time data synchronization across 5000+ titles.",
        tech: ["React", "REST API", "TailwindCSS", "Vite"],
        image: "/assets/images/projects/MoviesVerseHome.png",
        number: "04",
        github: "https://github.com/Atharva-5/MoviesVerse"
    }
];

const ProjectCard = ({ project }) => {
    const cardRef = useRef();
    const imageRef = useRef();

    useGSAP(() => {
        if (!cardRef.current) return;

        // Image Parallax
        gsap.to(imageRef.current, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        // Split text reveal for title
        gsap.from(cardRef.current.querySelectorAll(".reveal-text"), {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80%",
            }
        });

    }, { scope: cardRef });

    return (
        <div className="project-v6-card" ref={cardRef}>
            <div className="project-v6-meta">
                <span className="reveal-text">{project.number} / {project.category}</span>
            </div>

            <div className="project-v6-main">
                <div className="project-v6-image-container">
                    <img
                        ref={imageRef}
                        src={project.image}
                        alt={project.title}
                        onError={(e) => e.target.src = 'https://placehold.co/1920x1080/080808/333333?text=' + project.title}
                    />
                </div>

                <div className="project-v6-content">
                    <h3 className="reveal-text">{project.title}</h3>
                    <p className="reveal-text">{project.desc}</p>
                    <div className="project-v6-stack reveal-text">
                        {project.tech.map(t => <span key={t}>{t}</span>)}
                    </div>
                    <div className="project-v6-links reveal-text">
                        <a href={project.github} target="_blank" rel="noreferrer" className="project-v6-link">
                            <Github size={14} />
                            <span>SOURCE CODE</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="projects-v6">
            <div className="container">
                <div className="projects-v6-header">
                    <h2>SELECTED WORKS.</h2>
                </div>
                <div className="projects-v6-list">
                    {projects.map((p, idx) => (
                        <ProjectCard key={idx} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
