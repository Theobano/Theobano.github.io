import { ResumeContainer } from "./Resume.style";
import { MdMail, MdPhone, MdLink, MdLocationPin } from "react-icons/md";
import {
  DiJavascript1,
  DiPython,
  DiReact,
  DiCss3,
  DiHtml5,
  DiDjango,
} from "react-icons/di";
import {
  SiFlask,
  SiFlutter,
  SiDart,
  SiVuedotjs,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiLinkedin,
  SiGithub,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { IconContext } from "react-icons";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { NavBar } from "../../components";
import myGeneralData from "./generalData.json";
import myData from "./softwareEngineerData.json";

function Resume() {
  useEffect(() => {
    // add print-background class to body and html
    document.body.classList.add("print-background");
    document.documentElement.classList.add("print-background");

    // remove print-background class from body and html
    return () => {
      document.body.classList.remove("print-background");
      document.documentElement.classList.remove("print-background");
    };
  }, []);

  return (
    <>
      <NavBar printable={false} />
      <ResumeContainer>
        <Helmet>
          <title>Adedotun Ajibade | Resume</title>
          <meta
            name="description"
            content="Adedotun Ajibade's resume. A T-shaped software engineer passionate about solving problems, with a strong background in data science, machine learning, and web application development."
          />
          <meta
            name="keywords"
            content="Adedotun Ajibade, Adedotun, Ajibade, resume, cv, curriculum vitae, software engineer, web developer, data scientist, machine learning engineer, python, django, flask, react, javascript, html, css, vue, numpy, pandas, tensorflow, dart, flutter"
          />
          <meta name="author" content="Adedotun Ajibade" />
          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="#3b4d61" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@theobano" />
          <meta name="twitter:creator" content="@theobano" />
          <meta name="twitter:title" content="Adedotun Ajibade | Resume" />
          <meta
            name="twitter:description"
            content="Adedotun Ajibade's resume. A T-shaped software engineer passionate about solving problems, with a strong background in data science, machine learning, and web application development."
          />
        </Helmet>
        <IconContext.Provider
          value={{ size: "1em", style: { verticalAlign: "middle" } }}
        >
          <button className="print-button" onClick={() => window.print()}>
            Print
          </button>

          <header className="header">
            <h1 className="name">ADEDOTUN AJIBADE</h1>
            <div className="title">Software Engineer</div>
          </header>
          <main className="main">
            <section className="sidebar">
              <div className="contact-container">
                <h2>Contact</h2>
                <div className="contact">
                  <div className="contact-item">
                    <span className="contact-item-icon">
                      <MdMail />
                    </span>
                    <span className="contact-item-text">
                      <a href={myGeneralData.contact.email.url}>
                        {myGeneralData.contact.email.title}
                      </a>
                    </span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-item-icon">
                      <MdPhone />
                    </span>
                    <span className="contact-item-text">
                      <a href={myGeneralData.contact.tel.url}>
                        {myGeneralData.contact.tel.title}
                      </a>
                    </span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-item-icon">
                      <MdLink />
                    </span>
                    <span className="contact-item-text">
                      <a href={myGeneralData.contact.website.url}>
                        {myGeneralData.contact.website.title}
                      </a>
                    </span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-item-icon">
                      <SiGithub />
                    </span>
                    <span className="contact-item-text">
                      <a href={myGeneralData.contact.github.url}>
                        {myGeneralData.contact.github.title}
                      </a>
                    </span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-item-icon">
                      <SiLinkedin />
                    </span>
                    <span className="contact-item-text">
                      <a href={myGeneralData.contact.linkedIn.url}>
                        {myGeneralData.contact.linkedIn.title}
                      </a>
                    </span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-item-icon">
                      <MdLocationPin />
                    </span>
                    <span className="contact-item-text">
                      {myGeneralData.contact.address.short}
                    </span>
                  </div>
                </div>
              </div>
              <div className="personal-info">
                <h2>Personal Information</h2>
                <div className="personal-info-container">
                  {myGeneralData.personalInfo.map((info, index) => {
                    return (
                      <div className="personal-info-item" key={`personal-info-${index}`}>
                        <span className="personal-info-item-name">
                          {info.name}:
                        </span>
                        <span className="personal-info-item-text">
                          {info.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="education">
                <h2>Education</h2>
                <div className="education-container">
                  {myGeneralData.education.map((education, index) => {
                    return (
                      <div className="education-item" key={`education-${index}`}>
                        <div className="education-item-name">
                          {education.school}
                        </div>
                        <div className="education-item-location">
                          {education.location}
                        </div>
                        <div className="education-item-date">
                          {education.year}
                        </div>
                        <div className="education-item-degree">
                          {education.degree}
                        </div>
                        {education.classification && (
                          <div className="education-item-grade">
                            {education.classification}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="skills">
                <h2>Skills</h2>
                <div className="skills-container">
                  <div className="skill">
                    <span className="skill-icon">
                      <DiHtml5 />
                    </span>
                    <span className="skill-name">HTML</span>
                  </div>
                  <div className="skill">
                    <span className="skill-icon">
                      <DiCss3 />
                    </span>
                    <span className="skill-name">CSS</span>
                  </div>
                  <div className="skill">
                    <span className="skill-icon">
                      <DiJavascript1 />
                    </span>
                    <span className="skill-name">JavaScript</span>
                  </div>
                  <div className="skill">
                    <span className="skill-icon">
                      <SiTypescript />
                    </span>
                    <span className="skill-name">TypeScript</span>
                  </div>
                  <div className="skill">
                    <span className="skill-icon">
                      <DiPython />
                    </span>
                    <span className="skill-name">Python</span>
                  </div>
                  <div className="skill">
                    <span className="skill-icon">
                      <DiReact />
                    </span>
                    <span className="skill-name">React</span>
                  </div>
                  <div className="skill">
                    <span className="skill-icon">
                      <SiNextdotjs />
                    </span>
                    <span className="skill-name">Next.js</span>
                  </div>
                  <div className="skill">
                    <span className="skill-icon">
                      <DiDjango />
                    </span>
                    <span className="skill-name">Django</span>
                  </div>
                  <div className="skill">
                    <span className="skill-icon">
                      <SiFlask />
                    </span>
                    <span className="skill-name">Flask</span>
                  </div>
                  <div className="skill">
                    <span className="skill-icon">
                      <SiFlutter />
                    </span>
                    <span className="skill-name">Flutter</span>
                  </div>
                  <div className="skill">
                    <span className="skill-icon">
                      <SiDart />
                    </span>
                    <span className="skill-name">Dart</span>
                  </div>
                  <div className="skill">
                    <span className="skill-icon">
                      <SiVuedotjs />
                    </span>
                    <span className="skill-name">Vue</span>
                  </div>
                  <div className="skill">
                    <span className="skill-icon">
                      <SiNumpy />
                    </span>
                    <span className="skill-name">Numpy</span>
                  </div>
                  <div className="skill">
                    <span className="skill-icon">
                      <SiPandas />
                    </span>
                    <span className="skill-name">Pandas</span>
                  </div>
                  <div className="skill">
                    <span className="skill-icon">
                      <SiTensorflow />
                    </span>
                    <span className="skill-name">Tensorflow</span>
                  </div>
                </div>
              </div>
            </section>
            <section className="main-content">
              <div className="summary">
                <h2>Summary</h2>
                <div className="summary-container">
                  <p>
                    {myData.summary}
                  </p>
                </div>
              </div>
              <div className="experience">
                <h2>Experience</h2>
                <div className="experience-container">
                  {myData.experiences.map((experience, experienceIndex) => {
                    return (
                      <div className="experience-item" key={`experience-${experienceIndex}`}>
                        <div className="experience-item-name">
                          {experience.title}
                        </div>
                        <div className="experience-item-comp-date">
                          <span className="experience-item-company">
                            {experience.company}
                          </span>
                          <span className="experience-item-date">
                            {experience.startDate} - {experience.endDate}
                          </span>
                        </div>
                        <div className="experience-item-location">
                          {experience.location}
                        </div>
                        <div className="experience-item-responsibilities">
                          <ul>
                            {experience.responsibilities.map(
                              (responsibility, responsibilityIndex) => {
                                return (
                                  <li
                                    key={`exp-resp-${experienceIndex}-${responsibilityIndex}`}
                                  >
                                    {responsibility}
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="certifications">
                <h2>Training and Certifications</h2>
                <div className="certifications-container">
                  {myData.certifications.map(
                    (certification, certificationIndex) => {
                      return (
                        <div className="certification" key={`certification-${certificationIndex}`}>
                          <div className="certification-name">
                            {certification.title}
                          </div>
                          <div className="certification-issuer">
                            {certification.issuer}
                          </div>
                          <div className="certification-date">
                            {certification.issueDate
                              ? "Issued"
                              : certification.completionDate
                              ? "Completed"
                              : "Date"}
                            :{" "}
                            {certification.issueDate ??
                              certification.completionDate}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="references">
                <h2>References</h2>
                <div className="references-container">
                  <div>Available on request</div>
                </div>
              </div>
            </section>
          </main>
        </IconContext.Provider>
      </ResumeContainer>
    </>
  );
}

export default Resume;
