import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
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
            <section id="about" className="about-section">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="profile-image">
                        <img
                            src="https://i.ibb.co/album/yourimage.png"
                            alt="Profile"
                            className="glow-image"
                        />
                    </div>
                    <div className="about-text">
                        <h3 className="intro-title">
                            Hello! I'm <span className="highlight">Tien Manh</span> 👋
                        </h3>
                        <p className="description">
                            I’m a passionate <strong>Game Developer</strong> and{" "}
                            <strong>Frontend Engineer</strong> who loves transforming ideas into
                            interactive experiences. My work blends{" "}
                            <em>code, art, and design</em> — aiming to create digital worlds that
                            feel alive.
                        </p>
                        <p className="description">
                            I enjoy experimenting with <strong>Unity</strong>, building{" "}
                            <strong>React-based apps</strong>, and crafting stunning UI
                            interactions that bring delight to users.
                        </p>

                        <div className="skills">
                            <span className="skill">🎮 Unity</span>
                            <span className="skill">⚛️ React</span>
                            <span className="skill">💡 UI/UX</span>
                            <span className="skill">🧠 Problem Solving</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section projects">
                <h2 className="section-title">Projects</h2>
                <p>
                    Here are some of my featured games and interactive works.
                </p>
            </section>

            {/* Contact Section */}
            {/*<section id="contact" className="section contact">*/}
            {/*    <h2 className="section-title">Contact</h2>*/}
            {/*    <p>*/}
            {/*        Let’s connect! Reach me at{" "}*/}
            {/*        <strong>your.email@gmail.com</strong>*/}
            {/*    </p>*/}
            {/*</section>*/}
            <Contact />

            <BackToTop />

            {/* Footer */}
            <footer className="footer">
                © 2025 Nguyen Tien Manh • Crafted with ❤️ using React
            </footer>
        </div>
    );
}
