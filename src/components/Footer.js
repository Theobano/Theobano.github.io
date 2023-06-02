import React from "react";
import "./Footer.css";
import Headshot from "./Headshot";
import LazyIcon from "./icons/LazyIcon";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { IconContext } from "react-icons";

// Create footer compontent
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        {/* <div className="name-footer">
          <Headshot radius={24} />
          <h2 className="theme-colored">Adedotun Ajibade</h2>
        </div> */}
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
    </div>
  );
}

export default Footer;
