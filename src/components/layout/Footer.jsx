import React from "react";

const Footer = () => {
    return (
        <footer className="footer" data-scroll-section>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Atharva Joshi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
