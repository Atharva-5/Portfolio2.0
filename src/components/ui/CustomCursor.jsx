import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const mainCursor = useRef();
    const trailCursor = useRef();

    useEffect(() => {
        // Only enable custom cursor on non-touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const moveCursor = (e) => {
            const { clientX, clientY } = e;

            gsap.to(mainCursor.current, {
                x: clientX,
                y: clientY,
                duration: 0.1,
                ease: "power2.out"
            });

            gsap.to(trailCursor.current, {
                x: clientX,
                y: clientY,
                duration: 0.6,
                ease: "power3.out"
            });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    // Hide if touch device
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <>
            <div
                ref={mainCursor}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "10px",
                    height: "10px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 9999,
                    mixBlendMode: "difference",
                    transform: "translate(-50%, -50%)"
                }}
            />
            <div
                ref={trailCursor}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "40px",
                    height: "40px",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 9998,
                    mixBlendMode: "difference",
                    transform: "translate(-50%, -50%)"
                }}
            />
        </>
    );
};

export default CustomCursor;
