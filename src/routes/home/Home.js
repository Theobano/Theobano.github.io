import React, { lazy, Suspense } from "react";
import Intro from "./Intro";
import GithubIcon from "../../components/icons/GithubIcon";
import LinkedinIcon from "../../components/icons/LinkedinIcon";
import TwitterIcon from "../../components/icons/TwitterIcon";
import useWindowDimensions from "../../hooks/window";
import { toLinksList } from "../../utils/navigation";
import { Helmet } from "react-helmet";
import "./Home.css";
import Resume from "../../assets/documents/Resume-Adedotun-Ajibade.pdf";

const Headshot = lazy(() => import("../../components/Headshot"));

function Home() {
  const { width, height } = useWindowDimensions();
  var navLinkProps = [
    {
      name: "About",
      link: "/about",
      key: "about",
    },
    // {
    //   name: "Contact",
    //   link: "/contact",
    //   key: "contact",
    // },
    {
      name: "Projects",
      link: "/projects",
      key: "projects",
    },
  ];

  const navLinks = toLinksList(navLinkProps);
  return (
    <div id="home">
      <Helmet>
        <title>Adedotun Ajibade - Home</title>
      </Helmet>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Headshot radius={Math.min(0.3 * width * 0.5, 0.3 * height * 0.5)} />
        </Suspense>
        <Intro />
      </div>
      <div>
        <nav>
          <ul>
            {navLinks}
            <li>
              <a href={Resume} target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="social-links">
        <a href="https://twitter.com/dotshine" target="_blank">
          <TwitterIcon width={30} height={30} />
        </a>
        <a href="https://ng.linkedin.com/in/dotshine" target="_blank">
          <LinkedinIcon width={30} height={30} />
        </a>
        <a href="https://github.com/Theobano" target="_blank">
          <GithubIcon width={30} height={30} />
        </a>
      </div>
    </div>
  );
}

export default Home;
