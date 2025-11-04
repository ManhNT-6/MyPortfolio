import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
    useEffect(() => {
        const sections = document.querySelectorAll(".section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.2 } // khi 20% section hiển thị thì chạy animation
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="app">
            <Navbar />

            {/* Hero Section */}
            <section id="home" className="section hero">
                <h1>
                    Hey there! I'm{" "}
                    <span className="highlight">Nguyen Tien Manh</span>
                </h1>
                <p>
                    Crafting immersive gaming experiences where technology and
                    creativity collide.
                </p>
                <div className="btn-group">
                    <a href="#projects" className="btn-primary">
                        Check My Projects
                    </a>
                    <a href="#contact" className="btn-outline">
                        Hit Me Up
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section about">
                <h2 className="section-title">About Me</h2>
                <p>
                    I’m a passionate Game Developer who loves blending code, art, and
                    storytelling to bring worlds to life.
                </p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section projects">
                <h2 className="section-title">Projects</h2>
                <p>
                    Here are some of my featured games and interactive works.
                </p>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section contact">
                <h2 className="section-title">Contact</h2>
                <p>
                    Let’s connect! Reach me at{" "}
                    <strong>your.email@gmail.com</strong>
                </p>
            </section>

            {/* Footer */}
            <footer className="footer">
                © 2025 Nguyen Tien Manh • Crafted with ❤️ using React
            </footer>
        </div>
    );
}
