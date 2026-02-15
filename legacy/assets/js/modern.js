/**
 * Modern Portfolio JavaScript with GSAP Animations
 * Features: GSAP animations, Swiper.js, smooth scrolling, particle effects
 */

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeAnimations();
    initializeHorizontalScroll();
    initializeNavigation();
    initializeParticles();
    initializeScrollEffects();
    initializeContactForm();
    initializeSkillBars();
    initializeFramerMotion();
    initializeSmoothTransitions();
});

// Initialize GSAP Animations
function initializeAnimations() {
    // Set initial states for animations
    gsap.set('.hero-text', { opacity: 0, y: 100, rotationX: 45 });
    gsap.set('.hero-image', { opacity: 0, x: 100, rotationY: 45 });
    gsap.set('.floating-icon', { opacity: 0, scale: 0, rotation: 180 });
    gsap.set('.shape', { opacity: 0, scale: 0 });
    gsap.set('.section-title', { opacity: 0, y: 50, rotationX: 20 });
    gsap.set('.section-subtitle', { opacity: 0, y: 30, rotationX: 10 });
    gsap.set('.about-text', { opacity: 0, x: -100, rotationY: -20 });
    gsap.set('.about-image', { opacity: 0, x: 100, rotationY: 20 });
    gsap.set('.skill-category', { opacity: 0, y: 50, rotationX: 15 });
    gsap.set('.project-card', { opacity: 0, y: 100, rotationX: 30 });
    gsap.set('.contact-item', { opacity: 0, y: 30, rotationX: 10 });

    // Hero section animations with Awwwards-level effects
    const heroTl = gsap.timeline();
    heroTl
        .to('.hero-text', {
            duration: 2,
            opacity: 1,
            y: 0,
            rotationX: 0,
            ease: 'power4.out',
            transformOrigin: 'center bottom'
        })
        .to('.hero-image', {
            duration: 2,
            opacity: 1,
            x: 0,
            rotationY: 0,
            ease: 'power4.out',
            transformOrigin: 'center center'
        }, '-=1.5')
        .to('.shape', {
            duration: 1.5,
            opacity: 0.1,
            scale: 1,
            stagger: 0.4,
            ease: 'elastic.out(1, 0.5)'
        }, '-=1.5')
        .to('.floating-icon', {
            duration: 1.2,
            opacity: 1,
            scale: 1,
            rotation: 0,
            stagger: 0.3,
            ease: 'back.out(2)'
        }, '-=1');

    // Add continuous floating animation to icons
    gsap.utils.toArray('.floating-icon').forEach((icon, index) => {
        gsap.to(icon, {
            y: -20,
            rotation: 360,
            duration: 4 + index * 0.5,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true,
            stagger: 0.5
        });
    });

    // Add morphing animation to shapes
    gsap.utils.toArray('.shape').forEach((shape, index) => {
        gsap.to(shape, {
            rotation: 360 * (index + 1),
            scale: 1.1,
            duration: 8 + index * 2,
            ease: 'none',
            repeat: -1,
            transformOrigin: 'center center'
        });
    });

    // Advanced typing animation with cursor effect
    gsap.to('.role', {
        duration: 3,
        text: 'Full Stack Developer',
        ease: 'none',
        delay: 2
    });

    // Add cursor blinking effect
    gsap.to('.role', {
        borderRight: '2px solid var(--primary-color)',
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: 5
    });

    // Scroll-triggered animations
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.to(title, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    gsap.utils.toArray('.section-subtitle').forEach(subtitle => {
        gsap.to(subtitle, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.2,
            scrollTrigger: {
                trigger: subtitle,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // About section animations
    gsap.to('.about-text', {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.to('.about-image', {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.about-image',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    // Stats counter animation
    gsap.utils.toArray('.stat-number').forEach(stat => {
        const endValue = parseInt(stat.textContent);
        gsap.to(stat, {
            textContent: endValue,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: stat,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Skills section animations
    gsap.utils.toArray('.skill-category').forEach((category, index) => {
        gsap.to(category, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: index * 0.2,
            scrollTrigger: {
                trigger: category,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Contact section animations
    gsap.utils.toArray('.contact-item').forEach((item, index) => {
        gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: index * 0.1,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    ScrollTrigger.refresh();

    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 100);

    // Also refresh on window resize
    window.addEventListener('resize', () => {
        setTimeout(() => ScrollTrigger.refresh(), 100);
    });
}

// Horizontal Projects Scroll Animation
function initializeHorizontalScroll() {
    const projectsSection = document.querySelector(".projects");
    const scrollContainer = document.querySelector(".projects-scroll-container");

    if (!projectsSection || !scrollContainer) return;

    // Calculate total scroll distance
    const containerWidth = scrollContainer.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = containerWidth - viewportWidth;

    // Create GSAP ScrollTrigger animation
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(scrollContainer, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
            trigger: projectsSection,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
        }
    });

    // Animate individual project cards
    gsap.set(".project-card", { opacity: 0, y: 100 });

    ScrollTrigger.batch(".project-card", {
        onEnter: (elements) => {
            gsap.to(elements, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            });
        },
        start: "top bottom-=100",
        end: "bottom top+=100"
    });
}
