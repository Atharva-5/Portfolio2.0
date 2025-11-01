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
    gsap.set('.project-card-horizontal', { opacity: 0, y: 100, rotationX: 30 });
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
}

// Initialize Horizontal Scroll
function initializeHorizontalScroll() {
    const horizontalScrollContent = document.getElementById('horizontalScrollContent');
    const projectCards = document.querySelectorAll('.project-card-horizontal');

    if (!horizontalScrollContent) return;

    // Calculate total width for horizontal scroll
    const cardWidth = 400; // Width of each card
    const gap = 48; // Gap between cards
    const totalWidth = (cardWidth + gap) * projectCards.length - gap;

    // Set the width of the scroll content
    gsap.set(horizontalScrollContent, { width: totalWidth });

    // Create horizontal scroll animation
    const horizontalScrollTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.projects',
            start: 'top top',
            end: () => `+=${totalWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
        }
    });

    horizontalScrollTl.to(horizontalScrollContent, {
        x: () => -(totalWidth - window.innerWidth),
        ease: 'none'
    });

    // Animate project cards on scroll
    projectCards.forEach((card, index) => {
        // Scroll-triggered appearance animation
        gsap.fromTo(card,
            {
                opacity: 0,
                y: 100,
                rotationX: 30,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Hover animations
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.08,
                rotationY: 8,
                rotationX: 5,
                z: 50,
                duration: 0.6,
                ease: 'power3.out'
            });

            gsap.to(card.querySelector('img'), {
                scale: 1.1,
                duration: 0.6,
                ease: 'power3.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                rotationY: 0,
                rotationX: 0,
                z: 0,
                duration: 0.6,
                ease: 'power3.out'
            });

            gsap.to(card.querySelector('img'), {
                scale: 1,
                duration: 0.6,
                ease: 'power3.out'
            });
        });
    });

    // ✅ Navigation logic should be outside of the loop
    initializeNavigation();


    // Initialize Navigation
    function initializeNavigation() {
        // Mobile menu toggle
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();

                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (!targetSection) return;

                // Remove previous active classes
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Stop any ongoing scroll animation
                gsap.killTweensOf(window);

                // Smooth scroll to target section
                gsap.to(window, {
                    scrollTo: {
                        y: targetSection,
                        offsetY: navbar.offsetHeight, // automatically handle navbar height
                    },
                    duration: 0,
                    ease: 'power2.out'
                });
            });
        });


        // Enhanced active link highlighting with GSAP
        const sections = document.querySelectorAll('section[id]');
        const navbarHeight = navbar.offsetHeight || 80;

        function highlightNavLink() {
            const scrollPos = window.scrollY + navbarHeight + 100;
            let currentSection = null;

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const isFirstSection = index === 0;
                const isLastSection = index === sections.length - 1;
                const isAtTop = window.scrollY < 100;

                if (isFirstSection && isAtTop) {
                    currentSection = section;
                } else if (isLastSection && scrollPos >= sectionTop) {
                    currentSection = section;
                } else if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    currentSection = section;
                }
            });

            if (currentSection) {
                const sectionId = currentSection.getAttribute('id');
                const activeNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

                navLinks.forEach(link => {
                    if (link === activeNavLink) {
                        if (!link.classList.contains('active')) {
                            link.classList.add('active');
                            gsap.to(link, { scale: 1.05, duration: 0.3 });
                        }
                    } else {
                        link.classList.remove('active');
                        gsap.to(link, { scale: 1, duration: 0.3 });
                    }
                });
            }
        }


        function updateNavLink() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    highlightNavLink();
                    ticking = false;
                });
                ticking = true;
            }
        }

        window.addEventListener('scroll', updateNavLink);
    }

    // Initialize Particle Effects
    function initializeParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            createParticle(particlesContainer);
        }
    }

    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
    `;

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;

        gsap.to(particle, {
            y: -100,
            x: Math.random() * 100 - 50,
            duration: duration,
            delay: delay,
            ease: 'none',
            repeat: -1,
            repeatDelay: Math.random() * 5
        });

        gsap.to(particle, {
            opacity: 0,
            duration: 2,
            delay: delay,
            ease: 'power2.out',
            repeat: -1,
            repeatDelay: duration - 2
        });

        container.appendChild(particle);
    }

    // Initialize Scroll Effects
    function initializeScrollEffects() {
        // Navbar background on scroll with smooth transition
        ScrollTrigger.create({
            trigger: 'body',
            start: '100px top',
            onEnter: () => gsap.to(navbar, { backgroundColor: 'rgba(10, 10, 10, 0.95)', duration: 0.3 }),
            onLeaveBack: () => gsap.to(navbar, { backgroundColor: 'rgba(10, 10, 10, 0.8)', duration: 0.3 })
        });

        // Advanced parallax effects
        gsap.to('.hero-background', {
            yPercent: -50,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });

        // Parallax for shapes
        gsap.utils.toArray('.shape').forEach((shape, index) => {
            gsap.to(shape, {
                y: -100 * (index + 1),
                rotation: 360 * (index + 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        });

        // Enhanced floating elements animation with scroll parallax
        gsap.utils.toArray('.floating-icon').forEach((icon, index) => {
            gsap.to(icon, {
                y: -30,
                rotation: 360,
                duration: 3 + index * 0.5,
                ease: 'power2.inOut',
                repeat: -1,
                yoyo: true,
                stagger: 0.3
            });

            // Add scroll parallax to floating icons
            gsap.to(icon, {
                y: -100 * (index + 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        });

        // Magnetic effect for buttons
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(btn, {
                    x: x * 0.1,
                    y: y * 0.1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.3)'
                });
            });
        });

        // Text reveal animations with backward support
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.fromTo(title,
                {
                    opacity: 0,
                    y: 50,
                    rotationX: 20,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Skills animation with backward support
        gsap.utils.toArray('.skill-category').forEach((category, index) => {
            gsap.fromTo(category,
                {
                    opacity: 0,
                    y: 50,
                    rotationX: 15,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out',
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: category,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }

    // Initialize Contact Form
    function initializeContactForm() {
        if (contactForm) {
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();

                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;

                // Show loading state
                submitBtn.innerHTML = '<span class="loading"></span> Sending...';
                submitBtn.disabled = true;

                // Simulate form submission (replace with actual form handling)
                try {
                    await new Promise(resolve => setTimeout(resolve, 2000));

                    // Success animation
                    gsap.to(submitBtn, {
                        backgroundColor: '#10b981',
                        duration: 0.3,
                        onComplete: () => {
                            submitBtn.textContent = 'Message Sent!';
                            setTimeout(() => {
                                submitBtn.textContent = originalText;
                                submitBtn.disabled = false;
                                gsap.to(submitBtn, { backgroundColor: '#6366f1', duration: 0.3 });
                                contactForm.reset();
                            }, 3000);
                        }
                    });
                } catch (error) {
                    // Error state
                    submitBtn.textContent = 'Error - Try Again';
                    submitBtn.disabled = false;
                    gsap.to(submitBtn, { backgroundColor: '#ef4444', duration: 0.3 });
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        gsap.to(submitBtn, { backgroundColor: '#6366f1', duration: 0.3 });
                    }, 3000);
                }
            });
        }
    }

    gsap.utils.toArray('.skill-group').forEach((group, i) => {
        gsap.from(group, {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: 'power3.out',
            delay: i * 0.2,
            scrollTrigger: {
                trigger: group,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Utility Functions
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Performance optimizations
    const debouncedScroll = debounce(() => {
        // Scroll-based animations and effects
    }, 10);

    window.addEventListener('scroll', debouncedScroll);

    // Intersection Observer for performance
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.gsap-fade-in, .gsap-slide-left, .gsap-slide-right, .gsap-scale-up').forEach(el => {
        observer.observe(el);
    });

    // Preloader (if needed)
    window.addEventListener('load', () => {
        gsap.to('.preloader', {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                document.querySelector('.preloader')?.remove();
            }
        });
    });

    // Error handling
    window.addEventListener('error', (e) => {
        console.error('Portfolio Error:', e.error);
    });

    // Initialize Framer Motion Effects
    function initializeFramerMotion() {
        // Add Framer Motion-like effects using GSAP
        if (typeof window.motion !== 'undefined') {
            // Framer Motion is available
            console.log('Framer Motion loaded successfully');
        } else {
            // Fallback to enhanced GSAP animations
            console.log('Using enhanced GSAP animations as Framer Motion fallback');
        }
    }

    // Initialize Smooth Transitions
    function initializeSmoothTransitions() {
        // Enhanced section transitions
        const sections = document.querySelectorAll('section');

        sections.forEach((section, index) => {
            // Create smooth entrance animations
            gsap.fromTo(section,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                        end: 'bottom 15%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Add section-specific animations with Awwwards-level effects
            if (section.id === 'awards') {
                gsap.utils.toArray('.award-card').forEach((card, cardIndex) => {
                    gsap.fromTo(card,
                        {
                            opacity: 0,
                            y: 50,
                            rotationX: 20,
                            scale: 0.8,
                            rotationY: 10
                        },
                        {
                            opacity: 1,
                            y: 0,
                            rotationX: 0,
                            rotationY: 0,
                            scale: 1,
                            duration: 1.2,
                            ease: 'power4.out',
                            delay: cardIndex * 0.15,
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 85%',
                                end: 'bottom 15%',
                                toggleActions: 'play none none reverse'
                            }
                        }
                    );

                    // Add hover effects to award cards
                    card.addEventListener('mouseenter', () => {
                        gsap.to(card, {
                            scale: 1.05,
                            rotationY: 5,
                            z: 20,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    });

                    card.addEventListener('mouseleave', () => {
                        gsap.to(card, {
                            scale: 1,
                            rotationY: 0,
                            z: 0,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                    });
                });
            }

            if (section.id === 'research') {
                gsap.utils.toArray('.research-card').forEach((card, cardIndex) => {
                    gsap.fromTo(card,
                        {
                            opacity: 0,
                            y: 60,
                            rotationY: 25,
                            scale: 0.85,
                            rotationX: 15
                        },
                        {
                            opacity: 1,
                            y: 0,
                            rotationY: 0,
                            rotationX: 0,
                            scale: 1,
                            duration: 1.4,
                            ease: 'power4.out',
                            delay: cardIndex * 0.25,
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 85%',
                                end: 'bottom 15%',
                                toggleActions: 'play none none reverse'
                            }
                        }
                    );

                    // Add sophisticated hover effects to research cards
                    card.addEventListener('mouseenter', () => {
                        gsap.to(card, {
                            scale: 1.06,
                            rotationY: 8,
                            rotationX: 3,
                            z: 30,
                            duration: 0.5,
                            ease: 'power3.out'
                        });

                        gsap.to(card.querySelector('img'), {
                            scale: 1.15,
                            duration: 0.5,
                            ease: 'power3.out'
                        });
                    });

                    card.addEventListener('mouseleave', () => {
                        gsap.to(card, {
                            scale: 1,
                            rotationY: 0,
                            rotationX: 0,
                            z: 0,
                            duration: 0.5,
                            ease: 'power3.out'
                        });

                        gsap.to(card.querySelector('img'), {
                            scale: 1,
                            duration: 0.5,
                            ease: 'power3.out'
                        });
                    });
                });
            }
        });

        // Enhanced scroll-triggered animations for all elements
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.fromTo(title,
                {
                    opacity: 0,
                    y: 50,
                    rotationX: 20,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Enhanced skill bars with better animations
        gsap.utils.toArray('.skill-progress').forEach(bar => {
            const width = bar.getAttribute('data-width');

            ScrollTrigger.create({
                trigger: bar,
                start: 'top 80%',
                onEnter: () => {
                    gsap.to(bar, {
                        width: width + '%',
                        duration: 2,
                        ease: 'power3.out',
                        delay: 0.5
                    });
                },
                onLeaveBack: () => {
                    gsap.to(bar, {
                        width: '0%',
                        duration: 0.5,
                        ease: 'power2.in'
                    });
                }
            });
        });
    }

    // Console welcome message
    console.log(`
    🚀 Atharva Joshi's Modern Portfolio 2.0
    ✨ Built with GSAP, Framer Motion, and modern web technologies
    🎭 Enhanced animations with smooth transitions
    📧 Contact: atharvajoshi0573@gmail.com
    🔗 GitHub: https://github.com/Atharva-5
    `)
}