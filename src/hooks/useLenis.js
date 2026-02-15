import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.8, // Slightly longer for weighted feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1.1, // Controlled speed
            smoothTouch: true,
            touchMultiplier: 1.5,
            infinite: false,
        });

        const updateLenis = (time) => {
            lenis.raf(time * 1000);
        };

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add(updateLenis);

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(updateLenis);
        };
    }, []);
}
