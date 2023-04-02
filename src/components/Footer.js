import React from "react";
import "../assets/styles/components/Footer.css";
import Headshot from "./Headshot";
import LazyIcon from "./icons/LazyIcon";

// Create footer compontent
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="name-footer">
          <Headshot radius={24} />
          <h2 className="theme-colored">Adedotun Ajibade</h2>
        </div>
        <div>
          <nav>
            <ul></ul>
          </nav>
          <div className="social-links">
            <a href="https://twitter.com/dotshine">
              <LazyIcon
                iconName={"TwitterIcon"}
                iconAlt={"Twitter"}
                iconProp={{ width: 30, height: 30 }}
              />
            </a>
            <a href="https://ng.linkedin.com/in/dotshine">
            <LazyIcon
                iconName={"LinkedinIcon"}
                iconAlt={"Linkedin"}
                iconProp={{ width: 30, height: 30 }}
              />
            </a>
            <a href="https://github.com/Theobano">
            <LazyIcon
                iconName={"GithubIcon"}
                iconAlt={"Github"}
                iconProp={{ width: 30, height: 30 }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2022 Adedotun Ajibade</p>
      </div>
      <div className="dev-tech">Developed with React.js</div>
    </div>
  );
}

export default Footer;
