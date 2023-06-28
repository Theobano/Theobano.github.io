import React from "react";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { IconContext } from "react-icons";
import { FooterContainer } from "./Footer.style";

// Create footer compontent
function Footer() {
  return (
    <FooterContainer>
      <div className="footer-content">
        <div>
          <nav>
            <ul></ul>
          </nav>
          <div className="social-links">
            <IconContext.Provider value={{ size: "1.5em" }} >
            <a href="https://twitter.com/dotshine">
              <FiTwitter />
            </a>
            <a href="https://ng.linkedin.com/in/dotshine">
            <FiLinkedin />
            </a>
            <a href="https://github.com/Theobano">
              <FiGithub />
            </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2022 All rights reserved</p>
      </div>
      <div className="dev-tech">Developed with React.js</div>
    </FooterContainer>
  );
}

export default Footer;
