import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

export default function App() {
  return (
      <div className="app">
        {/* Navbar */}
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

        {/* Hero Section */}
        <main className="hero">
          <h1>
            Hey there! I'm{" "}
            <span className="gradient">Nguyen Tien Manh</span>
          </h1>
          <p>
            Crafting immersive gaming experiences where technology and creativity collide.
          </p>
          <div className="buttons">
            <button className="primary">Check My Projects</button>
            <button className="secondary">Hit Me Up</button>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          © 2025 Nguyen Tien Manh • Crafted with ❤️ using React
        </footer>
      </div>
  );
}
