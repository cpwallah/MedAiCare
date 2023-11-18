import React from "react";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Stay Connected</h3>
          <p>Join us on social media for the latest updates and news.</p>
          <div className="footer-social-icons">
            <a href="#" className="social-icon discord">
              <FaDiscord />
            </a>
            <a href="#" className="social-icon instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon youtube">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-center">
          <h3>Subscribe to MED AI Care</h3>
          <p>Get notified about MED AI new features.</p>
          <form className="subscribe-form" action="#">
            <input
              type="email"
              required
              autoComplete="off"
              placeholder="Enter your email"
            />
            <button type="submit" className="subs">Subscribe</button>
          </form>
        </div>

        <div className="footer-right">
          <h3>Contact Us</h3>
          <p>If you have any questions, feel free to reach out.</p>
          <p>Email: medai@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <div className="footer-terms">
          <p>&copy; {new Date().getFullYear()} MedAICare. All Rights Reserved</p>
          <p>
            <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
