import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-title">Contact Me </h2>
            <p className="contact-subtitle">
                I’d love to collaborate or just chat about game development and technology!
            </p>

            <div className="contact-container">
                {/* LEFT SIDE - Info */}
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p><FaEnvelope /> manh6.unity@gmail.com</p>
                    <p><FaMapMarkerAlt /> Hanoi, Vietnam</p>

                    <div className="social-icons">
                        <a href="https://github.com/ManhNT-6" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE - Form */}
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="send-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
