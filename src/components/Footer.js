import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="logo"></div>
      <ul>
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="facebook"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a
            href="axelcamargo18@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="email"
          >
            <i class="fas fa-envelope-square"></i>
          </a>
        </li>
      </ul>
      <p class="copyright">Copyright &copy; 2023</p>
    </footer>
  );
};

export default Footer;
