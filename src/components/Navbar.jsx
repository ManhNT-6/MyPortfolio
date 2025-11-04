import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            {/* Left: Logo */}
            <div className="navbar-left">
                <div className="logo-box">TM</div>
                <span className="logo-text">TienManh</span>
            </div>

            {/* Center: Portfolio Title */}
            <div className="navbar-center">
                <h1 className="navbar-title">Portfolio</h1>
            </div>

            {/* Right: Menu */}
            <div className="navbar-right">
                <a href="#projects" className="nav-link">
                    Projects
                </a>
                <a href="#about" className="nav-link">
                    About
                </a>
                <a href="#contact" className="nav-link">
                    Contact
                </a>
            </div>

            {/* LED Bar */}
            <div className="led-bar">
                <div className="led-light"></div>
            </div>
        </nav>
    );
}

export default Navbar;
