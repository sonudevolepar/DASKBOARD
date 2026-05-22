import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="glow-text-small">MERN App</span>
          <p className="copyright">© 2026 All rights reserved.</p>
        </div>

        <div className="footer-socials">
          <a href="#" target="_blank" rel="noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="social-icon">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}