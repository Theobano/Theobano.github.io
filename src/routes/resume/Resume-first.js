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

function Resume() {

  useEffect(() => {
    // add print-background class to body and html
    document.body.classList.add("print-background");
    document.documentElement.classList.add("print-background");

    // remove print-background class from body and html
    return () => {
      document.body.classList.remove("print-background");
      document.documentElement.classList.remove("print-background");
    }
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
      <IconContext.Provider value={{ size: "1em", style: { verticalAlign: "middle" } }}>
        
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
                    <a href="mailto:divinedotun@gmail.com">
                      divinedotun@gmail.com
                    </a>
                  </span>
                </div>
                <div className="contact-item">
                  <span className="contact-item-icon">
                    <MdPhone />
                  </span>
                  <span className="contact-item-text">
                    <a href="tel:+2347037491437">+2347037491437</a>
                  </span>
                </div>
                <div className="contact-item">
                  <span className="contact-item-icon">
                    <MdLink />
                  </span>
                  <span className="contact-item-text">
                    <a href="https://theobano.github.io/">theobano.github.io</a>
                  </span>
                </div>
                <div className="contact-item">
                  <span className="contact-item-icon">
                    <SiGithub />
                  </span>
                  <span className="contact-item-text">
                    <a href="https://github.com/Theobano">Theobano</a>
                  </span>
                </div>
                <div className="contact-item">
                  <span className="contact-item-icon">
                    <SiLinkedin />
                  </span>
                  <span className="contact-item-text">
                    <a href="https://www.linkedin.com/in/dotshine/">
                      dotshine
                    </a>
                  </span>
                </div>
                <div className="contact-item">
                  <span className="contact-item-icon">
                    <MdLocationPin />
                  </span>
                  <span className="contact-item-text">
                    No. 17, Kolawole Shonibare Street, Off Coker Road, Ilupeju,
                    Lagos, Nigeria.
                  </span>
                </div>
              </div>
            </div>
            <div className="personal-info">
              <h2>Personal Information</h2>
              <div className="personal-info-container">
                <div className="personal-info-item">
                  <span className="personal-info-item-name">
                    Nationality:
                  </span>
                  <span className="personal-info-item-text">
                    Nigerian
                  </span>
                </div>
                <div className="personal-info-item">
                  <span className="personal-info-item-name">
                    Gender:
                  </span>                    
                  <span className="personal-info-item-text">
                    Male
                  </span>
                  </div>
              </div>
              </div>
            <div className="education">
              <h2>Education</h2>
              <div className="education-container">
                <div className="education-item">
                  <div className="education-item-name">
                    AltSchool Africa
                  </div>
                  <div className="education-item-location">Lagos, Nigeria</div>
                  <div className="education-item-date">2022 - 2023</div>
                  <div className="education-item-degree">
                    Diploma in Frontend Engineering
                  </div>
                </div>
                <div className="education-item">
                  <div className="education-item-name">
                    Federal University of Technology, Akure
                  </div>
                  <div className="education-item-location">Akure, Nigeria</div>
                  <div className="education-item-date">2015 - 2021</div>
                  <div className="education-item-degree">
                    B.Tech Industrial Mathematics
                  </div>
                  <div className="education-item-grade">First class</div>
                </div>
                <div className="education-item">
                  <div className="education-item-name">
                    Coven Works Data Science and AI Bootcamp
                  </div>
                  <div className="education-item-location">Akure, Nigeria</div>
                  <div className="education-item-date">2019 - 2020</div>
                  <div className="education-item-degree">
                    Diploma in Data Science and AI
                  </div>
                </div>
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
                  A T-shaped software engineer passionate about solving problems, with a strong background in data
                  science, machine learning, and web application development. 
                </p>
                </div>
            </div>
            <div className="experience">
              <h2>Experience</h2>
              <div className="experience-container">
                <div className="experience-item">
                  <div className="experience-item-name">Associate Software Engineer</div>
                  <div className="experience-item-comp-date">
                    <span className="experience-item-company">
                      DigitalPulse Technologies Limited
                    </span>
                    <span className="experience-item-date">
                      Feb 2022 - Present
                    </span>
                  </div>
                  <div className="experience-item-location">Lagos, Nigeria</div>
                  <div className="experience-item-responsibilities">
                    <ul>
                      <li>
                        Develop and maintain web applications using React.
                      </li>
                      <li>
                        Develop and maintain backend services using Python,
                        Django, and Flask.
                      </li>
                      <li>
                        Develop and maintain RESTful APIs using Python and
                        Flask
                      </li>
                      <li>
                        Prepare technical proposals and documentation for
                        clients.
                      </li>
                      <li>
                        Provide technical support to clients and other team
                        members.
                      </li>
                      <li>
                        Prepare and present technical reports to clients.
                      </li>
                      <li>
                        Prepare system design and architecture for applications.
                      </li>
                      <li>Analyse and document business requirements.</li>
                      {/* <li>Extract and analyse data from databases.</li> */}
                      <li>
                        Write scripts to automate tasks and improve efficiency.
                      </li>
                    </ul>
                  </div>
                  <div className="experience-item-technologies">
                    <h3 className="experience-item-technologies-title">
                      Technologies
                    </h3>
                    <div className="experience-item-technologies-container">
                      <div className="experience-item-technology">
                        <span className="experience-item-technology-icon">
                          <DiPython />
                        </span>
                        <span className="experience-item-technology-name">
                          Python
                        </span>
                      </div>
                      <div className="experience-item-technology">
                        <span className="experience-item-technology-icon">
                          <DiDjango />
                        </span>
                        <span className="experience-item-technology-name">
                          Django
                        </span>
                      </div>
                      <div className="experience-item-technology">
                        <span className="experience-item-technology-icon">
                          <SiFlask />
                        </span>
                        <span className="experience-item-technology-name">
                          Flask
                        </span>
                      </div>
                                            <div className="experience-item-technology">
                        <span className="experience-item-technology-icon">
                          <DiHtml5 />
                        </span>
                        <span className="experience-item-technology-name">
                          HTML
                        </span>
                      </div>
                      <div className="experience-item-technology">
                        <span className="experience-item-technology-icon">
                          <DiCss3 />
                        </span>
                        <span className="experience-item-technology-name">
                          CSS
                        </span>
                      </div>
                      <div className="experience-item-technology">
                        <span className="experience-item-technology-icon">
                          <DiJavascript1 />
                        </span>
                        <span className="experience-item-technology-name">
                          JavaScript
                        </span>
                        </div>
                        <div className="experience-item-technology">
                        <span className="experience-item-technology-icon">
                          <DiReact />
                        </span>
                        <span className="experience-item-technology-name">
                          React
                        </span>
                      </div>
                      <div className="experience-item-technology">
                        <span className="experience-item-technology-icon">
                          <SiVuedotjs />
                        </span>
                        <span className="experience-item-technology-name">
                          Vue
                        </span>
                        </div>
                        <div className="experience-item-technology">
                        <span className="experience-item-technology-icon">
                          <SiNextdotjs />
                        </span>
                        <span className="experience-item-technology-name">
                          Next.js
                        </span>
                      </div>
                      <div className="experience-item-technology">
                        <span className="experience-item-technology-icon">
                          <SiNumpy />
                        </span>
                        <span className="experience-item-technology-name">
                          Numpy
                        </span>
                      </div>
                      <div className="experience-item-technology">
                        <span className="experience-item-technology-icon">
                          <SiPandas />
                        </span>
                        <span className="experience-item-technology-name">
                          Pandas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience-item">
                  <div className="experience-item-name">IT Support</div>
                  <div className="experience-item-comp-date">
                    <span className="experience-item-company">
                      DigitalPulse Technologies Limited
                    </span>
                    <span className="experience-item-date">
                      May 2021 - Jan 2022
                    </span>
                  </div>
                  <div className="experience-item-location">Lagos, Nigeria</div>
                  <div className="experience-item-responsibilities">
                    <ul>
                      <li>Provided technical support to clients.</li>
                      <li>Collected and analysed logs to resolve issues.</li>
                      <li>
                        Prepared and presented technical reports to clients.
                      </li>
                      <li>
                        Prepared techical proposals for projects and clients.
                      </li>
                      <li>
                        Talked clients through a series of actions, either
                        face-to-face or over the phone, to help set up systems or
                        resolve issues.
                      </li>
                      <li>
                        Developed applications for internal use using Python and
                        Flask.
                      </li>
                    </ul>
                  </div>
                  <div className="experience-item-technologies">
                    <h3 className="experience-item-technologies-title">
                      Technologies
                    </h3>
                    <div className="experience-item-technologies-container">
                      <div className="experience-item-technology">
                        <span className="experience-item-technology-icon">
                          <DiPython />
                        </span>
                        <span className="experience-item-technology-name">
                          Python
                        </span>
                      </div>
                      <div className="experience-item-technology">
                        <span className="experience-item-technology-icon">
                          <SiFlask />
                        </span>
                        <span className="experience-item-technology-name">
                          Flask
                        </span>
                      </div>
                      <div className="experience-item-technology">
                        <span className="experience-item-technology-icon">
                          <SiNumpy />
                        </span>
                        <span className="experience-item-technology-name">
                          Numpy
                        </span>
                      </div>
                      <div className="experience-item-technology">
                        <span className="experience-item-technology-icon">
                          <SiPandas />
                        </span>
                        <span className="experience-item-technology-name">
                          Pandas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="certifications">
              <h2>Training and Certifications</h2>
              <div className="certifications-container">
                <div className="certification">
                  <div className="certification-name">
                    AWS Certified Cloud Practitioner
                  </div>
                  <div className="certification-issuer">
                    Issued by Amazon Web Services (AWS)
                  </div>
                  <div className="certification-link">
                    <a href="https://www.credly.com/badges/843cb0d3-b228-4546-9c27-76fc1c58a47f/public_url">
                      View credential
                    </a>
                  </div>
                  <div className="certification-date">Issued: Jan 2022</div>
                </div>
                <div className="certification">
                  <div className="certification-name">
                    AWS Cloud Practitioner Essentials Day
                  </div>
                  <div className="certification-issuer">
                    Issued by Amazon Web Services (AWS) Traning and Certification
                  </div>
                  <div className="certification-date">Completed: July 4, 2022</div>
                </div>
                <div className="certification">
                  <div className="certification-name">
                    AWS Technical Essentials Day
                  </div>
                  <div className="certification-issuer">
                    Issued by Amazon Web Services (AWS) Traning and Certification
                  </div>
                  <div className="certification-date">Completed: July 25, 2022</div>
                </div>
                <div className="certification">
                  <div className="certification-name">
                    Diploma in Data Science and AI
                  </div>
                  <div className="certification-issuer">Coven Works</div>
                  <div className="certification-date">Issued: Feb 2023</div>
                  </div>
                  <div className="certification">
                  <div className="certification-name">
                    Diploma in Frontend Engineering
                  </div>
                  <div className="certification-issuer">AltSchool Africa</div>
                  <div className="certification-date">Issued: June 2023</div>
                </div>
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
