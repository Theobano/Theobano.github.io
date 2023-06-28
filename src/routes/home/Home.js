import React, { lazy, Suspense } from "react";
import Intro from "./Intro";
import useWindowDimensions from "../../hooks/window";
import { Helmet } from "react-helmet";
import { Link, NavLink } from "react-router-dom";
import {
  DiPython,
  DiJavascript1,
  DiReact,
  DiCss3,
  DiHtml5,
  DiDjango,
} from "react-icons/di";
import {
  SiFlutter,
  SiDart,
  SiFlask,
  SiVuedotjs,
  SiNumpy,
  SiPandas,
  SiTensorflow,
} from "react-icons/si";
import { FiCode, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Skills from "./Skills";
import ServiceCard from "./ServiceCard";
import styled from "styled-components";
import { IconContext } from "react-icons";

const Headshot = lazy(() => import("../../components/Headshot"));

const StyledHome = styled.div`
  #home {
    --header-background-color: #3b4d61;
    display: flex;
    flex-direction: column;
    gap: 10em;
    padding: 10em 0;

    p,
    h1 {
      margin: 0;
    }

    h2 {
      text-align: center;
      margin-bottom: 1em;
    }

    section,
    .section {
      padding: 2em;
    }

    header,
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > div {
        /* background-color: var(--header-background-color); */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1em;
        padding: 2em;
        border-bottom: thin solid var(--theme-color);
        max-width: 50em;
      }
    }
    .social-links {
      display: flex;
      gap: 0.5em;
      padding-bottom: 0.5em;
      border-bottom: thin solid var(--theme-color);

      a {
        text-decoration: none;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5em;

        :hover {
          background-color: var(--hover-background-color-muted);
          border-radius: 50%;
        }
      }
    }

    nav {
      ul {
        display: flex;
        flex-direction: column;
        gap: 1em;
      }

      a {
        text-decoration: none;
        width: 100%;
        height: 100%;
        border-bottom: thin solid var(--theme-color);
        padding: 0.5em 0.5em;

        :hover {
          filter: brightness(80%);
        }
      }
    }
    .services {
      > ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: 1fr;
        gap: 2em;
        padding: 0;
        list-style: none;
        margin: 0;
      }
    }

    .view-resume {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1em;
      padding: 2em;
    }

    .socials {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1em;

      a {
        text-decoration: none;
        padding: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: var(--theme-color);

        :hover {
          background-color: var(--color-button-background-hover);
        }
      }
    }
  }
`;

function Home() {
  const { width, height } = useWindowDimensions();
  
  return (
    <StyledHome>
      <div id="home">
        <Helmet>
          <title>Adedotun Ajibade - Home</title>
        </Helmet>
        <header className="header">
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Headshot
                radius={Math.min(0.3 * width * 0.5, 0.3 * height * 0.5)}
              />
            </Suspense>
            <Intro />
            <NavLink to="/about" className="link-button">
              About me &gt;
            </NavLink>
          </div>
        </header>
        <section className="section">
          <h2>Skills</h2>
          <Skills />
        </section>
        <section className="section services">
          <h2>What I Do</h2>
          <ul>
            <li>
              <ServiceCard
                title={"Frontend Web Development"}
                icon={<FiCode />}
                skills={[
                  <DiHtml5 title="HTML" />,
                  <DiCss3 title="CSS" />,
                  <DiJavascript1 title="JavaScript" />,
                  <DiReact title="React" />,
                  <SiVuedotjs title="Vue" />,
                ]}
              >
                <p>
                  I build responsive websites using modern web technologies like
                  HTML, CSS, JavaScript, React, and Vue.
                </p>
              </ServiceCard>
            </li>
            <li>
              <ServiceCard
                title={"Backend Development"}
                icon={<FiCode />}
                skills={[
                  <DiPython title="Python" />,
                  <DiDjango title="Django" />,
                  <SiFlask title="Flask" />,
                ]}
              >
                <p>I build backend services using Python, Django, and Flask.</p>
              </ServiceCard>
            </li>
            <li>
              <ServiceCard
                title={"Cross-platform Development"}
                icon={<FiCode />}
                skills={[
                  <SiFlutter title="Flutter" />,
                  <SiDart title="Dart" />,
                ]}
              >
                <p>
                  I build cross-platform mobile apps using Flutter and Dart.
                </p>
              </ServiceCard>
            </li>
            <li>
              <ServiceCard
                title={"Data Science and Artificial Intelligence"}
                icon={<FiCode />}
                skills={[
                  <DiPython title="Python" />,
                  <SiNumpy title="Numpy" />,
                  <SiPandas title="Pandas" />,
                  <SiTensorflow title="Tensorflow" />,
                ]}
              >
                <p>
                  I build data science and artificial intelligence solutions
                  using Python, NumPy, Pandas, and TensorFlow.
                </p>
              </ServiceCard>
            </li>
          </ul>
        </section>

        <div className="view-resume">
          <h2>View my resume</h2>
          <Link to="/resume" className="link-button">
            View Resume
          </Link>
        </div>

        <div>
          <h2>Let's make magic! Connect with me</h2>
          <div className="socials">
            <IconContext.Provider value={{ size: "2em" }}>
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
    </StyledHome>
  );
}

export default Home;
