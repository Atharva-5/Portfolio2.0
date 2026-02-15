import React from "react";
import useLenis from "../../hooks/useLenis";

const SmoothScroll = ({ children }) => {
    useLenis();

    return (
        <div className="smooth-content">
            {children}
        </div>
    );
};

export default SmoothScroll;
