import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          Copyright © 2024 Made by Mario, Juan Manuel, Alberto, Alejandro. All
          rights reserved.
        </p>
        <ul className="footer-links">
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
